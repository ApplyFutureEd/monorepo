import { withKnobs } from '@storybook/addon-knobs';
import React, { ReactNode } from 'react';

import Button from './Button';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs]
};

export const withText = (): ReactNode => (
    <Button type="button" variant="primary">
        Hello Button
    </Button>
);
