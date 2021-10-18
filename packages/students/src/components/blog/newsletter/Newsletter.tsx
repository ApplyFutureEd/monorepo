import { Button, Input } from '@applyfuture/ui';
import { Field, FieldProps, Form, Formik } from 'formik';
import Link from 'next/link';
import { FC, useState } from 'react';

const Newsletter: FC = () => {
    const [email, setEmail] = useState('');

    type initialValues = {
        email: string;
    };
    const initialValues: initialValues = {
        email: ''
    };

    const onSubmit = () => {
        setEmail(email);
        console.log('yo' + email);
    };

    return (
        <Formik
            className="items-center bg-white sm:flex"
            initialValues={initialValues}
            onSubmit={onSubmit}>
            <div className="mx-auto px-4 py-24 max-w-7xl sm:px-6 lg:flex lg:items-center lg:px-8 lg:py-32">
                <div className="lg:flex-1 lg:w-0">
                    <h2 className="text-gray-900 text-3xl font-extrabold sm:text-4xl">
                        Sign up for our newsletter
                    </h2>
                    <p className="mt-3 max-w-3xl text-gray-500 text-lg">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
                        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
                    </p>
                </div>
                <div className="mt-8 lg:ml-8 lg:mt-0">
                    <div className="items-start sm:flex">
                        <label className="sr-only" htmlFor="email">
                            Email address
                        </label>
                        <Form className="w-full">
                            <Field id="email" name="email">
                                {(fieldProps: FieldProps) => (
                                    <Input placeholder="Enter your email" {...fieldProps} />
                                )}
                            </Field>
                        </Form>
                        <div className="mt-3 rounded-md sm:flex-shrink-0 sm:ml-3 sm:mt-0">
                            <Button type="submit" variant="primary" onClick={onSubmit}>
                                Notify me
                            </Button>
                        </div>
                    </div>
                    <p className="mt-3 text-gray-500 text-sm">
                        We care about the protection of your data. Read our
                        <Link href="/privacy-policy">
                            <span className="text-indigo-600 cursor-pointer"> Privacy Policy.</span>
                        </Link>
                    </p>
                </div>
            </div>
        </Formik>
    );
};

export default Newsletter;
