import { Button } from '@applyfuture/ui';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const Partners: FC = () => {
    const { t } = useTranslation();

    return (
        <section className="font-sans bg-white">
            <div className="mx-auto px-4 py-12 max-w-screen-xl sm:px-6 lg:px-8 lg:py-16">
                <p className="text-center text-gray-600 text-base font-semibold tracking-wider leading-6 uppercase">
                    {t('landing:partners-headline')}
                </p>
                <div className="gap-0.5 grid grid-cols-2 mt-6 md:grid-cols-3 lg:mt-8">
                    <div className="filter-grayscale hover:filter-none bg-gray-50 flex col-span-1 items-center justify-center px-8 py-8">
                        <Image
                            alt="Alain Ducasse Cooking School logo"
                            height="48"
                            src="/assets/images/landing/partners-logo-ducasse.svg"
                            width="191"
                        />
                    </div>
                    <div className="filter-grayscale hover:filter-none bg-gray-50 flex col-span-1 items-center justify-center px-8 py-8">
                        <Image
                            alt="La Rochelle Business School logo"
                            height="48"
                            src="/assets/images/landing/partners-logo-larochelle.png"
                            width="190"
                        />
                    </div>
                    <div className="filter-grayscale hover:filter-none bg-gray-50 flex col-span-1 items-center justify-center px-8 py-8">
                        <Image
                            alt="Glion Institute of Higher Education logo"
                            height="48"
                            src="/assets/images/landing/partners-logo-glion.svg"
                            width="146"
                        />
                    </div>
                    <div className="filter-grayscale bg-gray-50 flex col-span-1 items-center justify-center px-8 py-8">
                        <Image
                            alt="Les Roches International School of Hotel Management logo"
                            height="24"
                            src="/assets/images/landing/partners-logo-lesroches.svg"
                            width="146"
                        />
                    </div>
                    <div className="filter-grayscale hover:filter-none bg-gray-50 flex col-span-1 items-center justify-center px-8 py-8">
                        <Image
                            alt="South Champagne Business School logo"
                            height="48"
                            src="/assets/images/landing/partners-logo-scbs.png"
                            width="146"
                        />
                    </div>
                    <div className="filter-grayscale hover:filter-none bg-gray-50 flex col-span-1 items-center justify-center px-8 py-8">
                        <Image
                            alt="Sup de Luxe logo"
                            height="64"
                            src="/assets/images/landing/partners-logo-supdeluxe.png"
                            width="64"
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <Link href="/schools">
                        <Button variant="primary">{t('landing:partners-cta')}</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Partners;
