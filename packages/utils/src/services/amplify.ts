/* eslint-disable @typescript-eslint/ban-types */
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import Amplify from 'aws-amplify';

import config from './aws-exports';

export const configure = (authMode?: GRAPHQL_AUTH_MODE): void => {
    if (authMode === GRAPHQL_AUTH_MODE.API_KEY) {
        Amplify.configure({ ...config, aws_appsync_authenticationType: 'API_KEY' });
        return;
    }
    if (authMode === GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) {
        Amplify.configure({
            ...config,
            aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS'
        });
        return;
    }
    Amplify.configure({ ...config });
    return;
};
