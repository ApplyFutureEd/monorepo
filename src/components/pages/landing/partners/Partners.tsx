import Button from '@components/core/button/Button';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Partners: FC = () => {
    const { t } = useTranslation(['landing']);

    return (
        <section className="font-sans bg-white">
            <div className="mx-auto px-4 py-12 max-w-screen-xl sm:px-6 lg:px-8 lg:py-16">
                <p className="text-center text-gray-600 text-base font-semibold tracking-wider leading-6 uppercase">
                    {t('partners-headline')}
                </p>
                <div className="grid gap-0.5 grid-cols-2 mt-6 md:grid-cols-3 lg:mt-8">
                    <div className="filter-grayscale hover:filter-none flex col-span-1 justify-center px-8 py-8 bg-gray-50">
                        <img
                            className="max-h-12"
                            src="/assets/images/landing/partners-logo-ducasse.svg"
                            alt="Alain Ducasse Cooking School logo"
                        />
                    </div>
                    <div className="filter-grayscale hover:filter-none flex col-span-1 justify-center px-8 py-8 bg-gray-50">
                        <img
                            className="max-h-12"
                            src="/assets/images/landing/partners-logo-larochelle.png"
                            alt="La Rochelle Business School logo"
                        />
                    </div>
                    <div className="filter-grayscale hover:filter-none flex col-span-1 justify-center px-8 py-8 bg-gray-50">
                        <img
                            className="max-h-12"
                            src="/assets/images/landing/partners-logo-glion.svg"
                            alt="Glion Institute of Higher Education logo"
                        />
                    </div>
                    <div className="filter-grayscale flex col-span-1 justify-center px-8 py-8 bg-gray-50">
                        <img
                            className="max-h-6"
                            src="/assets/images/landing/partners-logo-lesroches.svg"
                            alt="Les Roches International School of Hotel Management logo"
                        />
                    </div>
                    <div className="filter-grayscale hover:filter-none flex col-span-1 justify-center px-8 py-8 bg-gray-50">
                        <img
                            className="max-h-12"
                            src="/assets/images/landing/partners-logo-scbs.png"
                            alt="South Champagne Business School logo"
                        />
                    </div>
                    <div className="filter-grayscale hover:filter-none flex col-span-1 justify-center px-8 py-8 bg-gray-50">
                        <img
                            className="max-h-16"
                            src="/assets/images/landing/partners-logo-supdeluxe.png"
                            alt="Sup de Luxe logo"
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <Button variant="primary">{t('partners-cta')}</Button>
                </div>
            </div>
        </section>
    );
};

export default Partners;
