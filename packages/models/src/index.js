// @ts-check
import { initSchema } from '@aws-amplify/datastore';

import { schema } from './schema';

const {
    School,
    Program,
    Student,
    Document,
    Application,
    SearchAlert,
    Feedback,
    Post,
    RequestedDocument,
    SchoolAttended,
    WorkExperience,
    ApplicationStep,
    Notification
} = initSchema(schema);

export {
    School,
    Program,
    Student,
    Document,
    Application,
    SearchAlert,
    Feedback,
    Post,
    RequestedDocument,
    SchoolAttended,
    WorkExperience,
    ApplicationStep,
    Notification
};
