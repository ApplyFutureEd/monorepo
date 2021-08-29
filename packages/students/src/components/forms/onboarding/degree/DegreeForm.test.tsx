import DegreeForm from '@components/forms/onboarding/degree/DegreeForm';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';

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

describe('DegreeForm', () => {
    it('can render without crashing', () => {
        render(<DegreeForm />);

        const submitButton = screen.getByText('profile:onboarding-next-step');

        expect(submitButton).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<DegreeForm />);

        const input = screen.getByRole('textbox');
        const submitButton = screen.getByText('profile:onboarding-next-step');

        await act(async () => {
            await selectEvent.select(input, 'profile:bachelor-degree');
        });

        userEvent.click(submitButton);

        await waitFor(() => {
            expect(window.localStorage.setItem).toHaveBeenCalledWith(
                'onboarding',
                '{"country":"","degree":"BACHELOR","discipline":"","highestEducationLevel":""}'
            );
        });
    });
});
