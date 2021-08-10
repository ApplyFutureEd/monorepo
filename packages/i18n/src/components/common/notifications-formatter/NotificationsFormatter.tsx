import { DataTypeProvider } from '@devexpress/dx-react-grid';
import { faBell as faBellEmpty } from '@fortawesome/pro-light-svg-icons';
import { faBell } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

export const NotificationsFormatter: FC<DataTypeProvider.ValueFormatterProps> = (props) => {
    const { value: notifications } = props;

    const newNotifications = Boolean(
        notifications?.find((notification: any) => !notification.seen)
    );
    if (newNotifications) {
        return <FontAwesomeIcon className="text-red-500" icon={faBell} size="lg" />;
    }
    return <FontAwesomeIcon className="text-gray-400" icon={faBellEmpty} size="lg" />;
};

export default NotificationsFormatter;
