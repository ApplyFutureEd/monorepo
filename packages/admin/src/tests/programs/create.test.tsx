import CreateProgramPage from '@pages/programs/create';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { FC } from 'react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

const mockedData = {
    listSchools: {
        items: [],
        nextToken: '674b32b-3e4e-410c-a26c-f7ghe8123c5'
    }
};

const mockedIsLoading = jest.fn().mockReturnValue(false);

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
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

describe('CreateProgramPage', () => {
    it('can render without crashing', () => {
        render(<CreateProgramPage />);

        const heading = screen.getByText('Program info');

        expect(heading).toBeInTheDocument();
    });
});
