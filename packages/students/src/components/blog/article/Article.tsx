import { SupportedLocale } from '@applyfuture/models';
import { date } from '@applyfuture/utils';
import { Post } from '@pages/blog/[slug]';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

export type Author = {
    name: string;
    picture: string;
};

type Props = {
    author: Author;
    currentPosts?: Post[];
    description?: string;
    id: string;
    image: string;
    publicationDate?: string;
    readingTime?: number;
    slug: string;
    category: string;
    title: string;
};

const Article: FC<Props> = (props) => {
    const { t } = useTranslation();
    const {
        author,
        description,
        image,
        publicationDate,
        readingTime,
        slug,
        category,
        title
    } = props;

    const router = useRouter();
    const locale = router.locale as SupportedLocale;

    return (
        <Link href={'/blog/' + slug}>
            <div className="flex flex-col h-full rounded-lg shadow-lg cursor-pointer overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
                <div className="flex-shrink-0">
                    <img alt="illustration" className="w-full h-48 object-cover" src={image} />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 bg-white">
                    <div className="flex flex-1 flex-col justify-between">
                        <p className="text-indigo-600 text-sm font-medium">{category}</p>
                        <p className="mt-4 text-gray-900 text-xl font-semibold">{title}</p>
                        <p className="mt-3 text-gray-500 text-base">{description}</p>
                    </div>
                    <div className="flex items-center mt-8">
                        <div className="flex-shrink-0">
                            <img
                                alt="author"
                                className="w-10 h-10 rounded-full"
                                src={author.picture}
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 text-sm font-medium">{author.name}</p>
                            <div className="flex text-gray-500 text-sm space-x-1">
                                <time dateTime="2021-09-24">
                                    {date({
                                        locale: locale,
                                        scheme: 'dd MMM yyyy',
                                        value: publicationDate
                                    })}
                                </time>
                                <span aria-hidden="true">&middot;</span>
                                <span>
                                    {readingTime} {t('blog:article-reading-time')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Article;
