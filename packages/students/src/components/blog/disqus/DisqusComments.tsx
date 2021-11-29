import { Post } from '@pages/blog/[slug]';
import { DiscussionEmbed } from 'disqus-react';
import { FC } from 'react';

type Props = {
    post?: Post;
};

const DisqusComments: FC<Props> = (props) => {
    const { post } = props;

    const disqusShortname = 'applyfuture';
    const disqusConfig = {
        identifier: post?.id,
        title: post?.title,
        url: `http://localhost:3000/fr/blog/${post?.slug}`
    };

    return (
        <div className="mx-4 my-16 p-4 md:mx-auto md:p-9 md:max-w-2xl lg:p-8 lg:max-w-5xl">
            <DiscussionEmbed config={disqusConfig} shortname={disqusShortname} />
        </div>
    );
};

export default DisqusComments;
