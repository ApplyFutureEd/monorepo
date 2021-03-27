import { GetProgramBySchoolQuery, GetSchoolBySlugQuery } from '@applyfuture/graphql';
import { IconPanel } from '@applyfuture/ui';
import { getInstitutionType } from '@applyfuture/utils';
import { faBooks, faGlobe, faGraduationCap, faUniversity } from '@fortawesome/pro-light-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    school: NonNullable<NonNullable<GetSchoolBySlugQuery['getSchoolBySlug']>['items']>[0];
    programs: NonNullable<NonNullable<GetProgramBySchoolQuery['getProgramBySchool']>['items']>;
};

const Indicators: FC<Props> = (props) => {
    const { programs, school } = props;

    const { t } = useTranslation();

    return (
        <div className="bg-white rounded-md shadow">
            <div className="grid grid-cols-1 bg-white rounded-lg lg:grid-cols-6">
                <div>
                    <IconPanel icon={faBooks} label={t('schools:bachelors')}>
                        {
                            programs
                                ?.filter((program) => program?.published)
                                .filter((program) => program?.degree === 'BACHELOR').length
                        }
                    </IconPanel>
                </div>
                <div className="border-t border-gray-200 md:border-0 md:border-l">
                    <IconPanel icon={faBooks} label={t('schools:masters')}>
                        {
                            programs
                                ?.filter((program) => program?.published)
                                .filter((program) => program?.degree === 'MASTER').length
                        }
                    </IconPanel>
                </div>
                <div className="border-t border-gray-200 md:border-0 md:border-l">
                    <IconPanel icon={faGraduationCap} label={t('schools:total-students')}>
                        {school?.totalStudents}
                    </IconPanel>
                </div>
                <div className="border-t border-gray-200 md:border-0 md:border-l">
                    <IconPanel icon={faGlobe} label={t('schools:international-students')}>
                        {school?.internationalStudents}
                    </IconPanel>
                </div>
                <div className="border-t border-gray-200 md:border-0 md:border-l">
                    <IconPanel icon={faUniversity} label={t('schools:institution-type')}>
                        {t(`schools:${getInstitutionType(school?.institutionType)}`)}
                    </IconPanel>
                </div>
                <div className="border-t border-gray-200 md:border-0 md:border-l">
                    <IconPanel icon={faUniversity} label={t('schools:creation-year')}>
                        {school?.creationYear}
                    </IconPanel>
                </div>
            </div>
        </div>
    );
};

export default Indicators;
