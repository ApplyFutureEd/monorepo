"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
exports.handler = (event, context, callback) => {
    const cognitoIdentityServiceProvider = new aws_sdk_1.default.CognitoIdentityServiceProvider();
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
//# sourceMappingURL=index.js.map