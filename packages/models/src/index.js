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
    ApplicationStepsTemplate,
    ApplicationStep,
    SchoolAttended,
    WorkExperience,
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
    ApplicationStepsTemplate,
    ApplicationStep,
    SchoolAttended,
    WorkExperience,
    Notification
};
