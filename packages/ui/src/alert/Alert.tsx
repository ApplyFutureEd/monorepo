import { faExclamationTriangle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

type Props = {
    link?: string;
    linkDescription?: string;
    text: string;
};

export const Alert: FC<Props> = (props) => {
    const { link, linkDescription, text } = props;

    return (
        <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
            <div className="flex">
                <div className="flex-shrink-0">
                    <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />
                </div>
                <div className="ml-3">
                    <p className="text-yellow-700 text-sm">
                        {text}.{' '}
                        <a
                            className="hover:text-yellow-600 text-yellow-700 underline font-medium"
                            href={link}>
                            {linkDescription}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
