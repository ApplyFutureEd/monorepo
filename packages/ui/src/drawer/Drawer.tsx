import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { FC, ReactNode } from 'react';

type Props = {
    /**
     * The content of the drawer.
     */
    children: ReactNode;
    /**
     * Callback fired when the component requests to be closed.
     */
    onClose: () => void;
    /**
     * If `true`, the drawer is open.
     */
    open: boolean;
    /**
     * The title of the drawer.
     */
    title: string;
};

export const Drawer: FC<Props> = (props) => {
    const { t } = useTranslation();
    const { children, onClose, open, title } = props;

    const baseClasses = 'z-40 inset-0';

    const classes = cx({
        [`${baseClasses}`]: true,
        ['fixed']: open,
        ['hidden']: !open
    });

    return (
        <div className={classes} hidden={!open}>
            <div className="absolute z-40 inset-0">
                <section className="absolute inset-y-0 right-0 flex pl-10 max-w-full">
                    <div className="w-screen max-w-3xl">
                        <div className="flex flex-col h-full bg-white shadow-xl">
                            <header className="px-4 py-6 bg-indigo-700 space-y-1 sm:px-6">
                                <div className="flex items-center justify-between space-x-3">
                                    <h2 className="text-white text-lg font-medium leading-7">
                                        {title}
                                    </h2>
                                    <div className="h-7 flex items-center">
                                        <button
                                            aria-label={t('common:close')}
                                            className="text-indigo-200 hover:text-white transition duration-150 ease-in-out"
                                            onClick={onClose}>
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </div>
                                </div>
                            </header>
                            <div className="overflow-x-scroll">{children}</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
