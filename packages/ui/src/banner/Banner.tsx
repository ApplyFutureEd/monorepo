import { FC, ReactNode } from 'react';

type Props = {
    content: string;
    cta?: ReactNode;
};

export const Banner: FC<Props> = (props) => {
    const { content, cta } = props;
    return (
        <div className="min-h-banner flex items-center mb-4 px-4 py-2 w-full bg-indigo-600 rounded-lg shadow-lg">
            <div className="block items-center justify-between w-full sm:flex">
                <div className="block items-center sm:flex">
                    <p className="text-white font-medium">
                        <span className="block md:inline">{content}</span>
                    </p>
                </div>
                {cta && <div className="mt-2 md:mt-0">{cta}</div>}
            </div>
        </div>
    );
};
