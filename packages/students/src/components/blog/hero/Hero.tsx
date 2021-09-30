import { FC } from 'react';

const Hero: FC = () => {
    return (
        <div className="relative z-30 mx-auto max-w-prose text-base lg:max-w-none">
            <div className="relative flex flex-col items-center mb-36 space-y-6 lg:flex-row lg:space-y-0">
                <div className="relative mx-auto text-base lg:max-w-none">
                    <figure>
                        <img alt="illustration" src="/assets/images/blog/people.svg" />
                    </figure>
                </div>
                <div className="md:w-full">
                    <h1 className="mb-8 mt-2 text-center text-gray-900 text-3xl font-extrabold tracking-tight leading-8 sm:text-4xl sm:leading-10">
                        Welcome to ApplyBlog
                    </h1>
                    <p className="px-4 text-center text-gray-500 text-xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore
                        natus atque, ducimus sed.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
