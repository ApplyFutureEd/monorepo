import ArticleList from '@components/blog/article-list/ArticleList';
import Hero from '@components/blog/hero/Hero';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import { FC } from 'react';

const Blog: FC = () => {
    return (
        <LandingLayout title="Blog">
            <div className="bg-white overflow-hidden">
                <div className="relative mx-auto py-16 max-w-7xl sm:px-6 lg:px-8">
                    <Hero />
                    <ArticleList />
                </div>
            </div>
        </LandingLayout>
    );
};

export default Blog;
