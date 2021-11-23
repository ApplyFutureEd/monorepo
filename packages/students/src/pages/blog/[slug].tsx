import { SupportedLocale } from '@applyfuture/models';
import { markdown } from '@applyfuture/utils';
import { date } from '@applyfuture/utils';
import posts from '@assets/posts/posts';
import { Author } from '@components/blog/article/Article';
import SocialMedia from '@components/blog/social-media/SocialMedia';
import SuggestionBar from '@components/blog/suggestion-bar/SuggestionBar';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';

export type Post = {
    author: Author;
    description: string;
    id: string;
    image: string;
    content: string;
    publicationDate: string;
    readingTime: number;
    slug: string;
    category: string;
    title: string;
};

type Props = {
    post: Post;
    suggestedPosts: Post[];
};

type Params = {
    slug: string;
};

const Post: FC<Props> = (props) => {
    const { post, suggestedPosts } = props;
    const router = useRouter();
    const locale = router.locale as SupportedLocale;

    return (
        <LandingLayout title={post?.title}>
            <div className="relative py-16 bg-white overflow-hidden">
                <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:w-full lg:h-full">
                    <div aria-hidden="true" className="relative mx-auto h-full text-lg">
                        <svg
                            className="absolute right-0 top-0 transform translate-x-32"
                            fill="none"
                            height={384}
                            viewBox="0 0 404 384"
                            width={404}>
                            <defs>
                                <pattern
                                    height={20}
                                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                    patternUnits="userSpaceOnUse"
                                    width={20}
                                    x={0}
                                    y={0}>
                                    <rect
                                        className="text-gray-200"
                                        fill="currentColor"
                                        height={4}
                                        width={4}
                                        x={0}
                                        y={0}
                                    />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                                height={384}
                                width={404}
                            />
                        </svg>
                        <svg
                            className="absolute right-full top-1/2 transform -translate-x-32 -translate-y-1/2"
                            fill="none"
                            height={384}
                            viewBox="0 0 404 384"
                            width={404}>
                            <defs>
                                <pattern
                                    height={20}
                                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                    patternUnits="userSpaceOnUse"
                                    width={20}
                                    x={0}
                                    y={0}>
                                    <rect
                                        className="text-gray-200"
                                        fill="currentColor"
                                        height={4}
                                        width={4}
                                        x={0}
                                        y={0}
                                    />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                                height={384}
                                width={404}
                            />
                        </svg>
                        <svg
                            className="absolute bottom-0 right-0 transform translate-x-32"
                            fill="none"
                            height={384}
                            viewBox="0 0 404 384"
                            width={404}>
                            <defs>
                                <pattern
                                    height={20}
                                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                    patternUnits="userSpaceOnUse"
                                    width={20}
                                    x={0}
                                    y={0}>
                                    <rect
                                        className="text-gray-200"
                                        fill="currentColor"
                                        height={4}
                                        width={4}
                                        x={0}
                                        y={0}
                                    />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                                height={384}
                                width={404}
                            />
                        </svg>
                    </div>
                </div>
                <div className="relative px-2 lg:px-0">
                    <div className="mb-12 mx-auto max-w-prose text-lg">
                        <h1>
                            <span className="block mt-2 text-center text-gray-900 text-4xl font-extrabold tracking-tight leading-8">
                                {post?.title}
                            </span>
                        </h1>
                        <p className="mt-8 text-center text-gray-500 text-xl leading-8">
                            {post?.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between mb-9 mx-auto px-9 max-w-prose">
                        <div className="flex items-center space-x-4">
                            <img
                                alt="author"
                                className="w-10 h-10 rounded-full"
                                src={post?.author.picture}
                            />
                            <div>
                                <h3 className="text-gray-700 text-lg">{post?.author.name}</h3>
                                <time className="text-gray-700 text-sm" dateTime="2021-09-24">
                                    {date({
                                        locale: locale,
                                        scheme: 'dd MMM yyyy',
                                        value: post?.publicationDate
                                    })}
                                </time>
                            </div>
                        </div>
                        <SocialMedia url={post?.slug} />
                    </div>
                    <div>
                        <img
                            alt="post illustration"
                            className="w-full h-96 object-cover"
                            src={post?.image}
                        />
                    </div>
                    <div className="mt-16 mx-auto max-w-prose">
                        <div
                            className="blog-markdown"
                            dangerouslySetInnerHTML={{
                                __html: markdown({ value: post?.content })
                            }}
                        />
                    </div>
                    <div className="flex items-center justify-between mt-16 mx-auto px-9 max-w-prose">
                        <div className="flex items-center space-x-4">
                            <img
                                alt="author"
                                className="w-12 h-12 rounded-full"
                                src={post?.author.picture}
                            />
                            <div>
                                <h3 className="text-gray-700 text-xl">{post?.author.name}</h3>
                                <time className="text-gray-700 text-sm" dateTime="2021-09-24">
                                    {date({
                                        locale: locale,
                                        scheme: 'dd MMM yyyy',
                                        value: post?.publicationDate
                                    })}
                                </time>
                            </div>
                        </div>
                        <SocialMedia url={post?.slug} />
                    </div>
                </div>
            </div>

            <SuggestionBar posts={suggestedPosts} />
        </LandingLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const paths = posts?.map((post) => ({
            params: { slug: post?.slug || '' }
        }));

        return {
            fallback: true,
            paths: paths || []
        };
    } catch (error) {
        console.log(error);
        return {
            fallback: true,
            paths: []
        };
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { slug } = params as Params;

        const currentPost = posts.find((post) => post.slug === slug);
        const suggestedPosts = posts.filter((post) => post.slug !== currentPost?.slug).slice(0, 3);

        return {
            props: { post: currentPost, suggestedPosts: suggestedPosts }
        };
    } catch (error) {
        console.log(error);
        return {
            props: {},
            revalidate: 1
        };
    }
};

export default Post;
