import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import Image from 'next/image';
import { FC } from 'react';


const Onboarding: FC = () => {
    return (
        <LandingLayout title='onboarding'>
            <section className="bg-gray-50 min-h-min flex items-center justify-center pt-10 mx-auto">
                <div className="grid grid-cols-2">
                    <div className="grid grid-cols-2 mx-auto">
                        <div className="ml-auto pr-5">
                            <Image src="/assets/icons/favicon-32x32.png"
                                    alt="profil pic" 
                                    width="50" 
                                    height="50" 
                                    className="rounded"/>
                        </div>
                        <div className="mx-auto">
                            <p className="text-sm md:leading-6 md:text-xl font-semibold text-gray-800">Charly</p>
                            <p className=" text-sm md:leading-6 md:text-base text-gray-800 mt-4">Bonjour ! Je suis Charly. Apparemment vous souhaitez étudier dans une école en Europe,
                            faisons un tour de votre projet ensemble.</p>
                            <p className="text-sm md:leading-6 md:text-base text-gray-800 mt-4">Où avez-vous fais vos études ?</p>
                            <button type="button" className="w-48 block border-solid border-2 border-gray-400 bg-white p-2 rounded text-color-800 text-sm md:text-base mt-4">
                                Sélectionner un pays
                            </button>
                        </div> 
                    </div>
                    <div className="hidden md:block lg:block">
                          <Image src="/assets/images/onboarding/world-pana.svg"
                          alt="profil pic" 
                          width="756" 
                          height="600" 
                          className=""/> 
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
};

export default Onboarding;
