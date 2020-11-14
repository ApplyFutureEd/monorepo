import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Footer: FC = () => {
    const { t } = useTranslation(['auth', 'landing']);

    return (
        <footer className="font-sans bg-white">
            <div className="mx-auto px-4 py-12 max-w-screen-xl overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <a className="text-gray-500 hover:text-gray-900 text-base leading-6">
                            {t('landing:footer-about-us')}
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a className="text-gray-500 hover:text-gray-900 text-base leading-6">
                            {t('landing:privacy-policy')}
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a className="text-gray-500 hover:text-gray-900 text-base leading-6">
                            {t('landing:terms-and-conditions')}
                        </a>
                    </div>
                    <div className="px-5 py-2">
                        <a className="text-gray-500 hover:text-gray-900 text-base leading-6">
                            {t('landing:terms-of-use')}
                        </a>
                    </div>
                </nav>

                <div className="mt-8">
                    <p className="text-center text-gray-900 text-base leading-6">
                        &copy; 2020 ApplyFuture.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
