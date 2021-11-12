import NewsletterForm from '@components/forms/blog/NewsletterForm';
import Link from 'next/link';
import { FC } from 'react';

const Newsletter: FC = () => {
    return (
        <div className="mx-auto px-4 py-24 max-w-7xl sm:px-6 lg:flex lg:items-center lg:px-8 lg:py-32">
            <div className="lg:flex-1 lg:w-0">
                <h2 className="text-gray-900 text-3xl font-extrabold sm:text-4xl">
                    Sign up for our newsletter
                </h2>
                <p className="mt-3 max-w-3xl text-gray-500 text-lg">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat
                    commodo. Elit sunt amet fugiat veniam occaecat fugiat.
                </p>
            </div>
            <div className="mt-8 lg:ml-8 lg:mt-0">
                <NewsletterForm />
                <p className="mt-3 text-gray-500 text-sm">
                    We care about the protection of your data. Read our
                    <Link href="/privacy-policy">
                        <span className="text-indigo-600 cursor-pointer"> Privacy Policy.</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Newsletter;
