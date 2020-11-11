import Button from '@components/core/button/Button';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { withKnobs } from '@storybook/addon-knobs';
import React, { ReactNode } from 'react';

export default {
    component: Button,
    decorators: [withKnobs],
    title: 'Button'
};

export const Primary = (): ReactNode => <Button variant="primary">Apply</Button>;

export const Secondary = (): ReactNode => <Button variant="secondary">Apply</Button>;

export const Success = (): ReactNode => <Button variant="success">Sent</Button>;

export const Danger = (): ReactNode => <Button variant="danger">Delete</Button>;

export const Disabled = (): ReactNode => (
    <Button disabled variant="primary">
        Apply
    </Button>
);

export const StartIcon = (): ReactNode => (
    <Button startIcon={faArrowLeft} variant="primary">
        Previous
    </Button>
);

export const EndIcon = (): ReactNode => (
    <Button endIcon={faArrowRight} variant="primary">
        Next
    </Button>
);

export const Loading = (): ReactNode => (
    <Button isLoading variant="primary">
        Apply
    </Button>
);
