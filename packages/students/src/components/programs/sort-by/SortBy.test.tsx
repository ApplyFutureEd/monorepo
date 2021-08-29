import SortBy from '@components/programs/sort-by/SortBy';
import { fireEvent, render, screen } from '@testing-library/react';

describe.skip('SortBy', () => {
    const handleSort = jest.fn();

    it('can render without crashing', () => {
        render(<SortBy handleSort={handleSort} />);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    it('can open the menu and display the options', () => {
        render(<SortBy handleSort={handleSort} />);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        const alphabeticalOrder = screen.getAllByText(
            /programs:sort-by-option-alphabetical-order/
        )[1];

        expect(alphabeticalOrder).toBeVisible();
    });

    it('can close the menu and handle the sort', () => {
        render(<SortBy handleSort={handleSort} />);

        const button = screen.getByRole('button');

        fireEvent.click(button);

        const alphabeticalOrder = screen.getAllByText(
            /programs:sort-by-option-alphabetical-order/
        )[1];

        fireEvent.click(alphabeticalOrder);

        expect(handleSort).toHaveBeenCalled();
    });
});
