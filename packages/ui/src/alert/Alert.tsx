import { faExclamationTriangle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

type Props = {
    alertDescription: string;
    handleScroll?: () => void;
    link?: string;
    linkDescription?: string;
    scrollLinkDescription?: string;
};

export const Alert: FC<Props> = (props) => {
    const { alertDescription, handleScroll, link, linkDescription, scrollLinkDescription } = props;

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
                    <p className="text-yellow-700 text-sm">
                        {alertDescription}.{' '}
                        <a
                            className="hover:text-yellow-600 text-yellow-700 underline font-medium"
                            href={link}>
                            {linkDescription}
                        </a>
                        <button
                            className="hover:text-yellow-600 text-yellow-700 underline font-medium"
                            type="button"
                            onClick={handleScroll}>
                            {scrollLinkDescription}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};
