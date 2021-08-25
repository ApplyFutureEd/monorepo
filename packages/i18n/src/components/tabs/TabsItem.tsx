import account from '@data/account.json';
import application from '@data/application.json';
import auth from '@data/auth.json';
import data from '@data/import';
import upperFirst from 'lodash/upperFirst';
import { FC } from 'react';

type Props = {
    file: string;
};

const TabsItem: FC<Props> = (props) => {
    const { file } = props;

    const fileName = (file: string) => {
        if (file === 'all') {
            return data;
        } else if (file === 'account') {
            return account;
        } else if (file === 'application') {
            return application;
        } else if (file === 'auth') {
            return auth;
        } else {
            return file;
        }
    };

    return (
        <div>
            <h2 className="text-gray-900 text-2xl font-bold tracking-tight leading-8 sm:text-2xl sm:leading-9">
                {upperFirst(file)}
            </h2>
            {Object.entries(fileName(file)).map(([key, value], i) => (
                <div key={i}>
                    <p className="mt-3 text-gray-700 text-lg leading-7">Key : {key}</p>
                    <p className="mt-3 text-gray-700 text-lg leading-7">en: {value.en}</p>
                    <p className="mt-3 text-gray-700 text-lg leading-7">fr: {value.fr}</p>
                    <p className="mt-3 text-gray-700 text-lg leading-7">ch: {value.ch}</p>
                </div>
            ))}
        </div>
    );
};

export default TabsItem;
