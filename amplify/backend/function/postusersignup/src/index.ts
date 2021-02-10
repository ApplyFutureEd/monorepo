import { APIGatewayProxyCallbackV2, APIGatewayProxyEvent, Context } from 'aws-lambda';
import AWS from 'aws-sdk';

exports.handler = (event: any, context: Context, callback: APIGatewayProxyCallbackV2): void => {
    const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

    const params = {
        GroupName: 'student',
        UserPoolId: event.userPoolId,
        Username: event.userName
    };

    cognitoIdentityServiceProvider.adminAddUserToGroup(params, function (err) {
        if (err) {
            callback(err); // uh oh, an error
        }

        callback(null, event); // yay! success
    });
};
