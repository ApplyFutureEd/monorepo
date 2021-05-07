import { deleteApplication, GetApplicationQuery, updateApplication } from '@applyfuture/graphql';
import { Button, Checkbox } from '@applyfuture/ui';
import { graphql, toast } from '@applyfuture/utils';
import { faArrowLeft, faArrowRight, faTrash } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import { boolean, object } from 'yup';

type Props = {
    applicationData: GetApplicationQuery;
    isLoading: boolean;
};

const ReviewDocumentsForm: FC<Props> = (props) => {
    const router = useRouter();
    const { applicationData, isLoading } = props;
    const application = applicationData.getApplication;

    const { t } = useTranslation();

    type FormValues = {
        declaration: boolean;
    };

    const initialValues = {
        declaration: false
    };

    const validationSchema = object().shape({
        declaration: boolean().oneOf([true], t('required'))
    });

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            console.log(values);
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
            updatedSteps[0].status = 'PROGRESS';
            updatedSteps[1].status = 'IDLE';
            updatedSteps[1].date = '';

            await graphql(updateApplication, {
                input: { id: application?.id, steps: updatedSteps }
            });

            router.push(`/applications/${application?.id}/upload-documents`);
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        }
    };

    if (isLoading) {
        return <div>Generating application document...</div>;
    }

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting, values } = props;

                return (
                    <Form>
                        <div className="justify-between pt-4 px-4 space-y-2 sm:px-6">
                            <Field id="declaration" name="declaration">
                                {(fieldProps: FieldProps) => (
                                    <Checkbox
                                        label={t('application:label-declaration')}
                                        {...fieldProps}
                                    />
                                )}
                            </Field>
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
                                    disabled={!values.declaration}
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

export default ReviewDocumentsForm;
