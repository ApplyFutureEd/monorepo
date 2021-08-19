import { Button } from '@applyfuture/ui';
import ducasse from '@assets/images/landing/partners-logo-ducasse.png';
import glion from '@assets/images/landing/partners-logo-glion.png';
import larochelle from '@assets/images/landing/partners-logo-larochelle.png';
import lesroches from '@assets/images/landing/partners-logo-lesroches.png';
import scbs from '@assets/images/landing/partners-logo-scbs.png';
import supdeluxe from '@assets/images/landing/partners-logo-supdeluxe.png';
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
                <div className="grid gap-0.5 grid-cols-2 mt-6 md:grid-cols-3 lg:mt-8">
                    <div className="filter-grayscale flex col-span-1 items-center justify-center px-8 py-8 bg-gray-50 hover:filter-none">
                        <Image
                            alt="Alain Ducasse Cooking School logo"
                            height="48"
                            placeholder="blur"
                            src={ducasse}
                            width="191"
                        />
                    </div>
                    <div className="filter-grayscale flex col-span-1 items-center justify-center px-8 py-8 bg-gray-50 hover:filter-none">
                        <Image
                            alt="La Rochelle Business School logo"
                            height="48"
                            placeholder="blur"
                            src={larochelle}
                            width="190"
                        />
                    </div>
                    <div className="filter-grayscale flex col-span-1 items-center justify-center px-8 py-8 bg-gray-50 hover:filter-none">
                        <Image
                            alt="Glion Institute of Higher Education logo"
                            height="48"
                            placeholder="blur"
                            src={glion}
                            width="146"
                        />
                    </div>
                    <div className="filter-grayscale flex col-span-1 items-center justify-center px-8 py-8 bg-gray-50">
                        <Image
                            alt="Les Roches International School of Hotel Management logo"
                            height="24"
                            placeholder="blur"
                            src={lesroches}
                            width="146"
                        />
                    </div>
                    <div className="filter-grayscale flex col-span-1 items-center justify-center px-8 py-8 bg-gray-50 hover:filter-none">
                        <Image
                            alt="South Champagne Business School logo"
                            height="48"
                            placeholder="blur"
                            src={scbs}
                            width="146"
                        />
                    </div>
                    <div className="filter-grayscale flex col-span-1 items-center justify-center px-8 py-8 bg-gray-50 hover:filter-none">
                        <Image
                            alt="Sup de Luxe logo"
                            height="64"
                            placeholder="blur"
                            src={supdeluxe}
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
