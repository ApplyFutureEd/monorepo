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
import React, { FC, useEffect, useState } from 'react';
import { object, string } from 'yup';

type Props = {
    application:
        | NonNullable<
              NonNullable<GetApplicationByStudentQuery['getApplicationByStudent']>['items']
          >[0]
        | NonNullable<NonNullable<GetApplicationQuery['getApplication']>>;
};

const VisaProgressForm: FC<Props> = (props) => {
    const { application } = props;
    const { t } = useTranslation();

    const validationSchema = object().shape({
        visaDate: string().nullable()
    });

    type FormValues = {
        visaDate: string | null | undefined;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({
        visaDate: null
    });

    useEffect(() => {
        if (application) {
            setInitialValues({
                visaDate: application.visaDate
            });
        }
    }, [application]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { visaDate } = values;
        try {
            const updatedSteps = (application?.steps && [...application?.steps]) || [];

            updatedSteps[10].status = 'DONE';
            updatedSteps[10].date = new Date().toString();

            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    steps: updatedSteps,
                    todo: '',
                    visaDate: visaDate
                }
            });

            await sendEmailNotification({
                ctaLink: `https://${window.location.host}/applications?id=${application?.id}&step=visa`,
                id: 'post-visa-approval',
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
                        <Field id="visaDate" name="visaDate">
                            {(fieldProps: FieldProps) => <DateInput {...fieldProps} />}
                        </Field>

                        <Button
                            disabled={isSubmitting || !values.visaDate}
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

export default VisaProgressForm;
