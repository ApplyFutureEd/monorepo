import Search from '@components/schools/search/Search';
import { render, screen } from '@testing-library/react';

describe('Search', () => {
    const handleSearch = jest.fn();

    it('can render without crashing', () => {
        render(<Search handleSearch={handleSearch} />);

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
    });
});
