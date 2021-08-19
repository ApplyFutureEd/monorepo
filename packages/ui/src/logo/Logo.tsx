import Image from 'next/image';
import { FC } from 'react';

type Props = {
    /**
     * The logo source file
     */
    src: StaticImageData;
};

export const Logo: FC<Props> = (props) => {
    const { src } = props;
    return <Image alt="logo" height="32" src={src} width="146" />;
};
