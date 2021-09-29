import posts from '@assets/posts/posts';
import { FC } from 'react';

import Article from '../article/Article';

const ArticleList: FC = () => {
    return (
        <div className="grid gap-12 mx-4 sm:grid-cols-2 sm:mx-auto lg:grid-cols-3 lg:max-w-none">
            {posts.map((post: any) => {
                return (
                    <div key={post.id}>
                        <Article
                            author={post.author}
                            description={post.description}
                            image={post.image}
                            publicationDate={post.publicationDate}
                            readingTime={post.readingTime}
                            tag={post.tag}
                            title={post.title}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ArticleList;
