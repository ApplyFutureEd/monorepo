import {
    GetApplicationByStudentQuery,
    GetApplicationQuery,
    updateApplication
} from '@applyfuture/graphql';
import { Button, DateInput } from '@applyfuture/ui';
import { graphql, toast } from '@applyfuture/utils';
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

const SchoolInterviewProgressForm: FC<Props> = (props) => {
    const { application } = props;
    const { t } = useTranslation();

    const validationSchema = object().shape({
        interviewDate: string().nullable()
    });

    type FormValues = {
        interviewDate: string | null | undefined;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({ interviewDate: null });

    useEffect(() => {
        if (application) {
            setInitialValues({
                interviewDate: application.interviewDate
            });
        }
    }, [application]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { interviewDate } = values;
        try {
            await graphql(updateApplication, {
                input: {
                    id: application?.id,
                    interviewDate: interviewDate
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
                        <Field id="interviewDate" name="interviewDate">
                            {(fieldProps: FieldProps) => <DateInput {...fieldProps} />}
                        </Field>

                        <Button
                            disabled={isSubmitting || !values.interviewDate}
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

export default SchoolInterviewProgressForm;
