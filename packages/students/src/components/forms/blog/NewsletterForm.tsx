import { Button, Input } from '@applyfuture/ui';
import { toast } from '@applyfuture/utils';
import { Field, FieldProps, Form, Formik } from 'formik';
import { FC } from 'react';

const NewsletterForm: FC = () => {
    type initialValues = {
        email: string;
    };

    const initialValues: initialValues = {
        email: ''
    };

    const onSubmit = async (values: initialValues, { resetForm }: any) => {
        const { email } = values;
        console.log(email);
        resetForm(email);
        toast({
            title: 'Thank you for your subscription',
            variant: 'success'
        });
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
