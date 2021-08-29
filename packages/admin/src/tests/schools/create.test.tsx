import { toast } from '@applyfuture/utils';
import CreateSchoolPage from '@pages/schools/create';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { FC } from 'react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en',
            push: jest.fn()
        };
    }
}));

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

const mockedIsLoading = jest.fn().mockReturnValue(false);

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    toast: jest.fn(),
    useQuery: () => ({
        isLoading: mockedIsLoading()
    }),
    withPrivateAccess: jest.fn().mockImplementation((Page) => {
        const PrivatePage = (props: any) => {
            return <Page {...props} />;
        };

        return PrivatePage;
    })
}));

describe.skip('CreateSchoolPage', () => {
    it('can render without crashing', () => {
        render(<CreateSchoolPage />);

        const heading = screen.getByText('School info');

        expect(heading).toBeInTheDocument();
    });

    it.skip('can create a school', async () => {
        // @skiped : missing inputs to be filled, see required fields in schema.graphql (with the "!" at the end of the type)
        render(<CreateSchoolPage />);

        const cityInput = screen.getByLabelText(/city/i);

        const saveButton = screen.getByText(/save/i);

        await waitFor(() => {
            fireEvent.change(cityInput, {
                target: {
                    value: 'Brussels'
                }
            });
        });

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
