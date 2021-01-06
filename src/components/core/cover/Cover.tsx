import React, { FC } from 'react';

type Props = {
    alt: string;
    src: string;
};

const Cover: FC<Props> = (props: Props) => {
    const { alt, src } = props;

    return (
        <img
            alt={alt}
            className="w-full h-48 bg-cover bg-center bg-no-repeat rounded-t-lg shadow md:h-96"
            style={{
                backgroundImage: `url(${src})`
            }}
        />
    );
};

export default Cover;
