import Storage from '@aws-amplify/storage';
import { Filter } from '@pages/index';
import React, { FC, useEffect, useState } from 'react';

import TranslationForm from './TranslationForm';

type Props = {
    filter: Filter;
    search: string;
    selected: string;
};

const Translation: FC<Props> = (props) => {
    const { filter, search, selected } = props;
    const [en, setEn] = useState({ '': '' });
    const [fr, setFr] = useState({ '': '' });
    const [zh, setZh] = useState({ '': '' });
    const [file, setFile] = useState({ '': '' });

    useEffect(() => {
        const fileStorage = async () => {
            // =============
            // Account files
            // =============
            const enAccount = (await Storage.get('i18n/en/account.json', {
                download: true
            })) as any;
            const frAccount = (await Storage.get('i18n/fr/account.json', {
                download: true
            })) as any;
            const zhAccount = (await Storage.get('i18n/zh/account.json', {
                download: true
            })) as any;
            // =================
            // Application files
            // =================
            const enApplication = (await Storage.get('i18n/en/application.json', {
                download: true
            })) as any;
            const frApplication = (await Storage.get('i18n/fr/application.json', {
                download: true
            })) as any;
            const zhApplication = (await Storage.get('i18n/zh/application.json', {
                download: true
            })) as any;
            // ==========
            // Auth files
            // ==========
            const enAuth = (await Storage.get('i18n/en/auth.json', {
                download: true
            })) as any;
            const frAuth = (await Storage.get('i18n/fr/auth.json', {
                download: true
            })) as any;
            const zhAuth = (await Storage.get('i18n/zh/auth.json', {
                download: true
            })) as any;
            // ============
            // Common files
            // ============
            const enCommon = (await Storage.get('i18n/en/common.json', {
                download: true
            })) as any;
            const frCommon = (await Storage.get('i18n/fr/common.json', {
                download: true
            })) as any;
            const zhCommon = (await Storage.get('i18n/zh/common.json', {
                download: true
            })) as any;
            // ============
            // Help files
            // ============
            const enHelp = (await Storage.get('i18n/en/help.json', {
                download: true
            })) as any;
            const frHelp = (await Storage.get('i18n/fr/help.json', {
                download: true
            })) as any;
            const zhHelp = (await Storage.get('i18n/zh/help.json', {
                download: true
            })) as any;
            // =============
            // Landing files
            // =============
            const enLanding = (await Storage.get('i18n/en/landing.json', {
                download: true
            })) as any;
            const frLanding = (await Storage.get('i18n/fr/landing.json', {
                download: true
            })) as any;
            const zhLanding = (await Storage.get('i18n/zh/landing.json', {
                download: true
            })) as any;
            // ============
            // Navigation files
            // ============
            const enNavigation = (await Storage.get('i18n/en/navigation.json', {
                download: true
            })) as any;
            const frNavigation = (await Storage.get('i18n/fr/navigation.json', {
                download: true
            })) as any;
            const zhNavigation = (await Storage.get('i18n/zh/navigation.json', {
                download: true
            })) as any;
            // ============
            // Profile files
            // ============
            const enProfile = (await Storage.get('i18n/en/profile.json', {
                download: true
            })) as any;
            const frProfile = (await Storage.get('i18n/fr/profile.json', {
                download: true
            })) as any;
            const zhProfile = (await Storage.get('i18n/zh/profile.json', {
                download: true
            })) as any;
            // ============
            // Programs files
            // ============
            const enPrograms = (await Storage.get('i18n/en/programs.json', {
                download: true
            })) as any;
            const frPrograms = (await Storage.get('i18n/fr/programs.json', {
                download: true
            })) as any;
            const zhPrograms = (await Storage.get('i18n/zh/programs.json', {
                download: true
            })) as any;
            // ============
            // Recruiters files
            // ============
            const enRecruiters = (await Storage.get('i18n/en/recruiter-form.json', {
                download: true
            })) as any;
            const frRecruiters = (await Storage.get('i18n/fr/recruiter-form.json', {
                download: true
            })) as any;
            const zhRecruiters = (await Storage.get('i18n/zh/recruiter-form.json', {
                download: true
            })) as any;
            // ============
            // Schools files
            // ============
            const enSchools = (await Storage.get('i18n/en/schools.json', {
                download: true
            })) as any;
            const frSchools = (await Storage.get('i18n/fr/schools.json', {
                download: true
            })) as any;
            const zhSchools = (await Storage.get('i18n/zh/schools.json', {
                download: true
            })) as any;
            // ===========================
            // Get EN file by tab selected
            // ===========================
            const getEnFile = (selected: string) => {
                if (selected === 'All') {
                    return enAccount;
                } else if (selected === 'Account') {
                    return enAccount;
                } else if (selected === 'Application') {
                    return enApplication;
                } else if (selected === 'Auth') {
                    return enAuth;
                } else if (selected === 'Common') {
                    return enCommon;
                } else if (selected === 'Help') {
                    return enHelp;
                } else if (selected === 'Landing') {
                    return enLanding;
                } else if (selected === 'Navigation') {
                    return enNavigation;
                } else if (selected === 'Profile') {
                    return enProfile;
                } else if (selected === 'Programs') {
                    return enPrograms;
                } else if (selected === 'Recruiters') {
                    return enRecruiters;
                } else if (selected === 'Schools') {
                    return enSchools;
                } else {
                    return selected;
                }
            };
            // ===========================
            // Get FR file by tab selected
            // ===========================
            const getFrFile = (selected: string) => {
                if (selected === 'All') {
                    return enAccount;
                } else if (selected === 'Account') {
                    return frAccount;
                } else if (selected === 'Application') {
                    return frApplication;
                } else if (selected === 'Auth') {
                    return frAuth;
                } else if (selected === 'Common') {
                    return frCommon;
                } else if (selected === 'Help') {
                    return frHelp;
                } else if (selected === 'Landing') {
                    return frLanding;
                } else if (selected === 'Navigation') {
                    return frNavigation;
                } else if (selected === 'Profile') {
                    return frProfile;
                } else if (selected === 'Programs') {
                    return frPrograms;
                } else if (selected === 'Recruiters') {
                    return frRecruiters;
                } else if (selected === 'Schools') {
                    return frSchools;
                } else {
                    return selected;
                }
            };
            // ===========================
            // Get ZH file by tab selected
            // ===========================
            const getZhFile = (selected: string) => {
                if (selected === 'All') {
                    return enAccount;
                } else if (selected === 'Account') {
                    return zhAccount;
                } else if (selected === 'Application') {
                    return zhApplication;
                } else if (selected === 'Auth') {
                    return zhAuth;
                } else if (selected === 'Common') {
                    return zhCommon;
                } else if (selected === 'Help') {
                    return zhHelp;
                } else if (selected === 'Landing') {
                    return zhLanding;
                } else if (selected === 'Navigation') {
                    return zhNavigation;
                } else if (selected === 'Profile') {
                    return zhProfile;
                } else if (selected === 'Programs') {
                    return zhPrograms;
                } else if (selected === 'Recruiters') {
                    return zhRecruiters;
                } else if (selected === 'Schools') {
                    return zhSchools;
                } else {
                    return selected;
                }
            };
            // =====================================
            // convert above files into usable files
            // =====================================
            const getDataContent = (data: any) => {
                return data.Body.text();
            };
            // ==================================
            // store usable files into a variable
            // ==================================
            const enFile = await getDataContent(getEnFile(selected));
            const frFile = await getDataContent(getFrFile(selected));
            const zhFile = await getDataContent(getZhFile(selected));
            // =======================================
            // then store into the corresponding state
            // =======================================
            setEn(JSON.parse(enFile));
            setFr(JSON.parse(frFile));
            setZh(JSON.parse(zhFile));
            // ==========
            // merge file
            // ==========
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
            const data = await mergeFile({ en, fr, zh }, 'en');
            setFile(data);
        };

        fileStorage();
    }, [selected]);
    console.log(en);

    // ================
    // Filter functions
    // ================
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
