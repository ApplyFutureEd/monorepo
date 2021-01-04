import About from '@pages/about';
import { render, screen } from '@testing-library/react';

jest.mock('@components/core/nav/Nav', () => {
    return {
        __esModule: true,
        default: () => {
            return <nav />;
        }
    };
});
jest.mock('@components/core/language-menu/LanguageMenu', () => {
    return {
        __esModule: true,
        default: () => {
            return <div />;
        }
    };
});

describe('About page', () => {
    it('can render without crashing', () => {
        render(<About />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
