import { render, screen } from '@testing-library/react';

import { Container } from './Container';

describe('Container', () => {
    const title = 'Programs';
    const headerComponents = [<div key={1} />];

    it('can render without crashing', () => {
        render(
            <Container headerComponents={headerComponents} title={title}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus
                    neque id elit dapibus suscipit. Pellentesque ornare elit sed augue vestibulum
                    egestas. Sed vehicula mauris nec ullamcorper fringilla. Nullam at turpis sed
                    nisl volutpat porta.
                </p>
                <br />
                <p>
                    Etiam condimentum ipsum velit, id commodo nulla convallis in. Nunc eros dui,
                    vestibulum sed purus sed, malesuada ullamcorper augue. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <br />
                <p>
                    Etiam tempor dolor ut est tincidunt, in rutrum purus rutrum. Vivamus viverra
                    porttitor nisl a accumsan. Vestibulum fringilla, dui at blandit rutrum, arcu
                    massa porttitor purus, id venenatis lectus mi sed metus.
                </p>
            </Container>
        );

        const containerTitle = screen.getByText(title);

        expect(containerTitle).toBeInTheDocument();
    });

    it('can render without title', () => {
        render(
            <Container>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus
                    neque id elit dapibus suscipit. Pellentesque ornare elit sed augue vestibulum
                    egestas. Sed vehicula mauris nec ullamcorper fringilla. Nullam at turpis sed
                    nisl volutpat porta.
                </p>
                <br />
                <p>
                    Etiam condimentum ipsum velit, id commodo nulla convallis in. Nunc eros dui,
                    vestibulum sed purus sed, malesuada ullamcorper augue. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <br />
                <p>
                    Etiam tempor dolor ut est tincidunt, in rutrum purus rutrum. Vivamus viverra
                    porttitor nisl a accumsan. Vestibulum fringilla, dui at blandit rutrum, arcu
                    massa porttitor purus, id venenatis lectus mi sed metus.
                </p>
            </Container>
        );

        const content = screen.getByText(/Lorem ipsum/g);

        expect(content).toBeInTheDocument();
    });

    it('can render without inner padding', () => {
        render(
            <Container headerComponents={headerComponents} innerPadding={false} title={title}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus
                    neque id elit dapibus suscipit. Pellentesque ornare elit sed augue vestibulum
                    egestas. Sed vehicula mauris nec ullamcorper fringilla. Nullam at turpis sed
                    nisl volutpat porta.
                </p>
                <br />
                <p>
                    Etiam condimentum ipsum velit, id commodo nulla convallis in. Nunc eros dui,
                    vestibulum sed purus sed, malesuada ullamcorper augue. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                </p>
                <br />
                <p>
                    Etiam tempor dolor ut est tincidunt, in rutrum purus rutrum. Vivamus viverra
                    porttitor nisl a accumsan. Vestibulum fringilla, dui at blandit rutrum, arcu
                    massa porttitor purus, id venenatis lectus mi sed metus.
                </p>
            </Container>
        );

        const containerTitle = screen.getByText(title);

        expect(containerTitle).toBeInTheDocument();
    });
});
