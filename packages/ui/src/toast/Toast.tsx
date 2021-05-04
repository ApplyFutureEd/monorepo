import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { faCheckCircle, faTimesCircle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

type Props = {
    closeToast?: () => void;
    description?: string;
    title: string;
    variant: 'success' | 'error';
};

export const Toast: FC<Props> = (props) => {
    const { closeToast, description, title, variant } = props;

    const icons = {
        error: (
            <div className="flex-shrink-0 text-red-400">
                <FontAwesomeIcon fixedWidth icon={faTimesCircle} size="lg" />
            </div>
        ),
        success: (
            <div className="flex-shrink-0 text-green-400">
                <FontAwesomeIcon fixedWidth icon={faCheckCircle} size="lg" />
            </div>
        )
    };

    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg pointer-events-auto">
            <div className="rounded-lg shadow-xs overflow-hidden">
                <div className="p-4">
                    <div className="flex items-start">
                        {icons[variant]}
                        <div className="pt-0.5 flex-1 ml-3 w-0">
                            <p className="text-gray-900 text-sm font-medium leading-5">{title}</p>
                            <p className="mt-1 text-gray-500 text-sm leading-5">{description}</p>
                        </div>
                        <div className="flex flex-shrink-0 ml-4">
                            <button
                                className="inline-flex text-gray-400 focus:text-gray-500 focus:outline-none transition duration-150 ease-in-out"
                                onClick={closeToast}>
                                <FontAwesomeIcon fixedWidth icon={faTimes} size="lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
