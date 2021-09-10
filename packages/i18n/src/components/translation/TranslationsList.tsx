import { isObjectValuesEmpty, locales, namespaces, useWindowSize } from '@applyfuture/utils';
import Storage from '@aws-amplify/storage';
import { Filter } from '@pages/index';
import { flatten } from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

import TranslationRow from './TranslationRow';
import TranslationRowSkeleton from './TranslationRowSkeleton';

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

type Translation = {
    key: string;
    values: Values;
};

type Translations = {
    [locale: string]: Translation;
};

const Translation: FC<Props> = (props) => {
    const { filter, search, selected } = props;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [translations, setTranslations] = useState<Array<Translation>>([]);
    const { width: windowWidth, height: windowHeight } = useWindowSize();
    const headerHeight = 385;
    const smBreakpoint = 640;
    const listHeight = windowHeight ? windowHeight - headerHeight : 700;
    const itemSize = windowWidth && windowWidth < smBreakpoint ? 450 : 350;

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
            promises.push(fetchNamespace(namespace));
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

        return result as { [locale: string]: Values };
    };

    const formatTranslationsFromFiles = (files: TranslationFile[]) => {
        const mergedFiles = mergeTranslations(
            {
                en: getTranslationByLocale(files, 'en'),
                fr: getTranslationByLocale(files, 'fr'),
                zh: getTranslationByLocale(files, 'zh')
            },
            'en'
        );
        return Object.entries(mergedFiles).map((translation) => ({
            key: translation[0],
            values: translation[1]
        }));
    };

    useEffect(() => {
        const fetchTranslations = async () => {
            setIsLoading(true);
            if (selected === 'all') {
                const files = await fetchAllNamespaces();
                const flattenFiles = flatten(files);
                const translations = formatTranslationsFromFiles(flattenFiles);
                setTranslations(translations);
            } else {
                const files = await fetchNamespace(selected);
                const translations = formatTranslationsFromFiles(files);
                setTranslations(translations);
            }
            setIsLoading(false);
        };
        fetchTranslations();
    }, [selected]);

    const searchValue = (value: Translation) =>
        Boolean(
            value.key.includes(search) ||
                value?.values?.en?.includes(search) ||
                value?.values?.fr?.includes(search) ||
                value?.values?.zh?.includes(search)
        );

    const filterValue = (accumulator: Translation[], value: Translation) => {
        if (filter === 'UNTRANSLATED' && isObjectValuesEmpty(value.values)) {
            accumulator.push(value);
        }
        if (filter === 'TRANSLATED' && !isObjectValuesEmpty(value.values)) {
            accumulator.push(value);
        }
        if (!filter) {
            accumulator.push(value);
        }
    };

    const filteredTranslations = translations.reduce((accumulator, value: Translation) => {
        if (search) {
            searchValue(value) && filterValue(accumulator, value);
        } else {
            filterValue(accumulator, value);
        }

        return accumulator;
    }, [] as Translation[]);

    return (
        <>
            {isLoading ? (
                <TranslationRowSkeleton isLoading={isLoading} />
            ) : (
                <div className="py-12">
                    <List
                        height={listHeight}
                        itemCount={
                            filter || search ? filteredTranslations.length : translations.length
                        }
                        itemSize={itemSize}
                        width={'100%'}>
                        {(props) => (
                            <TranslationRow
                                selected={selected}
                                translations={
                                    filter || search ? filteredTranslations : translations
                                }
                                {...props}
                            />
                        )}
                    </List>
                </div>
            )}
        </>
    );
};

export default Translation;
