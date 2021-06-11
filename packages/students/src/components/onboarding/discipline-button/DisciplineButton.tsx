import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { FC } from 'react';

type Props = {
    handleClick: (value: string) => void;
    icon: IconProp;
    label: string;
    toggle: boolean;
    value: string;
};

const DisciplineButton: FC<Props> = (props) => {
    const { handleClick, icon, label, toggle, value } = props;

    const classes = cx({
        ['bg-gray-50 grid grid-cols-6 grid-rows-1 items-center p-4 w-full hover:bg-white border-2 hover:border-indigo-600 rounded-xl cursor-pointer focus:border-indigo-700 border-transparent focus:outline-none focus:shadow-outline-indigo']: true,
        ['border-gray-300']: !toggle,
        ['border-indigo-700 outline-none shadow-outline-indigo']: toggle
    });

    return (
        <button className={classes} type="button" onClick={() => handleClick(value)}>
            <div className="col-span-5 text-sm font-semibold leading-4 md:leading-6">
                <p>{label}</p>
            </div>
            <div className="flex content-center justify-center">
                <FontAwesomeIcon className="fa-2x text-indigo-600" icon={icon} />
            </div>
        </button>
    );
};

export default DisciplineButton;
