import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import LandingPage from '@pages/index';
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

describe.skip('LandingPage', () => {
    it('can render without crashing', () => {
        render(<LandingPage />);

        const slogan = screen.getByText('landing:hero-slogan');

        expect(slogan).toBeInTheDocument();
    });
});
