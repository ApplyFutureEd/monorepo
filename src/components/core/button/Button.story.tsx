import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';

import Button from './Button';

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs]
};

export const withText = () => (
    <Button type="button" variant="primary">
        Hello Button
    </Button>
);
