import image from '@assets/images/blog/people.png';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const Hero: FC = () => {
    const { t } = useTranslation();
    return (
        <div className="relative z-30 mx-auto max-w-prose text-base lg:max-w-none">
            <div className="relative flex flex-col items-center mb-36 space-y-6 lg:flex-row lg:space-y-0">
                <div className="relative mx-auto text-base lg:max-w-none">
                    <div className="relative -mx-4 mt-10 lg:mt-0">
                        <Image
                            alt="hero illustration"
                            className="relative mx-auto"
                            placeholder="blur"
                            src={image}
                        />
                    </div>
                </div>
                <div className="md:w-full">
                    <h1 className="mb-8 mt-2 text-center text-gray-900 text-3xl font-extrabold tracking-tight leading-8 sm:text-4xl sm:leading-10">
                        {t('blog:hero-headline')}
                    </h1>
                    <p className="px-4 text-center text-gray-500 text-xl">
                        {t('blog:hero-paragraph')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
