import Image from 'next/image';
import { FC } from 'react';

const Logo: FC = () => {
    return <Image alt="logo" height="32" src="/assets/images/logo.svg" width="146" />;
};

export default Logo;
