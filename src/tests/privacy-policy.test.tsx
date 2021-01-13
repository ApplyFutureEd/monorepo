import PrivacyPolicyPage from '@pages/privacy-policy';
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

describe('PrivacyPolicyPage', () => {
    const fakePrivacyPolicyPage = {
        category: 'Legal Page',
        content:
            '# Poena obsessa prima ipse est aurum latoque ## Ait nec iuvenemque sibila proelia Lorem markdownum utiliter pontus fit fratribus; tu [potes](http://www.ossatua.com/meroque.html). Flectit Pelasgi nodosaque lignum isto erat tuarum vocesque in, **modo gerens**.',
        id: '1',
        published: true,
        slug: 'privacy-policy',
        title: 'Privacy Policy'
    };

    it('can render without crashing', () => {
        render(<PrivacyPolicyPage post={fakePrivacyPolicyPage} />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
