import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import Image from 'next/image';
import { FC } from 'react';

const Onboarding: FC = () => {
    return (
        <LandingLayout title="onboarding">
            <section className="bg-gray-50 flex items-center justify-center min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="grid grid-cols-6">
                        <div className="mx-auto">
                            <Image
                                alt="Assistant profil picture"
                                className="rounded-full"
                                height="100px"
                                src="/assets/images/onboarding/charly.jpg"
                                width="100px"
                            />
                        </div>
                        <div className="col-span-5 mx-auto">
                            <p className="text-lg font-bold leading-8 md:text-xl">Charly</p>
                            <p className="text-sm font-semibold leading-tight md:text-base md:leading-normal lg:text-lg lg:leading-relaxed xl:text-xl xl:leading-loose">
                                Bonjour ! Je suis Charly.
                            </p>
                            <p className="text-sm font-semibold leading-tight md:text-base md:leading-normal lg:text-lg lg:leading-relaxed xl:text-xl xl:leading-loose">
                                Apparemment vous souhaitez étudier dans une école en Europe, faisons
                                un tour de votre projet ensemble.
                            </p>
                            <p className="text-sm font-semibold leading-tight md:text-base md:leading-normal lg:text-lg lg:leading-relaxed xl:text-xl xl:leading-loose">
                                Où avez-vous fais vos études ?
                            </p>
                        </div>
                    </div>
                    <div className="hidden mx-auto md:block">
                        <Image
                            alt="World Location"
                            className=""
                            height="500px"
                            src="/assets/images/onboarding/world-pana.svg"
                            width="500px"
                        />
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
};

export default Onboarding;
