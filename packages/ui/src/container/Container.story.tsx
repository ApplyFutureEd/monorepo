import { Button, Container } from '..';
import { faFilter, faSort } from '@fortawesome/pro-light-svg-icons';
import React, { ReactNode } from 'react';

export default {
    component: Container,
    title: 'Container'
};

export const Default = (): ReactNode => {
    const headerComponents = [
        <Button key={1} startIcon={faSort} variant="secondary">
            Sort by
        </Button>,
        <Button key={2} startIcon={faFilter} variant="secondary">
            Filters
        </Button>
    ];

    return (
        <div className="p-8 w-full h-full bg-gray-100">
            <Container headerComponents={headerComponents} title="Programs">
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
        </div>
    );
};
