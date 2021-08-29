import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import About from '@pages/about';
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

describe.skip('About page', () => {
    it('can render without crashing', () => {
        render(<About />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
