import LanguageMenu from '@components/core/language-menu/LanguageMenu';
import { fireEvent, render, screen } from '@testing-library/react';
import Cookies from 'js-cookie';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en',
            push: jest.fn(),
            query: {}
        };
    }
}));

jest.mock('js-cookie');

describe('LanguageMenu', () => {
    it('can render without crashing', () => {
        render(<LanguageMenu />);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    it('can open the menu and display the options', () => {
        render(<LanguageMenu />);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        const english = screen.getAllByText(/English/)[2];
        const chinese = screen.getAllByText(/简体中文/)[1];
        const french = screen.getAllByText(/Français/)[1];

        expect(english).toBeVisible();
        expect(chinese).toBeVisible();
        expect(french).toBeVisible();
    });

    it('can close the menu, set the locale cookie and navigate to /locale', () => {
        render(<LanguageMenu />);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        const english = screen.getAllByText(/English/)[1];

        fireEvent.click(english);

        expect(Cookies.set).toHaveBeenCalledWith('NEXT_LOCALE', 'en');
    });
});
