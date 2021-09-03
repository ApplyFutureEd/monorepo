/* import Storage from '@aws-amplify/storage'; */
import { Filter } from '@pages/index';
import React, { FC /* useEffect, useState */ } from 'react';

import enAccount from '../../../locales/en/account.json';
import enAuth from '../../../locales/en/auth.json';
import enHelp from '../../../locales/en/help.json';
import enNavigation from '../../../locales/en/navigation.json';
import enSchools from '../../../locales/en/schools.json';
import frAccount from '../../../locales/fr/account.json';
import frAuth from '../../../locales/fr/auth.json';
import frHelp from '../../../locales/fr/help.json';
import frNavigation from '../../../locales/fr/navigation.json';
import frSchools from '../../../locales/fr/schools.json';
import zhAccount from '../../../locales/zh/account.json';
import zhAuth from '../../../locales/zh/auth.json';
import zhHelp from '../../../locales/zh/help.json';
import zhNavigation from '../../../locales/zh/navigation.json';
import zhSchools from '../../../locales/zh/schools.json';
import TranslationForm from './TranslationForm';

type Props = {
    filter: Filter;
    search: string;
    selected: string;
};

const Translation: FC<Props> = (props) => {
    const { filter, search, selected } = props;
    /* const [dataStorage, setDataStorage] = useState(); */

    /* useEffect(() => {
        const fileStorage = async () => {
            const result = (await Storage.get('i18n/en/application.json', {
                download: true
            })) as any;
            const text = await result.Body.text();
            const resultData = JSON.parse(text);
            setDataStorage(resultData);
        };

        fileStorage();
    }, []); */

    const getEnFile = (selected: string) => {
        if (selected === 'Account') {
            return enAccount;
        } else if (selected === 'Auth') {
            return enAuth;
        } else if (selected === 'Help') {
            return enHelp;
        } else if (selected === 'Navigation') {
            return enNavigation;
        } else if (selected === 'Schools') {
            return enSchools;
        } else {
            return selected;
        }
    };
    const getFrFile = (selected: string) => {
        if (selected === 'Account') {
            return frAccount;
        } else if (selected === 'Auth') {
            return frAuth;
        } else if (selected === 'Help') {
            return frHelp;
        } else if (selected === 'Navigation') {
            return frNavigation;
        } else if (selected === 'Schools') {
            return frSchools;
        } else {
            return selected;
        }
    };
    const getZhFile = (selected: string) => {
        if (selected === 'Account') {
            return zhAccount;
        } else if (selected === 'Auth') {
            return zhAuth;
        } else if (selected === 'Help') {
            return zhHelp;
        } else if (selected === 'Navigation') {
            return zhNavigation;
        } else if (selected === 'Schools') {
            return zhSchools;
        } else {
            return selected;
        }
    };
    const en = getEnFile(selected);
    const fr = getFrFile(selected);
    const zh = getZhFile(selected);

    const mergeFile = (files: any, referenceLocale: string) => {
        const result = {};
        const locales = Object.keys(files);
        const keys = Object.keys(files[referenceLocale]);
        keys.forEach((key: any) => {
            result[key] = {};
            locales.forEach((locale: any) => {
                result[key][locale] = files[locale][key];
            });
        });
        return result;
    };

    const file = mergeFile({ en, fr, zh }, 'en');

    /* const getFileName = (selected: string) => {
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
        }
    }; */

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
            {file &&
                Object.entries(file)
                    .filter(([translationKey]) => filterSearch(translationKey))
                    .filter(([translationKey, value]) => filterTranslated(translationKey, value))
                    .filter(([translationKey, value]) => filterUntranslated(translationKey, value))
                    .map(([translationKey, value], i) => (
                        <div key={i} className="my-8 px-6 py-4 border rounded-md shadow">
                            <TranslationForm
                                newForm={false}
                                selected={selected}
                                translationKey={translationKey}
                                value={value}
                            />
                        </div>
                    ))}
            ;
        </>
    );
};

export default Translation;
