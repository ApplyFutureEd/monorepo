import DisciplineForm from '@components/forms/onboarding/discipline/DisciplineForm';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.spyOn(window.localStorage.__proto__, 'setItem');
window.localStorage.__proto__.setItem = jest.fn();

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en',
            push: jest.fn()
        };
    }
}));

describe.skip('DisciplineForm', () => {
    it('can render without crashing', () => {
        render(<DisciplineForm />);

        const submitButton = screen.getByText('profile:onboarding-next-step');

        expect(submitButton).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<DisciplineForm />);

        const disciplineButton = screen.getByText('profile:business-management-and-economics');
        const submitButton = screen.getByText('profile:onboarding-next-step');

        userEvent.click(disciplineButton);
        userEvent.click(submitButton);

        await waitFor(() => {
            expect(window.localStorage.setItem).toHaveBeenCalledWith(
                'onboarding',
                '{"country":"","degree":"","discipline":"BUSINESS_MANAGEMENT_AND_ECONOMICS","highestEducationLevel":""}'
            );
        });
    });
});
