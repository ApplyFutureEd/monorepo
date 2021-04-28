import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class RequestedDocument {
  readonly name: string;
  readonly isMandatory?: boolean;
  readonly storageKey?: string;
  readonly description?: string;
  readonly condition?: string;
  readonly isSpecific?: boolean;
  constructor(init: ModelInit<RequestedDocument>);
}

export declare class Notification {
  readonly date: string;
  readonly description: string;
  readonly descriptionOptions: string;
  readonly link: string;
  readonly seen: boolean;
  readonly title: string;
  readonly titleOptions: string;
  constructor(init: ModelInit<Notification>);
}

export declare class ApplicationStep {
  readonly id: string;
  readonly date: string;
  readonly isMandatory: boolean;
  readonly label: string;
  readonly status: string;
  constructor(init: ModelInit<ApplicationStep>);
}

export declare class SchoolAttended {
  readonly address?: string;
  readonly attendedInstitutionFrom?: string;
  readonly attendedInstitutionTo?: string;
  readonly city?: string;
  readonly country?: string;
  readonly degreeAwarded?: number;
  readonly degreeAwardedOn?: string;
  readonly educationLevel?: number;
  readonly name?: string;
  readonly primaryLanguageInstruction?: string;
  constructor(init: ModelInit<SchoolAttended>);
}

export declare class WorkExperience {
  readonly address?: string;
  readonly compagnyName?: string;
  readonly title?: string;
  readonly workedFrom?: string;
  readonly workedTo?: string;
  constructor(init: ModelInit<WorkExperience>);
}

export declare class School {
  readonly id: string;
  readonly city: string;
  readonly country: string;
  readonly coverPhoto: string;
  readonly contactEmail?: string;
  readonly contactJobTitle?: string;
  readonly contactName?: string;
  readonly contactPhone?: string;
  readonly contractStatus: string;
  readonly creationYear: number;
  readonly description?: string;
  readonly institutionType: string;
  readonly internationalStudents: number;
  readonly lastUpdate: number;
  readonly logo: string;
  readonly name: string;
  readonly totalStudents: number;
  readonly slug: string;
  readonly published: boolean;
  readonly programs?: Program[];
  constructor(init: ModelInit<School>);
  static copyOf(source: School, mutator: (draft: MutableModel<School>) => MutableModel<School> | void): School;
}

export declare class Program {
  readonly id: string;
  readonly applicationFee: number;
  readonly applicationFeeCurrency: string;
  readonly city: string;
  readonly costOfLiving: number;
  readonly costOfLivingCurrency: string;
  readonly country: string;
  readonly degree: string;
  readonly description?: string;
  readonly discipline: string;
  readonly duration: number;
  readonly durationUnit: string;
  readonly fee: number;
  readonly feeCurrency: string;
  readonly feeUnit: string;
  readonly feesAndFinancing?: string;
  readonly gradePointAverage: number;
  readonly highestEducationLevel: number;
  readonly intakeInformation?: string;
  readonly intakes: string;
  readonly languages: string[];
  readonly lastUpdate: number;
  readonly minimumAge: number;
  readonly minimumWorkExperience: number;
  readonly minimumWorkExperienceUnit: string;
  readonly name: string;
  readonly otherRequirements?: string;
  readonly published: boolean;
  readonly requestedDocuments: RequestedDocument[];
  readonly schedule: string;
  readonly school?: School;
  readonly schoolName: string;
  readonly slug: string;
  readonly submissionDeadline: string;
  readonly testCambridgeAdvanced: number;
  readonly testCambridgeFirst: number;
  readonly testCeliCilsItPlida: number;
  readonly testDele: number;
  readonly testDelfdalf: number;
  readonly testGmat: number;
  readonly testGoethe: number;
  readonly testGre: number;
  readonly testIelts: number;
  readonly testTagemage: number;
  readonly testTcftef: number;
  readonly testToefl: number;
  readonly testToeic: number;
  constructor(init: ModelInit<Program>);
  static copyOf(source: Program, mutator: (draft: MutableModel<Program>) => MutableModel<Program> | void): Program;
}

export declare class Student {
  readonly id: string;
  readonly address?: string;
  readonly applications?: Application[];
  readonly birthday?: string;
  readonly city?: string;
  readonly country?: string;
  readonly degrees?: string[];
  readonly disciplines?: string[];
  readonly documents?: Document[];
  readonly educationCountry?: string;
  readonly email?: string;
  readonly fatherFirstName?: string;
  readonly fatherLastName?: string;
  readonly firstLanguage?: string;
  readonly firstName?: string;
  readonly favoritePrograms?: string[];
  readonly favoriteSchools?: string[];
  readonly gender?: string;
  readonly gradePointAverage?: number;
  readonly guardianFirstName?: string;
  readonly guardianLastName?: string;
  readonly hasMandatoryDocuments?: boolean;
  readonly highestEducationLevel?: number;
  readonly lastName?: string;
  readonly lastUpdate: number;
  readonly locale?: string;
  readonly maritalStatus?: string;
  readonly middleName?: string;
  readonly modalProfileCompletedViewed?: boolean;
  readonly phoneNumber?: string;
  readonly motherFirstName?: string;
  readonly motherMaidenName?: string;
  readonly nationality?: string;
  readonly notifications?: Notification[];
  readonly parentsAddress?: string;
  readonly parentsCity?: string;
  readonly parentsCountry?: string;
  readonly parentsEmail?: string;
  readonly parentsPhoneNumber?: string;
  readonly passportNumber?: string;
  readonly refusedVisa?: boolean;
  readonly refusedVisaReason?: string;
  readonly schoolsAttended?: SchoolAttended[];
  readonly testCambridgeAdvanced?: number;
  readonly testCambridgeAdvancedDate?: string;
  readonly testCambridgeFirst?: number;
  readonly testCambridgeFirstDate?: string;
  readonly testCeliCilsItPlida?: number;
  readonly testCeliCilsItPlidaDate?: string;
  readonly testDele?: number;
  readonly testDeleDate?: string;
  readonly testDelfdalf?: number;
  readonly testDelfdalfDate?: string;
  readonly testEnglishPending?: boolean;
  readonly testGmat?: number;
  readonly testGmatDate?: string;
  readonly testGoethe?: number;
  readonly testGoetheDate?: string;
  readonly testGre?: number;
  readonly testGreDate?: string;
  readonly testIelts?: number;
  readonly testIeltsDate?: string;
  readonly testLogicAndReasoningPending?: boolean;
  readonly testOtherLanguagesPending?: boolean;
  readonly testTagemage?: number;
  readonly testTagemageDate?: string;
  readonly testTcftef?: number;
  readonly testTcftefDate?: string;
  readonly testToefl?: number;
  readonly testToeflDate?: string;
  readonly testToeic?: number;
  readonly testToeicDate?: string;
  readonly validVisa?: boolean;
  readonly workExperiences?: WorkExperience[];
  constructor(init: ModelInit<Student>);
  static copyOf(source: Student, mutator: (draft: MutableModel<Student>) => MutableModel<Student> | void): Student;
}

export declare class Application {
  readonly id: string;
  readonly admissionResult?: string;
  readonly document?: string;
  readonly decisionLetterDate?: string;
  readonly intake: string;
  readonly interviewDate?: string;
  readonly lastUpdate: number;
  readonly modalApplicationCompletedViewed: boolean;
  readonly notifications?: Notification[];
  readonly program?: Program;
  readonly programId: string;
  readonly steps?: ApplicationStep[];
  readonly student?: Student;
  readonly todo?: string;
  readonly tuitionsFeePaymentDate?: string;
  readonly visaDate?: string;
  constructor(init: ModelInit<Application>);
  static copyOf(source: Application, mutator: (draft: MutableModel<Application>) => MutableModel<Application> | void): Application;
}

export declare class Document {
  readonly id: string;
  readonly student?: Student;
  readonly name: string;
  readonly storageKey?: string;
  constructor(init: ModelInit<Document>);
  static copyOf(source: Document, mutator: (draft: MutableModel<Document>) => MutableModel<Document> | void): Document;
}

export declare class SearchAlert {
  readonly id: string;
  readonly lastUpdate: number;
  readonly student?: Student;
  readonly type: string;
  readonly query: string;
  constructor(init: ModelInit<SearchAlert>);
  static copyOf(source: SearchAlert, mutator: (draft: MutableModel<SearchAlert>) => MutableModel<SearchAlert> | void): SearchAlert;
}

export declare class Feedback {
  readonly id: string;
  readonly application?: Application;
  readonly applicationId: string;
  readonly lastUpdate: number;
  readonly rating: number;
  constructor(init: ModelInit<Feedback>);
  static copyOf(source: Feedback, mutator: (draft: MutableModel<Feedback>) => MutableModel<Feedback> | void): Feedback;
}

export declare class Post {
  readonly id: string;
  readonly category: string;
  readonly content: string;
  readonly lastUpdate: number;
  readonly published: boolean;
  readonly slug: string;
  readonly title: string;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}