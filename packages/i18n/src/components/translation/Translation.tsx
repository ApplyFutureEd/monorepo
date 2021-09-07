import Storage from '@aws-amplify/storage';
import { locales } from '@data/locales';
import { namespaces } from '@data/namespaces';
import { Filter } from '@pages/index';
import { flatten } from 'lodash';
import React, { FC, useEffect, useState } from 'react';

import TranslationForm from './TranslationForm';

type Props = {
    filter: Filter;
    search: string;
    selected: string;
};

type TranslationFile = {
    [locale: string]: string;
};

type Translations = {
    [locale: string]: { [key: string]: string };
};

const Translation: FC<Props> = (props) => {
    const { filter, search, selected } = props;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [englishTranslations, setEnglishTranslations] = useState<Translations>({});
    const [frenchTranslations, setFrenchTranslations] = useState<Translations>({});
    const [chineseTranslations, setChineseTranslations] = useState<Translations>({});

    const fetchNamespace = (namespace: string) => {
        const promises: Array<Promise<TranslationFile>> = [];

        locales.forEach((locale) => {
            promises.push(
                Storage.get(`i18n/${locale}/${namespace}.json`, {
                    download: true
                }).then(async (data: any) => ({ [locale]: await data.Body.text() }))
            );
        });

        return Promise.all(promises);
    };

    const fetchAllNamespaces = () => {
        const promises: Array<Promise<Array<TranslationFile>>> = [];

        namespaces.forEach((namespace) => {
            promises.push(fetchNamespace(namespace.value.toLowerCase()));
        });

        return Promise.all(promises);
    };

    const getTranslationByLocale = (files: Array<TranslationFile>, locale: string) => {
        let translations = {};
        files
            .filter((file) => file[locale])
            .forEach((file) => {
                translations = { ...translations, ...JSON.parse(file[locale]) };
            });
        return translations;
    };

    const setTranslations = (files: Array<TranslationFile>) => {
        setEnglishTranslations(getTranslationByLocale(files, 'en'));
        setFrenchTranslations(getTranslationByLocale(files, 'fr'));
        setChineseTranslations(getTranslationByLocale(files, 'zh'));
    };

    useEffect(() => {
        const fetchTranslations = async () => {
            setIsLoading(true);
            if (selected === 'All') {
                const files = await fetchAllNamespaces();
                const mergedFiles = flatten(files);
                setTranslations(mergedFiles);
            } else {
                const files = await fetchNamespace(selected.toLowerCase());
                setTranslations(files);
            }
            setIsLoading(false);
        };
        fetchTranslations();
    }, [selected]);

    const mergeTranslations = (
        translations: { [key: string]: Translations },
        referenceLocale: string
    ) => {
        const result: any = {};
        const locales = Object.keys(translations);
        const keys = Object.keys(translations[referenceLocale]);
        keys.forEach((key: any) => {
            result[key] = {};
            locales.forEach((locale: any) => {
                result[key][locale] = translations[locale][key];
            });
        });
        return result;
    };

    const skeletons = Array.from({ length: 3 }, (_v, k) => k + 1);

    const translations = mergeTranslations(
        { en: englishTranslations, fr: frenchTranslations, zh: chineseTranslations },
        'en'
    );

    const filterSearch = (translationKey: string) => !search || translationKey.includes(search);
    const filterTranslated = (translationKey: string, item: any) =>
        filter !== 'TRANSLATED'
            ? translationKey.includes(search)
            : item.en !== '' && item.fr !== '' && item.zh !== '';
    const filterUntranslated = (translationKey: string, item: any) =>
        filter !== 'UNTRANSLATED'
            ? translationKey.includes(search)
            : item.en === '' || item.fr === '' || item.zh === '';

    const renderTranslations = () =>
        Object.entries(translations)
            .filter(([translationKey]) => filterSearch(translationKey))
            .filter(([translationKey, value]) => filterTranslated(translationKey, value))
            .filter(([translationKey, value]) => filterUntranslated(translationKey, value))
            .map(([translationKey, value], i) => (
                <div key={i}>
                    <TranslationForm
                        newForm={false}
                        selected={selected}
                        translationKey={translationKey}
                        value={value}
                    />
                </div>
            ));

    const renderSkeletons = () =>
        skeletons.map((v) => (
            <div key={v}>
                <TranslationForm isLoading={isLoading} newForm={false} />
            </div>
        ));

    return <>{isLoading ? renderSkeletons() : renderTranslations()}</>;
};

export default Translation;
