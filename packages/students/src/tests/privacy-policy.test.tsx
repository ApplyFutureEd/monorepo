import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import PrivacyPolicyPage from '@pages/privacy-policy';
import { render, screen } from '@testing-library/react';
import { FC } from 'react';

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

const MockedLandingLayout: FC = (props) => {
    return <div>{props.children}</div>;
};

jest.mock('@components/layouts/landing-layout/LandingLayout', () => ({
    __esModule: true,
    default: jest.fn()
}));

((LandingLayout as unknown) as any).mockImplementation(MockedLandingLayout);

describe.skip('PrivacyPolicyPage', () => {
    const fakePost = {
        category: 'legal',
        content:
            '# Poena obsessa prima ipse est aurum latoque ## Ait nec iuvenemque sibila proelia Lorem markdownum utiliter pontus fit fratribus; tu [potes](http://www.ossatua.com/meroque.html). Flectit Pelasgi nodosaque lignum isto erat tuarum vocesque in, **modo gerens**.',
        id: '1',
        lastUpdate: 220121284129,
        published: true,
        slug: 'privacy-policy',
        title: 'Privacy Policy'
    };

    it('can render without crashing', () => {
        render(<PrivacyPolicyPage post={fakePost} />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
