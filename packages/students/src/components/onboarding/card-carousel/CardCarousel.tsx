import { faClock, faDiploma, faEuroSign, faGlobe } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

type Props = {
    id: string;
    title: string;
    name: string;
    country: string;
    time: string;
    start: string;
    date: string;
    year: string;
    price: string;
    logo: string;
};

export const CardCarousel: FC<Props> = (props) => {
    const { title, name, country, time, start, date, year, price, logo } = props;

    return (
        <div className="flex flex-none p-8 max-w-sm">
            <div className="flex flex-col bg-white rounded-2xl hover:shadow-2xl shadow-xl cursor-pointer">
                <div className="relative flex-1 pb-2 pt-10 px-6 space-y-3 md:px-8">
                    <div className="absolute top-0 inline-block p-3 rounded-xl shadow-lg transform -translate-y-1/2">
                        <img alt="school" height="50" src={logo} width="50" />
                    </div>
                    <h3 className="mb-1 text-gray-900 text-xl font-bold">{title}</h3>
                    <div className="flex flex-row items-center space-x-2">
                        <div className="text-indigo-600 text-2xl">
                            <FontAwesomeIcon fixedWidth icon={faDiploma} />
                        </div>
                        <p className="text-gray-500 text-base">{name}</p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <div className="text-indigo-600 text-2xl">
                            <FontAwesomeIcon fixedWidth icon={faGlobe} />
                        </div>
                        <p className="text-gray-500 text-base">{country}</p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <div className="text-indigo-600 text-2xl">
                            <FontAwesomeIcon fixedWidth icon={faClock} />
                        </div>
                        <p className="text-gray-500 text-base">
                            <span>{time}</span>
                            <span> {start}</span>
                            <span className="text-gray-600 text-base font-bold"> {date}</span>
                        </p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <div className="text-indigo-600 text-2xl">
                            <FontAwesomeIcon fixedWidth icon={faEuroSign} />
                        </div>
                        <p className="text-gray-500 text-base">
                            <span>{year}</span>
                            <span className="text-gray-600 text-base font-bold"> {price}</span>
                        </p>
                    </div>
                </div>
                <div className="bg-gray-50 flex flex-row items-center px-6 py-3 rounded-bl-2xl rounded-br-2xl">
                    <a
                        className="ml-2.5 hover:text-indigo-600 text-indigo-700 text-base font-medium"
                        href="/">
                        En savoir plus<span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardCarousel;
