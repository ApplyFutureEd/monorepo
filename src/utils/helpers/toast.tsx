import Toast from '@components/core/toast/Toast';
import { toast as toastify } from 'react-toastify';

type ToastOptions = {
    description: string;
    title: string;
    variant: 'success' | 'error';
};

export const toast = (options: ToastOptions): void => {
    const { description, title, variant } = options;

    toastify(
        ({ closeToast }) => (
            <Toast
                closeToast={closeToast}
                description={description}
                title={title}
                variant={variant}
            />
        ),
        {
            position: 'top-right'
        }
    );
};
