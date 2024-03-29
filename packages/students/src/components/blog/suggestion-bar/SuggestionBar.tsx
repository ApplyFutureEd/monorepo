import { Post } from '@pages/blog/[slug]';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

import Article from '../article/Article';

type Props = {
    posts: Post[];
};

const SuggestionBar: FC<Props> = (props) => {
    const { t } = useTranslation();
    const { posts } = props;
    return (
        <div className="mx-4 my-16 p-4 rounded-2xl divide-gray-300 divide-y-2 md:mx-auto md:p-9 md:max-w-2xl lg:p-8 lg:max-w-5xl">
            <div className="pb-6 md:pb-9 lg:pb-8">
                <h3 className="text-gray-800 text-3xl font-semibold tracking-tight leading-8">
                    {t('blog:keep-reading')}
                </h3>
            </div>
            <div className="grid gap-5 mx-auto pt-6 md:pt-9 lg:grid-cols-3 lg:pt-8">
                {posts?.map((post: Post) => {
                    return (
                        <div key={post.id} className="shadow-lg">
                            <Article
                                author={post.author}
                                category={post.category}
                                id={post.id}
                                image={post.image}
                                publicationDate={post.publicationDate}
                                readingTime={post.readingTime}
                                slug={post.slug}
                                title={post.title}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SuggestionBar;
