import Image from 'next/image';
import { FC } from 'react';

import logo from './logo.png';

export const Logo: FC = () => {
    return <Image alt="logo" height="32" src={logo} width="146" />;
};
