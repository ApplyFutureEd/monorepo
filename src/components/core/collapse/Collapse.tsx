import { faChevronDown, faChevronUp } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { FC, ReactNode } from 'react';

type Props = {
    /**
     * The content of the collapse.
     */
    content: ReactNode;
    /**
     * The function called on the `click` event.
     */
    onClick: () => void;
    /**
     * If `true`, the collapse is open and the content is displayed.
     */
    open: boolean;
    /**
     * The title of the collapse.
     */
    title: string;
};

const Collapse: FC<Props> = (props) => {
    const { open, onClick, title, content } = props;

    const baseClasses = 'text-gray-500 text-base leading-6';

    const classes = cx({
        [`${baseClasses}`]: true,
        ['block']: open,
        ['hidden']: !open
    });

    return (
        <div className="mt-6 pt-6 border-t-2 border-gray-200">
            <dl>
                <div>
                    <dt className="text-lg leading-7">
                        <button
                            className="flex items-start justify-between w-full text-left text-gray-400 focus:text-gray-900 focus:outline-none"
                            onClick={onClick}>
                            <span className="text-gray-900 font-medium">{title}</span>
                            <span className="flex items-center ml-6 h-7">
                                <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
                            </span>
                        </button>
                    </dt>
                    <dd className="markdown mt-2 pr-12">
                        <div className={classes}>{content}</div>
                    </dd>
                </div>
            </dl>
        </div>
    );
};

export default Collapse;
