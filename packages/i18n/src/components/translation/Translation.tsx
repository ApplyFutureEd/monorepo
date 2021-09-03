import Storage from '@aws-amplify/storage';
import dataFake from '@data/application';
import { Filter } from '@pages/index';
import React, { FC, useEffect, useState } from 'react';

import TranslationForm from '../translation/TranslationForm';

type Props = {
    filter: Filter;
    search: string;
    selected: string;
};

const Translation: FC<Props> = (props) => {
    const { filter, search, selected } = props;
    const [dataStorage, setDataStorage] = useState();

    useEffect(() => {
        const fileStorage = async () => {
            const result = (await Storage.get('i18n/en/application.json', {
                download: true
            })) as any;
            const text = await result.Body.text();
            const resultData = JSON.parse(text);
            console.log(resultData);

            console.log('hello');
            console.log('noice');

            setDataStorage(resultData);
        };

        fileStorage();
    }, []);

    // const getFileName = (selected: string) => {
    //     if (selected === 'All') {
    //         return data;
    //     } else if (selected === 'Account') {
    //         return account;
    //     } else if (selected === 'Application') {
    //         return application;
    //     } else if (selected === 'Auth') {
    //         return auth;
    //     } else {
    //         return selected;
    //     }
    // };

    // const filterSearch = (translationKey: string) => !search || translationKey.includes(search);
    // const filterTranslated = (translationKey: string, item: any) =>
    //     filter !== 'TRANSLATED'
    //         ? translationKey.includes(search)
    //         : item.en !== '' && item.fr !== '' && item.zh !== '';
    // const filterUntranslated = (translationKey: string, item: any) =>
    //     filter !== 'UNTRANSLATED'
    //         ? translationKey.includes(search)
    //         : item.en === '' || item.fr === '' || item.zh === '';
    return (
        <>
<<<<<<< HEAD
            {Object.entries(getFileName(selected))
                .filter(([translationKey]) => filterSearch(translationKey))
                .filter(([translationKey, value]) => filterTranslated(translationKey, value))
                .filter(([translationKey, value]) => filterUntranslated(translationKey, value))
                .map(([translationKey, value]) => (
                    <div key={translationKey}>
=======
            {dataStorage &&
                Object.entries(dataStorage)
                    // .filter(([translationKey]) => filterSearch(translationKey))
                    // .filter(([translationKey, value]) => filterTranslated(translationKey, value))
                    // .filter(([translationKey, value]) => filterUntranslated(translationKey, value))
                    .map(([translationKey, value]) => {
                        // console.log(translationKey, '+', value);
                        // console.log(typeof value);

                        return (
                            <div key={translationKey}>
                                <p>Hello</p>
                                <p>{translationKey}</p>
                                {/* <p>{value}</p> */}
                            </div>
                        );
                    })}
            {/* {Object.entries(dataStorage)
                // .filter(([translationKey]) => filterSearch(translationKey))
                // .filter(([translationKey, value]) => filterTranslated(translationKey, value))
                // .filter(([translationKey, value]) => filterUntranslated(translationKey, value))
                .map(([translationKey, value], i) => (
                    <div key={i} className="my-8 px-6 py-4 border rounded-md shadow">
>>>>>>> ab7a8c0ae37598be8bec2ca04edc7ace87b482f2
                        <TranslationForm
                            newForm={false}
                            selected={selected}
                            translationKey={translationKey}
                            value={value}
                        />
                    </div>
                ))} */}
        </>
    );
};

export default Translation;
