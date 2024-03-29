import { faSignOut } from '@fortawesome/pro-light-svg-icons';
import { fireEvent, render, screen } from '@testing-library/react';
import { Auth } from 'aws-amplify';

import { DropdownItem } from './../dropdown/Dropdown';
import { UserMenu } from './UserMenu';

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
window.location = { reload: jest.fn() } as unknown as Location;

describe('UserMenu', () => {
    const items: Array<DropdownItem> = [
        {
            label: 'navigation:sign-out',
            onClick: jest.fn().mockImplementation(() => {
                Auth.signOut();
                window.location.reload();
            }),
            startIcon: faSignOut
        }
    ];

    it('can render without crashing', () => {
        render(<UserMenu items={items} />);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    it('can open the menu and display the options', () => {
        render(<UserMenu items={items} />);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        const signOut = screen.getByText(/sign-out/);

        expect(signOut).toBeVisible();
    });

    it('can sign out and reload the page', () => {
        render(<UserMenu items={items} />);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        const signOut = screen.getByText(/sign-out/);

        fireEvent.click(signOut);

        expect(Auth.signOut).toHaveBeenCalled();
        expect(window.location.reload).toHaveBeenCalled();
    });
});
