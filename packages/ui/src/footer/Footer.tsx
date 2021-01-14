import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export const Footer: FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="font-sans bg-white">
            <div className="mx-auto px-4 py-12 max-w-screen-xl overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <Link href="/about">
                            <div className="text-gray-500 hover:text-gray-900 text-base leading-6 cursor-pointer">
                                {t('landing:footer-about-us')}
                            </div>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/privacy-policy">
                            <div className="text-gray-500 hover:text-gray-900 text-base leading-6 cursor-pointer">
                                {t('landing:privacy-policy')}
                            </div>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/terms-and-conditions">
                            <div className="text-gray-500 hover:text-gray-900 text-base leading-6 cursor-pointer">
                                {t('landing:terms-and-conditions')}
                            </div>
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/terms-of-use">
                            <div className="text-gray-500 hover:text-gray-900 text-base leading-6 cursor-pointer">
                                {t('landing:terms-of-use')}
                            </div>
                        </Link>
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
