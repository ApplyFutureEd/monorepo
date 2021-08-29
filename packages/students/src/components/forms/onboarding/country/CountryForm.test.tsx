import CountryForm from '@components/forms/onboarding/country/CountryForm';
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

describe('CountryForm', () => {
    it('can render without crashing', () => {
        render(<CountryForm />);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    it('can submit the form', async () => {
        render(<CountryForm />);

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');

        await act(async () => {
            await selectEvent.select(input, /france/);
        });

        userEvent.click(button);

        await waitFor(() => {
            expect(window.localStorage.setItem).toHaveBeenCalledWith(
                'onboarding',
                '{"country":"FR","degree":"","discipline":"","highestEducationLevel":""}'
            );
        });
    });
});
