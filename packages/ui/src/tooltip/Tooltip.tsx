import { faInfoCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, Fragment, ReactNode, useState } from 'react';

type Props = {
    /**
     * The element that display the tooltip when hovered.
     */
    children: ReactNode;
    /**
     * The content of the tooltip.
     */
    content: ReactNode;
    /**
     * The delay before the tooltip is displayed when the `children` element is hovered.
     */
    delay?: number;
    /**
     * Display the "i" icon next to the children element
     */
    icon?: boolean;
};

export const Tooltip: FC<Props> = (props) => {
    const { children, content, delay = 200, icon = true } = props;

    let timeout: NodeJS.Timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    if (!content) {
        return <Fragment>{children}</Fragment>;
    }

    return (
        <div className="relative flex items-center" onMouseEnter={showTip} onMouseLeave={hideTip}>
            {children}
            {icon && (
                <span className="ml-2">
                    <FontAwesomeIcon
                        className="text-indigo-600"
                        fixedWidth={true}
                        icon={faInfoCircle}
                        size="1x"
                    />
                </span>
            )}
            {active && (
                <div className="text-md top-4 absolute z-40 p-2 text-white font-sans bg-gray-500 rounded-md shadow-2xl">
                    {content}
                </div>
            )}
        </div>
    );
};
