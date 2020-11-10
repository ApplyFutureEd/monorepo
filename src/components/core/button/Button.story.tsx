import Button from '@components/core/button/Button';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { withKnobs } from '@storybook/addon-knobs';
import React, { ReactNode } from 'react';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs]
};

export const Primary = (): ReactNode => <Button variant="primary">Apply</Button>;

export const Secondary = (): ReactNode => <Button variant="secondary">Apply</Button>;

export const Danger = (): ReactNode => <Button variant="danger">Delete</Button>;

export const Disabled = (): ReactNode => (
    <Button variant="primary" disabled>
        Apply
    </Button>
);

export const StartIcon = (): ReactNode => (
    <Button variant="primary" startIcon={faArrowLeft}>
        Previous
    </Button>
);

export const EndIcon = (): ReactNode => (
    <Button variant="primary" endIcon={faArrowRight}>
        Next
    </Button>
);

export const Loading = (): ReactNode => (
    <Button variant="primary" loading>
        Apply
    </Button>
);
