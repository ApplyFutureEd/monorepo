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
    namespace: string;
};
export type Values = {
    en: string;
    fr: string;
    zh: string;
};

export type Translation = {
    key: string;
    namespace: string;
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
                }).then(async (data: any) => ({ [locale]: await data.Body.text(), namespace }))
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

    const getTranslationByLocale = (files: TranslationFile[], locale: string) => {
        let translations = {};
        files
            .filter((file) => file[locale])
            .forEach((file) => {
                translations = {
                    ...translations,
                    [file.namespace]: { ...JSON.parse(file[locale]) }
                };
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
        // { namespace: { en: { clé: valeur}, fr: { clé: valeur}, zh: { clé: valeur} } } }

        /* return Object.entries(mergedFiles).map((translation) => ({
            key: translation[0],
            namespace: 'toto',
            values: translation[1]
        })); */
        const translations = [];
        Object.entries(mergedFiles).forEach((namespace) => {
            const locales = Object.entries(mergedFiles[namespace]);
        });
        return translations;
    };

    const fetchAndSetAllNamespaces = async () => {
        setIsLoading(true);
        const files = await fetchAllNamespaces();
        const flattenFiles = flatten(files);
        const translations = formatTranslationsFromFiles(flattenFiles);
        setTranslations(translations);
        setIsLoading(false);
    };

    const fetchAndSetNamespace = async (namespace: string) => {
        setIsLoading(true);
        const files = await fetchNamespace(namespace);
        const translations = formatTranslationsFromFiles(files);
        setTranslations(translations);
        setIsLoading(false);
    };

    useEffect(() => {
        const fetchTranslations = async () => {
            if (selected === 'all') {
                fetchAndSetAllNamespaces();
            } else {
                fetchAndSetNamespace(selected);
            }
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
            isLoading={isLoading}
            selected={selected}
            title="Dashboard"
            translations={translations}>
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
