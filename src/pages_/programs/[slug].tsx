import '@utils/services/amplify';

import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import Button from '@components/core/button/Button';
import Container from '@components/core/container/Container';
import Cover from '@components/core/cover/Cover';
import IconPanel from '@components/core/icon-panel/IconPanel';
import SubHeader from '@components/core/sub-header/SubHeader';
import Tooltip from '@components/core/tooltip/Tooltip';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import Indicators from '@components/programs/indicators/Indicators';
import { faBook, faCalendar, faHeart, faMoneyBill } from '@fortawesome/pro-light-svg-icons';
import {
    faMapMarkerAlt,
    faPortrait,
    faUniversity as faUniversitySolid
} from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetProgramBySlugQuery, ListProgramsQuery } from '@graphql/API';
import { getProgramBySlug, listPrograms } from '@graphql/queries';
import { cambridgeAdvancedResults } from '@utils/forms/cambridgeAdvancedResults';
import { cambridgeFirstResults } from '@utils/forms/cambridgeFirstResults';
import { countries } from '@utils/forms/countries';
import { educationLevels } from '@utils/forms/educationLevels';
import { currency } from '@utils/helpers/currency';
import { date } from '@utils/helpers/date';
import { markdown } from '@utils/helpers/markdown';
import { API } from 'aws-amplify';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';
import { SupportedLocale } from 'src/types/SupportedLocale';

type Props = {
    program: any;
};

const ProgramPage: FC<Props> = (props) => {
    console.log(props);
    const program = props.program?.data?.getProgramBySlug?.items?.[0];
    const router = useRouter();
    const locale = router.locale as SupportedLocale;

    const { t } = useTranslation();
    const country = countries.find((c) => c.value === program?.country)?.label || '';
    const highestEducationLevel = educationLevels.find(
        (educationLevel) => educationLevel.value === program?.highestEducationLevel
    )?.label;
    const testCambridgeFirst = cambridgeFirstResults.find(
        (result) => result.value === program?.testCambridgeFirst
    )?.label;
    const testCambridgeAdvanced = cambridgeAdvancedResults.find(
        (result) => result.value === program?.testCambridgeAdvanced
    )?.label;
    const requirements = {
        'age-and-work-experiences':
            program?.minimumAge > 0 ||
            program?.minimumWorkExperience > 0 ||
            program?.otherRequirements,
        'english-tests':
            program?.testToefl > 0 ||
            program?.testIelts > 0 ||
            program?.testToeic > 0 ||
            program?.testCambridgeFirst > 0 ||
            program?.testCambridgeAdvanced > 0,
        'french-tests': program?.testTcftef > 0 || program?.testDelfdalf > 0,
        'grade-point-average': program?.gradePointAverage > 0,
        'logic-and-reasoning-tests':
            program?.testGmat > 0 || program?.testGre > 0 || program?.testTagemage > 0
    };

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <DashboardLayout description="" title="">
            <Cover
                alt={''}
                src={`${process.env.ASSETS_CDN_URL}/${program?.school?.coverPhoto}` || ''}
            />
            <SubHeader
                actions={
                    <>
                        <Button startIcon={faHeart} type="button" variant="secondary">
                            {t('programs:favorite')}
                        </Button>
                        <Button type="button" variant="primary">
                            {t('programs:apply')}
                        </Button>
                    </>
                }
                src={`${process.env.ASSETS_CDN_URL}/${program?.school?.logo}` || ''}
                subtitle={
                    <>
                        <Link href={`/schools/${program?.school?.slug}`}>
                            <div className="flex items-baseline hover:text-indigo-500 space-x-1">
                                <FontAwesomeIcon icon={faUniversitySolid} />
                                <div>{program?.school?.name}</div>
                            </div>
                        </Link>
                        <div className="flex items-baseline space-x-1">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <div>
                                {program?.city}, {t(`common:${country}`)}
                            </div>
                        </div>
                        <div className="flex items-baseline space-x-1">
                            <FontAwesomeIcon icon={faPortrait} />
                            <div>
                                {t('programs:program-id')}: {program?.id?.slice(0, 6).toUpperCase()}
                            </div>
                        </div>
                    </>
                }
                title={program.name}
            />
            <Indicators program={program} />
            <div className="space-y-6">
                <Container title={t('programs:program-description')}>
                    <div
                        className="markdown"
                        dangerouslySetInnerHTML={{
                            __html: markdown({ value: program?.description })
                        }}
                    />
                </Container>

                <Container title={t('programs:admission-requirements')}>
                    <div className="mb-8">
                        <h3 className="mb-4 font-sans text-base font-medium">
                            {t('programs:education-level-requirements')}
                        </h3>
                        <div className="inline-flex border border-gray-200 rounded-md">
                            <IconPanel
                                icon={faBook}
                                label={t('programs:minimum-level-of-education-required')}>
                                {t(`programs:${highestEducationLevel}`)}
                            </IconPanel>
                        </div>
                    </div>

                    {requirements['english-tests'] && (
                        <div className="mb-8">
                            <h3 className="mb-4 font-sans text-base font-medium">
                                {t('programs:english-test')}
                            </h3>
                            <div className="mb-4 text-justify font-sans text-sm leading-5">
                                {t('programs:english-test-info')}
                            </div>
                            <div className="inline-flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                                {program?.testToefl > 0 && (
                                    <div className="inline-flex border border-gray-200 rounded-md">
                                        <IconPanel icon={faBook} label={t('programs:toefl')}>
                                            <Tooltip content={<div />}>
                                                <div className="align-center flex items-center space-x-2">
                                                    <div>{program?.testToefl}</div>
                                                </div>
                                            </Tooltip>
                                        </IconPanel>
                                    </div>
                                )}
                                {program?.testIelts > 0 && (
                                    <div className="inline-flex border border-gray-200 rounded-md">
                                        <IconPanel icon={faBook} label={t('programs:ielts')}>
                                            {program?.testIelts}
                                        </IconPanel>
                                    </div>
                                )}
                                {program?.testToeic > 0 && (
                                    <div className="inline-flex border border-gray-200 rounded-md">
                                        <IconPanel icon={faBook} label={t('programs:toeic')}>
                                            {program?.testToeic}
                                        </IconPanel>
                                    </div>
                                )}
                                {program?.testCambridgeFirst > 0 && (
                                    <div className="inline-flex border border-gray-200 rounded-md">
                                        <IconPanel
                                            icon={faBook}
                                            label={t('programs:cambridge-first')}>
                                            {testCambridgeFirst}
                                        </IconPanel>
                                    </div>
                                )}
                                {program?.testCambridgeAdvanced > 0 && (
                                    <div className="inline-flex border border-gray-200 rounded-md">
                                        <IconPanel
                                            icon={faBook}
                                            label={t('programs:cambridge-advanced')}>
                                            {testCambridgeAdvanced}
                                        </IconPanel>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {requirements['french-tests'] && (
                        <div className="mb-8">
                            <h3 className="mb-4 font-sans text-base font-medium">
                                {t('programs:french-test')}
                            </h3>
                            <div className="mb-4 text-justify font-sans text-sm leading-5">
                                {t('programs:french-test-info')}
                            </div>
                            <div className="inline-flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                                {program?.testTcftef > 0 && (
                                    <div className="inline-flex border border-gray-200 rounded-md">
                                        <IconPanel icon={faBook} label={t('programs:tcf-tef')}>
                                            {program?.testTcftef}
                                        </IconPanel>
                                    </div>
                                )}

                                {program?.testDelfdalf > 0 && (
                                    <div className="inline-flex border border-gray-200 rounded-md">
                                        <IconPanel icon={faBook} label={t('programs:delf-dalf')}>
                                            {program?.testDelfdalf}
                                        </IconPanel>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {requirements['logic-and-reasoning-tests'] && (
                        <div className="mb-8">
                            <h3 className="mb-4 font-sans text-base font-medium">
                                {t('programs:logic-and-reasoning-test')}
                            </h3>

                            <div className="inline-flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                                {program?.testGmat > 0 && (
                                    <div className="inline-flex border border-gray-200 rounded-md">
                                        <IconPanel icon={faBook} label={t('programs:gmat')}>
                                            {program?.testGmat}
                                        </IconPanel>
                                    </div>
                                )}

                                {program?.testGre > 0 && (
                                    <div className="inline-flex border border-gray-200 rounded-md">
                                        <IconPanel icon={faBook} label={t('programs:gre')}>
                                            {program?.testGre}
                                        </IconPanel>
                                    </div>
                                )}

                                {program?.testTagemage > 0 && (
                                    <div className="inline-flex border border-gray-200 rounded-md">
                                        <IconPanel icon={faBook} label={t('programs:tage-mage')}>
                                            {program?.testTagemage}
                                        </IconPanel>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {requirements['grade-point-average'] && (
                        <div className="mb-8">
                            <h3 className="mb-4 font-sans text-base font-medium">
                                {t('programs:grade-point-average')}
                            </h3>
                            <div className="inline-flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                                <div className="inline-flex border border-gray-200 rounded-md">
                                    <IconPanel icon={faBook} label={t('programs:gpa')}>
                                        {program?.gradePointAverage}
                                    </IconPanel>
                                </div>
                            </div>
                        </div>
                    )}

                    {requirements['age-and-work-experiences'] && (
                        <div>
                            <h3 className="mb-4 font-sans text-base font-medium">
                                {t('programs:other-requirements')}
                            </h3>
                            {(program?.minimumAge > 0 || program?.minimumWorkExperience > 0) && (
                                <div className="inline-flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                                    {program?.minimumAge > 0 && (
                                        <div className="inline-flex border border-gray-200 rounded-md">
                                            <IconPanel
                                                icon={faBook}
                                                label={t('programs:minimum-age')}>
                                                {program?.minimumAge}
                                            </IconPanel>
                                        </div>
                                    )}
                                    {program?.minimumWorkExperience > 0 && (
                                        <div className="inline-flex border border-gray-200 rounded-md">
                                            <IconPanel
                                                icon={faBook}
                                                label={t('programs:minimum-work-experience')}>
                                                {program?.minimumWorkExperience}
                                            </IconPanel>
                                        </div>
                                    )}
                                </div>
                            )}
                            {program?.otherRequirements && (
                                <div
                                    className="markdown"
                                    dangerouslySetInnerHTML={{
                                        __html: markdown({ value: program?.otherRequirements })
                                    }}
                                />
                            )}
                        </div>
                    )}
                </Container>

                <Container title={t('programs:fees-and-financing')}>
                    <h3 className="mb-4 font-sans text-base font-medium">
                        {t('programs:application-fee')}
                    </h3>
                    <div className="inline-flex mb-8 border border-gray-200 rounded-md">
                        <IconPanel icon={faMoneyBill} label={t('programs:application-fee')}>
                            {program?.applicationFee > 0
                                ? currency({
                                      currency: program?.applicationFeeCurrency,
                                      locale: locale,
                                      value: program?.applicationFee
                                  })
                                : t('programs:free-of-charge')}
                        </IconPanel>
                    </div>
                    <div
                        className="markdown"
                        dangerouslySetInnerHTML={{
                            __html: markdown({ value: program?.feesAndFinancing })
                        }}
                    />
                </Container>

                <Container title={t('programs:next-intake', { count: program?.intakes?.length })}>
                    {program?.intakes?.length > 0 && (
                        <div className="inline-flex flex-col mb-4 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                            {program?.intakes.split(',').map((intake: any) => (
                                <div
                                    key={intake}
                                    className="inline-flex border border-gray-200 rounded-md">
                                    <IconPanel icon={faCalendar} label={t('programs:intake')}>
                                        {date({ locale: locale, value: intake })}
                                    </IconPanel>
                                </div>
                            ))}
                        </div>
                    )}
                    <div
                        className="markdown"
                        dangerouslySetInnerHTML={{
                            __html: markdown({ value: program?.intakeInformation })
                        }}
                    />
                </Container>
            </div>
        </DashboardLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const data = (await API.graphql({
            query: listPrograms
        })) as ListProgramsQuery;

        const paths = data?.listPrograms?.items?.map((program) => ({
            params: { slug: program?.slug || '' }
        }));

        return {
            fallback: true,
            paths: paths || []
        };
    } catch (error) {
        console.log(error);
        return {
            fallback: true,
            paths: []
        };
    }
};

type Params = {
    slug: string;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { slug } = params as Params;

        const data = (await API.graphql({
            authMode: GRAPHQL_AUTH_MODE.API_KEY,
            query: getProgramBySlug,
            variables: { slug }
        })) as GetProgramBySlugQuery;

        return {
            props: {
                program: data
            },
            revalidate: 1
        };
    } catch (error) {
        console.log(error);
        return {
            props: {},
            revalidate: 1
        };
    }
};

export default ProgramPage;
