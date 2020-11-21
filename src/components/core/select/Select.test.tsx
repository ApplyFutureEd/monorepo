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

    const setFieldValue = jest.fn();

    const formikProps = {
        field: {
            name: 'degrees',
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

    it('can render a select without crashing', () => {
        render(
            <Select
                label="Degrees"
                options={options}
                setFieldValue={setFieldValue}
                {...formikProps}
            />
        );

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
    });

    it('can render a multi values select without crashing', () => {
        render(
            <Select
                isMulti
                label="Degrees"
                options={options}
                setFieldValue={setFieldValue}
                {...formikProps}
            />
        );

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
    });

    it('can render a select with a tooltip', () => {
        render(
            <Select
                label="Degrees"
                options={options}
                setFieldValue={setFieldValue}
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
                setFieldValue={setFieldValue}
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
            <Select
                isLoading
                label="Degrees"
                options={options}
                setFieldValue={setFieldValue}
                {...formikProps}
            />
        );

        const skeleton = container.querySelector('.react-loading-skeleton');

        expect(skeleton).toBeInTheDocument();
    });

    it('calls setFieldValue when selecting a value', async () => {
        render(
            <Select
                label="Degrees"
                options={options}
                setFieldValue={setFieldValue}
                {...formikProps}
            />
        );

        const input = screen.getByRole('textbox');

        await selectEvent.select(input, ['Master degree']);

        expect(setFieldValue).toHaveBeenCalled();
    });

    it('calls setFieldValue when selecting multiple values', async () => {
        render(
            <Select
                isMulti
                label="Degrees"
                options={options}
                setFieldValue={setFieldValue}
                {...formikProps}
            />
        );

        const input = screen.getByRole('textbox');

        await selectEvent.select(input, ['Master degree', 'Bachelor degree']);

        expect(setFieldValue).toHaveBeenCalled();
    });
});
