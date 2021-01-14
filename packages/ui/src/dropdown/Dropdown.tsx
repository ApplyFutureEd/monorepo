import { OutsideAlerter } from './../outside-alerter/OutsideAlerter';
import { Transition } from './../transition/Transition';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, ReactNode } from 'react';

export type DropdownItem = {
    label: ReactNode;
    onClick: (...args: unknown[]) => void;
    startIcon?: IconProp;
};

type Props = {
    /**
     * Dropdown menu's items that should include a `label: ReactNode` and an `onClick: () => void` callback function. You can also provide a `startIcon: IconProp`.
     */
    items: Array<DropdownItem>;
    /**
     * Callback function called when clicking outside of the Dropdown component.
     */
    onOutsideClick: () => void;
    /**
     * When `open` is `true` items are displayed.
     */
    open: boolean;
    /**
     * Component that, when clicked, toggles of the Dropdown.
     */
    trigger: ReactNode;
};

export const Dropdown: FC<Props> = (props) => {
    const { items, onOutsideClick, open, trigger } = props;

    return (
        <OutsideAlerter callback={onOutsideClick}>
            <div className="flex items-center">
                <div className="relative">
                    {trigger}
                    <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                        show={open}>
                        <div className="absolute z-40 right-0 mt-2 truncate rounded-md shadow-lg origin-top-right">
                            <div className="py-1 bg-white rounded-md shadow-xs">
                                {items.map((item, index) => {
                                    const { label, onClick, startIcon } = item;

                                    return (
                                        <button
                                            key={index}
                                            className="flex items-center px-4 py-2 w-full text-gray-700 text-sm hover:bg-gray-100 cursor-pointer"
                                            onClick={onClick}>
                                            {startIcon && (
                                                <FontAwesomeIcon
                                                    className="mr-2"
                                                    icon={startIcon}
                                                />
                                            )}
                                            <div>{label}</div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </OutsideAlerter>
    );
};