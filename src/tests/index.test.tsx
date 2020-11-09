import App from '@pages/index';
import { render, screen } from '@testing-library/react';

describe('App', () => {
    it.skip('renders without crashing', () => {
        render(<App />);
        expect(screen.getByRole('heading', { name: 'Hello World' })).toBeInTheDocument();
    });
});
