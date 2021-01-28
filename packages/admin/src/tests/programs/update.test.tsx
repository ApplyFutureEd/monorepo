import { graphql, toast } from '@applyfuture/utils';
import UpdateProgramPage from '@pages/programs/update';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { FC } from 'react';
import selectEvent from 'react-select-event';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en',
            push: jest.fn(),
            query: {
                id: 'fe2851b6-ef6c-439f-bf47-fc934d356511'
            }
        };
    }
}));

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

const mockedSchool = {
    city: 'Paris',
    contactEmail: null,
    contactJobTitle: null,
    contactName: null,
    contactPhone: null,
    contractStatus: 'CONTACTED',
    country: 'FR',
    coverPhoto: '10d77697-2165-4b89-bb3c-a57f81e9c9d0',
    createdAt: '2020-09-18T11:05:22.059Z',
    creationYear: '1871',
    description: 'Lorem ipsum',
    id: 'fe2851b6-ef6c-439f-bf47-fc934d356511',
    institutionType: 'PRIVATE',
    internationalStudents: 700,
    logo: 'a340753b-28d6-40da-8f2c-72b5379ec66c',
    name: 'EM Normandie',
    programs: { nextToken: null },
    published: true,
    slug: 'em-normandie-paris',
    stepsTemplates: [{ targets: ['all'] }],
    totalStudents: 4500,
    updatedAt: '2020-09-23T11:32:28.030Z'
};

const mockedData = {
    listSchools: {
        items: [mockedSchool],
        nextToken: '674b32b-3e4e-410c-a26c-f7ghe8123c5'
    }
};

const mockedIsLoading = jest.fn().mockReturnValue(false);

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    graphql: jest.fn().mockImplementation(() => {
        return {
            getSchool: mockedSchool
        };
    }),
    toast: jest.fn(),
    useQuery: () => ({
        data: mockedData,
        isLoading: mockedIsLoading()
    }),
    withPrivateAccess: jest.fn().mockImplementation((Page) => {
        const PrivatePage = (props: any) => {
            return <Page {...props} />;
        };

        return PrivatePage;
    })
}));

describe('UpdateProgramPage', () => {
    it('can render without crashing', () => {
        render(<UpdateProgramPage />);

        const heading = screen.getByText('Program info');

        expect(heading).toBeInTheDocument();
    });

    it('can update a program', async () => {
        render(<UpdateProgramPage />);

        const schoolInput = screen.getByLabelText(/school/i);
        const nameInput = screen.getByLabelText(/name/i);
        const saveButton = screen.getByText(/save/i);

        await act(async () => {
            await selectEvent.select(schoolInput, 'EM Normandie');
        });

        await waitFor(() => {
            fireEvent.change(nameInput, {
                target: {
                    value: 'Master in Science of International Business'
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(saveButton);
        });

        await waitFor(() => {
            expect(graphql).toHaveBeenCalled();
            expect(toast).toHaveBeenCalled();
        });
    });
});
