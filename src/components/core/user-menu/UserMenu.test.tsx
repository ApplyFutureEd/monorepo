import UserMenu from '@components/core/user-menu/UserMenu';
import { fireEvent, render, screen } from '@testing-library/react';
import { Auth } from 'aws-amplify';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: jest.fn(),
            query: {}
        };
    }
}));

Auth.signOut = jest.fn().mockImplementation(() => {
    return true;
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
delete window.location;
window.location = ({ reload: jest.fn() } as unknown) as Location;

describe('UserMenu', () => {
    it('can render without crashing', () => {
        render(<UserMenu />);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    it('can open the menu and display the options', () => {
        render(<UserMenu />);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        const favorites = screen.getByText(/favorites/);
        const signOut = screen.getByText(/sign-out/);

        expect(favorites).toBeVisible();
        expect(signOut).toBeVisible();
    });

    it('can close the menu and navigate to /favorites', () => {
        render(<UserMenu />);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        const signOut = screen.getByText(/favorites/);

        fireEvent.click(signOut);
    });

    it('can sign out and reload the page', () => {
        render(<UserMenu />);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        const signOut = screen.getByText(/sign-out/);

        fireEvent.click(signOut);

        expect(Auth.signOut).toHaveBeenCalled();
        expect(window.location.reload).toHaveBeenCalled();
    });
});
