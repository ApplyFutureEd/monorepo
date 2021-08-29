/* eslint-disable sort-keys */
import { render, screen } from '@testing-library/react';

import NotificationsFormatter from './NotificationsFormatter';

describe.skip('NotificationsFormatter', () => {
    const column = {
        getCellValue: jest.fn(),
        name: 'notifications',
        title: 'Notifications'
    };

    const value = [
        {
            date: '2021-02-28T23:00:00.000Z',
            description: 'Lorem ipsum',
            descriptionOptions: '',
            link: '',
            seen: false,
            title: 'Lorem ipsum',
            titleOptions: ''
        }
    ];

    it('can render without crashing', async () => {
        render(<NotificationsFormatter column={column} value={value} />);

        const date = screen.getByRole('img', { hidden: true });

        expect(date).toBeInTheDocument();
    });
});
