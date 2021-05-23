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
        decisionLetterDate: string().nullable()
    });

    type FormValues = {
        decisionLetterDate: string | null | undefined;
    };

    const [initialValues, setInitialValues] = useState<FormValues>({
        decisionLetterDate: null
    });

    useEffect(() => {
        if (application) {
            setInitialValues({
                decisionLetterDate: application.decisionLetterDate
            });
        }
    }, [application]);

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { decisionLetterDate } = values;
        try {
            await graphql(updateApplication, {
                input: {
                    decisionLetterDate: decisionLetterDate,
                    id: application?.id
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
                        <Field id="decisionLetterDate" name="decisionLetterDate">
                            {(fieldProps: FieldProps) => <DateInput {...fieldProps} />}
                        </Field>

                        <Button
                            disabled={isSubmitting || !values.decisionLetterDate}
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
