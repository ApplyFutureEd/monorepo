import Search from '@components/search/Search';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
    jest.useFakeTimers();
    const handleSearch = jest.fn();

    it('can render without crashing', () => {
        render(<Search handleSearch={handleSearch} />);

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
    });

    it('can call the handleSearch callback on submit', async () => {
        render(<Search handleSearch={handleSearch} />);

        const input = screen.getByRole('textbox');

        await waitFor(() => {
            userEvent.type(input, 'Bonjour');
            jest.advanceTimersByTime(1000);
        });

        expect(handleSearch).toHaveBeenCalled();
    });
});

/* En gros tu mocks ce que tu as dans ton onSubmit
Et tu verifie que c'est bien called
Pour la search tu simule l'ecriture dans l'input */
