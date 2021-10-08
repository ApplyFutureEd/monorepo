import { Button } from '@applyfuture/ui';
import Link from 'next/link';
import { FC } from 'react';

const Newsletter: FC = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto px-4 py-24 max-w-7xl sm:px-6 lg:flex lg:items-center lg:px-8 lg:py-32">
                <div className="lg:flex-1 lg:w-0">
                    <h2 className="text-gray-800 text-3xl font-bold sm:text-4xl">
                        Sign up for our newsletter
                    </h2>
                    <p className="mt-3 max-w-3xl text-gray-500 text-lg">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
                        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
                    </p>
                </div>
                <div className="mt-8 lg:ml-8 lg:mt-0">
                    <form className="items-center sm:flex">
                        <label className="sr-only" htmlFor="email-address">
                            Email address
                        </label>
                        <input
                            required
                            autoComplete="email"
                            className="placeholder-gray-400 px-5 py-3 w-full border border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-1 focus:ring-indigo-500 sm:max-w-xs"
                            id="email-address"
                            name="email-address"
                            placeholder="Enter your email"
                            type="email"
                        />
                        <div className="mt-3 sm:flex-shrink-0 sm:ml-3 sm:mt-0">
                            <Button type="submit" variant="primary">
                                Notify me
                            </Button>
                        </div>
                    </form>
                    <p className="mt-3 text-gray-500 text-sm">
                        We care about the protection of your data. Read our
                        <Link href="/privacy-policy">
                            <span className="text-indigo-600 cursor-pointer"> Privacy Policy.</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
