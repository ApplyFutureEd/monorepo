import account from '@data/account.json';
import application from '@data/application.json';
import auth from '@data/auth.json';
import data from '@data/import';
import { Filter } from '@pages/index';
import React, { FC } from 'react';

import TranslationForm from '../translation/TranslationForm';

interface Props {
    search: string;
    filter: Filter;
    selected: string;
}

const Translation: FC<Props> = (props) => {
    const { search, filter, selected } = props;

    const fileName = (selected: string) => {
        if (selected === 'All') {
            return data;
        } else if (selected === 'Account') {
            return account;
        } else if (selected === 'Application') {
            return application;
        } else if (selected === 'Auth') {
            return auth;
        } else {
            return selected;
        }
    };

    // const displaySearch = search ? `Search Results: ${search}` : '';

    const filterSearch = (translationKey: string) => !search || translationKey.includes(search);
    const filterTranslated = (translationKey: string, item: any) =>
        filter !== 'TRANSLATED'
            ? translationKey.includes(search)
            : item.en !== '' && item.fr !== '' && item.zh !== '';
    const filterUntranslated = (translationKey: string, item: any) =>
        filter !== 'UNTRANSLATED'
            ? translationKey.includes(search)
            : item.en === '' || item.fr === '' || item.zh === '';
    return (
        <>
            {Object.entries(fileName(selected))
                .filter(([translationKey]) => filterSearch(translationKey))
                .filter(([translationKey, value]) => filterTranslated(translationKey, value))
                .filter(([translationKey, value]) => filterUntranslated(translationKey, value))
                .map(([translationKey, value], i) => (
                    <div key={i} className="my-8 px-6 py-4 border rounded-md shadow">
                        <TranslationForm
                            selected={selected}
                            translationKey={translationKey}
                            value={value}
                        />
                    </div>
                ))}
        </>
    );
};

export default Translation;
