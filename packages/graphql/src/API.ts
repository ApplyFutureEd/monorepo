/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSchoolInput = {
    city: string;
    country: Country;
    coverPhoto: string;
    contactEmail?: string | null;
    contactJobTitle?: string | null;
    contactName?: string | null;
    contactPhone?: string | null;
    creationYear: string;
    description?: string | null;
    id?: string | null;
    institutionType: InstitutionType;
    internationalStudents: number;
    logo: string;
    name: string;
    totalStudents: number;
    slug: string;
    published: boolean;
    stepsTemplates: Array<ApplicationStepsTemplateInput | null>;
    contractStatus: string;
};

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

export enum InstitutionType {
    PRIVATE = 'PRIVATE',
    PUBLIC = 'PUBLIC'
}

export type ApplicationStepsTemplateInput = {
    targets?: Array<string | null> | null;
    steps?: Array<ApplicationStepInput | null> | null;
};

export type ApplicationStepInput = {
    id: string;
    status?: string | null;
    date?: string | null;
    isMandatory?: boolean | null;
};

export type ModelSchoolConditionInput = {
    city?: ModelStringInput | null;
    country?: ModelCountryInput | null;
    coverPhoto?: ModelStringInput | null;
    contactEmail?: ModelStringInput | null;
    contactJobTitle?: ModelStringInput | null;
    contactName?: ModelStringInput | null;
    contactPhone?: ModelStringInput | null;
    creationYear?: ModelStringInput | null;
    description?: ModelStringInput | null;
    institutionType?: ModelInstitutionTypeInput | null;
    internationalStudents?: ModelFloatInput | null;
    logo?: ModelStringInput | null;
    name?: ModelStringInput | null;
    totalStudents?: ModelFloatInput | null;
    slug?: ModelStringInput | null;
    published?: ModelBooleanInput | null;
    contractStatus?: ModelStringInput | null;
    and?: Array<ModelSchoolConditionInput | null> | null;
    or?: Array<ModelSchoolConditionInput | null> | null;
    not?: ModelSchoolConditionInput | null;
};

export type ModelStringInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
    binary = 'binary',
    binarySet = 'binarySet',
    bool = 'bool',
    list = 'list',
    map = 'map',
    number = 'number',
    numberSet = 'numberSet',
    string = 'string',
    stringSet = 'stringSet',
    _null = '_null'
}

export type ModelSizeInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
};

export type ModelCountryInput = {
    eq?: Country | null;
    ne?: Country | null;
};

export type ModelInstitutionTypeInput = {
    eq?: InstitutionType | null;
    ne?: InstitutionType | null;
};

export type ModelFloatInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};

export type ModelBooleanInput = {
    ne?: boolean | null;
    eq?: boolean | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};

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

export type UpdateSchoolInput = {
    city?: string | null;
    country?: Country | null;
    coverPhoto?: string | null;
    contactEmail?: string | null;
    contactJobTitle?: string | null;
    contactName?: string | null;
    contactPhone?: string | null;
    creationYear?: string | null;
    description?: string | null;
    id: string;
    institutionType?: InstitutionType | null;
    internationalStudents?: number | null;
    logo?: string | null;
    name?: string | null;
    totalStudents?: number | null;
    slug?: string | null;
    published?: boolean | null;
    stepsTemplates?: Array<ApplicationStepsTemplateInput | null> | null;
    contractStatus?: string | null;
};

export type DeleteSchoolInput = {
    id?: string | null;
};

export type CreateProgramInput = {
    applicationFee: number;
    applicationFeeCurrency: Currency;
    city: string;
    costOfLiving: number;
    costOfLivingCurrency: Currency;
    country: Country;
    degree: Degree;
    description?: string | null;
    discipline: Discipline;
    duration: number;
    durationUnit: DurationUnit;
    fee: number;
    feeCurrency: Currency;
    feesAndFinancing?: string | null;
    feeUnit: FeeUnit;
    gradePointAverage: number;
    highestEducationLevel: number;
    id?: string | null;
    intakes: string;
    intakeInformation?: string | null;
    languages: Array<Language | null>;
    minimumAge: number;
    minimumWorkExperience: number;
    minimumWorkExperienceUnit: DurationUnit;
    name: string;
    otherRequirements?: string | null;
    published: boolean;
    requestedDocuments: Array<RequestedDocumentInput | null>;
    schedule: Schedule;
    schoolId: string;
    schoolName: string;
    slug: string;
    submissionDeadline: string;
    testCambridgeAdvanced: number;
    testCambridgeFirst: number;
    testDelfdalf: number;
    testGmat: number;
    testGre: number;
    testIelts: number;
    testTagemage: number;
    testTcftef: number;
    testToefl: number;
    testToeic: number;
};

export type RequestedDocumentInput = {
    name?: string | null;
    isMandatory?: boolean | null;
    storageKey?: string | null;
    description?: string | null;
    condition?: string | null;
    isSpecific?: boolean | null;
};

export type ModelProgramConditionInput = {
    applicationFee?: ModelFloatInput | null;
    applicationFeeCurrency?: ModelCurrencyInput | null;
    city?: ModelStringInput | null;
    costOfLiving?: ModelFloatInput | null;
    costOfLivingCurrency?: ModelCurrencyInput | null;
    country?: ModelCountryInput | null;
    degree?: ModelDegreeInput | null;
    description?: ModelStringInput | null;
    discipline?: ModelDisciplineInput | null;
    duration?: ModelFloatInput | null;
    durationUnit?: ModelDurationUnitInput | null;
    fee?: ModelFloatInput | null;
    feeCurrency?: ModelCurrencyInput | null;
    feesAndFinancing?: ModelStringInput | null;
    feeUnit?: ModelFeeUnitInput | null;
    gradePointAverage?: ModelFloatInput | null;
    highestEducationLevel?: ModelFloatInput | null;
    intakes?: ModelStringInput | null;
    intakeInformation?: ModelStringInput | null;
    languages?: ModelLanguageListInput | null;
    minimumAge?: ModelFloatInput | null;
    minimumWorkExperience?: ModelFloatInput | null;
    minimumWorkExperienceUnit?: ModelDurationUnitInput | null;
    name?: ModelStringInput | null;
    otherRequirements?: ModelStringInput | null;
    published?: ModelBooleanInput | null;
    schedule?: ModelScheduleInput | null;
    schoolId?: ModelIDInput | null;
    schoolName?: ModelStringInput | null;
    slug?: ModelStringInput | null;
    submissionDeadline?: ModelStringInput | null;
    testCambridgeAdvanced?: ModelFloatInput | null;
    testCambridgeFirst?: ModelFloatInput | null;
    testDelfdalf?: ModelFloatInput | null;
    testGmat?: ModelFloatInput | null;
    testGre?: ModelFloatInput | null;
    testIelts?: ModelFloatInput | null;
    testTagemage?: ModelFloatInput | null;
    testTcftef?: ModelFloatInput | null;
    testToefl?: ModelFloatInput | null;
    testToeic?: ModelFloatInput | null;
    and?: Array<ModelProgramConditionInput | null> | null;
    or?: Array<ModelProgramConditionInput | null> | null;
    not?: ModelProgramConditionInput | null;
};

export type ModelCurrencyInput = {
    eq?: Currency | null;
    ne?: Currency | null;
};

export type ModelDegreeInput = {
    eq?: Degree | null;
    ne?: Degree | null;
};

export type ModelDisciplineInput = {
    eq?: Discipline | null;
    ne?: Discipline | null;
};

export type ModelDurationUnitInput = {
    eq?: DurationUnit | null;
    ne?: DurationUnit | null;
};

export type ModelFeeUnitInput = {
    eq?: FeeUnit | null;
    ne?: FeeUnit | null;
};

export type ModelLanguageListInput = {
    eq?: Array<Language | null> | null;
    ne?: Array<Language | null> | null;
    contains?: Language | null;
    notContains?: Language | null;
};

export type ModelScheduleInput = {
    eq?: Schedule | null;
    ne?: Schedule | null;
};

export type ModelIDInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export type UpdateProgramInput = {
    applicationFee?: number | null;
    applicationFeeCurrency?: Currency | null;
    city?: string | null;
    costOfLiving?: number | null;
    costOfLivingCurrency?: Currency | null;
    country?: Country | null;
    degree?: Degree | null;
    description?: string | null;
    discipline?: Discipline | null;
    duration?: number | null;
    durationUnit?: DurationUnit | null;
    fee?: number | null;
    feeCurrency?: Currency | null;
    feesAndFinancing?: string | null;
    feeUnit?: FeeUnit | null;
    gradePointAverage?: number | null;
    highestEducationLevel?: number | null;
    id: string;
    intakes?: string | null;
    intakeInformation?: string | null;
    languages?: Array<Language | null> | null;
    minimumAge?: number | null;
    minimumWorkExperience?: number | null;
    minimumWorkExperienceUnit?: DurationUnit | null;
    name?: string | null;
    otherRequirements?: string | null;
    published?: boolean | null;
    requestedDocuments?: Array<RequestedDocumentInput | null> | null;
    schedule?: Schedule | null;
    schoolId?: string | null;
    schoolName?: string | null;
    slug?: string | null;
    submissionDeadline?: string | null;
    testCambridgeAdvanced?: number | null;
    testCambridgeFirst?: number | null;
    testDelfdalf?: number | null;
    testGmat?: number | null;
    testGre?: number | null;
    testIelts?: number | null;
    testTagemage?: number | null;
    testTcftef?: number | null;
    testToefl?: number | null;
    testToeic?: number | null;
};

export type DeleteProgramInput = {
    id?: string | null;
};

export type CreateStudentInput = {
    id?: string | null;
    email?: string | null;
    phoneNumber?: string | null;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    firstName?: string | null;
    middleName?: string | null;
    lastName?: string | null;
    birthday?: string | null;
    firstLanguage?: string | null;
    passportNumber?: string | null;
    gender?: string | null;
    maritalStatus?: string | null;
    fatherFirstName?: string | null;
    fatherLastName?: string | null;
    motherFirstName?: string | null;
    motherMaidenName?: string | null;
    guardianLastName?: string | null;
    guardianFirstName?: string | null;
    parentsAddress?: string | null;
    parentsCity?: string | null;
    parentsCountry?: string | null;
    parentsPhoneNumber?: string | null;
    parentsEmail?: string | null;
    disciplines?: Array<string | null> | null;
    degrees?: Array<string | null> | null;
    nationality?: string | null;
    educationCountry?: string | null;
    highestEducationLevel?: number | null;
    gradePointAverage?: number | null;
    schoolsAttended?: Array<SchoolAttendedInput | null> | null;
    testToefl?: number | null;
    testIelts?: number | null;
    testToeic?: number | null;
    testTcftef?: number | null;
    testDelfdalf?: number | null;
    testGre?: number | null;
    testGmat?: number | null;
    testTagemage?: number | null;
    testCambridgeFirst?: number | null;
    testCambridgeAdvanced?: number | null;
    testToeflDate?: string | null;
    testIeltsDate?: string | null;
    testToeicDate?: string | null;
    testTcftefDate?: string | null;
    testDelfdalfDate?: string | null;
    testGreDate?: string | null;
    testGmatDate?: string | null;
    testTagemageDate?: string | null;
    testCambridgeFirstDate?: string | null;
    testCambridgeAdvancedDate?: string | null;
    testEnglishPending?: boolean | null;
    testFrenchPending?: boolean | null;
    testLogicAndReasoningPending?: boolean | null;
    validVisa?: boolean | null;
    refusedVisa?: boolean | null;
    refusedVisaReason?: string | null;
    workExperiences?: Array<WorkExperienceInput | null> | null;
    favoritePrograms?: Array<string | null> | null;
    favoriteSchools?: Array<string | null> | null;
    hasMandatoryDocuments?: boolean | null;
    modalProfileCompletedViewed?: boolean | null;
    notifications?: Array<NotificationInput | null> | null;
    locale?: string | null;
};

export type SchoolAttendedInput = {
    name?: string | null;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    primaryLanguageInstruction?: string | null;
    educationLevel?: number | null;
    degreeAwarded?: number | null;
    degreeAwardedOn?: string | null;
    attendedInstitutionFrom?: string | null;
    attendedInstitutionTo?: string | null;
};

export type WorkExperienceInput = {
    title?: string | null;
    compagnyName?: string | null;
    address?: string | null;
    workedFrom?: string | null;
    workedTo?: string | null;
};

export type NotificationInput = {
    title?: string | null;
    titleOptions?: string | null;
    description?: string | null;
    descriptionOptions?: string | null;
    date?: string | null;
    seen?: boolean | null;
    link?: string | null;
};

export type ModelStudentConditionInput = {
    email?: ModelStringInput | null;
    phoneNumber?: ModelStringInput | null;
    address?: ModelStringInput | null;
    city?: ModelStringInput | null;
    country?: ModelStringInput | null;
    firstName?: ModelStringInput | null;
    middleName?: ModelStringInput | null;
    lastName?: ModelStringInput | null;
    birthday?: ModelStringInput | null;
    firstLanguage?: ModelStringInput | null;
    passportNumber?: ModelStringInput | null;
    gender?: ModelStringInput | null;
    maritalStatus?: ModelStringInput | null;
    fatherFirstName?: ModelStringInput | null;
    fatherLastName?: ModelStringInput | null;
    motherFirstName?: ModelStringInput | null;
    motherMaidenName?: ModelStringInput | null;
    guardianLastName?: ModelStringInput | null;
    guardianFirstName?: ModelStringInput | null;
    parentsAddress?: ModelStringInput | null;
    parentsCity?: ModelStringInput | null;
    parentsCountry?: ModelStringInput | null;
    parentsPhoneNumber?: ModelStringInput | null;
    parentsEmail?: ModelStringInput | null;
    disciplines?: ModelStringInput | null;
    degrees?: ModelStringInput | null;
    nationality?: ModelStringInput | null;
    educationCountry?: ModelStringInput | null;
    highestEducationLevel?: ModelFloatInput | null;
    gradePointAverage?: ModelFloatInput | null;
    testToefl?: ModelFloatInput | null;
    testIelts?: ModelFloatInput | null;
    testToeic?: ModelFloatInput | null;
    testTcftef?: ModelFloatInput | null;
    testDelfdalf?: ModelFloatInput | null;
    testGre?: ModelFloatInput | null;
    testGmat?: ModelFloatInput | null;
    testTagemage?: ModelFloatInput | null;
    testCambridgeFirst?: ModelFloatInput | null;
    testCambridgeAdvanced?: ModelFloatInput | null;
    testToeflDate?: ModelStringInput | null;
    testIeltsDate?: ModelStringInput | null;
    testToeicDate?: ModelStringInput | null;
    testTcftefDate?: ModelStringInput | null;
    testDelfdalfDate?: ModelStringInput | null;
    testGreDate?: ModelStringInput | null;
    testGmatDate?: ModelStringInput | null;
    testTagemageDate?: ModelStringInput | null;
    testCambridgeFirstDate?: ModelStringInput | null;
    testCambridgeAdvancedDate?: ModelStringInput | null;
    testEnglishPending?: ModelBooleanInput | null;
    testFrenchPending?: ModelBooleanInput | null;
    testLogicAndReasoningPending?: ModelBooleanInput | null;
    validVisa?: ModelBooleanInput | null;
    refusedVisa?: ModelBooleanInput | null;
    refusedVisaReason?: ModelStringInput | null;
    favoritePrograms?: ModelStringInput | null;
    favoriteSchools?: ModelStringInput | null;
    hasMandatoryDocuments?: ModelBooleanInput | null;
    modalProfileCompletedViewed?: ModelBooleanInput | null;
    locale?: ModelStringInput | null;
    and?: Array<ModelStudentConditionInput | null> | null;
    or?: Array<ModelStudentConditionInput | null> | null;
    not?: ModelStudentConditionInput | null;
};

export type UpdateStudentInput = {
    id: string;
    email?: string | null;
    phoneNumber?: string | null;
    address?: string | null;
    city?: string | null;
    country?: string | null;
    firstName?: string | null;
    middleName?: string | null;
    lastName?: string | null;
    birthday?: string | null;
    firstLanguage?: string | null;
    passportNumber?: string | null;
    gender?: string | null;
    maritalStatus?: string | null;
    fatherFirstName?: string | null;
    fatherLastName?: string | null;
    motherFirstName?: string | null;
    motherMaidenName?: string | null;
    guardianLastName?: string | null;
    guardianFirstName?: string | null;
    parentsAddress?: string | null;
    parentsCity?: string | null;
    parentsCountry?: string | null;
    parentsPhoneNumber?: string | null;
    parentsEmail?: string | null;
    disciplines?: Array<string | null> | null;
    degrees?: Array<string | null> | null;
    nationality?: string | null;
    educationCountry?: string | null;
    highestEducationLevel?: number | null;
    gradePointAverage?: number | null;
    schoolsAttended?: Array<SchoolAttendedInput | null> | null;
    testToefl?: number | null;
    testIelts?: number | null;
    testToeic?: number | null;
    testTcftef?: number | null;
    testDelfdalf?: number | null;
    testGre?: number | null;
    testGmat?: number | null;
    testTagemage?: number | null;
    testCambridgeFirst?: number | null;
    testCambridgeAdvanced?: number | null;
    testToeflDate?: string | null;
    testIeltsDate?: string | null;
    testToeicDate?: string | null;
    testTcftefDate?: string | null;
    testDelfdalfDate?: string | null;
    testGreDate?: string | null;
    testGmatDate?: string | null;
    testTagemageDate?: string | null;
    testCambridgeFirstDate?: string | null;
    testCambridgeAdvancedDate?: string | null;
    testEnglishPending?: boolean | null;
    testFrenchPending?: boolean | null;
    testLogicAndReasoningPending?: boolean | null;
    validVisa?: boolean | null;
    refusedVisa?: boolean | null;
    refusedVisaReason?: string | null;
    workExperiences?: Array<WorkExperienceInput | null> | null;
    favoritePrograms?: Array<string | null> | null;
    favoriteSchools?: Array<string | null> | null;
    hasMandatoryDocuments?: boolean | null;
    modalProfileCompletedViewed?: boolean | null;
    notifications?: Array<NotificationInput | null> | null;
    locale?: string | null;
};

export type DeleteStudentInput = {
    id?: string | null;
};

export type CreateDocumentInput = {
    id?: string | null;
    studentId: string;
    name?: string | null;
    storageKey?: string | null;
};

export type ModelDocumentConditionInput = {
    studentId?: ModelIDInput | null;
    name?: ModelStringInput | null;
    storageKey?: ModelStringInput | null;
    and?: Array<ModelDocumentConditionInput | null> | null;
    or?: Array<ModelDocumentConditionInput | null> | null;
    not?: ModelDocumentConditionInput | null;
};

export type UpdateDocumentInput = {
    id: string;
    studentId?: string | null;
    name?: string | null;
    storageKey?: string | null;
};

export type DeleteDocumentInput = {
    id?: string | null;
};

export type CreateApplicationInput = {
    id?: string | null;
    studentId: string;
    programId: string;
    intake?: string | null;
    document?: string | null;
    steps?: Array<ApplicationStepInput | null> | null;
    interviewDate?: string | null;
    admissionResult?: string | null;
    tuitionsFeePaymentDate?: string | null;
    decisionLetterDate?: string | null;
    visaDate?: string | null;
    todo?: string | null;
    notifications?: Array<NotificationInput | null> | null;
    modalApplicationCompletedViewed?: boolean | null;
};

export type ModelApplicationConditionInput = {
    studentId?: ModelIDInput | null;
    programId?: ModelIDInput | null;
    intake?: ModelStringInput | null;
    document?: ModelStringInput | null;
    interviewDate?: ModelStringInput | null;
    admissionResult?: ModelStringInput | null;
    tuitionsFeePaymentDate?: ModelStringInput | null;
    decisionLetterDate?: ModelStringInput | null;
    visaDate?: ModelStringInput | null;
    todo?: ModelStringInput | null;
    modalApplicationCompletedViewed?: ModelBooleanInput | null;
    and?: Array<ModelApplicationConditionInput | null> | null;
    or?: Array<ModelApplicationConditionInput | null> | null;
    not?: ModelApplicationConditionInput | null;
};

export type UpdateApplicationInput = {
    id: string;
    studentId?: string | null;
    programId?: string | null;
    intake?: string | null;
    document?: string | null;
    steps?: Array<ApplicationStepInput | null> | null;
    interviewDate?: string | null;
    admissionResult?: string | null;
    tuitionsFeePaymentDate?: string | null;
    decisionLetterDate?: string | null;
    visaDate?: string | null;
    todo?: string | null;
    notifications?: Array<NotificationInput | null> | null;
    modalApplicationCompletedViewed?: boolean | null;
};

export type DeleteApplicationInput = {
    id?: string | null;
};

export type CreateSearchAlertInput = {
    id?: string | null;
    query?: string | null;
    type?: string | null;
    studentId: string;
};

export type ModelSearchAlertConditionInput = {
    query?: ModelStringInput | null;
    type?: ModelStringInput | null;
    studentId?: ModelIDInput | null;
    and?: Array<ModelSearchAlertConditionInput | null> | null;
    or?: Array<ModelSearchAlertConditionInput | null> | null;
    not?: ModelSearchAlertConditionInput | null;
};

export type UpdateSearchAlertInput = {
    id: string;
    query?: string | null;
    type?: string | null;
    studentId?: string | null;
};

export type DeleteSearchAlertInput = {
    id?: string | null;
};

export type CreateFeedbackInput = {
    id?: string | null;
    rating?: number | null;
    applicationId: string;
};

export type ModelFeedbackConditionInput = {
    rating?: ModelFloatInput | null;
    applicationId?: ModelIDInput | null;
    and?: Array<ModelFeedbackConditionInput | null> | null;
    or?: Array<ModelFeedbackConditionInput | null> | null;
    not?: ModelFeedbackConditionInput | null;
};

export type UpdateFeedbackInput = {
    id: string;
    rating?: number | null;
    applicationId?: string | null;
};

export type DeleteFeedbackInput = {
    id?: string | null;
};

export type CreatePostInput = {
    category: string;
    content: string;
    id?: string | null;
    published: boolean;
    slug: string;
    title: string;
};

export type ModelPostConditionInput = {
    category?: ModelStringInput | null;
    content?: ModelStringInput | null;
    published?: ModelBooleanInput | null;
    slug?: ModelStringInput | null;
    title?: ModelStringInput | null;
    and?: Array<ModelPostConditionInput | null> | null;
    or?: Array<ModelPostConditionInput | null> | null;
    not?: ModelPostConditionInput | null;
};

export type UpdatePostInput = {
    category?: string | null;
    content?: string | null;
    id: string;
    published?: boolean | null;
    slug?: string | null;
    title?: string | null;
};

export type DeletePostInput = {
    id?: string | null;
};

export type ModelStudentFilterInput = {
    id?: ModelIDInput | null;
    email?: ModelStringInput | null;
    phoneNumber?: ModelStringInput | null;
    address?: ModelStringInput | null;
    city?: ModelStringInput | null;
    country?: ModelStringInput | null;
    firstName?: ModelStringInput | null;
    middleName?: ModelStringInput | null;
    lastName?: ModelStringInput | null;
    birthday?: ModelStringInput | null;
    firstLanguage?: ModelStringInput | null;
    passportNumber?: ModelStringInput | null;
    gender?: ModelStringInput | null;
    maritalStatus?: ModelStringInput | null;
    fatherFirstName?: ModelStringInput | null;
    fatherLastName?: ModelStringInput | null;
    motherFirstName?: ModelStringInput | null;
    motherMaidenName?: ModelStringInput | null;
    guardianLastName?: ModelStringInput | null;
    guardianFirstName?: ModelStringInput | null;
    parentsAddress?: ModelStringInput | null;
    parentsCity?: ModelStringInput | null;
    parentsCountry?: ModelStringInput | null;
    parentsPhoneNumber?: ModelStringInput | null;
    parentsEmail?: ModelStringInput | null;
    disciplines?: ModelStringInput | null;
    degrees?: ModelStringInput | null;
    nationality?: ModelStringInput | null;
    educationCountry?: ModelStringInput | null;
    highestEducationLevel?: ModelFloatInput | null;
    gradePointAverage?: ModelFloatInput | null;
    testToefl?: ModelFloatInput | null;
    testIelts?: ModelFloatInput | null;
    testToeic?: ModelFloatInput | null;
    testTcftef?: ModelFloatInput | null;
    testDelfdalf?: ModelFloatInput | null;
    testGre?: ModelFloatInput | null;
    testGmat?: ModelFloatInput | null;
    testTagemage?: ModelFloatInput | null;
    testCambridgeFirst?: ModelFloatInput | null;
    testCambridgeAdvanced?: ModelFloatInput | null;
    testToeflDate?: ModelStringInput | null;
    testIeltsDate?: ModelStringInput | null;
    testToeicDate?: ModelStringInput | null;
    testTcftefDate?: ModelStringInput | null;
    testDelfdalfDate?: ModelStringInput | null;
    testGreDate?: ModelStringInput | null;
    testGmatDate?: ModelStringInput | null;
    testTagemageDate?: ModelStringInput | null;
    testCambridgeFirstDate?: ModelStringInput | null;
    testCambridgeAdvancedDate?: ModelStringInput | null;
    testEnglishPending?: ModelBooleanInput | null;
    testFrenchPending?: ModelBooleanInput | null;
    testLogicAndReasoningPending?: ModelBooleanInput | null;
    validVisa?: ModelBooleanInput | null;
    refusedVisa?: ModelBooleanInput | null;
    refusedVisaReason?: ModelStringInput | null;
    favoritePrograms?: ModelStringInput | null;
    favoriteSchools?: ModelStringInput | null;
    hasMandatoryDocuments?: ModelBooleanInput | null;
    modalProfileCompletedViewed?: ModelBooleanInput | null;
    locale?: ModelStringInput | null;
    and?: Array<ModelStudentFilterInput | null> | null;
    or?: Array<ModelStudentFilterInput | null> | null;
    not?: ModelStudentFilterInput | null;
};

export type ModelDocumentFilterInput = {
    id?: ModelIDInput | null;
    studentId?: ModelIDInput | null;
    name?: ModelStringInput | null;
    storageKey?: ModelStringInput | null;
    and?: Array<ModelDocumentFilterInput | null> | null;
    or?: Array<ModelDocumentFilterInput | null> | null;
    not?: ModelDocumentFilterInput | null;
};

export type ModelApplicationFilterInput = {
    id?: ModelIDInput | null;
    studentId?: ModelIDInput | null;
    programId?: ModelIDInput | null;
    intake?: ModelStringInput | null;
    document?: ModelStringInput | null;
    interviewDate?: ModelStringInput | null;
    admissionResult?: ModelStringInput | null;
    tuitionsFeePaymentDate?: ModelStringInput | null;
    decisionLetterDate?: ModelStringInput | null;
    visaDate?: ModelStringInput | null;
    todo?: ModelStringInput | null;
    modalApplicationCompletedViewed?: ModelBooleanInput | null;
    and?: Array<ModelApplicationFilterInput | null> | null;
    or?: Array<ModelApplicationFilterInput | null> | null;
    not?: ModelApplicationFilterInput | null;
};

export type ModelSearchAlertFilterInput = {
    id?: ModelIDInput | null;
    query?: ModelStringInput | null;
    type?: ModelStringInput | null;
    studentId?: ModelIDInput | null;
    and?: Array<ModelSearchAlertFilterInput | null> | null;
    or?: Array<ModelSearchAlertFilterInput | null> | null;
    not?: ModelSearchAlertFilterInput | null;
};

export type ModelFeedbackFilterInput = {
    id?: ModelIDInput | null;
    rating?: ModelFloatInput | null;
    applicationId?: ModelIDInput | null;
    and?: Array<ModelFeedbackFilterInput | null> | null;
    or?: Array<ModelFeedbackFilterInput | null> | null;
    not?: ModelFeedbackFilterInput | null;
};

export enum ModelSortDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}

export type ModelSchoolFilterInput = {
    city?: ModelStringInput | null;
    country?: ModelCountryInput | null;
    coverPhoto?: ModelStringInput | null;
    contactEmail?: ModelStringInput | null;
    contactJobTitle?: ModelStringInput | null;
    contactName?: ModelStringInput | null;
    contactPhone?: ModelStringInput | null;
    creationYear?: ModelStringInput | null;
    description?: ModelStringInput | null;
    id?: ModelIDInput | null;
    institutionType?: ModelInstitutionTypeInput | null;
    internationalStudents?: ModelFloatInput | null;
    logo?: ModelStringInput | null;
    name?: ModelStringInput | null;
    totalStudents?: ModelFloatInput | null;
    slug?: ModelStringInput | null;
    published?: ModelBooleanInput | null;
    contractStatus?: ModelStringInput | null;
    and?: Array<ModelSchoolFilterInput | null> | null;
    or?: Array<ModelSchoolFilterInput | null> | null;
    not?: ModelSchoolFilterInput | null;
};

export type SearchableSchoolFilterInput = {
    city?: SearchableStringFilterInput | null;
    country?: SearchableStringFilterInput | null;
    coverPhoto?: SearchableStringFilterInput | null;
    contactEmail?: SearchableStringFilterInput | null;
    contactJobTitle?: SearchableStringFilterInput | null;
    contactName?: SearchableStringFilterInput | null;
    contactPhone?: SearchableStringFilterInput | null;
    creationYear?: SearchableStringFilterInput | null;
    description?: SearchableStringFilterInput | null;
    id?: SearchableIDFilterInput | null;
    internationalStudents?: SearchableFloatFilterInput | null;
    logo?: SearchableStringFilterInput | null;
    name?: SearchableStringFilterInput | null;
    totalStudents?: SearchableFloatFilterInput | null;
    slug?: SearchableStringFilterInput | null;
    published?: SearchableBooleanFilterInput | null;
    contractStatus?: SearchableStringFilterInput | null;
    and?: Array<SearchableSchoolFilterInput | null> | null;
    or?: Array<SearchableSchoolFilterInput | null> | null;
    not?: SearchableSchoolFilterInput | null;
};

export type SearchableStringFilterInput = {
    ne?: string | null;
    gt?: string | null;
    lt?: string | null;
    gte?: string | null;
    lte?: string | null;
    eq?: string | null;
    match?: string | null;
    matchPhrase?: string | null;
    matchPhrasePrefix?: string | null;
    multiMatch?: string | null;
    exists?: boolean | null;
    wildcard?: string | null;
    regexp?: string | null;
};

export type SearchableIDFilterInput = {
    ne?: string | null;
    gt?: string | null;
    lt?: string | null;
    gte?: string | null;
    lte?: string | null;
    eq?: string | null;
    match?: string | null;
    matchPhrase?: string | null;
    matchPhrasePrefix?: string | null;
    multiMatch?: string | null;
    exists?: boolean | null;
    wildcard?: string | null;
    regexp?: string | null;
};

export type SearchableFloatFilterInput = {
    ne?: number | null;
    gt?: number | null;
    lt?: number | null;
    gte?: number | null;
    lte?: number | null;
    eq?: number | null;
    range?: Array<number | null> | null;
};

export type SearchableBooleanFilterInput = {
    eq?: boolean | null;
    ne?: boolean | null;
};

export type SearchableSchoolSortInput = {
    field?: SearchableSchoolSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableSchoolSortableFields {
    city = 'city',
    country = 'country',
    coverPhoto = 'coverPhoto',
    contactEmail = 'contactEmail',
    contactJobTitle = 'contactJobTitle',
    contactName = 'contactName',
    contactPhone = 'contactPhone',
    creationYear = 'creationYear',
    description = 'description',
    id = 'id',
    internationalStudents = 'internationalStudents',
    logo = 'logo',
    name = 'name',
    totalStudents = 'totalStudents',
    slug = 'slug',
    published = 'published',
    contractStatus = 'contractStatus'
}

export enum SearchableSortDirection {
    asc = 'asc',
    desc = 'desc'
}

export type ModelProgramFilterInput = {
    applicationFee?: ModelFloatInput | null;
    applicationFeeCurrency?: ModelCurrencyInput | null;
    city?: ModelStringInput | null;
    costOfLiving?: ModelFloatInput | null;
    costOfLivingCurrency?: ModelCurrencyInput | null;
    country?: ModelCountryInput | null;
    degree?: ModelDegreeInput | null;
    description?: ModelStringInput | null;
    discipline?: ModelDisciplineInput | null;
    duration?: ModelFloatInput | null;
    durationUnit?: ModelDurationUnitInput | null;
    fee?: ModelFloatInput | null;
    feeCurrency?: ModelCurrencyInput | null;
    feesAndFinancing?: ModelStringInput | null;
    feeUnit?: ModelFeeUnitInput | null;
    gradePointAverage?: ModelFloatInput | null;
    highestEducationLevel?: ModelFloatInput | null;
    id?: ModelIDInput | null;
    intakes?: ModelStringInput | null;
    intakeInformation?: ModelStringInput | null;
    languages?: ModelLanguageListInput | null;
    minimumAge?: ModelFloatInput | null;
    minimumWorkExperience?: ModelFloatInput | null;
    minimumWorkExperienceUnit?: ModelDurationUnitInput | null;
    name?: ModelStringInput | null;
    otherRequirements?: ModelStringInput | null;
    published?: ModelBooleanInput | null;
    schedule?: ModelScheduleInput | null;
    schoolId?: ModelIDInput | null;
    schoolName?: ModelStringInput | null;
    slug?: ModelStringInput | null;
    submissionDeadline?: ModelStringInput | null;
    testCambridgeAdvanced?: ModelFloatInput | null;
    testCambridgeFirst?: ModelFloatInput | null;
    testDelfdalf?: ModelFloatInput | null;
    testGmat?: ModelFloatInput | null;
    testGre?: ModelFloatInput | null;
    testIelts?: ModelFloatInput | null;
    testTagemage?: ModelFloatInput | null;
    testTcftef?: ModelFloatInput | null;
    testToefl?: ModelFloatInput | null;
    testToeic?: ModelFloatInput | null;
    and?: Array<ModelProgramFilterInput | null> | null;
    or?: Array<ModelProgramFilterInput | null> | null;
    not?: ModelProgramFilterInput | null;
};

export type SearchableProgramFilterInput = {
    applicationFee?: SearchableFloatFilterInput | null;
    city?: SearchableStringFilterInput | null;
    country?: SearchableStringFilterInput | null;
    costOfLiving?: SearchableFloatFilterInput | null;
    description?: SearchableStringFilterInput | null;
    duration?: SearchableFloatFilterInput | null;
    fee?: SearchableFloatFilterInput | null;
    feesAndFinancing?: SearchableStringFilterInput | null;
    gradePointAverage?: SearchableFloatFilterInput | null;
    highestEducationLevel?: SearchableFloatFilterInput | null;
    id?: SearchableIDFilterInput | null;
    intakes?: SearchableStringFilterInput | null;
    intakeInformation?: SearchableStringFilterInput | null;
    minimumAge?: SearchableFloatFilterInput | null;
    minimumWorkExperience?: SearchableFloatFilterInput | null;
    name?: SearchableStringFilterInput | null;
    otherRequirements?: SearchableStringFilterInput | null;
    published?: SearchableBooleanFilterInput | null;
    schoolId?: SearchableIDFilterInput | null;
    schoolName?: SearchableStringFilterInput | null;
    slug?: SearchableStringFilterInput | null;
    submissionDeadline?: SearchableStringFilterInput | null;
    testCambridgeAdvanced?: SearchableFloatFilterInput | null;
    testCambridgeFirst?: SearchableFloatFilterInput | null;
    testDelfdalf?: SearchableFloatFilterInput | null;
    testGmat?: SearchableFloatFilterInput | null;
    testGre?: SearchableFloatFilterInput | null;
    testIelts?: SearchableFloatFilterInput | null;
    testTagemage?: SearchableFloatFilterInput | null;
    testTcftef?: SearchableFloatFilterInput | null;
    testToefl?: SearchableFloatFilterInput | null;
    testToeic?: SearchableFloatFilterInput | null;
    and?: Array<SearchableProgramFilterInput | null> | null;
    or?: Array<SearchableProgramFilterInput | null> | null;
    not?: SearchableProgramFilterInput | null;
};

export type SearchableProgramSortInput = {
    field?: SearchableProgramSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableProgramSortableFields {
    applicationFee = 'applicationFee',
    city = 'city',
    country = 'country',
    costOfLiving = 'costOfLiving',
    description = 'description',
    duration = 'duration',
    fee = 'fee',
    feesAndFinancing = 'feesAndFinancing',
    gradePointAverage = 'gradePointAverage',
    highestEducationLevel = 'highestEducationLevel',
    id = 'id',
    intakes = 'intakes',
    intakeInformation = 'intakeInformation',
    minimumAge = 'minimumAge',
    minimumWorkExperience = 'minimumWorkExperience',
    name = 'name',
    otherRequirements = 'otherRequirements',
    published = 'published',
    schoolId = 'schoolId',
    schoolName = 'schoolName',
    slug = 'slug',
    submissionDeadline = 'submissionDeadline',
    testCambridgeAdvanced = 'testCambridgeAdvanced',
    testCambridgeFirst = 'testCambridgeFirst',
    testDelfdalf = 'testDelfdalf',
    testGmat = 'testGmat',
    testGre = 'testGre',
    testIelts = 'testIelts',
    testTagemage = 'testTagemage',
    testTcftef = 'testTcftef',
    testToefl = 'testToefl',
    testToeic = 'testToeic'
}

export type ModelPostFilterInput = {
    category?: ModelStringInput | null;
    content?: ModelStringInput | null;
    id?: ModelIDInput | null;
    published?: ModelBooleanInput | null;
    slug?: ModelStringInput | null;
    title?: ModelStringInput | null;
    and?: Array<ModelPostFilterInput | null> | null;
    or?: Array<ModelPostFilterInput | null> | null;
    not?: ModelPostFilterInput | null;
};

export type CreateSchoolMutationVariables = {
    input: CreateSchoolInput;
    condition?: ModelSchoolConditionInput | null;
};

export type CreateSchoolMutation = {
    createSchool: {
        __typename: 'School';
        city: string;
        country: Country;
        coverPhoto: string;
        contactEmail: string | null;
        contactJobTitle: string | null;
        contactName: string | null;
        contactPhone: string | null;
        creationYear: string;
        description: string | null;
        id: string;
        institutionType: InstitutionType;
        internationalStudents: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        stepsTemplates: Array<{
            __typename: 'ApplicationStepsTemplate';
            targets: Array<string | null> | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
        } | null>;
        contractStatus: string;
        createdAt: string;
        updatedAt: string;
        programs: {
            __typename: 'ModelProgramConnection';
            items: Array<{
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
    } | null;
};

export type UpdateSchoolMutationVariables = {
    input: UpdateSchoolInput;
    condition?: ModelSchoolConditionInput | null;
};

export type UpdateSchoolMutation = {
    updateSchool: {
        __typename: 'School';
        city: string;
        country: Country;
        coverPhoto: string;
        contactEmail: string | null;
        contactJobTitle: string | null;
        contactName: string | null;
        contactPhone: string | null;
        creationYear: string;
        description: string | null;
        id: string;
        institutionType: InstitutionType;
        internationalStudents: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        stepsTemplates: Array<{
            __typename: 'ApplicationStepsTemplate';
            targets: Array<string | null> | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
        } | null>;
        contractStatus: string;
        createdAt: string;
        updatedAt: string;
        programs: {
            __typename: 'ModelProgramConnection';
            items: Array<{
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
    } | null;
};

export type DeleteSchoolMutationVariables = {
    input: DeleteSchoolInput;
    condition?: ModelSchoolConditionInput | null;
};

export type DeleteSchoolMutation = {
    deleteSchool: {
        __typename: 'School';
        city: string;
        country: Country;
        coverPhoto: string;
        contactEmail: string | null;
        contactJobTitle: string | null;
        contactName: string | null;
        contactPhone: string | null;
        creationYear: string;
        description: string | null;
        id: string;
        institutionType: InstitutionType;
        internationalStudents: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        stepsTemplates: Array<{
            __typename: 'ApplicationStepsTemplate';
            targets: Array<string | null> | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
        } | null>;
        contractStatus: string;
        createdAt: string;
        updatedAt: string;
        programs: {
            __typename: 'ModelProgramConnection';
            items: Array<{
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
    } | null;
};

export type CreateProgramMutationVariables = {
    input: CreateProgramInput;
    condition?: ModelProgramConditionInput | null;
};

export type CreateProgramMutation = {
    createProgram: {
        __typename: 'Program';
        applicationFee: number;
        applicationFeeCurrency: Currency;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: Currency;
        country: Country;
        degree: Degree;
        description: string | null;
        discipline: Discipline;
        duration: number;
        durationUnit: DurationUnit;
        fee: number;
        feeCurrency: Currency;
        feesAndFinancing: string | null;
        feeUnit: FeeUnit;
        gradePointAverage: number;
        highestEducationLevel: number;
        id: string;
        intakes: string;
        intakeInformation: string | null;
        languages: Array<Language | null>;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: DurationUnit;
        name: string;
        otherRequirements: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string | null;
            isMandatory: boolean | null;
            storageKey: string | null;
            description: string | null;
            condition: string | null;
            isSpecific: boolean | null;
        } | null>;
        schedule: Schedule;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testDelfdalf: number;
        testGmat: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school: {
            __typename: 'School';
            city: string;
            country: Country;
            coverPhoto: string;
            contactEmail: string | null;
            contactJobTitle: string | null;
            contactName: string | null;
            contactPhone: string | null;
            creationYear: string;
            description: string | null;
            id: string;
            institutionType: InstitutionType;
            internationalStudents: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            stepsTemplates: Array<{
                __typename: 'ApplicationStepsTemplate';
                targets: Array<string | null> | null;
            } | null>;
            contractStatus: string;
            createdAt: string;
            updatedAt: string;
            programs: {
                __typename: 'ModelProgramConnection';
                nextToken: string | null;
            } | null;
        } | null;
    } | null;
};

export type UpdateProgramMutationVariables = {
    input: UpdateProgramInput;
    condition?: ModelProgramConditionInput | null;
};

export type UpdateProgramMutation = {
    updateProgram: {
        __typename: 'Program';
        applicationFee: number;
        applicationFeeCurrency: Currency;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: Currency;
        country: Country;
        degree: Degree;
        description: string | null;
        discipline: Discipline;
        duration: number;
        durationUnit: DurationUnit;
        fee: number;
        feeCurrency: Currency;
        feesAndFinancing: string | null;
        feeUnit: FeeUnit;
        gradePointAverage: number;
        highestEducationLevel: number;
        id: string;
        intakes: string;
        intakeInformation: string | null;
        languages: Array<Language | null>;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: DurationUnit;
        name: string;
        otherRequirements: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string | null;
            isMandatory: boolean | null;
            storageKey: string | null;
            description: string | null;
            condition: string | null;
            isSpecific: boolean | null;
        } | null>;
        schedule: Schedule;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testDelfdalf: number;
        testGmat: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school: {
            __typename: 'School';
            city: string;
            country: Country;
            coverPhoto: string;
            contactEmail: string | null;
            contactJobTitle: string | null;
            contactName: string | null;
            contactPhone: string | null;
            creationYear: string;
            description: string | null;
            id: string;
            institutionType: InstitutionType;
            internationalStudents: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            stepsTemplates: Array<{
                __typename: 'ApplicationStepsTemplate';
                targets: Array<string | null> | null;
            } | null>;
            contractStatus: string;
            createdAt: string;
            updatedAt: string;
            programs: {
                __typename: 'ModelProgramConnection';
                nextToken: string | null;
            } | null;
        } | null;
    } | null;
};

export type DeleteProgramMutationVariables = {
    input: DeleteProgramInput;
    condition?: ModelProgramConditionInput | null;
};

export type DeleteProgramMutation = {
    deleteProgram: {
        __typename: 'Program';
        applicationFee: number;
        applicationFeeCurrency: Currency;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: Currency;
        country: Country;
        degree: Degree;
        description: string | null;
        discipline: Discipline;
        duration: number;
        durationUnit: DurationUnit;
        fee: number;
        feeCurrency: Currency;
        feesAndFinancing: string | null;
        feeUnit: FeeUnit;
        gradePointAverage: number;
        highestEducationLevel: number;
        id: string;
        intakes: string;
        intakeInformation: string | null;
        languages: Array<Language | null>;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: DurationUnit;
        name: string;
        otherRequirements: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string | null;
            isMandatory: boolean | null;
            storageKey: string | null;
            description: string | null;
            condition: string | null;
            isSpecific: boolean | null;
        } | null>;
        schedule: Schedule;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testDelfdalf: number;
        testGmat: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school: {
            __typename: 'School';
            city: string;
            country: Country;
            coverPhoto: string;
            contactEmail: string | null;
            contactJobTitle: string | null;
            contactName: string | null;
            contactPhone: string | null;
            creationYear: string;
            description: string | null;
            id: string;
            institutionType: InstitutionType;
            internationalStudents: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            stepsTemplates: Array<{
                __typename: 'ApplicationStepsTemplate';
                targets: Array<string | null> | null;
            } | null>;
            contractStatus: string;
            createdAt: string;
            updatedAt: string;
            programs: {
                __typename: 'ModelProgramConnection';
                nextToken: string | null;
            } | null;
        } | null;
    } | null;
};

export type CreateStudentMutationVariables = {
    input: CreateStudentInput;
    condition?: ModelStudentConditionInput | null;
};

export type CreateStudentMutation = {
    createStudent: {
        __typename: 'Student';
        id: string;
        email: string | null;
        phoneNumber: string | null;
        address: string | null;
        city: string | null;
        country: string | null;
        firstName: string | null;
        middleName: string | null;
        lastName: string | null;
        birthday: string | null;
        firstLanguage: string | null;
        passportNumber: string | null;
        gender: string | null;
        maritalStatus: string | null;
        fatherFirstName: string | null;
        fatherLastName: string | null;
        motherFirstName: string | null;
        motherMaidenName: string | null;
        guardianLastName: string | null;
        guardianFirstName: string | null;
        parentsAddress: string | null;
        parentsCity: string | null;
        parentsCountry: string | null;
        parentsPhoneNumber: string | null;
        parentsEmail: string | null;
        disciplines: Array<string | null> | null;
        degrees: Array<string | null> | null;
        nationality: string | null;
        educationCountry: string | null;
        highestEducationLevel: number | null;
        gradePointAverage: number | null;
        schoolsAttended: Array<{
            __typename: 'SchoolAttended';
            name: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            primaryLanguageInstruction: string | null;
            educationLevel: number | null;
            degreeAwarded: number | null;
            degreeAwardedOn: string | null;
            attendedInstitutionFrom: string | null;
            attendedInstitutionTo: string | null;
        } | null> | null;
        testToefl: number | null;
        testIelts: number | null;
        testToeic: number | null;
        testTcftef: number | null;
        testDelfdalf: number | null;
        testGre: number | null;
        testGmat: number | null;
        testTagemage: number | null;
        testCambridgeFirst: number | null;
        testCambridgeAdvanced: number | null;
        testToeflDate: string | null;
        testIeltsDate: string | null;
        testToeicDate: string | null;
        testTcftefDate: string | null;
        testDelfdalfDate: string | null;
        testGreDate: string | null;
        testGmatDate: string | null;
        testTagemageDate: string | null;
        testCambridgeFirstDate: string | null;
        testCambridgeAdvancedDate: string | null;
        testEnglishPending: boolean | null;
        testFrenchPending: boolean | null;
        testLogicAndReasoningPending: boolean | null;
        validVisa: boolean | null;
        refusedVisa: boolean | null;
        refusedVisaReason: string | null;
        workExperiences: Array<{
            __typename: 'WorkExperience';
            title: string | null;
            compagnyName: string | null;
            address: string | null;
            workedFrom: string | null;
            workedTo: string | null;
        } | null> | null;
        documents: {
            __typename: 'ModelDocumentConnection';
            items: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string | null;
                storageKey: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        favoritePrograms: Array<string | null> | null;
        favoriteSchools: Array<string | null> | null;
        applications: {
            __typename: 'ModelApplicationConnection';
            items: Array<{
                __typename: 'Application';
                id: string;
                studentId: string;
                programId: string;
                intake: string | null;
                document: string | null;
                interviewDate: string | null;
                admissionResult: string | null;
                tuitionsFeePaymentDate: string | null;
                decisionLetterDate: string | null;
                visaDate: string | null;
                todo: string | null;
                modalApplicationCompletedViewed: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        hasMandatoryDocuments: boolean | null;
        modalProfileCompletedViewed: boolean | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        locale: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type UpdateStudentMutationVariables = {
    input: UpdateStudentInput;
    condition?: ModelStudentConditionInput | null;
};

export type UpdateStudentMutation = {
    updateStudent: {
        __typename: 'Student';
        id: string;
        email: string | null;
        phoneNumber: string | null;
        address: string | null;
        city: string | null;
        country: string | null;
        firstName: string | null;
        middleName: string | null;
        lastName: string | null;
        birthday: string | null;
        firstLanguage: string | null;
        passportNumber: string | null;
        gender: string | null;
        maritalStatus: string | null;
        fatherFirstName: string | null;
        fatherLastName: string | null;
        motherFirstName: string | null;
        motherMaidenName: string | null;
        guardianLastName: string | null;
        guardianFirstName: string | null;
        parentsAddress: string | null;
        parentsCity: string | null;
        parentsCountry: string | null;
        parentsPhoneNumber: string | null;
        parentsEmail: string | null;
        disciplines: Array<string | null> | null;
        degrees: Array<string | null> | null;
        nationality: string | null;
        educationCountry: string | null;
        highestEducationLevel: number | null;
        gradePointAverage: number | null;
        schoolsAttended: Array<{
            __typename: 'SchoolAttended';
            name: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            primaryLanguageInstruction: string | null;
            educationLevel: number | null;
            degreeAwarded: number | null;
            degreeAwardedOn: string | null;
            attendedInstitutionFrom: string | null;
            attendedInstitutionTo: string | null;
        } | null> | null;
        testToefl: number | null;
        testIelts: number | null;
        testToeic: number | null;
        testTcftef: number | null;
        testDelfdalf: number | null;
        testGre: number | null;
        testGmat: number | null;
        testTagemage: number | null;
        testCambridgeFirst: number | null;
        testCambridgeAdvanced: number | null;
        testToeflDate: string | null;
        testIeltsDate: string | null;
        testToeicDate: string | null;
        testTcftefDate: string | null;
        testDelfdalfDate: string | null;
        testGreDate: string | null;
        testGmatDate: string | null;
        testTagemageDate: string | null;
        testCambridgeFirstDate: string | null;
        testCambridgeAdvancedDate: string | null;
        testEnglishPending: boolean | null;
        testFrenchPending: boolean | null;
        testLogicAndReasoningPending: boolean | null;
        validVisa: boolean | null;
        refusedVisa: boolean | null;
        refusedVisaReason: string | null;
        workExperiences: Array<{
            __typename: 'WorkExperience';
            title: string | null;
            compagnyName: string | null;
            address: string | null;
            workedFrom: string | null;
            workedTo: string | null;
        } | null> | null;
        documents: {
            __typename: 'ModelDocumentConnection';
            items: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string | null;
                storageKey: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        favoritePrograms: Array<string | null> | null;
        favoriteSchools: Array<string | null> | null;
        applications: {
            __typename: 'ModelApplicationConnection';
            items: Array<{
                __typename: 'Application';
                id: string;
                studentId: string;
                programId: string;
                intake: string | null;
                document: string | null;
                interviewDate: string | null;
                admissionResult: string | null;
                tuitionsFeePaymentDate: string | null;
                decisionLetterDate: string | null;
                visaDate: string | null;
                todo: string | null;
                modalApplicationCompletedViewed: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        hasMandatoryDocuments: boolean | null;
        modalProfileCompletedViewed: boolean | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        locale: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type DeleteStudentMutationVariables = {
    input: DeleteStudentInput;
    condition?: ModelStudentConditionInput | null;
};

export type DeleteStudentMutation = {
    deleteStudent: {
        __typename: 'Student';
        id: string;
        email: string | null;
        phoneNumber: string | null;
        address: string | null;
        city: string | null;
        country: string | null;
        firstName: string | null;
        middleName: string | null;
        lastName: string | null;
        birthday: string | null;
        firstLanguage: string | null;
        passportNumber: string | null;
        gender: string | null;
        maritalStatus: string | null;
        fatherFirstName: string | null;
        fatherLastName: string | null;
        motherFirstName: string | null;
        motherMaidenName: string | null;
        guardianLastName: string | null;
        guardianFirstName: string | null;
        parentsAddress: string | null;
        parentsCity: string | null;
        parentsCountry: string | null;
        parentsPhoneNumber: string | null;
        parentsEmail: string | null;
        disciplines: Array<string | null> | null;
        degrees: Array<string | null> | null;
        nationality: string | null;
        educationCountry: string | null;
        highestEducationLevel: number | null;
        gradePointAverage: number | null;
        schoolsAttended: Array<{
            __typename: 'SchoolAttended';
            name: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            primaryLanguageInstruction: string | null;
            educationLevel: number | null;
            degreeAwarded: number | null;
            degreeAwardedOn: string | null;
            attendedInstitutionFrom: string | null;
            attendedInstitutionTo: string | null;
        } | null> | null;
        testToefl: number | null;
        testIelts: number | null;
        testToeic: number | null;
        testTcftef: number | null;
        testDelfdalf: number | null;
        testGre: number | null;
        testGmat: number | null;
        testTagemage: number | null;
        testCambridgeFirst: number | null;
        testCambridgeAdvanced: number | null;
        testToeflDate: string | null;
        testIeltsDate: string | null;
        testToeicDate: string | null;
        testTcftefDate: string | null;
        testDelfdalfDate: string | null;
        testGreDate: string | null;
        testGmatDate: string | null;
        testTagemageDate: string | null;
        testCambridgeFirstDate: string | null;
        testCambridgeAdvancedDate: string | null;
        testEnglishPending: boolean | null;
        testFrenchPending: boolean | null;
        testLogicAndReasoningPending: boolean | null;
        validVisa: boolean | null;
        refusedVisa: boolean | null;
        refusedVisaReason: string | null;
        workExperiences: Array<{
            __typename: 'WorkExperience';
            title: string | null;
            compagnyName: string | null;
            address: string | null;
            workedFrom: string | null;
            workedTo: string | null;
        } | null> | null;
        documents: {
            __typename: 'ModelDocumentConnection';
            items: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string | null;
                storageKey: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        favoritePrograms: Array<string | null> | null;
        favoriteSchools: Array<string | null> | null;
        applications: {
            __typename: 'ModelApplicationConnection';
            items: Array<{
                __typename: 'Application';
                id: string;
                studentId: string;
                programId: string;
                intake: string | null;
                document: string | null;
                interviewDate: string | null;
                admissionResult: string | null;
                tuitionsFeePaymentDate: string | null;
                decisionLetterDate: string | null;
                visaDate: string | null;
                todo: string | null;
                modalApplicationCompletedViewed: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        hasMandatoryDocuments: boolean | null;
        modalProfileCompletedViewed: boolean | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        locale: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type CreateDocumentMutationVariables = {
    input: CreateDocumentInput;
    condition?: ModelDocumentConditionInput | null;
};

export type CreateDocumentMutation = {
    createDocument: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        name: string | null;
        storageKey: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type UpdateDocumentMutationVariables = {
    input: UpdateDocumentInput;
    condition?: ModelDocumentConditionInput | null;
};

export type UpdateDocumentMutation = {
    updateDocument: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        name: string | null;
        storageKey: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type DeleteDocumentMutationVariables = {
    input: DeleteDocumentInput;
    condition?: ModelDocumentConditionInput | null;
};

export type DeleteDocumentMutation = {
    deleteDocument: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        name: string | null;
        storageKey: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type CreateApplicationMutationVariables = {
    input: CreateApplicationInput;
    condition?: ModelApplicationConditionInput | null;
};

export type CreateApplicationMutation = {
    createApplication: {
        __typename: 'Application';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        programId: string;
        intake: string | null;
        document: string | null;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            status: string | null;
            date: string | null;
            isMandatory: boolean | null;
        } | null> | null;
        interviewDate: string | null;
        admissionResult: string | null;
        tuitionsFeePaymentDate: string | null;
        decisionLetterDate: string | null;
        visaDate: string | null;
        todo: string | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        modalApplicationCompletedViewed: boolean | null;
        createdAt: string;
        updatedAt: string;
        program: {
            __typename: 'Program';
            applicationFee: number;
            applicationFeeCurrency: Currency;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: Currency;
            country: Country;
            degree: Degree;
            description: string | null;
            discipline: Discipline;
            duration: number;
            durationUnit: DurationUnit;
            fee: number;
            feeCurrency: Currency;
            feesAndFinancing: string | null;
            feeUnit: FeeUnit;
            gradePointAverage: number;
            highestEducationLevel: number;
            id: string;
            intakes: string;
            intakeInformation: string | null;
            languages: Array<Language | null>;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: DurationUnit;
            name: string;
            otherRequirements: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string | null;
                isMandatory: boolean | null;
                storageKey: string | null;
                description: string | null;
                condition: string | null;
                isSpecific: boolean | null;
            } | null>;
            schedule: Schedule;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testDelfdalf: number;
            testGmat: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school: {
                __typename: 'School';
                city: string;
                country: Country;
                coverPhoto: string;
                contactEmail: string | null;
                contactJobTitle: string | null;
                contactName: string | null;
                contactPhone: string | null;
                creationYear: string;
                description: string | null;
                id: string;
                institutionType: InstitutionType;
                internationalStudents: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                contractStatus: string;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner: string | null;
    } | null;
};

export type UpdateApplicationMutationVariables = {
    input: UpdateApplicationInput;
    condition?: ModelApplicationConditionInput | null;
};

export type UpdateApplicationMutation = {
    updateApplication: {
        __typename: 'Application';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        programId: string;
        intake: string | null;
        document: string | null;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            status: string | null;
            date: string | null;
            isMandatory: boolean | null;
        } | null> | null;
        interviewDate: string | null;
        admissionResult: string | null;
        tuitionsFeePaymentDate: string | null;
        decisionLetterDate: string | null;
        visaDate: string | null;
        todo: string | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        modalApplicationCompletedViewed: boolean | null;
        createdAt: string;
        updatedAt: string;
        program: {
            __typename: 'Program';
            applicationFee: number;
            applicationFeeCurrency: Currency;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: Currency;
            country: Country;
            degree: Degree;
            description: string | null;
            discipline: Discipline;
            duration: number;
            durationUnit: DurationUnit;
            fee: number;
            feeCurrency: Currency;
            feesAndFinancing: string | null;
            feeUnit: FeeUnit;
            gradePointAverage: number;
            highestEducationLevel: number;
            id: string;
            intakes: string;
            intakeInformation: string | null;
            languages: Array<Language | null>;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: DurationUnit;
            name: string;
            otherRequirements: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string | null;
                isMandatory: boolean | null;
                storageKey: string | null;
                description: string | null;
                condition: string | null;
                isSpecific: boolean | null;
            } | null>;
            schedule: Schedule;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testDelfdalf: number;
            testGmat: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school: {
                __typename: 'School';
                city: string;
                country: Country;
                coverPhoto: string;
                contactEmail: string | null;
                contactJobTitle: string | null;
                contactName: string | null;
                contactPhone: string | null;
                creationYear: string;
                description: string | null;
                id: string;
                institutionType: InstitutionType;
                internationalStudents: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                contractStatus: string;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner: string | null;
    } | null;
};

export type DeleteApplicationMutationVariables = {
    input: DeleteApplicationInput;
    condition?: ModelApplicationConditionInput | null;
};

export type DeleteApplicationMutation = {
    deleteApplication: {
        __typename: 'Application';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        programId: string;
        intake: string | null;
        document: string | null;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            status: string | null;
            date: string | null;
            isMandatory: boolean | null;
        } | null> | null;
        interviewDate: string | null;
        admissionResult: string | null;
        tuitionsFeePaymentDate: string | null;
        decisionLetterDate: string | null;
        visaDate: string | null;
        todo: string | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        modalApplicationCompletedViewed: boolean | null;
        createdAt: string;
        updatedAt: string;
        program: {
            __typename: 'Program';
            applicationFee: number;
            applicationFeeCurrency: Currency;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: Currency;
            country: Country;
            degree: Degree;
            description: string | null;
            discipline: Discipline;
            duration: number;
            durationUnit: DurationUnit;
            fee: number;
            feeCurrency: Currency;
            feesAndFinancing: string | null;
            feeUnit: FeeUnit;
            gradePointAverage: number;
            highestEducationLevel: number;
            id: string;
            intakes: string;
            intakeInformation: string | null;
            languages: Array<Language | null>;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: DurationUnit;
            name: string;
            otherRequirements: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string | null;
                isMandatory: boolean | null;
                storageKey: string | null;
                description: string | null;
                condition: string | null;
                isSpecific: boolean | null;
            } | null>;
            schedule: Schedule;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testDelfdalf: number;
            testGmat: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school: {
                __typename: 'School';
                city: string;
                country: Country;
                coverPhoto: string;
                contactEmail: string | null;
                contactJobTitle: string | null;
                contactName: string | null;
                contactPhone: string | null;
                creationYear: string;
                description: string | null;
                id: string;
                institutionType: InstitutionType;
                internationalStudents: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                contractStatus: string;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner: string | null;
    } | null;
};

export type CreateSearchAlertMutationVariables = {
    input: CreateSearchAlertInput;
    condition?: ModelSearchAlertConditionInput | null;
};

export type CreateSearchAlertMutation = {
    createSearchAlert: {
        __typename: 'SearchAlert';
        id: string;
        query: string | null;
        type: string | null;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type UpdateSearchAlertMutationVariables = {
    input: UpdateSearchAlertInput;
    condition?: ModelSearchAlertConditionInput | null;
};

export type UpdateSearchAlertMutation = {
    updateSearchAlert: {
        __typename: 'SearchAlert';
        id: string;
        query: string | null;
        type: string | null;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type DeleteSearchAlertMutationVariables = {
    input: DeleteSearchAlertInput;
    condition?: ModelSearchAlertConditionInput | null;
};

export type DeleteSearchAlertMutation = {
    deleteSearchAlert: {
        __typename: 'SearchAlert';
        id: string;
        query: string | null;
        type: string | null;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type CreateFeedbackMutationVariables = {
    input: CreateFeedbackInput;
    condition?: ModelFeedbackConditionInput | null;
};

export type CreateFeedbackMutation = {
    createFeedback: {
        __typename: 'Feedback';
        id: string;
        rating: number | null;
        applicationId: string;
        application: {
            __typename: 'Application';
            id: string;
            studentId: string;
            student: {
                __typename: 'Student';
                id: string;
                email: string | null;
                phoneNumber: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                firstName: string | null;
                middleName: string | null;
                lastName: string | null;
                birthday: string | null;
                firstLanguage: string | null;
                passportNumber: string | null;
                gender: string | null;
                maritalStatus: string | null;
                fatherFirstName: string | null;
                fatherLastName: string | null;
                motherFirstName: string | null;
                motherMaidenName: string | null;
                guardianLastName: string | null;
                guardianFirstName: string | null;
                parentsAddress: string | null;
                parentsCity: string | null;
                parentsCountry: string | null;
                parentsPhoneNumber: string | null;
                parentsEmail: string | null;
                disciplines: Array<string | null> | null;
                degrees: Array<string | null> | null;
                nationality: string | null;
                educationCountry: string | null;
                highestEducationLevel: number | null;
                gradePointAverage: number | null;
                testToefl: number | null;
                testIelts: number | null;
                testToeic: number | null;
                testTcftef: number | null;
                testDelfdalf: number | null;
                testGre: number | null;
                testGmat: number | null;
                testTagemage: number | null;
                testCambridgeFirst: number | null;
                testCambridgeAdvanced: number | null;
                testToeflDate: string | null;
                testIeltsDate: string | null;
                testToeicDate: string | null;
                testTcftefDate: string | null;
                testDelfdalfDate: string | null;
                testGreDate: string | null;
                testGmatDate: string | null;
                testTagemageDate: string | null;
                testCambridgeFirstDate: string | null;
                testCambridgeAdvancedDate: string | null;
                testEnglishPending: boolean | null;
                testFrenchPending: boolean | null;
                testLogicAndReasoningPending: boolean | null;
                validVisa: boolean | null;
                refusedVisa: boolean | null;
                refusedVisaReason: string | null;
                favoritePrograms: Array<string | null> | null;
                favoriteSchools: Array<string | null> | null;
                hasMandatoryDocuments: boolean | null;
                modalProfileCompletedViewed: boolean | null;
                locale: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            programId: string;
            intake: string | null;
            document: string | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
            interviewDate: string | null;
            admissionResult: string | null;
            tuitionsFeePaymentDate: string | null;
            decisionLetterDate: string | null;
            visaDate: string | null;
            todo: string | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            modalApplicationCompletedViewed: boolean | null;
            createdAt: string;
            updatedAt: string;
            program: {
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type UpdateFeedbackMutationVariables = {
    input: UpdateFeedbackInput;
    condition?: ModelFeedbackConditionInput | null;
};

export type UpdateFeedbackMutation = {
    updateFeedback: {
        __typename: 'Feedback';
        id: string;
        rating: number | null;
        applicationId: string;
        application: {
            __typename: 'Application';
            id: string;
            studentId: string;
            student: {
                __typename: 'Student';
                id: string;
                email: string | null;
                phoneNumber: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                firstName: string | null;
                middleName: string | null;
                lastName: string | null;
                birthday: string | null;
                firstLanguage: string | null;
                passportNumber: string | null;
                gender: string | null;
                maritalStatus: string | null;
                fatherFirstName: string | null;
                fatherLastName: string | null;
                motherFirstName: string | null;
                motherMaidenName: string | null;
                guardianLastName: string | null;
                guardianFirstName: string | null;
                parentsAddress: string | null;
                parentsCity: string | null;
                parentsCountry: string | null;
                parentsPhoneNumber: string | null;
                parentsEmail: string | null;
                disciplines: Array<string | null> | null;
                degrees: Array<string | null> | null;
                nationality: string | null;
                educationCountry: string | null;
                highestEducationLevel: number | null;
                gradePointAverage: number | null;
                testToefl: number | null;
                testIelts: number | null;
                testToeic: number | null;
                testTcftef: number | null;
                testDelfdalf: number | null;
                testGre: number | null;
                testGmat: number | null;
                testTagemage: number | null;
                testCambridgeFirst: number | null;
                testCambridgeAdvanced: number | null;
                testToeflDate: string | null;
                testIeltsDate: string | null;
                testToeicDate: string | null;
                testTcftefDate: string | null;
                testDelfdalfDate: string | null;
                testGreDate: string | null;
                testGmatDate: string | null;
                testTagemageDate: string | null;
                testCambridgeFirstDate: string | null;
                testCambridgeAdvancedDate: string | null;
                testEnglishPending: boolean | null;
                testFrenchPending: boolean | null;
                testLogicAndReasoningPending: boolean | null;
                validVisa: boolean | null;
                refusedVisa: boolean | null;
                refusedVisaReason: string | null;
                favoritePrograms: Array<string | null> | null;
                favoriteSchools: Array<string | null> | null;
                hasMandatoryDocuments: boolean | null;
                modalProfileCompletedViewed: boolean | null;
                locale: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            programId: string;
            intake: string | null;
            document: string | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
            interviewDate: string | null;
            admissionResult: string | null;
            tuitionsFeePaymentDate: string | null;
            decisionLetterDate: string | null;
            visaDate: string | null;
            todo: string | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            modalApplicationCompletedViewed: boolean | null;
            createdAt: string;
            updatedAt: string;
            program: {
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type DeleteFeedbackMutationVariables = {
    input: DeleteFeedbackInput;
    condition?: ModelFeedbackConditionInput | null;
};

export type DeleteFeedbackMutation = {
    deleteFeedback: {
        __typename: 'Feedback';
        id: string;
        rating: number | null;
        applicationId: string;
        application: {
            __typename: 'Application';
            id: string;
            studentId: string;
            student: {
                __typename: 'Student';
                id: string;
                email: string | null;
                phoneNumber: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                firstName: string | null;
                middleName: string | null;
                lastName: string | null;
                birthday: string | null;
                firstLanguage: string | null;
                passportNumber: string | null;
                gender: string | null;
                maritalStatus: string | null;
                fatherFirstName: string | null;
                fatherLastName: string | null;
                motherFirstName: string | null;
                motherMaidenName: string | null;
                guardianLastName: string | null;
                guardianFirstName: string | null;
                parentsAddress: string | null;
                parentsCity: string | null;
                parentsCountry: string | null;
                parentsPhoneNumber: string | null;
                parentsEmail: string | null;
                disciplines: Array<string | null> | null;
                degrees: Array<string | null> | null;
                nationality: string | null;
                educationCountry: string | null;
                highestEducationLevel: number | null;
                gradePointAverage: number | null;
                testToefl: number | null;
                testIelts: number | null;
                testToeic: number | null;
                testTcftef: number | null;
                testDelfdalf: number | null;
                testGre: number | null;
                testGmat: number | null;
                testTagemage: number | null;
                testCambridgeFirst: number | null;
                testCambridgeAdvanced: number | null;
                testToeflDate: string | null;
                testIeltsDate: string | null;
                testToeicDate: string | null;
                testTcftefDate: string | null;
                testDelfdalfDate: string | null;
                testGreDate: string | null;
                testGmatDate: string | null;
                testTagemageDate: string | null;
                testCambridgeFirstDate: string | null;
                testCambridgeAdvancedDate: string | null;
                testEnglishPending: boolean | null;
                testFrenchPending: boolean | null;
                testLogicAndReasoningPending: boolean | null;
                validVisa: boolean | null;
                refusedVisa: boolean | null;
                refusedVisaReason: string | null;
                favoritePrograms: Array<string | null> | null;
                favoriteSchools: Array<string | null> | null;
                hasMandatoryDocuments: boolean | null;
                modalProfileCompletedViewed: boolean | null;
                locale: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            programId: string;
            intake: string | null;
            document: string | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
            interviewDate: string | null;
            admissionResult: string | null;
            tuitionsFeePaymentDate: string | null;
            decisionLetterDate: string | null;
            visaDate: string | null;
            todo: string | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            modalApplicationCompletedViewed: boolean | null;
            createdAt: string;
            updatedAt: string;
            program: {
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type CreatePostMutationVariables = {
    input: CreatePostInput;
    condition?: ModelPostConditionInput | null;
};

export type CreatePostMutation = {
    createPost: {
        __typename: 'Post';
        category: string;
        content: string;
        id: string;
        published: boolean;
        slug: string;
        title: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdatePostMutationVariables = {
    input: UpdatePostInput;
    condition?: ModelPostConditionInput | null;
};

export type UpdatePostMutation = {
    updatePost: {
        __typename: 'Post';
        category: string;
        content: string;
        id: string;
        published: boolean;
        slug: string;
        title: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeletePostMutationVariables = {
    input: DeletePostInput;
    condition?: ModelPostConditionInput | null;
};

export type DeletePostMutation = {
    deletePost: {
        __typename: 'Post';
        category: string;
        content: string;
        id: string;
        published: boolean;
        slug: string;
        title: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type GetStudentQueryVariables = {
    id: string;
};

export type GetStudentQuery = {
    getStudent: {
        __typename: 'Student';
        id: string;
        email: string | null;
        phoneNumber: string | null;
        address: string | null;
        city: string | null;
        country: string | null;
        firstName: string | null;
        middleName: string | null;
        lastName: string | null;
        birthday: string | null;
        firstLanguage: string | null;
        passportNumber: string | null;
        gender: string | null;
        maritalStatus: string | null;
        fatherFirstName: string | null;
        fatherLastName: string | null;
        motherFirstName: string | null;
        motherMaidenName: string | null;
        guardianLastName: string | null;
        guardianFirstName: string | null;
        parentsAddress: string | null;
        parentsCity: string | null;
        parentsCountry: string | null;
        parentsPhoneNumber: string | null;
        parentsEmail: string | null;
        disciplines: Array<string | null> | null;
        degrees: Array<string | null> | null;
        nationality: string | null;
        educationCountry: string | null;
        highestEducationLevel: number | null;
        gradePointAverage: number | null;
        schoolsAttended: Array<{
            __typename: 'SchoolAttended';
            name: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            primaryLanguageInstruction: string | null;
            educationLevel: number | null;
            degreeAwarded: number | null;
            degreeAwardedOn: string | null;
            attendedInstitutionFrom: string | null;
            attendedInstitutionTo: string | null;
        } | null> | null;
        testToefl: number | null;
        testIelts: number | null;
        testToeic: number | null;
        testTcftef: number | null;
        testDelfdalf: number | null;
        testGre: number | null;
        testGmat: number | null;
        testTagemage: number | null;
        testCambridgeFirst: number | null;
        testCambridgeAdvanced: number | null;
        testToeflDate: string | null;
        testIeltsDate: string | null;
        testToeicDate: string | null;
        testTcftefDate: string | null;
        testDelfdalfDate: string | null;
        testGreDate: string | null;
        testGmatDate: string | null;
        testTagemageDate: string | null;
        testCambridgeFirstDate: string | null;
        testCambridgeAdvancedDate: string | null;
        testEnglishPending: boolean | null;
        testFrenchPending: boolean | null;
        testLogicAndReasoningPending: boolean | null;
        validVisa: boolean | null;
        refusedVisa: boolean | null;
        refusedVisaReason: string | null;
        workExperiences: Array<{
            __typename: 'WorkExperience';
            title: string | null;
            compagnyName: string | null;
            address: string | null;
            workedFrom: string | null;
            workedTo: string | null;
        } | null> | null;
        documents: {
            __typename: 'ModelDocumentConnection';
            items: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string | null;
                storageKey: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        favoritePrograms: Array<string | null> | null;
        favoriteSchools: Array<string | null> | null;
        applications: {
            __typename: 'ModelApplicationConnection';
            items: Array<{
                __typename: 'Application';
                id: string;
                studentId: string;
                programId: string;
                intake: string | null;
                document: string | null;
                interviewDate: string | null;
                admissionResult: string | null;
                tuitionsFeePaymentDate: string | null;
                decisionLetterDate: string | null;
                visaDate: string | null;
                todo: string | null;
                modalApplicationCompletedViewed: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        hasMandatoryDocuments: boolean | null;
        modalProfileCompletedViewed: boolean | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        locale: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type ListStudentsQueryVariables = {
    filter?: ModelStudentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListStudentsQuery = {
    listStudents: {
        __typename: 'ModelStudentConnection';
        items: Array<{
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type GetDocumentQueryVariables = {
    id: string;
};

export type GetDocumentQuery = {
    getDocument: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        name: string | null;
        storageKey: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type ListDocumentsQueryVariables = {
    filter?: ModelDocumentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListDocumentsQuery = {
    listDocuments: {
        __typename: 'ModelDocumentConnection';
        items: Array<{
            __typename: 'Document';
            id: string;
            studentId: string;
            student: {
                __typename: 'Student';
                id: string;
                email: string | null;
                phoneNumber: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                firstName: string | null;
                middleName: string | null;
                lastName: string | null;
                birthday: string | null;
                firstLanguage: string | null;
                passportNumber: string | null;
                gender: string | null;
                maritalStatus: string | null;
                fatherFirstName: string | null;
                fatherLastName: string | null;
                motherFirstName: string | null;
                motherMaidenName: string | null;
                guardianLastName: string | null;
                guardianFirstName: string | null;
                parentsAddress: string | null;
                parentsCity: string | null;
                parentsCountry: string | null;
                parentsPhoneNumber: string | null;
                parentsEmail: string | null;
                disciplines: Array<string | null> | null;
                degrees: Array<string | null> | null;
                nationality: string | null;
                educationCountry: string | null;
                highestEducationLevel: number | null;
                gradePointAverage: number | null;
                testToefl: number | null;
                testIelts: number | null;
                testToeic: number | null;
                testTcftef: number | null;
                testDelfdalf: number | null;
                testGre: number | null;
                testGmat: number | null;
                testTagemage: number | null;
                testCambridgeFirst: number | null;
                testCambridgeAdvanced: number | null;
                testToeflDate: string | null;
                testIeltsDate: string | null;
                testToeicDate: string | null;
                testTcftefDate: string | null;
                testDelfdalfDate: string | null;
                testGreDate: string | null;
                testGmatDate: string | null;
                testTagemageDate: string | null;
                testCambridgeFirstDate: string | null;
                testCambridgeAdvancedDate: string | null;
                testEnglishPending: boolean | null;
                testFrenchPending: boolean | null;
                testLogicAndReasoningPending: boolean | null;
                validVisa: boolean | null;
                refusedVisa: boolean | null;
                refusedVisaReason: string | null;
                favoritePrograms: Array<string | null> | null;
                favoriteSchools: Array<string | null> | null;
                hasMandatoryDocuments: boolean | null;
                modalProfileCompletedViewed: boolean | null;
                locale: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            name: string | null;
            storageKey: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type GetApplicationQueryVariables = {
    id: string;
};

export type GetApplicationQuery = {
    getApplication: {
        __typename: 'Application';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        programId: string;
        intake: string | null;
        document: string | null;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            status: string | null;
            date: string | null;
            isMandatory: boolean | null;
        } | null> | null;
        interviewDate: string | null;
        admissionResult: string | null;
        tuitionsFeePaymentDate: string | null;
        decisionLetterDate: string | null;
        visaDate: string | null;
        todo: string | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        modalApplicationCompletedViewed: boolean | null;
        createdAt: string;
        updatedAt: string;
        program: {
            __typename: 'Program';
            applicationFee: number;
            applicationFeeCurrency: Currency;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: Currency;
            country: Country;
            degree: Degree;
            description: string | null;
            discipline: Discipline;
            duration: number;
            durationUnit: DurationUnit;
            fee: number;
            feeCurrency: Currency;
            feesAndFinancing: string | null;
            feeUnit: FeeUnit;
            gradePointAverage: number;
            highestEducationLevel: number;
            id: string;
            intakes: string;
            intakeInformation: string | null;
            languages: Array<Language | null>;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: DurationUnit;
            name: string;
            otherRequirements: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string | null;
                isMandatory: boolean | null;
                storageKey: string | null;
                description: string | null;
                condition: string | null;
                isSpecific: boolean | null;
            } | null>;
            schedule: Schedule;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testDelfdalf: number;
            testGmat: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school: {
                __typename: 'School';
                city: string;
                country: Country;
                coverPhoto: string;
                contactEmail: string | null;
                contactJobTitle: string | null;
                contactName: string | null;
                contactPhone: string | null;
                creationYear: string;
                description: string | null;
                id: string;
                institutionType: InstitutionType;
                internationalStudents: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                contractStatus: string;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner: string | null;
    } | null;
};

export type ListApplicationsQueryVariables = {
    filter?: ModelApplicationFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListApplicationsQuery = {
    listApplications: {
        __typename: 'ModelApplicationConnection';
        items: Array<{
            __typename: 'Application';
            id: string;
            studentId: string;
            student: {
                __typename: 'Student';
                id: string;
                email: string | null;
                phoneNumber: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                firstName: string | null;
                middleName: string | null;
                lastName: string | null;
                birthday: string | null;
                firstLanguage: string | null;
                passportNumber: string | null;
                gender: string | null;
                maritalStatus: string | null;
                fatherFirstName: string | null;
                fatherLastName: string | null;
                motherFirstName: string | null;
                motherMaidenName: string | null;
                guardianLastName: string | null;
                guardianFirstName: string | null;
                parentsAddress: string | null;
                parentsCity: string | null;
                parentsCountry: string | null;
                parentsPhoneNumber: string | null;
                parentsEmail: string | null;
                disciplines: Array<string | null> | null;
                degrees: Array<string | null> | null;
                nationality: string | null;
                educationCountry: string | null;
                highestEducationLevel: number | null;
                gradePointAverage: number | null;
                testToefl: number | null;
                testIelts: number | null;
                testToeic: number | null;
                testTcftef: number | null;
                testDelfdalf: number | null;
                testGre: number | null;
                testGmat: number | null;
                testTagemage: number | null;
                testCambridgeFirst: number | null;
                testCambridgeAdvanced: number | null;
                testToeflDate: string | null;
                testIeltsDate: string | null;
                testToeicDate: string | null;
                testTcftefDate: string | null;
                testDelfdalfDate: string | null;
                testGreDate: string | null;
                testGmatDate: string | null;
                testTagemageDate: string | null;
                testCambridgeFirstDate: string | null;
                testCambridgeAdvancedDate: string | null;
                testEnglishPending: boolean | null;
                testFrenchPending: boolean | null;
                testLogicAndReasoningPending: boolean | null;
                validVisa: boolean | null;
                refusedVisa: boolean | null;
                refusedVisaReason: string | null;
                favoritePrograms: Array<string | null> | null;
                favoriteSchools: Array<string | null> | null;
                hasMandatoryDocuments: boolean | null;
                modalProfileCompletedViewed: boolean | null;
                locale: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            programId: string;
            intake: string | null;
            document: string | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
            interviewDate: string | null;
            admissionResult: string | null;
            tuitionsFeePaymentDate: string | null;
            decisionLetterDate: string | null;
            visaDate: string | null;
            todo: string | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            modalApplicationCompletedViewed: boolean | null;
            createdAt: string;
            updatedAt: string;
            program: {
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner: string | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type GetSearchAlertQueryVariables = {
    id: string;
};

export type GetSearchAlertQuery = {
    getSearchAlert: {
        __typename: 'SearchAlert';
        id: string;
        query: string | null;
        type: string | null;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type ListSearchAlertsQueryVariables = {
    filter?: ModelSearchAlertFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListSearchAlertsQuery = {
    listSearchAlerts: {
        __typename: 'ModelSearchAlertConnection';
        items: Array<{
            __typename: 'SearchAlert';
            id: string;
            query: string | null;
            type: string | null;
            studentId: string;
            student: {
                __typename: 'Student';
                id: string;
                email: string | null;
                phoneNumber: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                firstName: string | null;
                middleName: string | null;
                lastName: string | null;
                birthday: string | null;
                firstLanguage: string | null;
                passportNumber: string | null;
                gender: string | null;
                maritalStatus: string | null;
                fatherFirstName: string | null;
                fatherLastName: string | null;
                motherFirstName: string | null;
                motherMaidenName: string | null;
                guardianLastName: string | null;
                guardianFirstName: string | null;
                parentsAddress: string | null;
                parentsCity: string | null;
                parentsCountry: string | null;
                parentsPhoneNumber: string | null;
                parentsEmail: string | null;
                disciplines: Array<string | null> | null;
                degrees: Array<string | null> | null;
                nationality: string | null;
                educationCountry: string | null;
                highestEducationLevel: number | null;
                gradePointAverage: number | null;
                testToefl: number | null;
                testIelts: number | null;
                testToeic: number | null;
                testTcftef: number | null;
                testDelfdalf: number | null;
                testGre: number | null;
                testGmat: number | null;
                testTagemage: number | null;
                testCambridgeFirst: number | null;
                testCambridgeAdvanced: number | null;
                testToeflDate: string | null;
                testIeltsDate: string | null;
                testToeicDate: string | null;
                testTcftefDate: string | null;
                testDelfdalfDate: string | null;
                testGreDate: string | null;
                testGmatDate: string | null;
                testTagemageDate: string | null;
                testCambridgeFirstDate: string | null;
                testCambridgeAdvancedDate: string | null;
                testEnglishPending: boolean | null;
                testFrenchPending: boolean | null;
                testLogicAndReasoningPending: boolean | null;
                validVisa: boolean | null;
                refusedVisa: boolean | null;
                refusedVisaReason: string | null;
                favoritePrograms: Array<string | null> | null;
                favoriteSchools: Array<string | null> | null;
                hasMandatoryDocuments: boolean | null;
                modalProfileCompletedViewed: boolean | null;
                locale: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type GetFeedbackQueryVariables = {
    id: string;
};

export type GetFeedbackQuery = {
    getFeedback: {
        __typename: 'Feedback';
        id: string;
        rating: number | null;
        applicationId: string;
        application: {
            __typename: 'Application';
            id: string;
            studentId: string;
            student: {
                __typename: 'Student';
                id: string;
                email: string | null;
                phoneNumber: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                firstName: string | null;
                middleName: string | null;
                lastName: string | null;
                birthday: string | null;
                firstLanguage: string | null;
                passportNumber: string | null;
                gender: string | null;
                maritalStatus: string | null;
                fatherFirstName: string | null;
                fatherLastName: string | null;
                motherFirstName: string | null;
                motherMaidenName: string | null;
                guardianLastName: string | null;
                guardianFirstName: string | null;
                parentsAddress: string | null;
                parentsCity: string | null;
                parentsCountry: string | null;
                parentsPhoneNumber: string | null;
                parentsEmail: string | null;
                disciplines: Array<string | null> | null;
                degrees: Array<string | null> | null;
                nationality: string | null;
                educationCountry: string | null;
                highestEducationLevel: number | null;
                gradePointAverage: number | null;
                testToefl: number | null;
                testIelts: number | null;
                testToeic: number | null;
                testTcftef: number | null;
                testDelfdalf: number | null;
                testGre: number | null;
                testGmat: number | null;
                testTagemage: number | null;
                testCambridgeFirst: number | null;
                testCambridgeAdvanced: number | null;
                testToeflDate: string | null;
                testIeltsDate: string | null;
                testToeicDate: string | null;
                testTcftefDate: string | null;
                testDelfdalfDate: string | null;
                testGreDate: string | null;
                testGmatDate: string | null;
                testTagemageDate: string | null;
                testCambridgeFirstDate: string | null;
                testCambridgeAdvancedDate: string | null;
                testEnglishPending: boolean | null;
                testFrenchPending: boolean | null;
                testLogicAndReasoningPending: boolean | null;
                validVisa: boolean | null;
                refusedVisa: boolean | null;
                refusedVisaReason: string | null;
                favoritePrograms: Array<string | null> | null;
                favoriteSchools: Array<string | null> | null;
                hasMandatoryDocuments: boolean | null;
                modalProfileCompletedViewed: boolean | null;
                locale: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            programId: string;
            intake: string | null;
            document: string | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
            interviewDate: string | null;
            admissionResult: string | null;
            tuitionsFeePaymentDate: string | null;
            decisionLetterDate: string | null;
            visaDate: string | null;
            todo: string | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            modalApplicationCompletedViewed: boolean | null;
            createdAt: string;
            updatedAt: string;
            program: {
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type ListFeedbacksQueryVariables = {
    filter?: ModelFeedbackFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListFeedbacksQuery = {
    listFeedbacks: {
        __typename: 'ModelFeedbackConnection';
        items: Array<{
            __typename: 'Feedback';
            id: string;
            rating: number | null;
            applicationId: string;
            application: {
                __typename: 'Application';
                id: string;
                studentId: string;
                programId: string;
                intake: string | null;
                document: string | null;
                interviewDate: string | null;
                admissionResult: string | null;
                tuitionsFeePaymentDate: string | null;
                decisionLetterDate: string | null;
                visaDate: string | null;
                todo: string | null;
                modalApplicationCompletedViewed: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type GetStudentByEmailQueryVariables = {
    email?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelStudentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetStudentByEmailQuery = {
    getStudentByEmail: {
        __typename: 'ModelStudentConnection';
        items: Array<{
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type GetDocumentByStudentQueryVariables = {
    studentId?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelDocumentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetDocumentByStudentQuery = {
    getDocumentByStudent: {
        __typename: 'ModelDocumentConnection';
        items: Array<{
            __typename: 'Document';
            id: string;
            studentId: string;
            student: {
                __typename: 'Student';
                id: string;
                email: string | null;
                phoneNumber: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                firstName: string | null;
                middleName: string | null;
                lastName: string | null;
                birthday: string | null;
                firstLanguage: string | null;
                passportNumber: string | null;
                gender: string | null;
                maritalStatus: string | null;
                fatherFirstName: string | null;
                fatherLastName: string | null;
                motherFirstName: string | null;
                motherMaidenName: string | null;
                guardianLastName: string | null;
                guardianFirstName: string | null;
                parentsAddress: string | null;
                parentsCity: string | null;
                parentsCountry: string | null;
                parentsPhoneNumber: string | null;
                parentsEmail: string | null;
                disciplines: Array<string | null> | null;
                degrees: Array<string | null> | null;
                nationality: string | null;
                educationCountry: string | null;
                highestEducationLevel: number | null;
                gradePointAverage: number | null;
                testToefl: number | null;
                testIelts: number | null;
                testToeic: number | null;
                testTcftef: number | null;
                testDelfdalf: number | null;
                testGre: number | null;
                testGmat: number | null;
                testTagemage: number | null;
                testCambridgeFirst: number | null;
                testCambridgeAdvanced: number | null;
                testToeflDate: string | null;
                testIeltsDate: string | null;
                testToeicDate: string | null;
                testTcftefDate: string | null;
                testDelfdalfDate: string | null;
                testGreDate: string | null;
                testGmatDate: string | null;
                testTagemageDate: string | null;
                testCambridgeFirstDate: string | null;
                testCambridgeAdvancedDate: string | null;
                testEnglishPending: boolean | null;
                testFrenchPending: boolean | null;
                testLogicAndReasoningPending: boolean | null;
                validVisa: boolean | null;
                refusedVisa: boolean | null;
                refusedVisaReason: string | null;
                favoritePrograms: Array<string | null> | null;
                favoriteSchools: Array<string | null> | null;
                hasMandatoryDocuments: boolean | null;
                modalProfileCompletedViewed: boolean | null;
                locale: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            name: string | null;
            storageKey: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type GetDocumentByStorageKeyQueryVariables = {
    storageKey?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelDocumentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetDocumentByStorageKeyQuery = {
    getDocumentByStorageKey: {
        __typename: 'ModelDocumentConnection';
        items: Array<{
            __typename: 'Document';
            id: string;
            studentId: string;
            student: {
                __typename: 'Student';
                id: string;
                email: string | null;
                phoneNumber: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                firstName: string | null;
                middleName: string | null;
                lastName: string | null;
                birthday: string | null;
                firstLanguage: string | null;
                passportNumber: string | null;
                gender: string | null;
                maritalStatus: string | null;
                fatherFirstName: string | null;
                fatherLastName: string | null;
                motherFirstName: string | null;
                motherMaidenName: string | null;
                guardianLastName: string | null;
                guardianFirstName: string | null;
                parentsAddress: string | null;
                parentsCity: string | null;
                parentsCountry: string | null;
                parentsPhoneNumber: string | null;
                parentsEmail: string | null;
                disciplines: Array<string | null> | null;
                degrees: Array<string | null> | null;
                nationality: string | null;
                educationCountry: string | null;
                highestEducationLevel: number | null;
                gradePointAverage: number | null;
                testToefl: number | null;
                testIelts: number | null;
                testToeic: number | null;
                testTcftef: number | null;
                testDelfdalf: number | null;
                testGre: number | null;
                testGmat: number | null;
                testTagemage: number | null;
                testCambridgeFirst: number | null;
                testCambridgeAdvanced: number | null;
                testToeflDate: string | null;
                testIeltsDate: string | null;
                testToeicDate: string | null;
                testTcftefDate: string | null;
                testDelfdalfDate: string | null;
                testGreDate: string | null;
                testGmatDate: string | null;
                testTagemageDate: string | null;
                testCambridgeFirstDate: string | null;
                testCambridgeAdvancedDate: string | null;
                testEnglishPending: boolean | null;
                testFrenchPending: boolean | null;
                testLogicAndReasoningPending: boolean | null;
                validVisa: boolean | null;
                refusedVisa: boolean | null;
                refusedVisaReason: string | null;
                favoritePrograms: Array<string | null> | null;
                favoriteSchools: Array<string | null> | null;
                hasMandatoryDocuments: boolean | null;
                modalProfileCompletedViewed: boolean | null;
                locale: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            name: string | null;
            storageKey: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type GetApplicationByStudentQueryVariables = {
    studentId?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelApplicationFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetApplicationByStudentQuery = {
    getApplicationByStudent: {
        __typename: 'ModelApplicationConnection';
        items: Array<{
            __typename: 'Application';
            id: string;
            studentId: string;
            student: {
                __typename: 'Student';
                id: string;
                email: string | null;
                phoneNumber: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                firstName: string | null;
                middleName: string | null;
                lastName: string | null;
                birthday: string | null;
                firstLanguage: string | null;
                passportNumber: string | null;
                gender: string | null;
                maritalStatus: string | null;
                fatherFirstName: string | null;
                fatherLastName: string | null;
                motherFirstName: string | null;
                motherMaidenName: string | null;
                guardianLastName: string | null;
                guardianFirstName: string | null;
                parentsAddress: string | null;
                parentsCity: string | null;
                parentsCountry: string | null;
                parentsPhoneNumber: string | null;
                parentsEmail: string | null;
                disciplines: Array<string | null> | null;
                degrees: Array<string | null> | null;
                nationality: string | null;
                educationCountry: string | null;
                highestEducationLevel: number | null;
                gradePointAverage: number | null;
                testToefl: number | null;
                testIelts: number | null;
                testToeic: number | null;
                testTcftef: number | null;
                testDelfdalf: number | null;
                testGre: number | null;
                testGmat: number | null;
                testTagemage: number | null;
                testCambridgeFirst: number | null;
                testCambridgeAdvanced: number | null;
                testToeflDate: string | null;
                testIeltsDate: string | null;
                testToeicDate: string | null;
                testTcftefDate: string | null;
                testDelfdalfDate: string | null;
                testGreDate: string | null;
                testGmatDate: string | null;
                testTagemageDate: string | null;
                testCambridgeFirstDate: string | null;
                testCambridgeAdvancedDate: string | null;
                testEnglishPending: boolean | null;
                testFrenchPending: boolean | null;
                testLogicAndReasoningPending: boolean | null;
                validVisa: boolean | null;
                refusedVisa: boolean | null;
                refusedVisaReason: string | null;
                favoritePrograms: Array<string | null> | null;
                favoriteSchools: Array<string | null> | null;
                hasMandatoryDocuments: boolean | null;
                modalProfileCompletedViewed: boolean | null;
                locale: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            programId: string;
            intake: string | null;
            document: string | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
            interviewDate: string | null;
            admissionResult: string | null;
            tuitionsFeePaymentDate: string | null;
            decisionLetterDate: string | null;
            visaDate: string | null;
            todo: string | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            modalApplicationCompletedViewed: boolean | null;
            createdAt: string;
            updatedAt: string;
            program: {
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner: string | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type ListSchoolsQueryVariables = {
    filter?: ModelSchoolFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListSchoolsQuery = {
    listSchools: {
        __typename: 'ModelSchoolConnection';
        items: Array<{
            __typename: 'School';
            city: string;
            country: Country;
            coverPhoto: string;
            contactEmail: string | null;
            contactJobTitle: string | null;
            contactName: string | null;
            contactPhone: string | null;
            creationYear: string;
            description: string | null;
            id: string;
            institutionType: InstitutionType;
            internationalStudents: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            stepsTemplates: Array<{
                __typename: 'ApplicationStepsTemplate';
                targets: Array<string | null> | null;
            } | null>;
            contractStatus: string;
            createdAt: string;
            updatedAt: string;
            programs: {
                __typename: 'ModelProgramConnection';
                nextToken: string | null;
            } | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type GetSchoolQueryVariables = {
    id: string;
};

export type GetSchoolQuery = {
    getSchool: {
        __typename: 'School';
        city: string;
        country: Country;
        coverPhoto: string;
        contactEmail: string | null;
        contactJobTitle: string | null;
        contactName: string | null;
        contactPhone: string | null;
        creationYear: string;
        description: string | null;
        id: string;
        institutionType: InstitutionType;
        internationalStudents: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        stepsTemplates: Array<{
            __typename: 'ApplicationStepsTemplate';
            targets: Array<string | null> | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
        } | null>;
        contractStatus: string;
        createdAt: string;
        updatedAt: string;
        programs: {
            __typename: 'ModelProgramConnection';
            items: Array<{
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
    } | null;
};

export type GetSchoolBySlugQueryVariables = {
    slug?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelSchoolFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetSchoolBySlugQuery = {
    getSchoolBySlug: {
        __typename: 'ModelSchoolConnection';
        items: Array<{
            __typename: 'School';
            city: string;
            country: Country;
            coverPhoto: string;
            contactEmail: string | null;
            contactJobTitle: string | null;
            contactName: string | null;
            contactPhone: string | null;
            creationYear: string;
            description: string | null;
            id: string;
            institutionType: InstitutionType;
            internationalStudents: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            stepsTemplates: Array<{
                __typename: 'ApplicationStepsTemplate';
                targets: Array<string | null> | null;
            } | null>;
            contractStatus: string;
            createdAt: string;
            updatedAt: string;
            programs: {
                __typename: 'ModelProgramConnection';
                nextToken: string | null;
            } | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type SearchSchoolsQueryVariables = {
    filter?: SearchableSchoolFilterInput | null;
    sort?: SearchableSchoolSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type SearchSchoolsQuery = {
    searchSchools: {
        __typename: 'SearchableSchoolConnection';
        items: Array<{
            __typename: 'School';
            city: string;
            country: Country;
            coverPhoto: string;
            contactEmail: string | null;
            contactJobTitle: string | null;
            contactName: string | null;
            contactPhone: string | null;
            creationYear: string;
            description: string | null;
            id: string;
            institutionType: InstitutionType;
            internationalStudents: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            stepsTemplates: Array<{
                __typename: 'ApplicationStepsTemplate';
                targets: Array<string | null> | null;
            } | null>;
            contractStatus: string;
            createdAt: string;
            updatedAt: string;
            programs: {
                __typename: 'ModelProgramConnection';
                nextToken: string | null;
            } | null;
        } | null> | null;
        nextToken: string | null;
        total: number | null;
    } | null;
};

export type ListProgramsQueryVariables = {
    filter?: ModelProgramFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListProgramsQuery = {
    listPrograms: {
        __typename: 'ModelProgramConnection';
        items: Array<{
            __typename: 'Program';
            applicationFee: number;
            applicationFeeCurrency: Currency;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: Currency;
            country: Country;
            degree: Degree;
            description: string | null;
            discipline: Discipline;
            duration: number;
            durationUnit: DurationUnit;
            fee: number;
            feeCurrency: Currency;
            feesAndFinancing: string | null;
            feeUnit: FeeUnit;
            gradePointAverage: number;
            highestEducationLevel: number;
            id: string;
            intakes: string;
            intakeInformation: string | null;
            languages: Array<Language | null>;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: DurationUnit;
            name: string;
            otherRequirements: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string | null;
                isMandatory: boolean | null;
                storageKey: string | null;
                description: string | null;
                condition: string | null;
                isSpecific: boolean | null;
            } | null>;
            schedule: Schedule;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testDelfdalf: number;
            testGmat: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school: {
                __typename: 'School';
                city: string;
                country: Country;
                coverPhoto: string;
                contactEmail: string | null;
                contactJobTitle: string | null;
                contactName: string | null;
                contactPhone: string | null;
                creationYear: string;
                description: string | null;
                id: string;
                institutionType: InstitutionType;
                internationalStudents: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                contractStatus: string;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type GetProgramQueryVariables = {
    id: string;
};

export type GetProgramQuery = {
    getProgram: {
        __typename: 'Program';
        applicationFee: number;
        applicationFeeCurrency: Currency;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: Currency;
        country: Country;
        degree: Degree;
        description: string | null;
        discipline: Discipline;
        duration: number;
        durationUnit: DurationUnit;
        fee: number;
        feeCurrency: Currency;
        feesAndFinancing: string | null;
        feeUnit: FeeUnit;
        gradePointAverage: number;
        highestEducationLevel: number;
        id: string;
        intakes: string;
        intakeInformation: string | null;
        languages: Array<Language | null>;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: DurationUnit;
        name: string;
        otherRequirements: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string | null;
            isMandatory: boolean | null;
            storageKey: string | null;
            description: string | null;
            condition: string | null;
            isSpecific: boolean | null;
        } | null>;
        schedule: Schedule;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testDelfdalf: number;
        testGmat: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school: {
            __typename: 'School';
            city: string;
            country: Country;
            coverPhoto: string;
            contactEmail: string | null;
            contactJobTitle: string | null;
            contactName: string | null;
            contactPhone: string | null;
            creationYear: string;
            description: string | null;
            id: string;
            institutionType: InstitutionType;
            internationalStudents: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            stepsTemplates: Array<{
                __typename: 'ApplicationStepsTemplate';
                targets: Array<string | null> | null;
            } | null>;
            contractStatus: string;
            createdAt: string;
            updatedAt: string;
            programs: {
                __typename: 'ModelProgramConnection';
                nextToken: string | null;
            } | null;
        } | null;
    } | null;
};

export type GetProgramBySlugQueryVariables = {
    slug?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelProgramFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetProgramBySlugQuery = {
    getProgramBySlug: {
        __typename: 'ModelProgramConnection';
        items: Array<{
            __typename: 'Program';
            applicationFee: number;
            applicationFeeCurrency: Currency;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: Currency;
            country: Country;
            degree: Degree;
            description: string | null;
            discipline: Discipline;
            duration: number;
            durationUnit: DurationUnit;
            fee: number;
            feeCurrency: Currency;
            feesAndFinancing: string | null;
            feeUnit: FeeUnit;
            gradePointAverage: number;
            highestEducationLevel: number;
            id: string;
            intakes: string;
            intakeInformation: string | null;
            languages: Array<Language | null>;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: DurationUnit;
            name: string;
            otherRequirements: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string | null;
                isMandatory: boolean | null;
                storageKey: string | null;
                description: string | null;
                condition: string | null;
                isSpecific: boolean | null;
            } | null>;
            schedule: Schedule;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testDelfdalf: number;
            testGmat: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school: {
                __typename: 'School';
                city: string;
                country: Country;
                coverPhoto: string;
                contactEmail: string | null;
                contactJobTitle: string | null;
                contactName: string | null;
                contactPhone: string | null;
                creationYear: string;
                description: string | null;
                id: string;
                institutionType: InstitutionType;
                internationalStudents: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                contractStatus: string;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type SearchProgramsQueryVariables = {
    filter?: SearchableProgramFilterInput | null;
    sort?: SearchableProgramSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type SearchProgramsQuery = {
    searchPrograms: {
        __typename: 'SearchableProgramConnection';
        items: Array<{
            __typename: 'Program';
            applicationFee: number;
            applicationFeeCurrency: Currency;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: Currency;
            country: Country;
            degree: Degree;
            description: string | null;
            discipline: Discipline;
            duration: number;
            durationUnit: DurationUnit;
            fee: number;
            feeCurrency: Currency;
            feesAndFinancing: string | null;
            feeUnit: FeeUnit;
            gradePointAverage: number;
            highestEducationLevel: number;
            id: string;
            intakes: string;
            intakeInformation: string | null;
            languages: Array<Language | null>;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: DurationUnit;
            name: string;
            otherRequirements: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string | null;
                isMandatory: boolean | null;
                storageKey: string | null;
                description: string | null;
                condition: string | null;
                isSpecific: boolean | null;
            } | null>;
            schedule: Schedule;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testDelfdalf: number;
            testGmat: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school: {
                __typename: 'School';
                city: string;
                country: Country;
                coverPhoto: string;
                contactEmail: string | null;
                contactJobTitle: string | null;
                contactName: string | null;
                contactPhone: string | null;
                creationYear: string;
                description: string | null;
                id: string;
                institutionType: InstitutionType;
                internationalStudents: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                contractStatus: string;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null> | null;
        nextToken: string | null;
        total: number | null;
    } | null;
};

export type GetPostQueryVariables = {
    id: string;
};

export type GetPostQuery = {
    getPost: {
        __typename: 'Post';
        category: string;
        content: string;
        id: string;
        published: boolean;
        slug: string;
        title: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListPostsQueryVariables = {
    filter?: ModelPostFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListPostsQuery = {
    listPosts: {
        __typename: 'ModelPostConnection';
        items: Array<{
            __typename: 'Post';
            category: string;
            content: string;
            id: string;
            published: boolean;
            slug: string;
            title: string;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type GetPostBySlugQueryVariables = {
    slug?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelPostFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetPostBySlugQuery = {
    getPostBySlug: {
        __typename: 'ModelPostConnection';
        items: Array<{
            __typename: 'Post';
            category: string;
            content: string;
            id: string;
            published: boolean;
            slug: string;
            title: string;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken: string | null;
    } | null;
};

export type OnCreateStudentSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateStudentSubscription = {
    onCreateStudent: {
        __typename: 'Student';
        id: string;
        email: string | null;
        phoneNumber: string | null;
        address: string | null;
        city: string | null;
        country: string | null;
        firstName: string | null;
        middleName: string | null;
        lastName: string | null;
        birthday: string | null;
        firstLanguage: string | null;
        passportNumber: string | null;
        gender: string | null;
        maritalStatus: string | null;
        fatherFirstName: string | null;
        fatherLastName: string | null;
        motherFirstName: string | null;
        motherMaidenName: string | null;
        guardianLastName: string | null;
        guardianFirstName: string | null;
        parentsAddress: string | null;
        parentsCity: string | null;
        parentsCountry: string | null;
        parentsPhoneNumber: string | null;
        parentsEmail: string | null;
        disciplines: Array<string | null> | null;
        degrees: Array<string | null> | null;
        nationality: string | null;
        educationCountry: string | null;
        highestEducationLevel: number | null;
        gradePointAverage: number | null;
        schoolsAttended: Array<{
            __typename: 'SchoolAttended';
            name: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            primaryLanguageInstruction: string | null;
            educationLevel: number | null;
            degreeAwarded: number | null;
            degreeAwardedOn: string | null;
            attendedInstitutionFrom: string | null;
            attendedInstitutionTo: string | null;
        } | null> | null;
        testToefl: number | null;
        testIelts: number | null;
        testToeic: number | null;
        testTcftef: number | null;
        testDelfdalf: number | null;
        testGre: number | null;
        testGmat: number | null;
        testTagemage: number | null;
        testCambridgeFirst: number | null;
        testCambridgeAdvanced: number | null;
        testToeflDate: string | null;
        testIeltsDate: string | null;
        testToeicDate: string | null;
        testTcftefDate: string | null;
        testDelfdalfDate: string | null;
        testGreDate: string | null;
        testGmatDate: string | null;
        testTagemageDate: string | null;
        testCambridgeFirstDate: string | null;
        testCambridgeAdvancedDate: string | null;
        testEnglishPending: boolean | null;
        testFrenchPending: boolean | null;
        testLogicAndReasoningPending: boolean | null;
        validVisa: boolean | null;
        refusedVisa: boolean | null;
        refusedVisaReason: string | null;
        workExperiences: Array<{
            __typename: 'WorkExperience';
            title: string | null;
            compagnyName: string | null;
            address: string | null;
            workedFrom: string | null;
            workedTo: string | null;
        } | null> | null;
        documents: {
            __typename: 'ModelDocumentConnection';
            items: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string | null;
                storageKey: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        favoritePrograms: Array<string | null> | null;
        favoriteSchools: Array<string | null> | null;
        applications: {
            __typename: 'ModelApplicationConnection';
            items: Array<{
                __typename: 'Application';
                id: string;
                studentId: string;
                programId: string;
                intake: string | null;
                document: string | null;
                interviewDate: string | null;
                admissionResult: string | null;
                tuitionsFeePaymentDate: string | null;
                decisionLetterDate: string | null;
                visaDate: string | null;
                todo: string | null;
                modalApplicationCompletedViewed: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        hasMandatoryDocuments: boolean | null;
        modalProfileCompletedViewed: boolean | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        locale: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type OnUpdateStudentSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateStudentSubscription = {
    onUpdateStudent: {
        __typename: 'Student';
        id: string;
        email: string | null;
        phoneNumber: string | null;
        address: string | null;
        city: string | null;
        country: string | null;
        firstName: string | null;
        middleName: string | null;
        lastName: string | null;
        birthday: string | null;
        firstLanguage: string | null;
        passportNumber: string | null;
        gender: string | null;
        maritalStatus: string | null;
        fatherFirstName: string | null;
        fatherLastName: string | null;
        motherFirstName: string | null;
        motherMaidenName: string | null;
        guardianLastName: string | null;
        guardianFirstName: string | null;
        parentsAddress: string | null;
        parentsCity: string | null;
        parentsCountry: string | null;
        parentsPhoneNumber: string | null;
        parentsEmail: string | null;
        disciplines: Array<string | null> | null;
        degrees: Array<string | null> | null;
        nationality: string | null;
        educationCountry: string | null;
        highestEducationLevel: number | null;
        gradePointAverage: number | null;
        schoolsAttended: Array<{
            __typename: 'SchoolAttended';
            name: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            primaryLanguageInstruction: string | null;
            educationLevel: number | null;
            degreeAwarded: number | null;
            degreeAwardedOn: string | null;
            attendedInstitutionFrom: string | null;
            attendedInstitutionTo: string | null;
        } | null> | null;
        testToefl: number | null;
        testIelts: number | null;
        testToeic: number | null;
        testTcftef: number | null;
        testDelfdalf: number | null;
        testGre: number | null;
        testGmat: number | null;
        testTagemage: number | null;
        testCambridgeFirst: number | null;
        testCambridgeAdvanced: number | null;
        testToeflDate: string | null;
        testIeltsDate: string | null;
        testToeicDate: string | null;
        testTcftefDate: string | null;
        testDelfdalfDate: string | null;
        testGreDate: string | null;
        testGmatDate: string | null;
        testTagemageDate: string | null;
        testCambridgeFirstDate: string | null;
        testCambridgeAdvancedDate: string | null;
        testEnglishPending: boolean | null;
        testFrenchPending: boolean | null;
        testLogicAndReasoningPending: boolean | null;
        validVisa: boolean | null;
        refusedVisa: boolean | null;
        refusedVisaReason: string | null;
        workExperiences: Array<{
            __typename: 'WorkExperience';
            title: string | null;
            compagnyName: string | null;
            address: string | null;
            workedFrom: string | null;
            workedTo: string | null;
        } | null> | null;
        documents: {
            __typename: 'ModelDocumentConnection';
            items: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string | null;
                storageKey: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        favoritePrograms: Array<string | null> | null;
        favoriteSchools: Array<string | null> | null;
        applications: {
            __typename: 'ModelApplicationConnection';
            items: Array<{
                __typename: 'Application';
                id: string;
                studentId: string;
                programId: string;
                intake: string | null;
                document: string | null;
                interviewDate: string | null;
                admissionResult: string | null;
                tuitionsFeePaymentDate: string | null;
                decisionLetterDate: string | null;
                visaDate: string | null;
                todo: string | null;
                modalApplicationCompletedViewed: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        hasMandatoryDocuments: boolean | null;
        modalProfileCompletedViewed: boolean | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        locale: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type OnDeleteStudentSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteStudentSubscription = {
    onDeleteStudent: {
        __typename: 'Student';
        id: string;
        email: string | null;
        phoneNumber: string | null;
        address: string | null;
        city: string | null;
        country: string | null;
        firstName: string | null;
        middleName: string | null;
        lastName: string | null;
        birthday: string | null;
        firstLanguage: string | null;
        passportNumber: string | null;
        gender: string | null;
        maritalStatus: string | null;
        fatherFirstName: string | null;
        fatherLastName: string | null;
        motherFirstName: string | null;
        motherMaidenName: string | null;
        guardianLastName: string | null;
        guardianFirstName: string | null;
        parentsAddress: string | null;
        parentsCity: string | null;
        parentsCountry: string | null;
        parentsPhoneNumber: string | null;
        parentsEmail: string | null;
        disciplines: Array<string | null> | null;
        degrees: Array<string | null> | null;
        nationality: string | null;
        educationCountry: string | null;
        highestEducationLevel: number | null;
        gradePointAverage: number | null;
        schoolsAttended: Array<{
            __typename: 'SchoolAttended';
            name: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            primaryLanguageInstruction: string | null;
            educationLevel: number | null;
            degreeAwarded: number | null;
            degreeAwardedOn: string | null;
            attendedInstitutionFrom: string | null;
            attendedInstitutionTo: string | null;
        } | null> | null;
        testToefl: number | null;
        testIelts: number | null;
        testToeic: number | null;
        testTcftef: number | null;
        testDelfdalf: number | null;
        testGre: number | null;
        testGmat: number | null;
        testTagemage: number | null;
        testCambridgeFirst: number | null;
        testCambridgeAdvanced: number | null;
        testToeflDate: string | null;
        testIeltsDate: string | null;
        testToeicDate: string | null;
        testTcftefDate: string | null;
        testDelfdalfDate: string | null;
        testGreDate: string | null;
        testGmatDate: string | null;
        testTagemageDate: string | null;
        testCambridgeFirstDate: string | null;
        testCambridgeAdvancedDate: string | null;
        testEnglishPending: boolean | null;
        testFrenchPending: boolean | null;
        testLogicAndReasoningPending: boolean | null;
        validVisa: boolean | null;
        refusedVisa: boolean | null;
        refusedVisaReason: string | null;
        workExperiences: Array<{
            __typename: 'WorkExperience';
            title: string | null;
            compagnyName: string | null;
            address: string | null;
            workedFrom: string | null;
            workedTo: string | null;
        } | null> | null;
        documents: {
            __typename: 'ModelDocumentConnection';
            items: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string | null;
                storageKey: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        favoritePrograms: Array<string | null> | null;
        favoriteSchools: Array<string | null> | null;
        applications: {
            __typename: 'ModelApplicationConnection';
            items: Array<{
                __typename: 'Application';
                id: string;
                studentId: string;
                programId: string;
                intake: string | null;
                document: string | null;
                interviewDate: string | null;
                admissionResult: string | null;
                tuitionsFeePaymentDate: string | null;
                decisionLetterDate: string | null;
                visaDate: string | null;
                todo: string | null;
                modalApplicationCompletedViewed: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        hasMandatoryDocuments: boolean | null;
        modalProfileCompletedViewed: boolean | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        locale: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type OnCreateDocumentSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateDocumentSubscription = {
    onCreateDocument: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        name: string | null;
        storageKey: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type OnUpdateDocumentSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateDocumentSubscription = {
    onUpdateDocument: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        name: string | null;
        storageKey: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type OnDeleteDocumentSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteDocumentSubscription = {
    onDeleteDocument: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        name: string | null;
        storageKey: string | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type OnCreateApplicationSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateApplicationSubscription = {
    onCreateApplication: {
        __typename: 'Application';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        programId: string;
        intake: string | null;
        document: string | null;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            status: string | null;
            date: string | null;
            isMandatory: boolean | null;
        } | null> | null;
        interviewDate: string | null;
        admissionResult: string | null;
        tuitionsFeePaymentDate: string | null;
        decisionLetterDate: string | null;
        visaDate: string | null;
        todo: string | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        modalApplicationCompletedViewed: boolean | null;
        createdAt: string;
        updatedAt: string;
        program: {
            __typename: 'Program';
            applicationFee: number;
            applicationFeeCurrency: Currency;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: Currency;
            country: Country;
            degree: Degree;
            description: string | null;
            discipline: Discipline;
            duration: number;
            durationUnit: DurationUnit;
            fee: number;
            feeCurrency: Currency;
            feesAndFinancing: string | null;
            feeUnit: FeeUnit;
            gradePointAverage: number;
            highestEducationLevel: number;
            id: string;
            intakes: string;
            intakeInformation: string | null;
            languages: Array<Language | null>;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: DurationUnit;
            name: string;
            otherRequirements: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string | null;
                isMandatory: boolean | null;
                storageKey: string | null;
                description: string | null;
                condition: string | null;
                isSpecific: boolean | null;
            } | null>;
            schedule: Schedule;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testDelfdalf: number;
            testGmat: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school: {
                __typename: 'School';
                city: string;
                country: Country;
                coverPhoto: string;
                contactEmail: string | null;
                contactJobTitle: string | null;
                contactName: string | null;
                contactPhone: string | null;
                creationYear: string;
                description: string | null;
                id: string;
                institutionType: InstitutionType;
                internationalStudents: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                contractStatus: string;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner: string | null;
    } | null;
};

export type OnUpdateApplicationSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateApplicationSubscription = {
    onUpdateApplication: {
        __typename: 'Application';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        programId: string;
        intake: string | null;
        document: string | null;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            status: string | null;
            date: string | null;
            isMandatory: boolean | null;
        } | null> | null;
        interviewDate: string | null;
        admissionResult: string | null;
        tuitionsFeePaymentDate: string | null;
        decisionLetterDate: string | null;
        visaDate: string | null;
        todo: string | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        modalApplicationCompletedViewed: boolean | null;
        createdAt: string;
        updatedAt: string;
        program: {
            __typename: 'Program';
            applicationFee: number;
            applicationFeeCurrency: Currency;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: Currency;
            country: Country;
            degree: Degree;
            description: string | null;
            discipline: Discipline;
            duration: number;
            durationUnit: DurationUnit;
            fee: number;
            feeCurrency: Currency;
            feesAndFinancing: string | null;
            feeUnit: FeeUnit;
            gradePointAverage: number;
            highestEducationLevel: number;
            id: string;
            intakes: string;
            intakeInformation: string | null;
            languages: Array<Language | null>;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: DurationUnit;
            name: string;
            otherRequirements: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string | null;
                isMandatory: boolean | null;
                storageKey: string | null;
                description: string | null;
                condition: string | null;
                isSpecific: boolean | null;
            } | null>;
            schedule: Schedule;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testDelfdalf: number;
            testGmat: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school: {
                __typename: 'School';
                city: string;
                country: Country;
                coverPhoto: string;
                contactEmail: string | null;
                contactJobTitle: string | null;
                contactName: string | null;
                contactPhone: string | null;
                creationYear: string;
                description: string | null;
                id: string;
                institutionType: InstitutionType;
                internationalStudents: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                contractStatus: string;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner: string | null;
    } | null;
};

export type OnDeleteApplicationSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteApplicationSubscription = {
    onDeleteApplication: {
        __typename: 'Application';
        id: string;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        programId: string;
        intake: string | null;
        document: string | null;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            status: string | null;
            date: string | null;
            isMandatory: boolean | null;
        } | null> | null;
        interviewDate: string | null;
        admissionResult: string | null;
        tuitionsFeePaymentDate: string | null;
        decisionLetterDate: string | null;
        visaDate: string | null;
        todo: string | null;
        notifications: Array<{
            __typename: 'Notification';
            title: string | null;
            titleOptions: string | null;
            description: string | null;
            descriptionOptions: string | null;
            date: string | null;
            seen: boolean | null;
            link: string | null;
        } | null> | null;
        modalApplicationCompletedViewed: boolean | null;
        createdAt: string;
        updatedAt: string;
        program: {
            __typename: 'Program';
            applicationFee: number;
            applicationFeeCurrency: Currency;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: Currency;
            country: Country;
            degree: Degree;
            description: string | null;
            discipline: Discipline;
            duration: number;
            durationUnit: DurationUnit;
            fee: number;
            feeCurrency: Currency;
            feesAndFinancing: string | null;
            feeUnit: FeeUnit;
            gradePointAverage: number;
            highestEducationLevel: number;
            id: string;
            intakes: string;
            intakeInformation: string | null;
            languages: Array<Language | null>;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: DurationUnit;
            name: string;
            otherRequirements: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string | null;
                isMandatory: boolean | null;
                storageKey: string | null;
                description: string | null;
                condition: string | null;
                isSpecific: boolean | null;
            } | null>;
            schedule: Schedule;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testDelfdalf: number;
            testGmat: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school: {
                __typename: 'School';
                city: string;
                country: Country;
                coverPhoto: string;
                contactEmail: string | null;
                contactJobTitle: string | null;
                contactName: string | null;
                contactPhone: string | null;
                creationYear: string;
                description: string | null;
                id: string;
                institutionType: InstitutionType;
                internationalStudents: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                contractStatus: string;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner: string | null;
    } | null;
};

export type OnCreateSearchAlertSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateSearchAlertSubscription = {
    onCreateSearchAlert: {
        __typename: 'SearchAlert';
        id: string;
        query: string | null;
        type: string | null;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type OnUpdateSearchAlertSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateSearchAlertSubscription = {
    onUpdateSearchAlert: {
        __typename: 'SearchAlert';
        id: string;
        query: string | null;
        type: string | null;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type OnDeleteSearchAlertSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteSearchAlertSubscription = {
    onDeleteSearchAlert: {
        __typename: 'SearchAlert';
        id: string;
        query: string | null;
        type: string | null;
        studentId: string;
        student: {
            __typename: 'Student';
            id: string;
            email: string | null;
            phoneNumber: string | null;
            address: string | null;
            city: string | null;
            country: string | null;
            firstName: string | null;
            middleName: string | null;
            lastName: string | null;
            birthday: string | null;
            firstLanguage: string | null;
            passportNumber: string | null;
            gender: string | null;
            maritalStatus: string | null;
            fatherFirstName: string | null;
            fatherLastName: string | null;
            motherFirstName: string | null;
            motherMaidenName: string | null;
            guardianLastName: string | null;
            guardianFirstName: string | null;
            parentsAddress: string | null;
            parentsCity: string | null;
            parentsCountry: string | null;
            parentsPhoneNumber: string | null;
            parentsEmail: string | null;
            disciplines: Array<string | null> | null;
            degrees: Array<string | null> | null;
            nationality: string | null;
            educationCountry: string | null;
            highestEducationLevel: number | null;
            gradePointAverage: number | null;
            schoolsAttended: Array<{
                __typename: 'SchoolAttended';
                name: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                primaryLanguageInstruction: string | null;
                educationLevel: number | null;
                degreeAwarded: number | null;
                degreeAwardedOn: string | null;
                attendedInstitutionFrom: string | null;
                attendedInstitutionTo: string | null;
            } | null> | null;
            testToefl: number | null;
            testIelts: number | null;
            testToeic: number | null;
            testTcftef: number | null;
            testDelfdalf: number | null;
            testGre: number | null;
            testGmat: number | null;
            testTagemage: number | null;
            testCambridgeFirst: number | null;
            testCambridgeAdvanced: number | null;
            testToeflDate: string | null;
            testIeltsDate: string | null;
            testToeicDate: string | null;
            testTcftefDate: string | null;
            testDelfdalfDate: string | null;
            testGreDate: string | null;
            testGmatDate: string | null;
            testTagemageDate: string | null;
            testCambridgeFirstDate: string | null;
            testCambridgeAdvancedDate: string | null;
            testEnglishPending: boolean | null;
            testFrenchPending: boolean | null;
            testLogicAndReasoningPending: boolean | null;
            validVisa: boolean | null;
            refusedVisa: boolean | null;
            refusedVisaReason: string | null;
            workExperiences: Array<{
                __typename: 'WorkExperience';
                title: string | null;
                compagnyName: string | null;
                address: string | null;
                workedFrom: string | null;
                workedTo: string | null;
            } | null> | null;
            documents: {
                __typename: 'ModelDocumentConnection';
                nextToken: string | null;
            } | null;
            favoritePrograms: Array<string | null> | null;
            favoriteSchools: Array<string | null> | null;
            applications: {
                __typename: 'ModelApplicationConnection';
                nextToken: string | null;
            } | null;
            hasMandatoryDocuments: boolean | null;
            modalProfileCompletedViewed: boolean | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            locale: string | null;
            createdAt: string;
            updatedAt: string;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type OnCreateFeedbackSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateFeedbackSubscription = {
    onCreateFeedback: {
        __typename: 'Feedback';
        id: string;
        rating: number | null;
        applicationId: string;
        application: {
            __typename: 'Application';
            id: string;
            studentId: string;
            student: {
                __typename: 'Student';
                id: string;
                email: string | null;
                phoneNumber: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                firstName: string | null;
                middleName: string | null;
                lastName: string | null;
                birthday: string | null;
                firstLanguage: string | null;
                passportNumber: string | null;
                gender: string | null;
                maritalStatus: string | null;
                fatherFirstName: string | null;
                fatherLastName: string | null;
                motherFirstName: string | null;
                motherMaidenName: string | null;
                guardianLastName: string | null;
                guardianFirstName: string | null;
                parentsAddress: string | null;
                parentsCity: string | null;
                parentsCountry: string | null;
                parentsPhoneNumber: string | null;
                parentsEmail: string | null;
                disciplines: Array<string | null> | null;
                degrees: Array<string | null> | null;
                nationality: string | null;
                educationCountry: string | null;
                highestEducationLevel: number | null;
                gradePointAverage: number | null;
                testToefl: number | null;
                testIelts: number | null;
                testToeic: number | null;
                testTcftef: number | null;
                testDelfdalf: number | null;
                testGre: number | null;
                testGmat: number | null;
                testTagemage: number | null;
                testCambridgeFirst: number | null;
                testCambridgeAdvanced: number | null;
                testToeflDate: string | null;
                testIeltsDate: string | null;
                testToeicDate: string | null;
                testTcftefDate: string | null;
                testDelfdalfDate: string | null;
                testGreDate: string | null;
                testGmatDate: string | null;
                testTagemageDate: string | null;
                testCambridgeFirstDate: string | null;
                testCambridgeAdvancedDate: string | null;
                testEnglishPending: boolean | null;
                testFrenchPending: boolean | null;
                testLogicAndReasoningPending: boolean | null;
                validVisa: boolean | null;
                refusedVisa: boolean | null;
                refusedVisaReason: string | null;
                favoritePrograms: Array<string | null> | null;
                favoriteSchools: Array<string | null> | null;
                hasMandatoryDocuments: boolean | null;
                modalProfileCompletedViewed: boolean | null;
                locale: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            programId: string;
            intake: string | null;
            document: string | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
            interviewDate: string | null;
            admissionResult: string | null;
            tuitionsFeePaymentDate: string | null;
            decisionLetterDate: string | null;
            visaDate: string | null;
            todo: string | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            modalApplicationCompletedViewed: boolean | null;
            createdAt: string;
            updatedAt: string;
            program: {
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type OnUpdateFeedbackSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateFeedbackSubscription = {
    onUpdateFeedback: {
        __typename: 'Feedback';
        id: string;
        rating: number | null;
        applicationId: string;
        application: {
            __typename: 'Application';
            id: string;
            studentId: string;
            student: {
                __typename: 'Student';
                id: string;
                email: string | null;
                phoneNumber: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                firstName: string | null;
                middleName: string | null;
                lastName: string | null;
                birthday: string | null;
                firstLanguage: string | null;
                passportNumber: string | null;
                gender: string | null;
                maritalStatus: string | null;
                fatherFirstName: string | null;
                fatherLastName: string | null;
                motherFirstName: string | null;
                motherMaidenName: string | null;
                guardianLastName: string | null;
                guardianFirstName: string | null;
                parentsAddress: string | null;
                parentsCity: string | null;
                parentsCountry: string | null;
                parentsPhoneNumber: string | null;
                parentsEmail: string | null;
                disciplines: Array<string | null> | null;
                degrees: Array<string | null> | null;
                nationality: string | null;
                educationCountry: string | null;
                highestEducationLevel: number | null;
                gradePointAverage: number | null;
                testToefl: number | null;
                testIelts: number | null;
                testToeic: number | null;
                testTcftef: number | null;
                testDelfdalf: number | null;
                testGre: number | null;
                testGmat: number | null;
                testTagemage: number | null;
                testCambridgeFirst: number | null;
                testCambridgeAdvanced: number | null;
                testToeflDate: string | null;
                testIeltsDate: string | null;
                testToeicDate: string | null;
                testTcftefDate: string | null;
                testDelfdalfDate: string | null;
                testGreDate: string | null;
                testGmatDate: string | null;
                testTagemageDate: string | null;
                testCambridgeFirstDate: string | null;
                testCambridgeAdvancedDate: string | null;
                testEnglishPending: boolean | null;
                testFrenchPending: boolean | null;
                testLogicAndReasoningPending: boolean | null;
                validVisa: boolean | null;
                refusedVisa: boolean | null;
                refusedVisaReason: string | null;
                favoritePrograms: Array<string | null> | null;
                favoriteSchools: Array<string | null> | null;
                hasMandatoryDocuments: boolean | null;
                modalProfileCompletedViewed: boolean | null;
                locale: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            programId: string;
            intake: string | null;
            document: string | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
            interviewDate: string | null;
            admissionResult: string | null;
            tuitionsFeePaymentDate: string | null;
            decisionLetterDate: string | null;
            visaDate: string | null;
            todo: string | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            modalApplicationCompletedViewed: boolean | null;
            createdAt: string;
            updatedAt: string;
            program: {
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type OnDeleteFeedbackSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteFeedbackSubscription = {
    onDeleteFeedback: {
        __typename: 'Feedback';
        id: string;
        rating: number | null;
        applicationId: string;
        application: {
            __typename: 'Application';
            id: string;
            studentId: string;
            student: {
                __typename: 'Student';
                id: string;
                email: string | null;
                phoneNumber: string | null;
                address: string | null;
                city: string | null;
                country: string | null;
                firstName: string | null;
                middleName: string | null;
                lastName: string | null;
                birthday: string | null;
                firstLanguage: string | null;
                passportNumber: string | null;
                gender: string | null;
                maritalStatus: string | null;
                fatherFirstName: string | null;
                fatherLastName: string | null;
                motherFirstName: string | null;
                motherMaidenName: string | null;
                guardianLastName: string | null;
                guardianFirstName: string | null;
                parentsAddress: string | null;
                parentsCity: string | null;
                parentsCountry: string | null;
                parentsPhoneNumber: string | null;
                parentsEmail: string | null;
                disciplines: Array<string | null> | null;
                degrees: Array<string | null> | null;
                nationality: string | null;
                educationCountry: string | null;
                highestEducationLevel: number | null;
                gradePointAverage: number | null;
                testToefl: number | null;
                testIelts: number | null;
                testToeic: number | null;
                testTcftef: number | null;
                testDelfdalf: number | null;
                testGre: number | null;
                testGmat: number | null;
                testTagemage: number | null;
                testCambridgeFirst: number | null;
                testCambridgeAdvanced: number | null;
                testToeflDate: string | null;
                testIeltsDate: string | null;
                testToeicDate: string | null;
                testTcftefDate: string | null;
                testDelfdalfDate: string | null;
                testGreDate: string | null;
                testGmatDate: string | null;
                testTagemageDate: string | null;
                testCambridgeFirstDate: string | null;
                testCambridgeAdvancedDate: string | null;
                testEnglishPending: boolean | null;
                testFrenchPending: boolean | null;
                testLogicAndReasoningPending: boolean | null;
                validVisa: boolean | null;
                refusedVisa: boolean | null;
                refusedVisaReason: string | null;
                favoritePrograms: Array<string | null> | null;
                favoriteSchools: Array<string | null> | null;
                hasMandatoryDocuments: boolean | null;
                modalProfileCompletedViewed: boolean | null;
                locale: string | null;
                createdAt: string;
                updatedAt: string;
                owner: string | null;
            } | null;
            programId: string;
            intake: string | null;
            document: string | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
            interviewDate: string | null;
            admissionResult: string | null;
            tuitionsFeePaymentDate: string | null;
            decisionLetterDate: string | null;
            visaDate: string | null;
            todo: string | null;
            notifications: Array<{
                __typename: 'Notification';
                title: string | null;
                titleOptions: string | null;
                description: string | null;
                descriptionOptions: string | null;
                date: string | null;
                seen: boolean | null;
                link: string | null;
            } | null> | null;
            modalApplicationCompletedViewed: boolean | null;
            createdAt: string;
            updatedAt: string;
            program: {
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        owner: string | null;
    } | null;
};

export type OnCreateSchoolSubscription = {
    onCreateSchool: {
        __typename: 'School';
        city: string;
        country: Country;
        coverPhoto: string;
        contactEmail: string | null;
        contactJobTitle: string | null;
        contactName: string | null;
        contactPhone: string | null;
        creationYear: string;
        description: string | null;
        id: string;
        institutionType: InstitutionType;
        internationalStudents: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        stepsTemplates: Array<{
            __typename: 'ApplicationStepsTemplate';
            targets: Array<string | null> | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
        } | null>;
        contractStatus: string;
        createdAt: string;
        updatedAt: string;
        programs: {
            __typename: 'ModelProgramConnection';
            items: Array<{
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
    } | null;
};

export type OnUpdateSchoolSubscription = {
    onUpdateSchool: {
        __typename: 'School';
        city: string;
        country: Country;
        coverPhoto: string;
        contactEmail: string | null;
        contactJobTitle: string | null;
        contactName: string | null;
        contactPhone: string | null;
        creationYear: string;
        description: string | null;
        id: string;
        institutionType: InstitutionType;
        internationalStudents: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        stepsTemplates: Array<{
            __typename: 'ApplicationStepsTemplate';
            targets: Array<string | null> | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
        } | null>;
        contractStatus: string;
        createdAt: string;
        updatedAt: string;
        programs: {
            __typename: 'ModelProgramConnection';
            items: Array<{
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
    } | null;
};

export type OnDeleteSchoolSubscription = {
    onDeleteSchool: {
        __typename: 'School';
        city: string;
        country: Country;
        coverPhoto: string;
        contactEmail: string | null;
        contactJobTitle: string | null;
        contactName: string | null;
        contactPhone: string | null;
        creationYear: string;
        description: string | null;
        id: string;
        institutionType: InstitutionType;
        internationalStudents: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        stepsTemplates: Array<{
            __typename: 'ApplicationStepsTemplate';
            targets: Array<string | null> | null;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                status: string | null;
                date: string | null;
                isMandatory: boolean | null;
            } | null> | null;
        } | null>;
        contractStatus: string;
        createdAt: string;
        updatedAt: string;
        programs: {
            __typename: 'ModelProgramConnection';
            items: Array<{
                __typename: 'Program';
                applicationFee: number;
                applicationFeeCurrency: Currency;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: Currency;
                country: Country;
                degree: Degree;
                description: string | null;
                discipline: Discipline;
                duration: number;
                durationUnit: DurationUnit;
                fee: number;
                feeCurrency: Currency;
                feesAndFinancing: string | null;
                feeUnit: FeeUnit;
                gradePointAverage: number;
                highestEducationLevel: number;
                id: string;
                intakes: string;
                intakeInformation: string | null;
                languages: Array<Language | null>;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: DurationUnit;
                name: string;
                otherRequirements: string | null;
                published: boolean;
                schedule: Schedule;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testDelfdalf: number;
                testGmat: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken: string | null;
        } | null;
    } | null;
};

export type OnCreateProgramSubscription = {
    onCreateProgram: {
        __typename: 'Program';
        applicationFee: number;
        applicationFeeCurrency: Currency;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: Currency;
        country: Country;
        degree: Degree;
        description: string | null;
        discipline: Discipline;
        duration: number;
        durationUnit: DurationUnit;
        fee: number;
        feeCurrency: Currency;
        feesAndFinancing: string | null;
        feeUnit: FeeUnit;
        gradePointAverage: number;
        highestEducationLevel: number;
        id: string;
        intakes: string;
        intakeInformation: string | null;
        languages: Array<Language | null>;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: DurationUnit;
        name: string;
        otherRequirements: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string | null;
            isMandatory: boolean | null;
            storageKey: string | null;
            description: string | null;
            condition: string | null;
            isSpecific: boolean | null;
        } | null>;
        schedule: Schedule;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testDelfdalf: number;
        testGmat: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school: {
            __typename: 'School';
            city: string;
            country: Country;
            coverPhoto: string;
            contactEmail: string | null;
            contactJobTitle: string | null;
            contactName: string | null;
            contactPhone: string | null;
            creationYear: string;
            description: string | null;
            id: string;
            institutionType: InstitutionType;
            internationalStudents: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            stepsTemplates: Array<{
                __typename: 'ApplicationStepsTemplate';
                targets: Array<string | null> | null;
            } | null>;
            contractStatus: string;
            createdAt: string;
            updatedAt: string;
            programs: {
                __typename: 'ModelProgramConnection';
                nextToken: string | null;
            } | null;
        } | null;
    } | null;
};

export type OnUpdateProgramSubscription = {
    onUpdateProgram: {
        __typename: 'Program';
        applicationFee: number;
        applicationFeeCurrency: Currency;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: Currency;
        country: Country;
        degree: Degree;
        description: string | null;
        discipline: Discipline;
        duration: number;
        durationUnit: DurationUnit;
        fee: number;
        feeCurrency: Currency;
        feesAndFinancing: string | null;
        feeUnit: FeeUnit;
        gradePointAverage: number;
        highestEducationLevel: number;
        id: string;
        intakes: string;
        intakeInformation: string | null;
        languages: Array<Language | null>;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: DurationUnit;
        name: string;
        otherRequirements: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string | null;
            isMandatory: boolean | null;
            storageKey: string | null;
            description: string | null;
            condition: string | null;
            isSpecific: boolean | null;
        } | null>;
        schedule: Schedule;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testDelfdalf: number;
        testGmat: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school: {
            __typename: 'School';
            city: string;
            country: Country;
            coverPhoto: string;
            contactEmail: string | null;
            contactJobTitle: string | null;
            contactName: string | null;
            contactPhone: string | null;
            creationYear: string;
            description: string | null;
            id: string;
            institutionType: InstitutionType;
            internationalStudents: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            stepsTemplates: Array<{
                __typename: 'ApplicationStepsTemplate';
                targets: Array<string | null> | null;
            } | null>;
            contractStatus: string;
            createdAt: string;
            updatedAt: string;
            programs: {
                __typename: 'ModelProgramConnection';
                nextToken: string | null;
            } | null;
        } | null;
    } | null;
};

export type OnDeleteProgramSubscription = {
    onDeleteProgram: {
        __typename: 'Program';
        applicationFee: number;
        applicationFeeCurrency: Currency;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: Currency;
        country: Country;
        degree: Degree;
        description: string | null;
        discipline: Discipline;
        duration: number;
        durationUnit: DurationUnit;
        fee: number;
        feeCurrency: Currency;
        feesAndFinancing: string | null;
        feeUnit: FeeUnit;
        gradePointAverage: number;
        highestEducationLevel: number;
        id: string;
        intakes: string;
        intakeInformation: string | null;
        languages: Array<Language | null>;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: DurationUnit;
        name: string;
        otherRequirements: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string | null;
            isMandatory: boolean | null;
            storageKey: string | null;
            description: string | null;
            condition: string | null;
            isSpecific: boolean | null;
        } | null>;
        schedule: Schedule;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testDelfdalf: number;
        testGmat: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school: {
            __typename: 'School';
            city: string;
            country: Country;
            coverPhoto: string;
            contactEmail: string | null;
            contactJobTitle: string | null;
            contactName: string | null;
            contactPhone: string | null;
            creationYear: string;
            description: string | null;
            id: string;
            institutionType: InstitutionType;
            internationalStudents: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            stepsTemplates: Array<{
                __typename: 'ApplicationStepsTemplate';
                targets: Array<string | null> | null;
            } | null>;
            contractStatus: string;
            createdAt: string;
            updatedAt: string;
            programs: {
                __typename: 'ModelProgramConnection';
                nextToken: string | null;
            } | null;
        } | null;
    } | null;
};

export type OnCreatePostSubscription = {
    onCreatePost: {
        __typename: 'Post';
        category: string;
        content: string;
        id: string;
        published: boolean;
        slug: string;
        title: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdatePostSubscription = {
    onUpdatePost: {
        __typename: 'Post';
        category: string;
        content: string;
        id: string;
        published: boolean;
        slug: string;
        title: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeletePostSubscription = {
    onDeletePost: {
        __typename: 'Post';
        category: string;
        content: string;
        id: string;
        published: boolean;
        slug: string;
        title: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};
