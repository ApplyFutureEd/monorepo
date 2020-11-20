import Select from '@components/core/select/Select';
import { render, screen } from '@testing-library/react';
import React from 'react';

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

    const setFieldValue = jest.fn();

    const formikProps = {
        field: {
            name: '',
            onBlur: jest.fn(),
            onChange: jest.fn(),
            value: ''
        },
        meta: {
            initialTouched: false,
            touched: false,
            value: ''
        }
    };

    it('can render an input without crashing', () => {
        render(
            <Select
                label="First Name"
                options={options}
                setFieldValue={setFieldValue}
                {...formikProps}
            />
        );

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
    });
});
