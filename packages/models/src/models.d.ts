import { ModelInit, MutableModel, PersistentModelConstructor } from '@aws-amplify/datastore';

export declare class RequestedDocument {
    readonly name?: string;
    readonly isMandatory?: boolean;
    readonly storageKey?: string;
    readonly description?: string;
    readonly condition?: string;
    readonly isSpecific?: boolean;
    constructor(init: ModelInit<RequestedDocument>);
}

export declare class ApplicationStepsTemplate {
    readonly targets?: string[];
    readonly steps?: ApplicationStep[];
    constructor(init: ModelInit<ApplicationStepsTemplate>);
}

export declare class ApplicationStep {
    readonly id: string;
    readonly status?: string;
    readonly date?: string;
    readonly isMandatory?: boolean;
    constructor(init: ModelInit<ApplicationStep>);
}

export declare class SchoolAttended {
    readonly name?: string;
    readonly address?: string;
    readonly city?: string;
    readonly country?: string;
    readonly primaryLanguageInstruction?: string;
    readonly educationLevel?: number;
    readonly degreeAwarded?: number;
    readonly degreeAwardedOn?: string;
    readonly attendedInstitutionFrom?: string;
    readonly attendedInstitutionTo?: string;
    constructor(init: ModelInit<SchoolAttended>);
}

export declare class WorkExperience {
    readonly title?: string;
    readonly compagnyName?: string;
    readonly address?: string;
    readonly workedFrom?: string;
    readonly workedTo?: string;
    constructor(init: ModelInit<WorkExperience>);
}

export declare class Notification {
    readonly title?: string;
    readonly titleOptions?: string;
    readonly description?: string;
    readonly descriptionOptions?: string;
    readonly date?: string;
    readonly seen?: boolean;
    readonly link?: string;
    constructor(init: ModelInit<Notification>);
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
    readonly creationYear: string;
    readonly description?: string;
    readonly institutionType: string;
    readonly internationalStudents: number;
    readonly logo: string;
    readonly name: string;
    readonly totalStudents: number;
    readonly slug: string;
    readonly published: boolean;
    readonly programs?: Program[];
    readonly stepsTemplates: ApplicationStepsTemplate[];
    readonly contractStatus: string;
    constructor(init: ModelInit<School>);
    static copyOf(
        source: School,
        mutator: (draft: MutableModel<School>) => MutableModel<School> | void
    ): School;
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
    readonly testDelfdalf: number;
    readonly testGmat: number;
    readonly testGre: number;
    readonly testIelts: number;
    readonly testTagemage: number;
    readonly testTcftef: number;
    readonly testToefl: number;
    readonly testToeic: number;
    constructor(init: ModelInit<Program>);
    static copyOf(
        source: Program,
        mutator: (draft: MutableModel<Program>) => MutableModel<Program> | void
    ): Program;
}

export declare class Student {
    readonly id: string;
    readonly email?: string;
    readonly phoneNumber?: string;
    readonly address?: string;
    readonly city?: string;
    readonly country?: string;
    readonly firstName?: string;
    readonly middleName?: string;
    readonly lastName?: string;
    readonly birthday?: string;
    readonly firstLanguage?: string;
    readonly passportNumber?: string;
    readonly gender?: string;
    readonly maritalStatus?: string;
    readonly fatherFirstName?: string;
    readonly fatherLastName?: string;
    readonly motherFirstName?: string;
    readonly motherMaidenName?: string;
    readonly guardianLastName?: string;
    readonly guardianFirstName?: string;
    readonly parentsAddress?: string;
    readonly parentsCity?: string;
    readonly parentsCountry?: string;
    readonly parentsPhoneNumber?: string;
    readonly parentsEmail?: string;
    readonly disciplines?: string[];
    readonly degrees?: string[];
    readonly nationality?: string;
    readonly educationCountry?: string;
    readonly highestEducationLevel?: number;
    readonly gradePointAverage?: number;
    readonly schoolsAttended?: SchoolAttended[];
    readonly testToefl?: number;
    readonly testIelts?: number;
    readonly testToeic?: number;
    readonly testTcftef?: number;
    readonly testDelfdalf?: number;
    readonly testGre?: number;
    readonly testGmat?: number;
    readonly testTagemage?: number;
    readonly testCambridgeFirst?: number;
    readonly testCambridgeAdvanced?: number;
    readonly testToeflDate?: string;
    readonly testIeltsDate?: string;
    readonly testToeicDate?: string;
    readonly testTcftefDate?: string;
    readonly testDelfdalfDate?: string;
    readonly testGreDate?: string;
    readonly testGmatDate?: string;
    readonly testTagemageDate?: string;
    readonly testCambridgeFirstDate?: string;
    readonly testCambridgeAdvancedDate?: string;
    readonly testEnglishPending?: boolean;
    readonly testFrenchPending?: boolean;
    readonly testLogicAndReasoningPending?: boolean;
    readonly validVisa?: boolean;
    readonly refusedVisa?: boolean;
    readonly refusedVisaReason?: string;
    readonly workExperiences?: WorkExperience[];
    readonly documents?: Document[];
    readonly favoritePrograms?: string[];
    readonly favoriteSchools?: string[];
    readonly applications?: Application[];
    readonly hasMandatoryDocuments?: boolean;
    readonly modalProfileCompletedViewed?: boolean;
    readonly notifications?: Notification[];
    readonly locale?: string;
    constructor(init: ModelInit<Student>);
    static copyOf(
        source: Student,
        mutator: (draft: MutableModel<Student>) => MutableModel<Student> | void
    ): Student;
}

export declare class Document {
    readonly id: string;
    readonly student?: Student;
    readonly name?: string;
    readonly storageKey?: string;
    constructor(init: ModelInit<Document>);
    static copyOf(
        source: Document,
        mutator: (draft: MutableModel<Document>) => MutableModel<Document> | void
    ): Document;
}

export declare class Application {
    readonly id: string;
    readonly student?: Student;
    readonly programId: string;
    readonly program?: Program;
    readonly intake?: string;
    readonly document?: string;
    readonly steps?: ApplicationStep[];
    readonly interviewDate?: string;
    readonly admissionResult?: string;
    readonly tuitionsFeePaymentDate?: string;
    readonly decisionLetterDate?: string;
    readonly visaDate?: string;
    readonly todo?: string;
    readonly notifications?: Notification[];
    readonly modalApplicationCompletedViewed?: boolean;
    constructor(init: ModelInit<Application>);
    static copyOf(
        source: Application,
        mutator: (draft: MutableModel<Application>) => MutableModel<Application> | void
    ): Application;
}

export declare class SearchAlert {
    readonly id: string;
    readonly query?: string;
    readonly type?: string;
    readonly student?: Student;
    constructor(init: ModelInit<SearchAlert>);
    static copyOf(
        source: SearchAlert,
        mutator: (draft: MutableModel<SearchAlert>) => MutableModel<SearchAlert> | void
    ): SearchAlert;
}

export declare class Feedback {
    readonly id: string;
    readonly rating?: number;
    readonly applicationId: string;
    readonly application?: Application;
    constructor(init: ModelInit<Feedback>);
    static copyOf(
        source: Feedback,
        mutator: (draft: MutableModel<Feedback>) => MutableModel<Feedback> | void
    ): Feedback;
}

export declare class Post {
    readonly id: string;
    readonly category: string;
    readonly content: string;
    readonly published: boolean;
    readonly slug: string;
    readonly title: string;
    constructor(init: ModelInit<Post>);
    static copyOf(
        source: Post,
        mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void
    ): Post;
}
