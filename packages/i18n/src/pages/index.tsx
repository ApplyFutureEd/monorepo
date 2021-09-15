import { withPrivateAccess } from '@applyfuture/utils';
import { locales, namespaces } from '@applyfuture/utils';
import Storage from '@aws-amplify/storage';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import TranslationForm from '@components/translation/TranslationForm';
import TranslationsList from '@components/translation/TranslationsList';
import { flatten } from 'lodash';
import React, { FC, useEffect, useState } from 'react';

export type Filter = 'TRANSLATED' | 'UNTRANSLATED' | null;

type TranslationFile = {
    [locale: string]: string;
};
type Values = {
    en: string;
    fr: string;
    zh: string;
};

export type Translation = {
    key: string;
    values: Values;
};

type Translations = {
    [locale: string]: Translation;
};

const LandingPage: FC = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<Filter>(null);
    const [selected, setSelected] = useState('all');
    const [displayForm, setDisplayForm] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [translations, setTranslations] = useState<Array<Translation>>([]);

    const handleSearch = (query: string) => {
        setSearch(query.toLowerCase().replace(/ /g, '-'));
    };

    const handleFilter = (filter: Filter) => {
        setFilter(filter);
    };

    const handleSelected = (tab: string) => {
        setSelected(tab);
    };

    const handleToggleDisplayForm = () => {
        setDisplayForm(!displayForm);
    };

    const fetchNamespace = (namespace: string) => {
        const promises: Array<Promise<TranslationFile>> = [];

        locales.forEach((locale) => {
            promises.push(
                Storage.get(`i18n/${locale}/${namespace}.json`, {
                    cacheControl: 'no-cache',
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

    const fetchAndSetAllNamespaces = async () => {
        const files = await fetchAllNamespaces();
        const flattenFiles = flatten(files);
        const translations = formatTranslationsFromFiles(flattenFiles);
        setTranslations(translations);
    };

    const fetchAndSetNamespace = async (namespace: string) => {
        const files = await fetchNamespace(namespace);
        const translations = formatTranslationsFromFiles(files);
        setTranslations(translations);
    };

    useEffect(() => {
        const fetchTranslations = async () => {
            setIsLoading(true);
            if (selected === 'all') {
                fetchAndSetAllNamespaces();
            } else {
                fetchAndSetNamespace(selected);
            }
            setIsLoading(false);
        };
        fetchTranslations();
    }, [selected]);

    return (
        <DashboardLayout
            displayForm={displayForm}
            filter={filter}
            handleFilter={handleFilter}
            handleSearch={handleSearch}
            handleSelected={handleSelected}
            handleToggleDisplayForm={handleToggleDisplayForm}
            selected={selected}
            title="Dashboard">
            {displayForm && (
                <TranslationForm
                    newForm
                    fetchAndSetAllNamespaces={fetchAndSetAllNamespaces}
                    fetchAndSetNamespace={fetchAndSetNamespace}
                    handleToggleDisplayForm={handleToggleDisplayForm}
                />
            )}
            <TranslationsList
                filter={filter}
                isLoading={isLoading}
                search={search}
                selected={selected}
                translations={translations}
            />
        </DashboardLayout>
    );
};

export default withPrivateAccess(LandingPage, {
    groups: ['admin', 'i18n'],
    redirection: '/sign-in'
});
