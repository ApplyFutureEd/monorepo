import Tabs from '@components/profile/tabs/Tabs';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            pathname: '/profile/general-information'
        };
    }
}));

describe('Tabs', () => {
    it('can render without crashing', () => {
        render(
            <Tabs
                completion={{
                    backgroundInformation: true,
                    educationHistory: true,
                    generalInformation: true,
                    testScores: true,
                    uploadDocuments: true
                }}
            />
        );

        const firstTab = screen.getByText('profile:general-information-page-title');

        expect(firstTab).toBeInTheDocument;
    });
});
