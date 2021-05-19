import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
<<<<<<< HEAD
import Image from 'next/image';
=======
import Chatbot from '@components/onboarding/chatbot/Chatbot';
>>>>>>> feature/onboarding
import { FC } from 'react';

const Onboarding: FC = () => {
    return (
<<<<<<< HEAD
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
=======
        <LandingLayout title="Onboarding">
            <Chatbot
                avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=5Z8V7HDhG6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8"
                name="Charly">
                <p className="mt-1">Bonjour ! Je suis Charly.</p>
                <p className="mt-1">
                    Apparemment vous souhaitez étudier dans une école en Europe, faisons un tour de
                    votre projet ensemble.
                </p>
                <p className="mt-6">Où avez-vous fais vos études ?</p>
            </Chatbot>
>>>>>>> feature/onboarding
        </LandingLayout>
    );
};

export default Onboarding;
