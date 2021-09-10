import { locales, namespaces, useWindowSize } from '@applyfuture/utils';
import Storage from '@aws-amplify/storage';
import { Filter } from '@pages/index';
import { flatten } from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import { CSSProperties } from 'react';
import { FixedSizeList as List } from 'react-window';

import TranslationForm from './TranslationForm';

type Props = {
    filter: Filter;
    search: string;
    selected: string;
};

type Values = {
    en: string;
    fr: string;
    zh: string;
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

    const translations = mergeTranslations(
        { en: englishTranslations, fr: frenchTranslations, zh: chineseTranslations },
        'en'
    );

    const translationsArray = Object.entries(translations);

    const newTranslationsArray = translationsArray.map((translation) => {
        return {
            key: translation[0],
            values: translation[1]
        };
    });

    const emptyObject = (obj: Values) => {
        return Object.entries(obj).some(([_k, value]) => value === '');
    };

    const filteredTranslationArray = newTranslationsArray.reduce((previousValue, currentValue) => {
        const searchResult = currentValue.key.includes(search)
            ? previousValue.push(currentValue)
            : previousValue;

        if (filter === 'UNTRANSLATED' && emptyObject(currentValue.values as Values)) {
            searchResult;
        } else if (filter === 'TRANSLATED' && !emptyObject(currentValue.values as Values)) {
            searchResult;
        } else {
            searchResult;
        }
        return previousValue;
    }, [] as typeof newTranslationsArray);

    type RowProps = {
        index: number;
        style: CSSProperties;
    };

    const Row: FC<RowProps> = (props) => {
        const { index, style } = props;
        return (
            <div style={style}>
                <TranslationForm
                    newForm={false}
                    selected={selected}
                    translationKey={
                        filter || search
                            ? filteredTranslationArray[index].key
                            : newTranslationsArray[index].key
                    }
                    value={
                        filter || search
                            ? filteredTranslationArray[index].values
                            : newTranslationsArray[index].values
                    }
                />
            </div>
        );
    };

    const renderSkeletons = () => (
        <div className="mb-16 mt-12">
            <TranslationForm isLoading={isLoading} newForm={false} />
        </div>
    );

    const { width, height } = useWindowSize();
    const listHeight = height ? height - 385 : 700;
    const itemSize = width && width < 640 ? 450 : 350;

    return (
        <>
            {isLoading ? (
                renderSkeletons()
            ) : (
                <div className="py-12">
                    <List
                        height={listHeight}
                        itemCount={
                            filter || search
                                ? filteredTranslationArray.length
                                : newTranslationsArray.length
                        }
                        itemSize={itemSize}
                        width={'100%'}>
                        {Row}
                    </List>
                </div>
            )}
        </>
    );
};

export default Translation;
