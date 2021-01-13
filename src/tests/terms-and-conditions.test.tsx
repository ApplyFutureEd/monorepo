import TermsAndConditionsPage from '@pages/terms-and-conditions';
import { render, screen } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

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

describe('TermsAndConditionsPage', () => {
    const fakeTermsAndConditionsPage = {
        category: 'Legal Page',
        content:
            '# Poena obsessa prima ipse est aurum latoque ## Ait nec iuvenemque sibila proelia Lorem markdownum utiliter pontus fit fratribus; tu [potes](http://www.ossatua.com/meroque.html). Flectit Pelasgi nodosaque lignum isto erat tuarum vocesque in, **modo gerens**.',
        id: '2',
        published: true,
        slug: 'terms-and-conditions',
        title: 'Terms and Conditions'
    };

    it('can render without crashing', () => {
        render(<TermsAndConditionsPage post={fakeTermsAndConditionsPage} />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
