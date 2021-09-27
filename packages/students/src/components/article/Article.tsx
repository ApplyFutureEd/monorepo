import posts from '@assets/posts/posts';
import { FC } from 'react';

const Article: FC = () => {
    const postsElements = posts.map((post: any) => {
        return (
            <div
                key={post.blogTitle}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                    <img alt="" className="w-full h-48 object-cover" src={post.blogImage} />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 bg-white">
                    <div className="flex-1">
                        <p className="text-indigo-600 text-sm font-medium">{post.blogTag}</p>
                        <p className="mt-4 text-gray-900 text-xl font-semibold">{post.blogTitle}</p>
                        <p className="mt-3 text-gray-500 text-base">{post.blogDescription}</p>
                    </div>
                    <div className="flex items-center mt-8">
                        <div className="flex-shrink-0">
                            <img
                                alt=""
                                className="w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1544982503-9f984c14501a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 text-sm font-medium">{post.blogAuthor}</p>
                            <div className="flex text-gray-500 text-sm space-x-1">
                                <time dateTime="2021-09-24">Sept 24, 2021</time>
                                <span aria-hidden="true">&middot;</span>
                                <span>6 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return <>{postsElements}</>;
};

export default Article;
