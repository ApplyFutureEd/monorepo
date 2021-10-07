import posts from '@assets/posts/posts';
import Article from '@components/blog/article/Article';
import Hero from '@components/blog/hero/Hero';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import { FC } from 'react';

const Blog: FC = () => {
    return (
        <LandingLayout title="Blog">
            <div className="bg-white overflow-hidden">
                <div className="relative mx-auto py-16 max-w-7xl sm:px-6 lg:px-8">
                    <Hero />
                    <div className="grid gap-12 mx-4 sm:grid-cols-2 sm:mx-auto lg:grid-cols-3 lg:max-w-none">
                        {posts.map((post: any) => {
                            return (
                                <div key={post.id}>
                                    <Article
                                        author={post.author}
                                        description={post.description}
                                        id={post.id}
                                        image={post.image}
                                        publicationDate={post.publicationDate}
                                        readingTime={post.readingTime}
                                        slug={post.slug}
                                        tag={post.tag}
                                        title={post.title}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
};

export default Blog;
