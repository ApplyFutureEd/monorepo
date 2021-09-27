import { FC } from 'react';

import Article from './Article';

const ArticleList: FC = () => {
    return (
        <div className="grid gap-12 mx-4 sm:grid-cols-2 sm:mx-auto lg:grid-cols-3 lg:max-w-none">
            <Article />
        </div>
    );
};

export default ArticleList;
