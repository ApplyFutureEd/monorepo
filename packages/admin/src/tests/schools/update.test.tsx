import { toast } from '@applyfuture/utils';
import UpdateSchoolPage from '@pages/schools/update';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { FC } from 'react';

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
    published: true,
    schools: { nextToken: null },
    slug: 'em-normandie-paris',
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

describe('UpdateSchoolPage', () => {
    it('can render without crashing', () => {
        render(<UpdateSchoolPage />);

        const heading = screen.getByText('School info');

        expect(heading).toBeInTheDocument();
    });

    it.skip('can update a school', async () => {
        // @skiped : missing inputs to be filled, see required fields in schema.graphql (with the "!" at the end of the type)
        render(<UpdateSchoolPage />);

        const cityInput = screen.getByLabelText(/city/i);
        const saveButton = screen.getByText(/Save/i);

        await waitFor(() => {
            fireEvent.change(cityInput, {
                target: {
                    value: 'Brussels'
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(saveButton);
        });

        await waitFor(() => {
            expect(toast).toHaveBeenCalled();
        });
    });
});
