import { Button } from '@applyfuture/ui';
import { faBell } from '@fortawesome/pro-solid-svg-icons';
import { useTranslation } from 'next-translate';
import React, { FC } from 'react';

const NoResult: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="sm:px-6 sm:py-5">
            <div className="bg-white">
                <div className="mx-auto px-4 py-12 max-w-screen-xl text-center sm:px-6 lg:px-32 lg:py-16">
                    <h2 className="text-gray-900 text-3xl font-extrabold tracking-tight leading-9 sm:text-4xl sm:leading-10">
                        {t('programs:no-results-heading')}
                    </h2>
                    <p className="mt-8">
                        {t('programs:no-results-paragraph-1')}
                        <br />
                        {t('programs:no-results-paragraph-2')}
                    </p>
                    <div className="flex justify-center mt-8">
                        <Button
                            startIcon={faBell}
                            type="button"
                            variant="primary"
                            // onClick={() => createSearchAlert(values.query)}
                        >
                            {t('programs:no-results-cta')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoResult;
