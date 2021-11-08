import { Button, Input } from '@applyfuture/ui';
import { toast } from '@applyfuture/utils';
import { Field, FieldProps, Form, Formik } from 'formik';
import { FC } from 'react';
import { object, string } from 'yup';

const NewsletterForm: FC = () => {
    const validationSchema = object().shape({
        email: string()
            .required('Please enter your email')
            .email('Something is wrong with this email')
    });

    type initialValues = {
        email: string;
    };

    const initialValues: initialValues = {
        email: ''
    };

    const onSubmit = async (values: initialValues, { resetForm }: any) => {
        const { email } = values;
        console.log(email);
        try {
            await fetch('/api/newsletter-example3', {
                body: JSON.stringify(email),
                method: 'POST'
            });
            await toast({
                title: 'Thank you for your subscription',
                variant: 'success'
            });
            await resetForm(email);
        } catch (error) {
            toast({
                title: 'Something went wrong',
                variant: 'error'
            });
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form className="flex flex-col w-full md:flex-row">
                <div className="flex-1">
                    <Field id="email" name="email">
                        {(fieldProps: FieldProps) => (
                            <Input placeholder="Enter your email" {...fieldProps} />
                        )}
                    </Field>
                </div>
                <div className="mt-3 rounded-md md:ml-3 md:mt-0">
                    <Button type="submit" variant="primary">
                        Subscribe
                    </Button>
                </div>
            </Form>
        </Formik>
    );
};

export default NewsletterForm;
