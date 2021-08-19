import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { Editor } from './Editor';

describe('Editor', () => {
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
        render(<Editor label="Description" {...formikProps} />);

        const editor = screen.getByRole('textbox');

        expect(editor).toBeInTheDocument();
    });

    it('can input a value in the textbox', async () => {
        render(<Editor label="Description" {...formikProps} />);

        const editor = screen.getByRole('textbox');

        await waitFor(() => {
            fireEvent.change(editor, {
                target: {
                    value: 'Lorem ipsum'
                }
            });
        });

        expect(formikProps.form.setFieldValue).toHaveBeenCalled();
    });

    it('can switch tabs', () => {
        render(<Editor label="Description" {...formikProps} />);

        const previewButton = screen.getByText('Preview');

        fireEvent.click(previewButton);
    });

    it('can render a skeleton when loading', () => {
        const { container } = render(
            <Editor isLoading={true} label="Description" {...formikProps} />
        );

        const skeleton = container.querySelector('.react-loading-skeleton');

        expect(skeleton).toBeInTheDocument();
    });
});
