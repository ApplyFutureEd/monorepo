import React from 'react';
import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/client-api';
import Layout from './Layout';

addParameters({
    viewMode: 'docs'
});

addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);
