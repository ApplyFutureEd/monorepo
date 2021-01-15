import Image from 'next/image';
import { FC } from 'react';

export const Logo: FC = () => {
    return <Image alt="logo" height="32" src="/assets/images/logo.svg" width="146" />;
};
