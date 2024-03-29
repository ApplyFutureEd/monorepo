import { Toast } from '@applyfuture/ui';
import { toast as toastify } from 'react-toastify';

type ToastOptions = {
    description?: string;
    title: string;
    variant: 'success' | 'error';
};

export const toast = (options: ToastOptions): void => {
    const { description, title, variant } = options;

    toastify(
        ({ closeToast, ...rest }) => {
            setTimeout(() => {
                closeToast && closeToast();
            }, 3000);
            return (
                <Toast
                    closeToast={closeToast}
                    description={description}
                    title={title}
                    variant={variant}
                    {...rest}
                />
            );
        },
        {
            position: 'top-right'
        }
    );
};
