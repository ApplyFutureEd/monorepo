import { render, screen } from '@testing-library/react';
import { FC } from 'react';

import UploadDocuments from '../../pages/applications/[id]/upload-documents';

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

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    useAuthenticatedUser: jest.fn().mockImplementation(() => ({
        user: {
            attributes: {
                email: 'awesome.student@gmail.com'
            }
        }
    })),
    useQuery: () => ({
        data: {},
        isLoading: false
    }),
    withPrivateAccess: jest.fn().mockImplementation((Page) => {
        const PrivatePage = (props: any) => {
            return <Page {...props} />;
        };

        return PrivatePage;
    })
}));

describe.skip('Upload Documents page', () => {
    it('can render without crashing', () => {
        render(<UploadDocuments />);

        const heading = screen.getByText('application:application-information');

        expect(heading).toBeInTheDocument();
    });
});
