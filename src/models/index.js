// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const DurationUnit = {
  "DAY": "DAY",
  "MONTH": "MONTH",
  "YEAR": "YEAR",
  "WEEK": "WEEK"
};

const { Student, Document, Application, Program, School, SearchAlert, Feedback, SchoolAttended, WorkExperience, ApplicationStepsTemplate, ApplicationStep, RequestedDocument, Notification } = initSchema(schema);

export {
  Student,
  Document,
  Application,
  Program,
  School,
  SearchAlert,
  Feedback,
  DurationUnit,
  SchoolAttended,
  WorkExperience,
  ApplicationStepsTemplate,
  ApplicationStep,
  RequestedDocument,
  Notification
};