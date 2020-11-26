import Select from '@components/core/select/Select';
import { render, screen } from '@testing-library/react';
import React from 'react';
import selectEvent from 'react-select-event';

describe('Select', () => {
    const options = [
        {
            label: 'Bachelor degree',
            value: 'bachelor'
        },
        {
            label: 'Master degree',
            value: 'master'
        },
        {
            label: 'Doctor degree',
            value: 'doctor'
        }
    ];

    const formikProps = {
        field: {
            name: 'degrees',
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

    it('can render a select without crashing', () => {
        render(<Select label="Degrees" options={options} {...formikProps} />);

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
    });

    it('can render a multi values select without crashing', () => {
        render(<Select isMulti label="Degrees" options={options} {...formikProps} />);

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
    });

    it('can render a select with a tooltip', () => {
        render(
            <Select
                label="Degrees"
                options={options}
                tooltip="An academic degree is a qualification awarded to students upon successful completion of a course of study in higher education"
                {...formikProps}
            />
        );

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
    });

    it('can render an errored select', () => {
        render(
            <Select
                label="Degrees"
                options={options}
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
    });

    it('can render a skeleton when loading', () => {
        const { container } = render(
            <Select isLoading label="Degrees" options={options} {...formikProps} />
        );

        const skeleton = container.querySelector('.react-loading-skeleton');

        expect(skeleton).toBeInTheDocument();
    });

    it('calls setFieldValue when selecting a value', async () => {
        render(<Select label="Degrees" options={options} {...formikProps} />);

        const input = screen.getByRole('textbox');

        await selectEvent.select(input, ['Master degree']);

        expect(formikProps.form.setFieldValue).toHaveBeenCalled();
    });

    it('calls setFieldValue when selecting multiple values', async () => {
        render(<Select isMulti label="Degrees" options={options} {...formikProps} />);

        const input = screen.getByRole('textbox');

        await selectEvent.select(input, ['Master degree', 'Bachelor degree']);

        expect(formikProps.form.setFieldValue).toHaveBeenCalled();
    });
});
