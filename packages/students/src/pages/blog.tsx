import posts from '@assets/posts/posts';
import Article from '@components/blog/article/Article';
import Hero from '@components/blog/hero/Hero';
import Pagination from '@components/blog/pagination/Pagination';
import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import { FC, useCallback, useState } from 'react';

import { Post } from './blog/[slug]';

const Blog: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const scrollTop = useCallback(() => {
        const blogTarget = document.querySelector('#blog') as HTMLElement;
        const blogPosition = blogTarget?.offsetTop;
        window.scrollTo(0, blogPosition);
    }, [currentPage]);

    const paginate = (pageNumber: number) => {
        scrollTop();
        setCurrentPage(pageNumber);
    };
    const paginateFront = () => {
        scrollTop();
        setCurrentPage(currentPage + 1);
    };
    const paginateBack = () => {
        scrollTop();
        setCurrentPage(currentPage - 1);
    };

    return (
        <LandingLayout title="Blog">
            <div className="bg-white overflow-hidden">
                <div className="relative mx-auto py-16 max-w-7xl sm:px-6 lg:px-8">
                    <Hero />
                    <div
                        className="grid gap-12 mx-4 pt-8 sm:grid-cols-2 sm:mx-auto lg:grid-cols-3 lg:max-w-none"
                        id="blog">
                        {currentPosts.map((post: Post) => {
                            return (
                                <div key={post.id}>
                                    <Article
                                        author={post.author}
                                        currentPosts={currentPosts}
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
                    <Pagination
                        currentPage={currentPage}
                        paginate={paginate}
                        paginateBack={paginateBack}
                        paginateFront={paginateFront}
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                    />
                </div>
            </div>
        </LandingLayout>
    );
};

export default Blog;
