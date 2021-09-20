import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import { FC } from 'react';

const Blog: FC = () => {
    return (
        <LandingLayout title="Blog">
            <div className="bg-white overflow-hidden">
                <div className="relative mx-auto px-4 py-16 max-w-7xl sm:px-6 lg:px-8">
                    <div className="relative z-30 mx-auto max-w-prose text-base lg:max-w-none">
                        <div className="relative flex flex-col items-center mb-8 lg:flex-row">
                            <div className="md:w-full">
                                <h1 className="mb-8 mt-2 text-center text-gray-900 text-3xl font-extrabold tracking-tight leading-8 sm:text-4xl sm:leading-10">
                                    Welcome to ApplyBlog
                                </h1>
                            </div>

                            <div className="relative mx-auto text-base lg:max-w-none">
                                <figure>
                                    <img
                                        alt="illustartion"
                                        className=""
                                        src="/assets/images/blog/people.svg"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
};

export default Blog;
