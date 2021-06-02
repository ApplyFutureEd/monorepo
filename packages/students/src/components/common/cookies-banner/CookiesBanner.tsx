import { Button } from '@applyfuture/ui';
import Cookies from 'js-cookie';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';

const CookieBanner: FC = () => {
    const { t } = useTranslation();
    const [hasConsented, setHasConsented] = useState(Cookies.get('cookie-consent'));

    useEffect(() => {
        if (Cookies.get('cookie-consent')) {
            return;
        }
    }, []);

    if (hasConsented === 'true' || hasConsented === 'false') {
        return null;
    }

    const handleAccept = () => {
        setHasConsented('true');
        Cookies.set('cookie-consent', 'true', {
            date: new Date().toISOString(),
            sameSite: 'strict'
        });
    };

    const handleRefuse = () => {
        setHasConsented('true');
        Cookies.set('cookie-consent', 'false', {
            date: new Date().toISOString(),
            sameSite: 'strict'
        });
    };

    return (
        <div className="fixed z-50 bottom-0 inset-x-0">
            <div className="bg-indigo-600">
                <div className="mx-auto px-3 py-3 max-w-screen-xl sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between sm:flex-row">
                        <div className="text-center text-white font-medium sm:text-left">
                            {t('landing:cookie-banner')}
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => handleAccept()}>
                                {t('landing:cookie-banner-agreement')}
                            </Button>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => handleRefuse()}>
                                NO
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;
