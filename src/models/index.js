// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const DurationUnit = {
  "DAY": "day",
  "MONTH": "month",
  "YEAR": "year",
  "WEEK": "week"
};

const { Student, Document, Application, Program, School, SearchAlert, Feedback, Post, SchoolAttended, WorkExperience, ApplicationStepsTemplate, ApplicationStep, RequestedDocument, Notification } = initSchema(schema);

export {
  Student,
  Document,
  Application,
  Program,
  School,
  SearchAlert,
  Feedback,
  Post,
  DurationUnit,
  SchoolAttended,
  WorkExperience,
  ApplicationStepsTemplate,
  ApplicationStep,
  RequestedDocument,
  Notification
};