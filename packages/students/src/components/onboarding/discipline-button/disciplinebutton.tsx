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
        <div className="bg-gray-50 grid grid-cols-3 grid-rows-1 place-items-center p-1 w-full hover:bg-white border-2 border-indigo-300 hover:border-indigo-600 rounded-xl">
            <div className="col-span-2 text-center text-sm font-semibold leading-4 md:leading-6">
                <p>{label}</p>
            </div>
            <div>
                <FontAwesomeIcon className="fa-2x text-indigo-600" icon={icon} />
            </div>
        </div>
    );
};

export default DisciplineButton;
