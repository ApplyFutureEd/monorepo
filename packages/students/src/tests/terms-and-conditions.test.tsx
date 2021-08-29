import TermsAndConditionsPage from '@pages/terms-and-conditions';
import { render, screen } from '@testing-library/react';
import { FC } from 'react';

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

describe.skip('TermsAndConditionsPage', () => {
    const fakePost = {
        category: 'legal',
        content:
            '# Poena obsessa prima ipse est aurum latoque ## Ait nec iuvenemque sibila proelia Lorem markdownum utiliter pontus fit fratribus; tu [potes](http://www.ossatua.com/meroque.html). Flectit Pelasgi nodosaque lignum isto erat tuarum vocesque in, **modo gerens**.',
        id: '2',
        lastUpdate: 220121284129,
        published: true,
        slug: 'terms-and-conditions',
        title: 'Terms and Conditions'
    };

    it('can render without crashing', () => {
        render(<TermsAndConditionsPage post={fakePost} />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
