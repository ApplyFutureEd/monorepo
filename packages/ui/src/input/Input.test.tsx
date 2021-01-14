import { Input } from '..';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

describe('Input', () => {
    const baseClasses = 'form-input block w-full text-sm leading-5 min-h-input';
    const disabledClasses = 'bg-gray-100 cursor-not-allowed';
    const onErrorClasses =
        'placeholder-red-300 pr-10 text-red-900 border-red-300 focus:border-red-300 focus:shadow-outline-red';

    const formikProps = {
        field: {
            name: '',
            onBlur: jest.fn(),
            onChange: jest.fn(),
            value: ''
        },
        form: {
            dirty: false,
            errors: {},
            getFieldHelpers: jest.fn(),
            getFieldMeta: jest.fn(),
            getFieldProps: jest.fn(),
            handleBlur: jest.fn(),
            handleChange: jest.fn(),
            handleReset: jest.fn(),
            handleSubmit: jest.fn(),
            initialErrors: {},
            initialTouched: {},
            initialValues: {},
            isSubmitting: false,
            isValid: true,
            isValidating: false,
            registerField: jest.fn(),
            resetForm: jest.fn(),
            setErrors: jest.fn(),
            setFieldError: jest.fn(),
            setFieldTouched: jest.fn(),
            setFieldValue: jest.fn(),
            setFormikState: jest.fn(),
            setStatus: jest.fn(),
            setSubmitting: jest.fn(),
            setTouched: jest.fn(),
            setValues: jest.fn(),
            submitCount: 0,
            submitForm: jest.fn(),
            touched: {},
            unregisterField: jest.fn(),
            validateField: jest.fn(),
            validateForm: jest.fn(),
            values: {}
        },
        meta: {
            initialTouched: false,
            touched: false,
            value: ''
        }
    };

    it('can render an input without crashing', () => {
        render(<Input label="First Name" {...formikProps} />);

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
    });

    it('can render a default input', () => {
        render(<Input label="First Name" {...formikProps} />);

        const input = screen.getByRole('textbox');

        expect(input).toHaveClass(baseClasses);
        expect(input).not.toHaveClass(disabledClasses);
        expect(input).not.toHaveClass(onErrorClasses);
    });

    it('can render a textarea input', () => {
        const { container } = render(<Input label="Message" rows={5} {...formikProps} />);

        const textarea = container.querySelector('textarea');

        expect(textarea).toBeInTheDocument();
    });

    it('can render an input with a placeholder', () => {
        render(<Input label="Email" placeholder="Enter your email address" {...formikProps} />);

        const input = screen.getByPlaceholderText('Enter your email address');

        expect(input).toBeInTheDocument();
    });

    it('can render an input with a tooltip', () => {
        render(
            <Input
                label="Passport Number"
                tooltip="We collect your passport information for identity verification proposes, your school or program of interest may require this information to process your application. If applicable, it may also be used for processing your visa."
                {...formikProps}
            />
        );

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
    });

    it('can render an input with optional label', () => {
        render(<Input optional label="Middle Name" {...formikProps} />);

        const optionalLabel = screen.getByText(/optional/);

        expect(optionalLabel).toBeInTheDocument();
    });

    it('can render a disabled input', () => {
        render(<Input disabled label="Student ID" {...formikProps} />);

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
        expect(input).toHaveClass(baseClasses);
        expect(input).toHaveClass(disabledClasses);
        expect(input).not.toHaveClass(onErrorClasses);
    });

    it('can render an errored input', () => {
        render(
            <Input
                label="First Name"
                {...formikProps}
                meta={{
                    error: 'This field is required',
                    initialTouched: false,
                    touched: true,
                    value: ''
                }}
            />
        );

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
        expect(input).toHaveClass(baseClasses);
        expect(input).toHaveClass(onErrorClasses);
        expect(input).not.toHaveClass(disabledClasses);
    });

    it('can render a skeleton when loading', () => {
        const { container } = render(<Input isLoading label="First Name" {...formikProps} />);

        const skeleton = container.querySelector('.react-loading-skeleton');

        expect(skeleton).toBeInTheDocument();
    });

    it('can call setFieldValue and submitForm with a debounced input', async () => {
        render(<Input debounce={2000} label="First Name" {...formikProps} />);

        const input = screen.getByRole('textbox');

        await waitFor(() => {
            fireEvent.change(input, {
                target: {
                    value: 'John'
                }
            });
        });
    });
});
