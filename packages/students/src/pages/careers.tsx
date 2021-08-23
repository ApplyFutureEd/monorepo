import { Button } from '@applyfuture/ui';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import { faRocketLaunch } from '@fortawesome/pro-solid-svg-icons';
import Image from 'next/image';
import { FC } from 'react';

const CareersPage: FC = () => {
    const to = `hello+careers@applyfuture.com`;
    const subject = 'Spontaneous application';
    const body =
        'Introduce yourself and explain why you want to join us. Also please attach your resume or share LinkedIn profile.';

    return (
        <LandingLayout description="Apply for your greatest career" title="Careers">
            <main className="lg:relative">
                <div className="mx-auto py-8 w-full max-w-7xl lg:py-24 lg:text-left">
                    <div className="px-4 space-y-4 sm:px-8">
                        <h1 className="text-indigo-600 text-2xl font-extrabold tracking-tight sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                            An open invitation to open minds
                        </h1>
                        <h2 className="text-gray-900 text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                            Come to ApplyFuture, where we build the future of foreign education.
                            Here, you’ll do more than join something — you’ll add something.
                        </h2>
                        <div className="hidden sm:block">
                            <Image
                                alt="Careers perks at ApplyFuture"
                                height="480"
                                layout="responsive"
                                src="/assets/images/careers/perks.svg"
                                width="720"
                            />
                        </div>
                        <div className="block space-y-4 sm:hidden">
                            <div>
                                <Image
                                    alt="See what happens when quality software meets great ideas"
                                    height="480"
                                    layout="responsive"
                                    src="/assets/images/careers/perks1.svg"
                                    width="720"
                                />
                            </div>
                            <div>
                                <Image
                                    alt="Work from anywhere"
                                    height="480"
                                    layout="responsive"
                                    src="/assets/images/careers/perks2.svg"
                                    width="720"
                                />
                            </div>
                            <div>
                                <Image
                                    alt="Healthy work-life balance"
                                    height="480"
                                    layout="responsive"
                                    src="/assets/images/careers/perks3.svg"
                                    width="720"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="items-left flex flex-col justify-center mt-16 px-4 sm:items-center sm:px-8">
                        <p className="mb-4 max-w-xl text-gray-900 text-xl font-bold tracking-tight sm:text-center sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
                            Get discovered. Introduce yourself, and we‘ll get in touch if there‘s a
                            role that seems like a good match.
                        </p>
                        <a href={`mailto:${to}?subject=${subject}&body=${body}`}>
                            <Button startIcon={faRocketLaunch}>Get started</Button>
                        </a>
                    </div>
                </div>
            </main>
        </LandingLayout>
    );
};

export default CareersPage;
