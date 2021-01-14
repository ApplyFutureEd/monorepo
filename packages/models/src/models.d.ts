import { ModelInit, MutableModel, PersistentModelConstructor } from '@aws-amplify/datastore';

export enum Country {
    AF = 'AF',
    AL = 'AL',
    DZ = 'DZ',
    AD = 'AD',
    AO = 'AO',
    AG = 'AG',
    AR = 'AR',
    AM = 'AM',
    AU = 'AU',
    AT = 'AT',
    AZ = 'AZ',
    BS = 'BS',
    BH = 'BH',
    BD = 'BD',
    BB = 'BB',
    BY = 'BY',
    BE = 'BE',
    BZ = 'BZ',
    BJ = 'BJ',
    BT = 'BT',
    BO = 'BO',
    BA = 'BA',
    BW = 'BW',
    BR = 'BR',
    BG = 'BG',
    BF = 'BF',
    BI = 'BI',
    KH = 'KH',
    CM = 'CM',
    CA = 'CA',
    CV = 'CV',
    CF = 'CF',
    TD = 'TD',
    CL = 'CL',
    CN = 'CN',
    CO = 'CO',
    KM = 'KM',
    CG = 'CG',
    CD = 'CD',
    CR = 'CR',
    CI = 'CI',
    HR = 'HR',
    CU = 'CU',
    CY = 'CY',
    CZ = 'CZ',
    DK = 'DK',
    DJ = 'DJ',
    DM = 'DM',
    DO = 'DO',
    EC = 'EC',
    EG = 'EG',
    SV = 'SV',
    GQ = 'GQ',
    ER = 'ER',
    EE = 'EE',
    ET = 'ET',
    FJ = 'FJ',
    FI = 'FI',
    FR = 'FR',
    GA = 'GA',
    GM = 'GM',
    GE = 'GE',
    DE = 'DE',
    GH = 'GH',
    GR = 'GR',
    GD = 'GD',
    GP = 'GP',
    GT = 'GT',
    GN = 'GN',
    GW = 'GW',
    GY = 'GY',
    HT = 'HT',
    VA = 'VA',
    HN = 'HN',
    HK = 'HK',
    HU = 'HU',
    IS = 'IS',
    IN = 'IN',
    ID = 'ID',
    IR = 'IR',
    IQ = 'IQ',
    IE = 'IE',
    IL = 'IL',
    IT = 'IT',
    JM = 'JM',
    JP = 'JP',
    JO = 'JO',
    KZ = 'KZ',
    KE = 'KE',
    KI = 'KI',
    KP = 'KP',
    KR = 'KR',
    KW = 'KW',
    KG = 'KG',
    LA = 'LA',
    LV = 'LV',
    LB = 'LB',
    LS = 'LS',
    LR = 'LR',
    LY = 'LY',
    LI = 'LI',
    LT = 'LT',
    LU = 'LU',
    MO = 'MO',
    MK = 'MK',
    MG = 'MG',
    MW = 'MW',
    MY = 'MY',
    MV = 'MV',
    ML = 'ML',
    MT = 'MT',
    MH = 'MH',
    MR = 'MR',
    MU = 'MU',
    MX = 'MX',
    FM = 'FM',
    MD = 'MD',
    MC = 'MC',
    MN = 'MN',
    ME = 'ME',
    MA = 'MA',
    MZ = 'MZ',
    MM = 'MM',
    NA = 'NA',
    NR = 'NR',
    NP = 'NP',
    NL = 'NL',
    NZ = 'NZ',
    NI = 'NI',
    NE = 'NE',
    NG = 'NG',
    NO = 'NO',
    OM = 'OM',
    PK = 'PK',
    PW = 'PW',
    PS = 'PS',
    PA = 'PA',
    PG = 'PG',
    PY = 'PY',
    PE = 'PE',
    PH = 'PH',
    PL = 'PL',
    PT = 'PT',
    QA = 'QA',
    RO = 'RO',
    RU = 'RU',
    RW = 'RW',
    KN = 'KN',
    LC = 'LC',
    VC = 'VC',
    WS = 'WS',
    SM = 'SM',
    ST = 'ST',
    SA = 'SA',
    SN = 'SN',
    RS = 'RS',
    SC = 'SC',
    SL = 'SL',
    SG = 'SG',
    SK = 'SK',
    SI = 'SI',
    SB = 'SB',
    SO = 'SO',
    ZA = 'ZA',
    SS = 'SS',
    ES = 'ES',
    LK = 'LK',
    SD = 'SD',
    SR = 'SR',
    SE = 'SE',
    CH = 'CH',
    SY = 'SY',
    TW = 'TW',
    TJ = 'TJ',
    TZ = 'TZ',
    TH = 'TH',
    TL = 'TL',
    TG = 'TG',
    TO = 'TO',
    TT = 'TT',
    TN = 'TN',
    TR = 'TR',
    TM = 'TM',
    TV = 'TV',
    UG = 'UG',
    UA = 'UA',
    AE = 'AE',
    GB = 'GB',
    US = 'US',
    UY = 'UY',
    UZ = 'UZ',
    VU = 'VU',
    VE = 'VE',
    VN = 'VN',
    YE = 'YE',
    ZM = 'ZM',
    ZW = 'ZW'
}

export enum ContractStatus {
    PRIORITY = 'PRIORITY',
    CONTACTED = 'CONTACTED',
    IN_NEGOCIATION = 'IN_NEGOCIATION',
    SIGNED = 'SIGNED'
}

export enum Currency {
    CHF = 'CHF',
    CNY = 'CNY',
    EUR = 'EUR',
    GBP = 'GBP'
}

export enum Degree {
    BACHELOR = 'BACHELOR',
    MASTER = 'MASTER',
    DOCTORATE = 'DOCTORATE'
}

export enum Discipline {
    BUSINESS_MANAGEMENT_AND_ECONOMICS = 'BUSINESS_MANAGEMENT_AND_ECONOMICS',
    ENGINEERING_AND_TECHNOLOGY = 'ENGINEERING_AND_TECHNOLOGY',
    SCIENCES = 'SCIENCES',
    CULINARY_ARTS = 'CULINARY_ARTS',
    LAW_POLITICS_SOCIAL_COMMUNITY_SERVICE_AND_TEACHING = 'LAW_POLITICS_SOCIAL_COMMUNITY_SERVICE_AND_TEACHING',
    ARTS = 'ARTS',
    HEALTH_SCIENCES_MEDICINE_NURSING_PARAMEDIC_AND_KINESIOLOGY = 'HEALTH_SCIENCES_MEDICINE_NURSING_PARAMEDIC_AND_KINESIOLOGY',
    ENGLISH_FOR_ACADEMIC_STUDIES = 'ENGLISH_FOR_ACADEMIC_STUDIES'
}

export enum DurationUnit {
    DAY = 'DAY',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
    WEEK = 'WEEK'
}

export enum FeeUnit {
    ANNUAL = 'ANNUAL',
    TOTAL = 'TOTAL'
}

export enum InstitutionType {
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}

export enum Language {
    AF = 'AF',
    SQ = 'SQ',
    AR = 'AR',
    HY = 'HY',
    EU = 'EU',
    BN = 'BN',
    BG = 'BG',
    CA = 'CA',
    KM = 'KM',
    ZH = 'ZH',
    HR = 'HR',
    CS = 'CS',
    DA = 'DA',
    NL = 'NL',
    EN = 'EN',
    ET = 'ET',
    FJ = 'FJ',
    FI = 'FI',
    FR = 'FR',
    KA = 'KA',
    DE = 'DE',
    EL = 'EL',
    GU = 'GU',
    HE = 'HE',
    HI = 'HI',
    HU = 'HU',
    IS = 'IS',
    ID = 'ID',
    GA = 'GA',
    IT = 'IT',
    JA = 'JA',
    JW = 'JW',
    KO = 'KO',
    LA = 'LA',
    LV = 'LV',
    LT = 'LT',
    MK = 'MK',
    MS = 'MS',
    ML = 'ML',
    MT = 'MT',
    MI = 'MI',
    MR = 'MR',
    MN = 'MN',
    NE = 'NE',
    NO = 'NO',
    FA = 'FA',
    PL = 'PL',
    PT = 'PT',
    PA = 'PA',
    QU = 'QU',
    RO = 'RO',
    RU = 'RU',
    SM = 'SM',
    SR = 'SR',
    SK = 'SK',
    SL = 'SL',
    ES = 'ES',
    SW = 'SW',
    SV = 'SV',
    TA = 'TA',
    TT = 'TT',
    TE = 'TE',
    TH = 'TH',
    BO = 'BO',
    TO = 'TO',
    TR = 'TR',
    UK = 'UK',
    UR = 'UR',
    UZ = 'UZ',
    VI = 'VI',
    CY = 'CY',
    XH = 'XH'
}

export enum Schedule {
    FULL_TIME = 'FULL_TIME',
    PART_TIME = 'PART_TIME'
}

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
    readonly country: Country | keyof typeof Country;
    readonly coverPhoto: string;
    readonly contactEmail?: string;
    readonly contactJobTitle?: string;
    readonly contactName?: string;
    readonly contactPhone?: string;
    readonly creationYear: string;
    readonly description?: string;
    readonly institutionType: InstitutionType | keyof typeof InstitutionType;
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
    readonly applicationFeeCurrency: Currency | keyof typeof Currency;
    readonly city: string;
    readonly costOfLiving: number;
    readonly costOfLivingCurrency: Currency | keyof typeof Currency;
    readonly country: Country | keyof typeof Country;
    readonly degree: Degree | keyof typeof Degree;
    readonly description?: string;
    readonly discipline: Discipline | keyof typeof Discipline;
    readonly duration: number;
    readonly durationUnit: DurationUnit | keyof typeof DurationUnit;
    readonly fee: number;
    readonly feeCurrency: Currency | keyof typeof Currency;
    readonly feesAndFinancing?: string;
    readonly feeUnit: FeeUnit | keyof typeof FeeUnit;
    readonly gradePointAverage: number;
    readonly highestEducationLevel: number;
    readonly intakes: string;
    readonly intakeInformation?: string;
    readonly languages: Language[];
    readonly minimumAge: number;
    readonly minimumWorkExperience: number;
    readonly minimumWorkExperienceUnit: string;
    readonly name: string;
    readonly otherRequirements?: string;
    readonly published: boolean;
    readonly requestedDocuments: RequestedDocument[];
    readonly schedule: Schedule | keyof typeof Schedule;
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
