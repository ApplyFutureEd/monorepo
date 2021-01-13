import TermsOfUsePage from '@pages/terms-of-use';
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

describe('TermsOfUsePage', () => {
    const fakeTermsOfUsePage = {
        category: 'Legal Page',
        content:
            '# Poena obsessa prima ipse est aurum latoque ## Ait nec iuvenemque sibila proelia Lorem markdownum utiliter pontus fit fratribus; tu [potes](http://www.ossatua.com/meroque.html). Flectit Pelasgi nodosaque lignum isto erat tuarum vocesque in, **modo gerens**.',
        id: '3',
        published: true,
        slug: 'terms-of-use',
        title: 'Terms of Use'
    };

    it('can render without crashing', () => {
        render(<TermsOfUsePage post={fakeTermsOfUsePage} />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
