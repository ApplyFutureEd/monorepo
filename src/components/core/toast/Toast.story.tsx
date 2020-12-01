import Toast from '@components/core/toast/Toast';
import React, { ReactNode } from 'react';

export default {
    component: Toast,
    title: 'Toast'
};

export const Success = (): ReactNode => {
    const closeToast = () => alert('close toast');

    return (
        <Toast
            closeToast={closeToast}
            description="You can now login with your new password"
            title="Password updated"
            variant="success"
        />
    );
};

export const Error = (): ReactNode => {
    const closeToast = () => alert('close toast');

    return (
        <Toast
            closeToast={closeToast}
            description="Please try again"
            title="Sorry, something went wrong"
            variant="error"
        />
    );
};
