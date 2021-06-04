import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

type Props = {
    icon: IconProp;
    label: string;
};

const DisciplineButton: FC<Props> = (props) => {
    const { icon, label } = props;

    return (
        <div className="bg-gray-50 grid grid-cols-6 grid-rows-1 items-center p-4 w-full hover:bg-white border-2 border-indigo-300 hover:border-indigo-600 rounded-xl cursor-pointer">
            <div className="col-span-5 text-sm font-semibold leading-4 md:leading-6">
                <p>{label}</p>
            </div>
            <div className="flex content-center justify-center">
                <FontAwesomeIcon className="fa-2x text-indigo-600" icon={icon} />
            </div>
        </div>
    );
};

export default DisciplineButton;
