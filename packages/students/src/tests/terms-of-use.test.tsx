import TermsOfUsePage from '@pages/terms-of-use';
import { render, screen } from '@testing-library/react';
import { FC } from 'react';

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

describe('TermsOfUsePage', () => {
    const fakePost = {
        category: 'Legal Page',
        content:
            '# Poena obsessa prima ipse est aurum latoque ## Ait nec iuvenemque sibila proelia Lorem markdownum utiliter pontus fit fratribus; tu [potes](http://www.ossatua.com/meroque.html). Flectit Pelasgi nodosaque lignum isto erat tuarum vocesque in, **modo gerens**.',
        id: '3',
        published: true,
        slug: 'terms-of-use',
        title: 'Terms of Use'
    };

    it('can render without crashing', () => {
        render(<TermsOfUsePage post={fakePost} />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});