import {
    GetApplicationByStudentQuery,
    GetApplicationQuery,
    updateApplication
} from '@applyfuture/graphql';
import { SupportedLocale } from '@applyfuture/models';
import { Button, DateInput } from '@applyfuture/ui';
import { graphql, sendEmailNotification, toast, toShortId } from '@applyfuture/utils';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { FC, useEffect, useState } from 'react';
import { object, string } from 'yup';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const SchoolTuitionsFeePaymentProgressForm: FC<Props> = (props) => {
    const { application } = props;
    const { t } = useTranslation();

    const validationSchema = object().shape({
        tuitionsFeePaymentDate: string().nullable()
    });

    type FormValues = {
        tuitionsFeePaymentDate: string | null | undefined;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({
        tuitionsFeePaymentDate: null
    });

    useEffect(() => {
        if (application) {
            setInitialValues({
                tuitionsFeePaymentDate: application.tuitionsFeePaymentDate
            });
        }
    }, [application]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { tuitionsFeePaymentDate } = values;
        try {
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[8].status = 'DONE';
            updatedSteps[8].date = new Date().toString();
            updatedSteps[9].status = 'PROGRESS';
            updatedSteps[9].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    steps: updatedSteps,
                    todo: "Select decision letter's date of receipt",
                    tuitionsFeePaymentDate: tuitionsFeePaymentDate
                }
            });

            await sendEmailNotification({
                ctaLink: `https://applyfuture.com/applications?id=${application?.id}&step=school-tuitions-fee-payment`,
                id: 'post-school-tuitions-fee-payment-approval',
                language: application?.student?.locale as SupportedLocale,
                recipients: [application?.student?.email],
                variables: {
                    applicationId: toShortId(application?.id),
                    firstName: application?.student?.firstName,
                    programName: application?.program?.name,
                    schoolName: application?.program?.school?.name
                }
            });
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        }
        actions.setSubmitting(false);
    };

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting, values } = props;

                return (
                    <Form className="flex space-x-2">
                        <Field id="tuitionsFeePaymentDate" name="tuitionsFeePaymentDate">
                            {(fieldProps: FieldProps) => (
                                <DateInput maxDate={new Date()} {...fieldProps} />
                            )}
                        </Field>

                        <Button
                            disabled={isSubmitting || !values.tuitionsFeePaymentDate}
                            isSubmitting={isSubmitting}
                            type="submit"
                            variant="primary">
                            Submit
                        </Button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default SchoolTuitionsFeePaymentProgressForm;
