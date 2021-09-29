import { SupportedLocale } from '@applyfuture/models';
import { date } from '@applyfuture/utils';
import { useRouter } from 'next/router';
import { FC } from 'react';

type Props = {
    author: string;
    description: string;
    image: any;
    publicationDate: string;
    readingTime: number;
    tag: string;
    title: string;
};

const Article: FC<Props> = (props) => {
    const { author, description, image, publicationDate, readingTime, tag, title } = props;

    const router = useRouter();
    const locale = router.locale as SupportedLocale;

    return (
        <div className="flex flex-col h-full rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <img alt="illustration" className="w-full h-48 object-cover" src={image} />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6 bg-white">
                <div className="flex flex-1 flex-col justify-between">
                    <p className="text-indigo-600 text-sm font-medium">{tag}</p>
                    <p className="mt-4 text-gray-900 text-xl font-semibold">{title}</p>
                    <p className="mt-3 text-gray-500 text-base">{description}</p>
                </div>
                <div className="flex items-center mt-8">
                    <div className="flex-shrink-0">
                        <img
                            alt="author"
                            className="w-10 h-10 rounded-full"
                            src="https://images.unsplash.com/photo-1544982503-9f984c14501a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-gray-900 text-sm font-medium">{author}</p>
                        <div className="flex text-gray-500 text-sm space-x-1">
                            <time dateTime="2021-09-24">
                                {date({
                                    locale: locale,
                                    scheme: 'dd MMM yyyy',
                                    value: publicationDate
                                })}
                            </time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{readingTime} min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
