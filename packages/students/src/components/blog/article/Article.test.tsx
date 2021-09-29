import Article from '@components/blog/article/Article';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

describe('Article', () => {
    it('can render without crashing', () => {
        const article = {
            author: 'Arthur Sallé',
            description:
                'Inmitem saucius deum ait Epidauria modo. Contraque longa quasque verbere miratur vultus Lorem markdownum pontusque tinctas...',
            image:
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            publicationDate: new Date(1995, 2, 23).toString(),
            readingTime: 6,
            tag: 'University',
            title: 'The 10 most popular business schools'
        };

        render(
            <Article
                author={article.author}
                description={article.description}
                image={article.image}
                publicationDate={article.publicationDate}
                readingTime={article.readingTime}
                tag={article.tag}
                title={article.title}
            />
        );

        const author = screen.getByText(/arthur/gi);
        const description = screen.getByText(/inmitem/gi);
        const image = screen.getByAltText('illustration');
        const publicationDate = screen.getByText('23 Mar 1995');
        const readingTime = screen.getByText('6 min read');
        const tag = screen.getByText(/university/gi);
        const title = screen.getByText('The 10 most popular business schools');

        expect(author).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(publicationDate).toBeInTheDocument();
        expect(readingTime).toBeInTheDocument();
        expect(tag).toBeInTheDocument();
        expect(title).toBeInTheDocument();
    });
});
