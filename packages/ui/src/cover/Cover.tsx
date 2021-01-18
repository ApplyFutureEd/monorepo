import React, { FC } from 'react';

type Props = {
    alt: string;
    src: string;
};

export const Cover: FC<Props> = (props: Props) => {
    const { alt, src } = props;

    return (
        <img
            alt={alt}
            className="md:h-96 w-full h-48 bg-cover bg-center bg-no-repeat rounded-t-lg shadow"
            style={{
                backgroundImage: `url(${src})`
            }}
        />
    );
};
