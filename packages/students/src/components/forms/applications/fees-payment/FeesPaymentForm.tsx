import { deleteApplication, GetApplicationQuery, updateApplication } from '@applyfuture/graphql';
import { Button, CardCvcInput, CardExpireDateInput, CardNumberInput, Input } from '@applyfuture/ui';
import { graphql, sendEmailNotification, toast, toShortId } from '@applyfuture/utils';
import { faArrowLeft, faArrowRight, faTrash } from '@fortawesome/pro-light-svg-icons';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeError } from '@stripe/stripe-js';
import { API } from 'aws-amplify';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';
import { SupportedLocale } from 'src/types/SupportedLocale';
import { object, string } from 'yup';

type Props = {
    applicationData: GetApplicationQuery;
    isLoading: boolean;
};

const FeesPaymentForm: FC<Props> = (props) => {
    const router = useRouter();
    const { applicationData, isLoading } = props;
    const application = applicationData.getApplication;
    const { t } = useTranslation();
    const stripe = useStripe();
    const elements = useElements();
    const [stripeError, setStripeError] = useState<StripeError | null>();

    type FormValues = {
        address: string;
        cardholderName: string;
        email: string;
        firstName: string;
        lastName: string;
    };

    const initialValues = {
        address: '',
        cardholderName: '',
        email: '',
        firstName: '',
        lastName: ''
    };

    const validationSchema = object().shape({
        address: string().required(t('common:error-field-required')),
        cardholderName: string().required(t('common:error-field-required')),
        email: string().required(t('common:error-field-required')),
        firstName: string().required(t('common:error-field-required')),
        lastName: string().required(t('common:error-field-required'))
    });

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            const cardNumberElement = elements?.getElement('cardNumber');

            if (cardNumberElement) {
                const stripeResponse = await stripe?.createToken(cardNumberElement, {
                    address_line1: values.address,
                    name: `${values.firstName} ${values.lastName}`
                });

                if (stripeResponse?.error) {
                    setStripeError(stripeResponse?.error);
                }
                const stripeToken = stripeResponse?.token?.id;

                const payment = {
                    amount:
                        application?.program?.applicationFee &&
                        application?.program?.applicationFee * 100,
                    currency: application?.program?.applicationFeeCurrency,
                    description: `${toShortId(application?.id)} ${
                        application?.program?.school?.name
                    } application fees`,
                    metadata: { applicationId: toShortId(application?.id) },
                    stripeToken: stripeToken
                };

                const feesPaymentResponse = await API.post('rest', '/fees-payment', {
                    body: { payment }
                });

                if (feesPaymentResponse.status === 'succeeded') {
                    const updatedSteps = (application?.steps && [...application?.steps]) || [];

                    updatedSteps[2].status = 'DONE';
                    updatedSteps[3].status = 'DONE';
                    updatedSteps[3].date = new Date().toString();
                    updatedSteps[4].status = 'PROGRESS';
                    updatedSteps[4].date = new Date().toString();

                    await graphql(updateApplication, {
                        input: {
                            id: application?.id,
                            steps: updatedSteps,
                            todo: 'Review documents'
                        }
                    });

                    await sendEmailNotification({
                        ctaLink: `https://applyfuture.com/applications?id=${application?.id}&step=internal-review`,
                        id: 'post-submission',
                        language: application?.student?.locale as SupportedLocale,
                        recipients: [application?.student?.email],
                        variables: {
                            applicationId: toShortId(application?.id),
                            firstName: application?.student?.firstName,
                            programName: application?.program?.name,
                            schoolName: application?.program?.school?.name
                        }
                    });

                    router.push(`/applications/${application?.id}/submission`);
                }
            }
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        }
        actions.setSubmitting(false);
    };

    const handleCancelApplication = async () => {
        try {
            await graphql(deleteApplication, {
                input: { id: application?.id }
            });
            router.push('/applications');
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        }
    };

    const handlePreviousStep = async () => {
        try {
            const updatedSteps = (application?.steps && [...application?.steps]) || [];
            updatedSteps[1].status = 'PROGRESS';
            updatedSteps[2].status = 'IDLE';
            updatedSteps[2].date = '';

            await graphql(updateApplication, {
                input: { id: application?.id, steps: updatedSteps }
            });

            router.push(`/applications/${application?.id}/review-documents`);
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        }
    };

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting } = props;

                return (
                    <Form>
                        <div className="justify-between pt-4 px-4 space-y-2 sm:px-6">
                            <h3 className="text-md text-gray-900 font-medium leading-5">
                                {t('application:card-details')}
                            </h3>
                            <div className="mt-2 space-y-4">
                                <Field id="cardholderName" name="cardholderName">
                                    {(fieldProps: FieldProps) => (
                                        <Input
                                            label={t('application:cardholder-name')}
                                            type="text"
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>

                                <div className="w-full space-x-0 space-y-4 md:flex md:space-x-4 md:space-y-0">
                                    <div className="w-full md:w-1/2">
                                        <Field id="cardNumber" name="cardNumber">
                                            {(fieldProps: FieldProps) => (
                                                <CardNumberInput
                                                    label={t('application:card-number')}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="flex w-full space-x-4 md:w-1/2">
                                        <div className="w-1/2">
                                            <Field id="expiryDate" name="expiryDate">
                                                {(fieldProps: FieldProps) => (
                                                    <CardExpireDateInput
                                                        label={t('application:card-expiry-date')}
                                                        {...fieldProps}
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                        <div className="w-1/2">
                                            <Field id="cardCvc" name="cardCvc">
                                                {(fieldProps: FieldProps) => (
                                                    <CardCvcInput
                                                        label={t(
                                                            'application:card-verification-code'
                                                        )}
                                                        {...fieldProps}
                                                    />
                                                )}
                                            </Field>
                                        </div>
                                    </div>
                                </div>
                                {stripeError && (
                                    <p className="mt-2 text-red-600 text-sm">
                                        {stripeError.message}
                                    </p>
                                )}
                            </div>
                            <div className="hidden sm:block">
                                <div className="py-1">
                                    <div className="border-t border-gray-200"></div>
                                </div>
                            </div>
                            <h3 className="text-md text-gray-900 font-medium leading-5">
                                {t('application:billing-address')}
                            </h3>
                            <div className="mt-2 space-y-4">
                                <div className="w-full space-x-0 md:flex md:space-x-4">
                                    <div className="w-full md:w-1/2">
                                        <Field id="firstName" name="firstName">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    label={t('application:first-name')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <Field id="lastName" name="lastName">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    label={t('application:last-name')}
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <Field id="email" name="email">
                                    {(fieldProps: FieldProps) => (
                                        <Input
                                            label={t('application:email')}
                                            type="text"
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>

                                <Field id="address" name="address">
                                    {(fieldProps: FieldProps) => (
                                        <Input
                                            isLoading={isLoading}
                                            label={t('profile:address')}
                                            type="text"
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                            </div>
                        </div>
                        <div className="flex justify-between px-4 py-5 sm:px-6">
                            <div className="hidden md:block">
                                <Button
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    startIcon={faTrash}
                                    type="button"
                                    variant="secondary"
                                    onClick={handleCancelApplication}>
                                    {t('application:cancel-my-application')}
                                </Button>
                            </div>
                            <div className="flex flex-grow justify-between space-x-4 md:flex-grow-0 md:justify-start">
                                <Button
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    startIcon={faArrowLeft}
                                    type="button"
                                    variant="secondary"
                                    onClick={handlePreviousStep}>
                                    {t('application:previous-step')}
                                </Button>
                                <Button
                                    endIcon={faArrowRight}
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    type="submit"
                                    variant="primary">
                                    {t('application:next-step')}
                                </Button>
                            </div>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default FeesPaymentForm;
