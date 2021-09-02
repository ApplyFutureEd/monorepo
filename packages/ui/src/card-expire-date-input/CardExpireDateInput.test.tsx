import { Elements } from '@stripe/react-stripe-js';
import { render, screen } from '@testing-library/react';

import { getStripe } from '../../../utils/src/services/stripe';
import { CardExpireDateInput } from './CardExpireDateInput';

const stripe = getStripe('');

describe('CardExpireDateInput', () => {
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
        render(
            <Elements stripe={stripe}>
                <CardExpireDateInput label="Expire date" {...formikProps} />
            </Elements>
        );

        const input = screen.getByText('Expire date');

        expect(input).toBeInTheDocument();
    });

    it('can render a skeleton when loading', () => {
        const { container } = render(
            <Elements stripe={stripe}>
                <CardExpireDateInput isLoading label="Expire date" {...formikProps} />{' '}
            </Elements>
        );

        const skeleton = container.querySelector('.react-loading-skeleton');

        expect(skeleton).toBeInTheDocument();
    });
});
