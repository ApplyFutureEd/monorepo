import { Button } from '@applyfuture/ui';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import { faRocketLaunch } from '@fortawesome/pro-solid-svg-icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

const CareersPage: FC = () => {
    const { t } = useTranslation();
    const router = useRouter();
    const subject = router.query.egg
        ? `I found the egg ${router.query.egg}`
        : "I cheated I'm sorry";

    return (
        <LandingLayout description={'Apply for your greatest career'} title={t('Careers')}>
            <main className="lg:relative">
                <div className="max-w-7xl mx-auto w-full lg:py-24 lg:text-left">
                    <div className="px-4 space-y-4 sm:px-8">
                        <h1 className="text-indigo-600 text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                            An open invitation to open minds
                        </h1>
                        <h2 className="text-gray-900 text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                            Come to ApplyFuture, where we build the future of foreign education.
                            Here, you’ll do more than join something — you’ll add something.
                        </h2>
                        <div className="hidden md:block">
                            <Image
                                alt="Careers perks at ApplyFuture"
                                height="480"
                                layout="responsive"
                                src="/assets/images/careers/perks.svg"
                                width="720"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-16">
                        <p className="mb-4 max-w-xl text-center text-gray-900 text-xl font-bold tracking-tight sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
                            Get discovered. Introduce yourself, and we‘ll get in touch if there‘s a
                            role that seems like a good match.
                        </p>
                        <a href={`mailto:hello@applyfuture.com?subject=${subject}`}>
                            <Button startIcon={faRocketLaunch}>Get started</Button>
                        </a>
                    </div>
                </div>
            </main>
        </LandingLayout>
    );
};

export default CareersPage;
