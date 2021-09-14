import { Notification } from '@applyfuture/models';
import { render, screen } from '@testing-library/react';

import { Notifications } from './Notifications';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

describe('Notifications', () => {
    it('can render without crashing', () => {
        const notifications: Array<Notification> = [];
        const studentId = '063e734c-fe52-44e4-bfd4-27c6ba50f247';

        render(<Notifications notifications={notifications} studentId={studentId} />);

        const notificationsIcon = screen.getByRole('button');

        expect(notificationsIcon).toBeInTheDocument();
    });

    it('can render with notifications', () => {
        const notifications: Array<Notification> = [
            {
                date: 'Mon Sep 13 2021 19:12:42 GMT+0200',
                id: '95ee1faf-dece-4e22-86d5-1e130d6c4c14',
                link: 'https://applyfuture.com',
                seen: false,
                variables: ''
            }
        ];
        const studentId = '063e734c-fe52-44e4-bfd4-27c6ba50f247';

        render(<Notifications notifications={notifications} studentId={studentId} />);

        const notificationsIcon = screen.getByRole('button');

        expect(notificationsIcon).toBeInTheDocument();
    });
});
