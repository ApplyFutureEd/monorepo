import { faExclamationTriangle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, ReactNode } from 'react';

type Props = {
    /**
     * The content of the alert.
     */
    children: ReactNode;
};

export const Alert: FC<Props> = (props) => {
    const { children } = props;

    return (
        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
            <div className="flex">
                <div className="flex-shrink-0">
                    <FontAwesomeIcon
                        className="w-5 h-5 text-yellow-400"
                        icon={faExclamationTriangle}
                        size="lg"
                    />
                </div>
                <div className="ml-3">
                    <p className="text-yellow-700 text-sm">{children}</p>
                </div>
            </div>
        </div>
    );
};
