import { School } from '@applyfuture/models';
import { IconPanel } from '@applyfuture/ui';
import { faBooks, faGlobe, faGraduationCap, faUniversity } from '@fortawesome/pro-light-svg-icons';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    school: School;
};

const Indicators: FC<Props> = (props) => {
    const { school } = props;

    const { t } = useTranslation();

    console.log(
        '%cschool :',
        'background: #444; color: #bada55; padding: 2px; border-radius:2px',
        school
    );

    return (
        <div className="mb-6 bg-white rounded-md shadow">
            <div className="grid grid-cols-1 bg-white rounded-lg lg:grid-cols-6">
                {/* <div>
                    <IconPanel icon={faBooks} label={t('schools:bachelors')}>
                        {
                            school?.programs
                                ?.filter((program) => program.published)
                                .filter((program) => program.degree === 'BACHELOR').length
                        }
                    </IconPanel>
                </div>
                <div className="border-t border-gray-200 md:border-0 md:border-l">
                    <IconPanel icon={faBooks} label={t('schools:masters')}>
                        {
                            school?.programs
                                ?.filter((program) => program.published)
                                .filter((program) => program.degree === 'MASTER').length
                        }
                    </IconPanel>
                </div> */}
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
                        {t(school?.institutionType)}
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
