import { Button } from '@applyfuture/ui';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    isCompleted: boolean;
};

const NoApplicationPanel: FC<Props> = (props) => {
    const { isCompleted } = props;
    const { t } = useTranslation();

    const details = isCompleted
        ? t('application:start-first-application-now')
        : t('application:complete-your-profile');
    const href = isCompleted ? '/programs' : '/profile/general-information';
    const label = isCompleted
        ? t('application:start-first-application-now-cta')
        : t('application:complete-your-profile-cta');

    return (
        <div className="sm:px-6 sm:py-5">
            <div className="bg-white">
                <div className="mx-auto px-4 py-12 max-w-screen-xl text-center sm:px-6 lg:px-32 lg:py-16">
                    <h2 className="text-gray-900 text-3xl font-extrabold tracking-tight leading-9 sm:text-4xl sm:leading-10">
                        {t('application:no-application')}
                    </h2>
                    <p className="mt-8">{details}</p>
                    <div className="flex justify-center mt-8">
                        <Link href={href}>
                            <Button type="button" variant="primary">
                                {label}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoApplicationPanel;
