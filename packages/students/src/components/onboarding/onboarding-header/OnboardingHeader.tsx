import { Logo } from '@applyfuture/ui';
import logo from '@assets/images/logo.png';
import Link from 'next/link';
import { FC } from 'react';

export const OnboardingHeader: FC = () => {
    return (
        <div className="fixed z-40 w-full bg-gray-50 border-b border-gray-200">
            <div className="relative bg-white">
                <div className="mx-auto px-4 max-w-7xl sm:px-6">
                    <div className="flex items-center justify-between py-6 lg:justify-start lg:space-x-10">
                        <div className="flex">
                            <Link href="/">
                                <div className="inline-flex cursor-pointer">
                                    <Logo src={logo} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnboardingHeader;
