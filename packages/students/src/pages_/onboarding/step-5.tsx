import Chatbot from '@components/onboarding/chatbot/Chatbot';
import OnboardingLayout from '@components/onboarding/onboarding-layout/OnboardingLayout';
import Stepper from '@components/onboarding/stepper/Stepper';
import React, { FC } from 'react';

const Onboarding: FC = () => {
    const steps = [
        { name: 'Step 1', status: 'current' },
        { name: 'Step 2', status: 'current' },
        { name: 'Step 3', status: 'current' },
        { name: 'Step 4', status: 'current' }
    ];

    return (
        <OnboardingLayout title="Onboarding">
            <div className="lg:mt-15 flex flex-row lg:justify-center">
                <Chatbot
                    avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=5Z8V7HDhG6&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=8"
                    name="Charly">
                    <p className="mt-1">
                        Et voilà un échantillon de programmes qui pourrait vous intéressez, bien
                        entendu il y a plus de filtres si vous disponible si vous possédez un
                        compte.
                    </p>
                </Chatbot>
            </div>
            <div className="mt-12 space-y-4 sm:grid sm:gap-6 sm:grid-cols-2 sm:mt-16 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:grid-cols-4 xl:mx-0 xl:max-w-none">
                <div className="border border-gray-200 rounded-lg shadow-sm divide-gray-200 divide-y">
                    <div className="p-6">
                        <h2 className="text-gray-900 text-lg font-medium leading-6">Hobby</h2>
                        <p className="mt-4 text-gray-500 text-sm">
                            All the basics for starting a new business
                        </p>
                        <p className="mt-8">
                            <span className="text-gray-900 text-4xl font-extrabold">$12</span>
                            <span className="text-gray-500 text-base font-medium">/mo</span>
                        </p>
                    </div>
                    <div className="pb-8 pt-6 px-6">
                        <h3 className="text-gray-900 text-xs font-medium tracking-wide uppercase">
                            What's included
                        </h3>
                        <ul className="mt-6 space-y-4">
                            <li className="flex space-x-3">
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-5 h-5 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        clipRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                                <span className="text-gray-500 text-sm">
                                    Potenti felis, in cras at at ligula nunc.
                                </span>
                            </li>

                            <li className="flex space-x-3">
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-5 h-5 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        clipRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                                <span className="text-gray-500 text-sm">
                                    Orci neque eget pellentesque.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-16 md:mt-24">
                <Stepper steps={steps} />
            </div>
        </OnboardingLayout>
    );
};

export default Onboarding;
