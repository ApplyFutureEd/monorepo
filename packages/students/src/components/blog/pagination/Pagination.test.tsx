import Pagination from '@components/blog/pagination/Pagination';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

describe('pagination', () => {
    it('can render without crashing', () => {
        const currentPage = 1;
        const postsPerPage = 6;
        const totalPosts = 9;

        render(
            <Pagination
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={totalPosts}
            />
        );

        const previousButton = screen.getByText('Previous');
        const nextButton = screen.getByText('Next');
        const numberOfPages = screen.getByText('2');

        expect(previousButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
        expect(numberOfPages).toBeInTheDocument();
    });
});
