import App from '@pages/index';
import { render, screen } from '@testing-library/react';

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
});
