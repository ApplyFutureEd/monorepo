/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSchoolInput = {
    id?: string | null;
    city: string;
    country: string;
    coverPhoto: string;
    contactEmail?: string | null;
    contactJobTitle?: string | null;
    contactName?: string | null;
    contactPhone?: string | null;
    contractStatus: string;
    creationYear: number;
    description?: string | null;
    institutionType: string;
    internationalStudents: number;
    lastUpdate: number;
    logo: string;
    name: string;
    totalStudents: number;
    slug: string;
    published: boolean;
};

export type ModelSchoolConditionInput = {
    city?: ModelStringInput | null;
    country?: ModelStringInput | null;
    coverPhoto?: ModelStringInput | null;
    contactEmail?: ModelStringInput | null;
    contactJobTitle?: ModelStringInput | null;
    contactName?: ModelStringInput | null;
    contactPhone?: ModelStringInput | null;
    contractStatus?: ModelStringInput | null;
    creationYear?: ModelFloatInput | null;
    description?: ModelStringInput | null;
    institutionType?: ModelStringInput | null;
    internationalStudents?: ModelFloatInput | null;
    lastUpdate?: ModelFloatInput | null;
    logo?: ModelStringInput | null;
    name?: ModelStringInput | null;
    totalStudents?: ModelFloatInput | null;
    slug?: ModelStringInput | null;
    published?: ModelBooleanInput | null;
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

export type School = {
    __typename: 'School';
    id?: string;
    city?: string;
    country?: string;
    coverPhoto?: string;
    contactEmail?: string | null;
    contactJobTitle?: string | null;
    contactName?: string | null;
    contactPhone?: string | null;
    contractStatus?: string;
    creationYear?: number;
    description?: string | null;
    institutionType?: string;
    internationalStudents?: number;
    lastUpdate?: number;
    logo?: string;
    name?: string;
    totalStudents?: number;
    slug?: string;
    published?: boolean;
    createdAt?: string;
    updatedAt?: string;
    programs?: ModelProgramConnection;
};

export type ModelProgramConnection = {
    __typename: 'ModelProgramConnection';
    items?: Array<Program | null> | null;
    nextToken?: string | null;
};

export type Program = {
    __typename: 'Program';
    id?: string;
    applicationFee?: number;
    applicationFeeCurrency?: string;
    city?: string;
    costOfLiving?: number;
    costOfLivingCurrency?: string;
    country?: string;
    degree?: string;
    description?: string | null;
    discipline?: string;
    duration?: number;
    durationUnit?: string;
    fee?: number;
    feeCurrency?: string;
    feeUnit?: string;
    feesAndFinancing?: string | null;
    gradePointAverage?: number;
    highestEducationLevel?: number;
    intakeInformation?: string | null;
    intakes?: string;
    languages?: Array<string | null>;
    lastUpdate?: number;
    minimumAge?: number;
    minimumWorkExperience?: number;
    minimumWorkExperienceUnit?: string;
    name?: string;
    otherRequirements?: string | null;
    published?: boolean;
    requestedDocuments?: Array<RequestedDocument>;
    schedule?: string;
    schoolId?: string;
    schoolName?: string;
    slug?: string;
    submissionDeadline?: string;
    testCambridgeAdvanced?: number;
    testCambridgeFirst?: number;
    testCeliCilsItPlida?: number;
    testDele?: number;
    testDelfdalf?: number;
    testGmat?: number;
    testGoethe?: number;
    testGre?: number;
    testIelts?: number;
    testTagemage?: number;
    testTcftef?: number;
    testToefl?: number;
    testToeic?: number;
    createdAt?: string;
    updatedAt?: string;
    school?: School;
};

export type RequestedDocument = {
    __typename: 'RequestedDocument';
    name?: string;
    isMandatory?: boolean | null;
    storageKey?: string | null;
    description?: string | null;
    condition?: string | null;
    isSpecific?: boolean | null;
};

export type UpdateSchoolInput = {
    id: string;
    city?: string | null;
    country?: string | null;
    coverPhoto?: string | null;
    contactEmail?: string | null;
    contactJobTitle?: string | null;
    contactName?: string | null;
    contactPhone?: string | null;
    contractStatus?: string | null;
    creationYear?: number | null;
    description?: string | null;
    institutionType?: string | null;
    internationalStudents?: number | null;
    lastUpdate?: number | null;
    logo?: string | null;
    name?: string | null;
    totalStudents?: number | null;
    slug?: string | null;
    published?: boolean | null;
};

export type DeleteSchoolInput = {
    id?: string | null;
};

export type CreateProgramInput = {
    id?: string | null;
    applicationFee: number;
    applicationFeeCurrency: string;
    city: string;
    costOfLiving: number;
    costOfLivingCurrency: string;
    country: string;
    degree: string;
    description?: string | null;
    discipline: string;
    duration: number;
    durationUnit: string;
    fee: number;
    feeCurrency: string;
    feeUnit: string;
    feesAndFinancing?: string | null;
    gradePointAverage: number;
    highestEducationLevel: number;
    intakeInformation?: string | null;
    intakes: string;
    languages: Array<string | null>;
    lastUpdate: number;
    minimumAge: number;
    minimumWorkExperience: number;
    minimumWorkExperienceUnit: string;
    name: string;
    otherRequirements?: string | null;
    published: boolean;
    requestedDocuments: Array<RequestedDocumentInput>;
    schedule: string;
    schoolId: string;
    schoolName: string;
    slug: string;
    submissionDeadline: string;
    testCambridgeAdvanced: number;
    testCambridgeFirst: number;
    testCeliCilsItPlida: number;
    testDele: number;
    testDelfdalf: number;
    testGmat: number;
    testGoethe: number;
    testGre: number;
    testIelts: number;
    testTagemage: number;
    testTcftef: number;
    testToefl: number;
    testToeic: number;
};

export type RequestedDocumentInput = {
    name: string;
    isMandatory?: boolean | null;
    storageKey?: string | null;
    description?: string | null;
    condition?: string | null;
    isSpecific?: boolean | null;
};

export type ModelProgramConditionInput = {
    applicationFee?: ModelFloatInput | null;
    applicationFeeCurrency?: ModelStringInput | null;
    city?: ModelStringInput | null;
    costOfLiving?: ModelFloatInput | null;
    costOfLivingCurrency?: ModelStringInput | null;
    country?: ModelStringInput | null;
    degree?: ModelStringInput | null;
    description?: ModelStringInput | null;
    discipline?: ModelStringInput | null;
    duration?: ModelFloatInput | null;
    durationUnit?: ModelStringInput | null;
    fee?: ModelFloatInput | null;
    feeCurrency?: ModelStringInput | null;
    feeUnit?: ModelStringInput | null;
    feesAndFinancing?: ModelStringInput | null;
    gradePointAverage?: ModelFloatInput | null;
    highestEducationLevel?: ModelFloatInput | null;
    intakeInformation?: ModelStringInput | null;
    intakes?: ModelStringInput | null;
    languages?: ModelStringInput | null;
    lastUpdate?: ModelFloatInput | null;
    minimumAge?: ModelFloatInput | null;
    minimumWorkExperience?: ModelFloatInput | null;
    minimumWorkExperienceUnit?: ModelStringInput | null;
    name?: ModelStringInput | null;
    otherRequirements?: ModelStringInput | null;
    published?: ModelBooleanInput | null;
    schedule?: ModelStringInput | null;
    schoolId?: ModelIDInput | null;
    schoolName?: ModelStringInput | null;
    slug?: ModelStringInput | null;
    submissionDeadline?: ModelStringInput | null;
    testCambridgeAdvanced?: ModelFloatInput | null;
    testCambridgeFirst?: ModelFloatInput | null;
    testCeliCilsItPlida?: ModelFloatInput | null;
    testDele?: ModelFloatInput | null;
    testDelfdalf?: ModelFloatInput | null;
    testGmat?: ModelFloatInput | null;
    testGoethe?: ModelFloatInput | null;
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
    id: string;
    applicationFee?: number | null;
    applicationFeeCurrency?: string | null;
    city?: string | null;
    costOfLiving?: number | null;
    costOfLivingCurrency?: string | null;
    country?: string | null;
    degree?: string | null;
    description?: string | null;
    discipline?: string | null;
    duration?: number | null;
    durationUnit?: string | null;
    fee?: number | null;
    feeCurrency?: string | null;
    feeUnit?: string | null;
    feesAndFinancing?: string | null;
    gradePointAverage?: number | null;
    highestEducationLevel?: number | null;
    intakeInformation?: string | null;
    intakes?: string | null;
    languages?: Array<string | null> | null;
    lastUpdate?: number | null;
    minimumAge?: number | null;
    minimumWorkExperience?: number | null;
    minimumWorkExperienceUnit?: string | null;
    name?: string | null;
    otherRequirements?: string | null;
    published?: boolean | null;
    requestedDocuments?: Array<RequestedDocumentInput> | null;
    schedule?: string | null;
    schoolId?: string | null;
    schoolName?: string | null;
    slug?: string | null;
    submissionDeadline?: string | null;
    testCambridgeAdvanced?: number | null;
    testCambridgeFirst?: number | null;
    testCeliCilsItPlida?: number | null;
    testDele?: number | null;
    testDelfdalf?: number | null;
    testGmat?: number | null;
    testGoethe?: number | null;
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
    address?: string | null;
    birthday?: string | null;
    city?: string | null;
    country?: string | null;
    degrees?: Array<string | null> | null;
    disciplines?: Array<string | null> | null;
    educationCountry?: string | null;
    email?: string | null;
    fatherFirstName?: string | null;
    fatherLastName?: string | null;
    firstLanguage?: string | null;
    firstName?: string | null;
    favoritePrograms?: Array<string | null> | null;
    favoriteSchools?: Array<string | null> | null;
    gender?: string | null;
    gradePointAverage?: number | null;
    guardianFirstName?: string | null;
    guardianLastName?: string | null;
    hasMandatoryDocuments?: boolean | null;
    highestEducationLevel?: number | null;
    lastName?: string | null;
    lastUpdate: number;
    locale?: string | null;
    maritalStatus?: string | null;
    middleName?: string | null;
    modalProfileCompletedViewed?: boolean | null;
    phoneNumber?: string | null;
    motherFirstName?: string | null;
    motherMaidenName?: string | null;
    nationality?: string | null;
    notifications?: Array<NotificationInput | null> | null;
    parentsAddress?: string | null;
    parentsCity?: string | null;
    parentsCountry?: string | null;
    parentsEmail?: string | null;
    parentsPhoneNumber?: string | null;
    passportNumber?: string | null;
    refusedVisa?: boolean | null;
    refusedVisaReason?: string | null;
    schoolsAttended?: Array<SchoolAttendedInput | null> | null;
    testCambridgeAdvanced?: number | null;
    testCambridgeAdvancedDate?: string | null;
    testCambridgeFirst?: number | null;
    testCambridgeFirstDate?: string | null;
    testCeliCilsItPlida?: number | null;
    testCeliCilsItPlidaDate?: string | null;
    testDele?: number | null;
    testDeleDate?: string | null;
    testDelfdalf?: number | null;
    testDelfdalfDate?: string | null;
    testEnglishPending?: boolean | null;
    testGmat?: number | null;
    testGmatDate?: string | null;
    testGoethe?: number | null;
    testGoetheDate?: string | null;
    testGre?: number | null;
    testGreDate?: string | null;
    testIelts?: number | null;
    testIeltsDate?: string | null;
    testLogicAndReasoningPending?: boolean | null;
    testOtherLanguagesPending?: boolean | null;
    testTagemage?: number | null;
    testTagemageDate?: string | null;
    testTcftef?: number | null;
    testTcftefDate?: string | null;
    testToefl?: number | null;
    testToeflDate?: string | null;
    testToeic?: number | null;
    testToeicDate?: string | null;
    validVisa?: boolean | null;
    workExperiences?: Array<WorkExperienceInput | null> | null;
};

export type NotificationInput = {
    date: string;
    description: string;
    descriptionOptions: string;
    link: string;
    seen: boolean;
    title: string;
    titleOptions: string;
};

export type SchoolAttendedInput = {
    address?: string | null;
    attendedInstitutionFrom?: string | null;
    attendedInstitutionTo?: string | null;
    city?: string | null;
    country?: string | null;
    degreeAwarded?: number | null;
    degreeAwardedOn?: string | null;
    educationLevel?: number | null;
    name?: string | null;
    primaryLanguageInstruction?: string | null;
};

export type WorkExperienceInput = {
    address?: string | null;
    compagnyName?: string | null;
    title?: string | null;
    workedFrom?: string | null;
    workedTo?: string | null;
};

export type ModelStudentConditionInput = {
    address?: ModelStringInput | null;
    birthday?: ModelStringInput | null;
    city?: ModelStringInput | null;
    country?: ModelStringInput | null;
    degrees?: ModelStringInput | null;
    disciplines?: ModelStringInput | null;
    educationCountry?: ModelStringInput | null;
    email?: ModelStringInput | null;
    fatherFirstName?: ModelStringInput | null;
    fatherLastName?: ModelStringInput | null;
    firstLanguage?: ModelStringInput | null;
    firstName?: ModelStringInput | null;
    favoritePrograms?: ModelStringInput | null;
    favoriteSchools?: ModelStringInput | null;
    gender?: ModelStringInput | null;
    gradePointAverage?: ModelFloatInput | null;
    guardianFirstName?: ModelStringInput | null;
    guardianLastName?: ModelStringInput | null;
    hasMandatoryDocuments?: ModelBooleanInput | null;
    highestEducationLevel?: ModelFloatInput | null;
    lastName?: ModelStringInput | null;
    lastUpdate?: ModelFloatInput | null;
    locale?: ModelStringInput | null;
    maritalStatus?: ModelStringInput | null;
    middleName?: ModelStringInput | null;
    modalProfileCompletedViewed?: ModelBooleanInput | null;
    phoneNumber?: ModelStringInput | null;
    motherFirstName?: ModelStringInput | null;
    motherMaidenName?: ModelStringInput | null;
    nationality?: ModelStringInput | null;
    parentsAddress?: ModelStringInput | null;
    parentsCity?: ModelStringInput | null;
    parentsCountry?: ModelStringInput | null;
    parentsEmail?: ModelStringInput | null;
    parentsPhoneNumber?: ModelStringInput | null;
    passportNumber?: ModelStringInput | null;
    refusedVisa?: ModelBooleanInput | null;
    refusedVisaReason?: ModelStringInput | null;
    testCambridgeAdvanced?: ModelFloatInput | null;
    testCambridgeAdvancedDate?: ModelStringInput | null;
    testCambridgeFirst?: ModelFloatInput | null;
    testCambridgeFirstDate?: ModelStringInput | null;
    testCeliCilsItPlida?: ModelFloatInput | null;
    testCeliCilsItPlidaDate?: ModelStringInput | null;
    testDele?: ModelFloatInput | null;
    testDeleDate?: ModelStringInput | null;
    testDelfdalf?: ModelFloatInput | null;
    testDelfdalfDate?: ModelStringInput | null;
    testEnglishPending?: ModelBooleanInput | null;
    testGmat?: ModelFloatInput | null;
    testGmatDate?: ModelStringInput | null;
    testGoethe?: ModelFloatInput | null;
    testGoetheDate?: ModelStringInput | null;
    testGre?: ModelFloatInput | null;
    testGreDate?: ModelStringInput | null;
    testIelts?: ModelFloatInput | null;
    testIeltsDate?: ModelStringInput | null;
    testLogicAndReasoningPending?: ModelBooleanInput | null;
    testOtherLanguagesPending?: ModelBooleanInput | null;
    testTagemage?: ModelFloatInput | null;
    testTagemageDate?: ModelStringInput | null;
    testTcftef?: ModelFloatInput | null;
    testTcftefDate?: ModelStringInput | null;
    testToefl?: ModelFloatInput | null;
    testToeflDate?: ModelStringInput | null;
    testToeic?: ModelFloatInput | null;
    testToeicDate?: ModelStringInput | null;
    validVisa?: ModelBooleanInput | null;
    and?: Array<ModelStudentConditionInput | null> | null;
    or?: Array<ModelStudentConditionInput | null> | null;
    not?: ModelStudentConditionInput | null;
};

export type Student = {
    __typename: 'Student';
    id?: string;
    address?: string | null;
    applications?: ModelApplicationConnection;
    birthday?: string | null;
    city?: string | null;
    country?: string | null;
    degrees?: Array<string | null> | null;
    disciplines?: Array<string | null> | null;
    documents?: ModelDocumentConnection;
    educationCountry?: string | null;
    email?: string | null;
    fatherFirstName?: string | null;
    fatherLastName?: string | null;
    firstLanguage?: string | null;
    firstName?: string | null;
    favoritePrograms?: Array<string | null> | null;
    favoriteSchools?: Array<string | null> | null;
    gender?: string | null;
    gradePointAverage?: number | null;
    guardianFirstName?: string | null;
    guardianLastName?: string | null;
    hasMandatoryDocuments?: boolean | null;
    highestEducationLevel?: number | null;
    lastName?: string | null;
    lastUpdate?: number;
    locale?: string | null;
    maritalStatus?: string | null;
    middleName?: string | null;
    modalProfileCompletedViewed?: boolean | null;
    phoneNumber?: string | null;
    motherFirstName?: string | null;
    motherMaidenName?: string | null;
    nationality?: string | null;
    notifications?: Array<Notification | null> | null;
    parentsAddress?: string | null;
    parentsCity?: string | null;
    parentsCountry?: string | null;
    parentsEmail?: string | null;
    parentsPhoneNumber?: string | null;
    passportNumber?: string | null;
    refusedVisa?: boolean | null;
    refusedVisaReason?: string | null;
    schoolsAttended?: Array<SchoolAttended | null> | null;
    testCambridgeAdvanced?: number | null;
    testCambridgeAdvancedDate?: string | null;
    testCambridgeFirst?: number | null;
    testCambridgeFirstDate?: string | null;
    testCeliCilsItPlida?: number | null;
    testCeliCilsItPlidaDate?: string | null;
    testDele?: number | null;
    testDeleDate?: string | null;
    testDelfdalf?: number | null;
    testDelfdalfDate?: string | null;
    testEnglishPending?: boolean | null;
    testGmat?: number | null;
    testGmatDate?: string | null;
    testGoethe?: number | null;
    testGoetheDate?: string | null;
    testGre?: number | null;
    testGreDate?: string | null;
    testIelts?: number | null;
    testIeltsDate?: string | null;
    testLogicAndReasoningPending?: boolean | null;
    testOtherLanguagesPending?: boolean | null;
    testTagemage?: number | null;
    testTagemageDate?: string | null;
    testTcftef?: number | null;
    testTcftefDate?: string | null;
    testToefl?: number | null;
    testToeflDate?: string | null;
    testToeic?: number | null;
    testToeicDate?: string | null;
    validVisa?: boolean | null;
    workExperiences?: Array<WorkExperience | null> | null;
    createdAt?: string;
    updatedAt?: string;
    owner?: string | null;
};

export type ModelApplicationConnection = {
    __typename: 'ModelApplicationConnection';
    items?: Array<Application | null> | null;
    nextToken?: string | null;
};

export type Application = {
    __typename: 'Application';
    id?: string;
    admissionResult?: string | null;
    document?: string | null;
    decisionLetterDate?: string | null;
    intake?: string;
    interviewDate?: string | null;
    lastUpdate?: number;
    modalApplicationCompletedViewed?: boolean;
    notifications?: Array<Notification | null> | null;
    programId?: string;
    steps?: Array<ApplicationStep>;
    studentId?: string;
    student?: Student;
    todo?: string | null;
    tuitionsFeePaymentDate?: string | null;
    visaDate?: string | null;
    createdAt?: string;
    updatedAt?: string;
    program?: Program;
    owner?: string | null;
};

export type Notification = {
    __typename: 'Notification';
    date?: string;
    description?: string;
    descriptionOptions?: string;
    link?: string;
    seen?: boolean;
    title?: string;
    titleOptions?: string;
};

export type ApplicationStep = {
    __typename: 'ApplicationStep';
    id?: string;
    date?: string;
    isMandatory?: boolean;
    label?: string;
    status?: string;
};

export type ModelDocumentConnection = {
    __typename: 'ModelDocumentConnection';
    items?: Array<Document | null> | null;
    nextToken?: string | null;
};

export type Document = {
    __typename: 'Document';
    id?: string;
    studentId?: string;
    student?: Student;
    name?: string;
    storageKey?: string | null;
    createdAt?: string;
    updatedAt?: string;
    owner?: string | null;
};

export type SchoolAttended = {
    __typename: 'SchoolAttended';
    address?: string | null;
    attendedInstitutionFrom?: string | null;
    attendedInstitutionTo?: string | null;
    city?: string | null;
    country?: string | null;
    degreeAwarded?: number | null;
    degreeAwardedOn?: string | null;
    educationLevel?: number | null;
    name?: string | null;
    primaryLanguageInstruction?: string | null;
};

export type WorkExperience = {
    __typename: 'WorkExperience';
    address?: string | null;
    compagnyName?: string | null;
    title?: string | null;
    workedFrom?: string | null;
    workedTo?: string | null;
};

export type UpdateStudentInput = {
    id: string;
    address?: string | null;
    birthday?: string | null;
    city?: string | null;
    country?: string | null;
    degrees?: Array<string | null> | null;
    disciplines?: Array<string | null> | null;
    educationCountry?: string | null;
    email?: string | null;
    fatherFirstName?: string | null;
    fatherLastName?: string | null;
    firstLanguage?: string | null;
    firstName?: string | null;
    favoritePrograms?: Array<string | null> | null;
    favoriteSchools?: Array<string | null> | null;
    gender?: string | null;
    gradePointAverage?: number | null;
    guardianFirstName?: string | null;
    guardianLastName?: string | null;
    hasMandatoryDocuments?: boolean | null;
    highestEducationLevel?: number | null;
    lastName?: string | null;
    lastUpdate?: number | null;
    locale?: string | null;
    maritalStatus?: string | null;
    middleName?: string | null;
    modalProfileCompletedViewed?: boolean | null;
    phoneNumber?: string | null;
    motherFirstName?: string | null;
    motherMaidenName?: string | null;
    nationality?: string | null;
    notifications?: Array<NotificationInput | null> | null;
    parentsAddress?: string | null;
    parentsCity?: string | null;
    parentsCountry?: string | null;
    parentsEmail?: string | null;
    parentsPhoneNumber?: string | null;
    passportNumber?: string | null;
    refusedVisa?: boolean | null;
    refusedVisaReason?: string | null;
    schoolsAttended?: Array<SchoolAttendedInput | null> | null;
    testCambridgeAdvanced?: number | null;
    testCambridgeAdvancedDate?: string | null;
    testCambridgeFirst?: number | null;
    testCambridgeFirstDate?: string | null;
    testCeliCilsItPlida?: number | null;
    testCeliCilsItPlidaDate?: string | null;
    testDele?: number | null;
    testDeleDate?: string | null;
    testDelfdalf?: number | null;
    testDelfdalfDate?: string | null;
    testEnglishPending?: boolean | null;
    testGmat?: number | null;
    testGmatDate?: string | null;
    testGoethe?: number | null;
    testGoetheDate?: string | null;
    testGre?: number | null;
    testGreDate?: string | null;
    testIelts?: number | null;
    testIeltsDate?: string | null;
    testLogicAndReasoningPending?: boolean | null;
    testOtherLanguagesPending?: boolean | null;
    testTagemage?: number | null;
    testTagemageDate?: string | null;
    testTcftef?: number | null;
    testTcftefDate?: string | null;
    testToefl?: number | null;
    testToeflDate?: string | null;
    testToeic?: number | null;
    testToeicDate?: string | null;
    validVisa?: boolean | null;
    workExperiences?: Array<WorkExperienceInput | null> | null;
};

export type DeleteStudentInput = {
    id?: string | null;
};

export type CreateDocumentInput = {
    id?: string | null;
    studentId: string;
    name: string;
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
    admissionResult?: string | null;
    document?: string | null;
    decisionLetterDate?: string | null;
    intake: string;
    interviewDate?: string | null;
    lastUpdate: number;
    modalApplicationCompletedViewed: boolean;
    notifications?: Array<NotificationInput | null> | null;
    programId: string;
    steps: Array<ApplicationStepInput>;
    studentId: string;
    todo?: string | null;
    tuitionsFeePaymentDate?: string | null;
    visaDate?: string | null;
};

export type ApplicationStepInput = {
    id: string;
    date: string;
    isMandatory: boolean;
    label: string;
    status: string;
};

export type ModelApplicationConditionInput = {
    admissionResult?: ModelStringInput | null;
    document?: ModelStringInput | null;
    decisionLetterDate?: ModelStringInput | null;
    intake?: ModelStringInput | null;
    interviewDate?: ModelStringInput | null;
    lastUpdate?: ModelFloatInput | null;
    modalApplicationCompletedViewed?: ModelBooleanInput | null;
    programId?: ModelIDInput | null;
    studentId?: ModelIDInput | null;
    todo?: ModelStringInput | null;
    tuitionsFeePaymentDate?: ModelStringInput | null;
    visaDate?: ModelStringInput | null;
    and?: Array<ModelApplicationConditionInput | null> | null;
    or?: Array<ModelApplicationConditionInput | null> | null;
    not?: ModelApplicationConditionInput | null;
};

export type UpdateApplicationInput = {
    id: string;
    admissionResult?: string | null;
    document?: string | null;
    decisionLetterDate?: string | null;
    intake?: string | null;
    interviewDate?: string | null;
    lastUpdate?: number | null;
    modalApplicationCompletedViewed?: boolean | null;
    notifications?: Array<NotificationInput | null> | null;
    programId?: string | null;
    steps?: Array<ApplicationStepInput> | null;
    studentId?: string | null;
    todo?: string | null;
    tuitionsFeePaymentDate?: string | null;
    visaDate?: string | null;
};

export type DeleteApplicationInput = {
    id?: string | null;
};

export type UpdateSearchAlertInput = {
    id: string;
    lastUpdate?: number | null;
    studentId?: string | null;
    type?: string | null;
    query?: string | null;
};

export type ModelSearchAlertConditionInput = {
    lastUpdate?: ModelFloatInput | null;
    studentId?: ModelIDInput | null;
    type?: ModelStringInput | null;
    query?: ModelStringInput | null;
    and?: Array<ModelSearchAlertConditionInput | null> | null;
    or?: Array<ModelSearchAlertConditionInput | null> | null;
    not?: ModelSearchAlertConditionInput | null;
};

export type SearchAlert = {
    __typename: 'SearchAlert';
    id?: string;
    lastUpdate?: number;
    student?: Student;
    studentId?: string | null;
    type?: string;
    query?: string;
    createdAt?: string;
    updatedAt?: string;
    owner?: string | null;
};

export type DeleteSearchAlertInput = {
    id?: string | null;
};

export type CreateFeedbackInput = {
    id?: string | null;
    applicationId: string;
    lastUpdate: number;
    rating: number;
};

export type ModelFeedbackConditionInput = {
    applicationId?: ModelIDInput | null;
    lastUpdate?: ModelFloatInput | null;
    rating?: ModelFloatInput | null;
    and?: Array<ModelFeedbackConditionInput | null> | null;
    or?: Array<ModelFeedbackConditionInput | null> | null;
    not?: ModelFeedbackConditionInput | null;
};

export type Feedback = {
    __typename: 'Feedback';
    id?: string;
    application?: Application;
    applicationId?: string;
    lastUpdate?: number;
    rating?: number;
    createdAt?: string;
    updatedAt?: string;
    owner?: string | null;
};

export type UpdateFeedbackInput = {
    id: string;
    applicationId?: string | null;
    lastUpdate?: number | null;
    rating?: number | null;
};

export type DeleteFeedbackInput = {
    id?: string | null;
};

export type CreatePostInput = {
    id?: string | null;
    category: string;
    content: string;
    lastUpdate: number;
    published: boolean;
    slug: string;
    title: string;
};

export type ModelPostConditionInput = {
    category?: ModelStringInput | null;
    content?: ModelStringInput | null;
    lastUpdate?: ModelFloatInput | null;
    published?: ModelBooleanInput | null;
    slug?: ModelStringInput | null;
    title?: ModelStringInput | null;
    and?: Array<ModelPostConditionInput | null> | null;
    or?: Array<ModelPostConditionInput | null> | null;
    not?: ModelPostConditionInput | null;
};

export type Post = {
    __typename: 'Post';
    id?: string;
    category?: string;
    content?: string;
    lastUpdate?: number;
    published?: boolean;
    slug?: string;
    title?: string;
    createdAt?: string;
    updatedAt?: string;
};

export type UpdatePostInput = {
    id: string;
    category?: string | null;
    content?: string | null;
    lastUpdate?: number | null;
    published?: boolean | null;
    slug?: string | null;
    title?: string | null;
};

export type DeletePostInput = {
    id?: string | null;
};

export type CreateSearchAlertInput = {
    id?: string | null;
    lastUpdate: number;
    studentId?: string | null;
    type: string;
    query: string;
};

export type ModelStudentFilterInput = {
    id?: ModelIDInput | null;
    address?: ModelStringInput | null;
    birthday?: ModelStringInput | null;
    city?: ModelStringInput | null;
    country?: ModelStringInput | null;
    degrees?: ModelStringInput | null;
    disciplines?: ModelStringInput | null;
    educationCountry?: ModelStringInput | null;
    email?: ModelStringInput | null;
    fatherFirstName?: ModelStringInput | null;
    fatherLastName?: ModelStringInput | null;
    firstLanguage?: ModelStringInput | null;
    firstName?: ModelStringInput | null;
    favoritePrograms?: ModelStringInput | null;
    favoriteSchools?: ModelStringInput | null;
    gender?: ModelStringInput | null;
    gradePointAverage?: ModelFloatInput | null;
    guardianFirstName?: ModelStringInput | null;
    guardianLastName?: ModelStringInput | null;
    hasMandatoryDocuments?: ModelBooleanInput | null;
    highestEducationLevel?: ModelFloatInput | null;
    lastName?: ModelStringInput | null;
    lastUpdate?: ModelFloatInput | null;
    locale?: ModelStringInput | null;
    maritalStatus?: ModelStringInput | null;
    middleName?: ModelStringInput | null;
    modalProfileCompletedViewed?: ModelBooleanInput | null;
    phoneNumber?: ModelStringInput | null;
    motherFirstName?: ModelStringInput | null;
    motherMaidenName?: ModelStringInput | null;
    nationality?: ModelStringInput | null;
    parentsAddress?: ModelStringInput | null;
    parentsCity?: ModelStringInput | null;
    parentsCountry?: ModelStringInput | null;
    parentsEmail?: ModelStringInput | null;
    parentsPhoneNumber?: ModelStringInput | null;
    passportNumber?: ModelStringInput | null;
    refusedVisa?: ModelBooleanInput | null;
    refusedVisaReason?: ModelStringInput | null;
    testCambridgeAdvanced?: ModelFloatInput | null;
    testCambridgeAdvancedDate?: ModelStringInput | null;
    testCambridgeFirst?: ModelFloatInput | null;
    testCambridgeFirstDate?: ModelStringInput | null;
    testCeliCilsItPlida?: ModelFloatInput | null;
    testCeliCilsItPlidaDate?: ModelStringInput | null;
    testDele?: ModelFloatInput | null;
    testDeleDate?: ModelStringInput | null;
    testDelfdalf?: ModelFloatInput | null;
    testDelfdalfDate?: ModelStringInput | null;
    testEnglishPending?: ModelBooleanInput | null;
    testGmat?: ModelFloatInput | null;
    testGmatDate?: ModelStringInput | null;
    testGoethe?: ModelFloatInput | null;
    testGoetheDate?: ModelStringInput | null;
    testGre?: ModelFloatInput | null;
    testGreDate?: ModelStringInput | null;
    testIelts?: ModelFloatInput | null;
    testIeltsDate?: ModelStringInput | null;
    testLogicAndReasoningPending?: ModelBooleanInput | null;
    testOtherLanguagesPending?: ModelBooleanInput | null;
    testTagemage?: ModelFloatInput | null;
    testTagemageDate?: ModelStringInput | null;
    testTcftef?: ModelFloatInput | null;
    testTcftefDate?: ModelStringInput | null;
    testToefl?: ModelFloatInput | null;
    testToeflDate?: ModelStringInput | null;
    testToeic?: ModelFloatInput | null;
    testToeicDate?: ModelStringInput | null;
    validVisa?: ModelBooleanInput | null;
    and?: Array<ModelStudentFilterInput | null> | null;
    or?: Array<ModelStudentFilterInput | null> | null;
    not?: ModelStudentFilterInput | null;
};

export type ModelStudentConnection = {
    __typename: 'ModelStudentConnection';
    items?: Array<Student | null> | null;
    nextToken?: string | null;
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
    admissionResult?: ModelStringInput | null;
    document?: ModelStringInput | null;
    decisionLetterDate?: ModelStringInput | null;
    intake?: ModelStringInput | null;
    interviewDate?: ModelStringInput | null;
    lastUpdate?: ModelFloatInput | null;
    modalApplicationCompletedViewed?: ModelBooleanInput | null;
    programId?: ModelIDInput | null;
    studentId?: ModelIDInput | null;
    todo?: ModelStringInput | null;
    tuitionsFeePaymentDate?: ModelStringInput | null;
    visaDate?: ModelStringInput | null;
    and?: Array<ModelApplicationFilterInput | null> | null;
    or?: Array<ModelApplicationFilterInput | null> | null;
    not?: ModelApplicationFilterInput | null;
};

export type ModelSearchAlertFilterInput = {
    id?: ModelIDInput | null;
    lastUpdate?: ModelFloatInput | null;
    studentId?: ModelIDInput | null;
    type?: ModelStringInput | null;
    query?: ModelStringInput | null;
    and?: Array<ModelSearchAlertFilterInput | null> | null;
    or?: Array<ModelSearchAlertFilterInput | null> | null;
    not?: ModelSearchAlertFilterInput | null;
};

export type ModelSearchAlertConnection = {
    __typename: 'ModelSearchAlertConnection';
    items?: Array<SearchAlert | null> | null;
    nextToken?: string | null;
};

export type ModelFeedbackFilterInput = {
    id?: ModelIDInput | null;
    applicationId?: ModelIDInput | null;
    lastUpdate?: ModelFloatInput | null;
    rating?: ModelFloatInput | null;
    and?: Array<ModelFeedbackFilterInput | null> | null;
    or?: Array<ModelFeedbackFilterInput | null> | null;
    not?: ModelFeedbackFilterInput | null;
};

export type ModelFeedbackConnection = {
    __typename: 'ModelFeedbackConnection';
    items?: Array<Feedback | null> | null;
    nextToken?: string | null;
};

export enum ModelSortDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}

export type SearchableStudentFilterInput = {
    id?: SearchableIDFilterInput | null;
    address?: SearchableStringFilterInput | null;
    birthday?: SearchableStringFilterInput | null;
    city?: SearchableStringFilterInput | null;
    country?: SearchableStringFilterInput | null;
    degrees?: SearchableStringFilterInput | null;
    disciplines?: SearchableStringFilterInput | null;
    educationCountry?: SearchableStringFilterInput | null;
    email?: SearchableStringFilterInput | null;
    fatherFirstName?: SearchableStringFilterInput | null;
    fatherLastName?: SearchableStringFilterInput | null;
    firstLanguage?: SearchableStringFilterInput | null;
    firstName?: SearchableStringFilterInput | null;
    favoritePrograms?: SearchableStringFilterInput | null;
    favoriteSchools?: SearchableStringFilterInput | null;
    gender?: SearchableStringFilterInput | null;
    gradePointAverage?: SearchableFloatFilterInput | null;
    guardianFirstName?: SearchableStringFilterInput | null;
    guardianLastName?: SearchableStringFilterInput | null;
    hasMandatoryDocuments?: SearchableBooleanFilterInput | null;
    highestEducationLevel?: SearchableFloatFilterInput | null;
    lastName?: SearchableStringFilterInput | null;
    lastUpdate?: SearchableFloatFilterInput | null;
    locale?: SearchableStringFilterInput | null;
    maritalStatus?: SearchableStringFilterInput | null;
    middleName?: SearchableStringFilterInput | null;
    modalProfileCompletedViewed?: SearchableBooleanFilterInput | null;
    phoneNumber?: SearchableStringFilterInput | null;
    motherFirstName?: SearchableStringFilterInput | null;
    motherMaidenName?: SearchableStringFilterInput | null;
    nationality?: SearchableStringFilterInput | null;
    parentsAddress?: SearchableStringFilterInput | null;
    parentsCity?: SearchableStringFilterInput | null;
    parentsCountry?: SearchableStringFilterInput | null;
    parentsEmail?: SearchableStringFilterInput | null;
    parentsPhoneNumber?: SearchableStringFilterInput | null;
    passportNumber?: SearchableStringFilterInput | null;
    refusedVisa?: SearchableBooleanFilterInput | null;
    refusedVisaReason?: SearchableStringFilterInput | null;
    testCambridgeAdvanced?: SearchableFloatFilterInput | null;
    testCambridgeAdvancedDate?: SearchableStringFilterInput | null;
    testCambridgeFirst?: SearchableFloatFilterInput | null;
    testCambridgeFirstDate?: SearchableStringFilterInput | null;
    testCeliCilsItPlida?: SearchableFloatFilterInput | null;
    testCeliCilsItPlidaDate?: SearchableStringFilterInput | null;
    testDele?: SearchableFloatFilterInput | null;
    testDeleDate?: SearchableStringFilterInput | null;
    testDelfdalf?: SearchableFloatFilterInput | null;
    testDelfdalfDate?: SearchableStringFilterInput | null;
    testEnglishPending?: SearchableBooleanFilterInput | null;
    testGmat?: SearchableFloatFilterInput | null;
    testGmatDate?: SearchableStringFilterInput | null;
    testGoethe?: SearchableFloatFilterInput | null;
    testGoetheDate?: SearchableStringFilterInput | null;
    testGre?: SearchableFloatFilterInput | null;
    testGreDate?: SearchableStringFilterInput | null;
    testIelts?: SearchableFloatFilterInput | null;
    testIeltsDate?: SearchableStringFilterInput | null;
    testLogicAndReasoningPending?: SearchableBooleanFilterInput | null;
    testOtherLanguagesPending?: SearchableBooleanFilterInput | null;
    testTagemage?: SearchableFloatFilterInput | null;
    testTagemageDate?: SearchableStringFilterInput | null;
    testTcftef?: SearchableFloatFilterInput | null;
    testTcftefDate?: SearchableStringFilterInput | null;
    testToefl?: SearchableFloatFilterInput | null;
    testToeflDate?: SearchableStringFilterInput | null;
    testToeic?: SearchableFloatFilterInput | null;
    testToeicDate?: SearchableStringFilterInput | null;
    validVisa?: SearchableBooleanFilterInput | null;
    and?: Array<SearchableStudentFilterInput | null> | null;
    or?: Array<SearchableStudentFilterInput | null> | null;
    not?: SearchableStudentFilterInput | null;
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
    range?: Array<string | null> | null;
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
    range?: Array<string | null> | null;
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

export type SearchableStudentSortInput = {
    field?: SearchableStudentSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableStudentSortableFields {
    id = 'id',
    address = 'address',
    birthday = 'birthday',
    city = 'city',
    country = 'country',
    degrees = 'degrees',
    disciplines = 'disciplines',
    educationCountry = 'educationCountry',
    email = 'email',
    fatherFirstName = 'fatherFirstName',
    fatherLastName = 'fatherLastName',
    firstLanguage = 'firstLanguage',
    firstName = 'firstName',
    favoritePrograms = 'favoritePrograms',
    favoriteSchools = 'favoriteSchools',
    gender = 'gender',
    gradePointAverage = 'gradePointAverage',
    guardianFirstName = 'guardianFirstName',
    guardianLastName = 'guardianLastName',
    hasMandatoryDocuments = 'hasMandatoryDocuments',
    highestEducationLevel = 'highestEducationLevel',
    lastName = 'lastName',
    lastUpdate = 'lastUpdate',
    locale = 'locale',
    maritalStatus = 'maritalStatus',
    middleName = 'middleName',
    modalProfileCompletedViewed = 'modalProfileCompletedViewed',
    phoneNumber = 'phoneNumber',
    motherFirstName = 'motherFirstName',
    motherMaidenName = 'motherMaidenName',
    nationality = 'nationality',
    parentsAddress = 'parentsAddress',
    parentsCity = 'parentsCity',
    parentsCountry = 'parentsCountry',
    parentsEmail = 'parentsEmail',
    parentsPhoneNumber = 'parentsPhoneNumber',
    passportNumber = 'passportNumber',
    refusedVisa = 'refusedVisa',
    refusedVisaReason = 'refusedVisaReason',
    testCambridgeAdvanced = 'testCambridgeAdvanced',
    testCambridgeAdvancedDate = 'testCambridgeAdvancedDate',
    testCambridgeFirst = 'testCambridgeFirst',
    testCambridgeFirstDate = 'testCambridgeFirstDate',
    testCeliCilsItPlida = 'testCeliCilsItPlida',
    testCeliCilsItPlidaDate = 'testCeliCilsItPlidaDate',
    testDele = 'testDele',
    testDeleDate = 'testDeleDate',
    testDelfdalf = 'testDelfdalf',
    testDelfdalfDate = 'testDelfdalfDate',
    testEnglishPending = 'testEnglishPending',
    testGmat = 'testGmat',
    testGmatDate = 'testGmatDate',
    testGoethe = 'testGoethe',
    testGoetheDate = 'testGoetheDate',
    testGre = 'testGre',
    testGreDate = 'testGreDate',
    testIelts = 'testIelts',
    testIeltsDate = 'testIeltsDate',
    testLogicAndReasoningPending = 'testLogicAndReasoningPending',
    testOtherLanguagesPending = 'testOtherLanguagesPending',
    testTagemage = 'testTagemage',
    testTagemageDate = 'testTagemageDate',
    testTcftef = 'testTcftef',
    testTcftefDate = 'testTcftefDate',
    testToefl = 'testToefl',
    testToeflDate = 'testToeflDate',
    testToeic = 'testToeic',
    testToeicDate = 'testToeicDate',
    validVisa = 'validVisa'
}

export enum SearchableSortDirection {
    asc = 'asc',
    desc = 'desc'
}

export type SearchableStudentConnection = {
    __typename: 'SearchableStudentConnection';
    items?: Array<Student | null> | null;
    nextToken?: string | null;
    total?: number | null;
};

export type SearchableApplicationFilterInput = {
    id?: SearchableIDFilterInput | null;
    admissionResult?: SearchableStringFilterInput | null;
    document?: SearchableStringFilterInput | null;
    decisionLetterDate?: SearchableStringFilterInput | null;
    intake?: SearchableStringFilterInput | null;
    interviewDate?: SearchableStringFilterInput | null;
    lastUpdate?: SearchableFloatFilterInput | null;
    modalApplicationCompletedViewed?: SearchableBooleanFilterInput | null;
    programId?: SearchableIDFilterInput | null;
    studentId?: SearchableIDFilterInput | null;
    todo?: SearchableStringFilterInput | null;
    tuitionsFeePaymentDate?: SearchableStringFilterInput | null;
    visaDate?: SearchableStringFilterInput | null;
    and?: Array<SearchableApplicationFilterInput | null> | null;
    or?: Array<SearchableApplicationFilterInput | null> | null;
    not?: SearchableApplicationFilterInput | null;
};

export type SearchableApplicationSortInput = {
    field?: SearchableApplicationSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableApplicationSortableFields {
    id = 'id',
    admissionResult = 'admissionResult',
    document = 'document',
    decisionLetterDate = 'decisionLetterDate',
    intake = 'intake',
    interviewDate = 'interviewDate',
    lastUpdate = 'lastUpdate',
    modalApplicationCompletedViewed = 'modalApplicationCompletedViewed',
    programId = 'programId',
    studentId = 'studentId',
    todo = 'todo',
    tuitionsFeePaymentDate = 'tuitionsFeePaymentDate',
    visaDate = 'visaDate'
}

export type SearchableApplicationConnection = {
    __typename: 'SearchableApplicationConnection';
    items?: Array<Application | null> | null;
    nextToken?: string | null;
    total?: number | null;
};

export type SearchableSearchAlertFilterInput = {
    id?: SearchableIDFilterInput | null;
    lastUpdate?: SearchableFloatFilterInput | null;
    studentId?: SearchableIDFilterInput | null;
    type?: SearchableStringFilterInput | null;
    query?: SearchableStringFilterInput | null;
    and?: Array<SearchableSearchAlertFilterInput | null> | null;
    or?: Array<SearchableSearchAlertFilterInput | null> | null;
    not?: SearchableSearchAlertFilterInput | null;
};

export type SearchableSearchAlertSortInput = {
    field?: SearchableSearchAlertSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableSearchAlertSortableFields {
    id = 'id',
    lastUpdate = 'lastUpdate',
    studentId = 'studentId',
    type = 'type',
    query = 'query'
}

export type SearchableSearchAlertConnection = {
    __typename: 'SearchableSearchAlertConnection';
    items?: Array<SearchAlert | null> | null;
    nextToken?: string | null;
    total?: number | null;
};

export type SearchableFeedbackFilterInput = {
    id?: SearchableIDFilterInput | null;
    applicationId?: SearchableIDFilterInput | null;
    lastUpdate?: SearchableFloatFilterInput | null;
    rating?: SearchableFloatFilterInput | null;
    and?: Array<SearchableFeedbackFilterInput | null> | null;
    or?: Array<SearchableFeedbackFilterInput | null> | null;
    not?: SearchableFeedbackFilterInput | null;
};

export type SearchableFeedbackSortInput = {
    field?: SearchableFeedbackSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableFeedbackSortableFields {
    id = 'id',
    applicationId = 'applicationId',
    lastUpdate = 'lastUpdate',
    rating = 'rating'
}

export type SearchableFeedbackConnection = {
    __typename: 'SearchableFeedbackConnection';
    items?: Array<Feedback | null> | null;
    nextToken?: string | null;
    total?: number | null;
};

export type ModelSchoolFilterInput = {
    id?: ModelIDInput | null;
    city?: ModelStringInput | null;
    country?: ModelStringInput | null;
    coverPhoto?: ModelStringInput | null;
    contactEmail?: ModelStringInput | null;
    contactJobTitle?: ModelStringInput | null;
    contactName?: ModelStringInput | null;
    contactPhone?: ModelStringInput | null;
    contractStatus?: ModelStringInput | null;
    creationYear?: ModelFloatInput | null;
    description?: ModelStringInput | null;
    institutionType?: ModelStringInput | null;
    internationalStudents?: ModelFloatInput | null;
    lastUpdate?: ModelFloatInput | null;
    logo?: ModelStringInput | null;
    name?: ModelStringInput | null;
    totalStudents?: ModelFloatInput | null;
    slug?: ModelStringInput | null;
    published?: ModelBooleanInput | null;
    and?: Array<ModelSchoolFilterInput | null> | null;
    or?: Array<ModelSchoolFilterInput | null> | null;
    not?: ModelSchoolFilterInput | null;
};

export type ModelSchoolConnection = {
    __typename: 'ModelSchoolConnection';
    items?: Array<School | null> | null;
    nextToken?: string | null;
};

export type SearchableSchoolFilterInput = {
    id?: SearchableIDFilterInput | null;
    city?: SearchableStringFilterInput | null;
    country?: SearchableStringFilterInput | null;
    coverPhoto?: SearchableStringFilterInput | null;
    contactEmail?: SearchableStringFilterInput | null;
    contactJobTitle?: SearchableStringFilterInput | null;
    contactName?: SearchableStringFilterInput | null;
    contactPhone?: SearchableStringFilterInput | null;
    contractStatus?: SearchableStringFilterInput | null;
    creationYear?: SearchableFloatFilterInput | null;
    description?: SearchableStringFilterInput | null;
    institutionType?: SearchableStringFilterInput | null;
    internationalStudents?: SearchableFloatFilterInput | null;
    lastUpdate?: SearchableFloatFilterInput | null;
    logo?: SearchableStringFilterInput | null;
    name?: SearchableStringFilterInput | null;
    totalStudents?: SearchableFloatFilterInput | null;
    slug?: SearchableStringFilterInput | null;
    published?: SearchableBooleanFilterInput | null;
    and?: Array<SearchableSchoolFilterInput | null> | null;
    or?: Array<SearchableSchoolFilterInput | null> | null;
    not?: SearchableSchoolFilterInput | null;
};

export type SearchableSchoolSortInput = {
    field?: SearchableSchoolSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableSchoolSortableFields {
    id = 'id',
    city = 'city',
    country = 'country',
    coverPhoto = 'coverPhoto',
    contactEmail = 'contactEmail',
    contactJobTitle = 'contactJobTitle',
    contactName = 'contactName',
    contactPhone = 'contactPhone',
    contractStatus = 'contractStatus',
    creationYear = 'creationYear',
    description = 'description',
    institutionType = 'institutionType',
    internationalStudents = 'internationalStudents',
    lastUpdate = 'lastUpdate',
    logo = 'logo',
    name = 'name',
    totalStudents = 'totalStudents',
    slug = 'slug',
    published = 'published'
}

export type SearchableSchoolConnection = {
    __typename: 'SearchableSchoolConnection';
    items?: Array<School | null> | null;
    nextToken?: string | null;
    total?: number | null;
};

export type ModelProgramFilterInput = {
    id?: ModelIDInput | null;
    applicationFee?: ModelFloatInput | null;
    applicationFeeCurrency?: ModelStringInput | null;
    city?: ModelStringInput | null;
    costOfLiving?: ModelFloatInput | null;
    costOfLivingCurrency?: ModelStringInput | null;
    country?: ModelStringInput | null;
    degree?: ModelStringInput | null;
    description?: ModelStringInput | null;
    discipline?: ModelStringInput | null;
    duration?: ModelFloatInput | null;
    durationUnit?: ModelStringInput | null;
    fee?: ModelFloatInput | null;
    feeCurrency?: ModelStringInput | null;
    feeUnit?: ModelStringInput | null;
    feesAndFinancing?: ModelStringInput | null;
    gradePointAverage?: ModelFloatInput | null;
    highestEducationLevel?: ModelFloatInput | null;
    intakeInformation?: ModelStringInput | null;
    intakes?: ModelStringInput | null;
    languages?: ModelStringInput | null;
    lastUpdate?: ModelFloatInput | null;
    minimumAge?: ModelFloatInput | null;
    minimumWorkExperience?: ModelFloatInput | null;
    minimumWorkExperienceUnit?: ModelStringInput | null;
    name?: ModelStringInput | null;
    otherRequirements?: ModelStringInput | null;
    published?: ModelBooleanInput | null;
    schedule?: ModelStringInput | null;
    schoolId?: ModelIDInput | null;
    schoolName?: ModelStringInput | null;
    slug?: ModelStringInput | null;
    submissionDeadline?: ModelStringInput | null;
    testCambridgeAdvanced?: ModelFloatInput | null;
    testCambridgeFirst?: ModelFloatInput | null;
    testCeliCilsItPlida?: ModelFloatInput | null;
    testDele?: ModelFloatInput | null;
    testDelfdalf?: ModelFloatInput | null;
    testGmat?: ModelFloatInput | null;
    testGoethe?: ModelFloatInput | null;
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
    id?: SearchableIDFilterInput | null;
    applicationFee?: SearchableFloatFilterInput | null;
    applicationFeeCurrency?: SearchableStringFilterInput | null;
    city?: SearchableStringFilterInput | null;
    costOfLiving?: SearchableFloatFilterInput | null;
    costOfLivingCurrency?: SearchableStringFilterInput | null;
    country?: SearchableStringFilterInput | null;
    degree?: SearchableStringFilterInput | null;
    description?: SearchableStringFilterInput | null;
    discipline?: SearchableStringFilterInput | null;
    duration?: SearchableFloatFilterInput | null;
    durationUnit?: SearchableStringFilterInput | null;
    fee?: SearchableFloatFilterInput | null;
    feeCurrency?: SearchableStringFilterInput | null;
    feeUnit?: SearchableStringFilterInput | null;
    feesAndFinancing?: SearchableStringFilterInput | null;
    gradePointAverage?: SearchableFloatFilterInput | null;
    highestEducationLevel?: SearchableFloatFilterInput | null;
    intakeInformation?: SearchableStringFilterInput | null;
    intakes?: SearchableStringFilterInput | null;
    languages?: SearchableStringFilterInput | null;
    lastUpdate?: SearchableFloatFilterInput | null;
    minimumAge?: SearchableFloatFilterInput | null;
    minimumWorkExperience?: SearchableFloatFilterInput | null;
    minimumWorkExperienceUnit?: SearchableStringFilterInput | null;
    name?: SearchableStringFilterInput | null;
    otherRequirements?: SearchableStringFilterInput | null;
    published?: SearchableBooleanFilterInput | null;
    schedule?: SearchableStringFilterInput | null;
    schoolId?: SearchableIDFilterInput | null;
    schoolName?: SearchableStringFilterInput | null;
    slug?: SearchableStringFilterInput | null;
    submissionDeadline?: SearchableStringFilterInput | null;
    testCambridgeAdvanced?: SearchableFloatFilterInput | null;
    testCambridgeFirst?: SearchableFloatFilterInput | null;
    testCeliCilsItPlida?: SearchableFloatFilterInput | null;
    testDele?: SearchableFloatFilterInput | null;
    testDelfdalf?: SearchableFloatFilterInput | null;
    testGmat?: SearchableFloatFilterInput | null;
    testGoethe?: SearchableFloatFilterInput | null;
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
    id = 'id',
    applicationFee = 'applicationFee',
    applicationFeeCurrency = 'applicationFeeCurrency',
    city = 'city',
    costOfLiving = 'costOfLiving',
    costOfLivingCurrency = 'costOfLivingCurrency',
    country = 'country',
    degree = 'degree',
    description = 'description',
    discipline = 'discipline',
    duration = 'duration',
    durationUnit = 'durationUnit',
    fee = 'fee',
    feeCurrency = 'feeCurrency',
    feeUnit = 'feeUnit',
    feesAndFinancing = 'feesAndFinancing',
    gradePointAverage = 'gradePointAverage',
    highestEducationLevel = 'highestEducationLevel',
    intakeInformation = 'intakeInformation',
    intakes = 'intakes',
    languages = 'languages',
    lastUpdate = 'lastUpdate',
    minimumAge = 'minimumAge',
    minimumWorkExperience = 'minimumWorkExperience',
    minimumWorkExperienceUnit = 'minimumWorkExperienceUnit',
    name = 'name',
    otherRequirements = 'otherRequirements',
    published = 'published',
    schedule = 'schedule',
    schoolId = 'schoolId',
    schoolName = 'schoolName',
    slug = 'slug',
    submissionDeadline = 'submissionDeadline',
    testCambridgeAdvanced = 'testCambridgeAdvanced',
    testCambridgeFirst = 'testCambridgeFirst',
    testCeliCilsItPlida = 'testCeliCilsItPlida',
    testDele = 'testDele',
    testDelfdalf = 'testDelfdalf',
    testGmat = 'testGmat',
    testGoethe = 'testGoethe',
    testGre = 'testGre',
    testIelts = 'testIelts',
    testTagemage = 'testTagemage',
    testTcftef = 'testTcftef',
    testToefl = 'testToefl',
    testToeic = 'testToeic'
}

export type SearchableProgramConnection = {
    __typename: 'SearchableProgramConnection';
    items?: Array<Program | null> | null;
    nextToken?: string | null;
    total?: number | null;
};

export type ModelPostFilterInput = {
    id?: ModelIDInput | null;
    category?: ModelStringInput | null;
    content?: ModelStringInput | null;
    lastUpdate?: ModelFloatInput | null;
    published?: ModelBooleanInput | null;
    slug?: ModelStringInput | null;
    title?: ModelStringInput | null;
    and?: Array<ModelPostFilterInput | null> | null;
    or?: Array<ModelPostFilterInput | null> | null;
    not?: ModelPostFilterInput | null;
};

export type ModelPostConnection = {
    __typename: 'ModelPostConnection';
    items?: Array<Post | null> | null;
    nextToken?: string | null;
};

export type SearchablePostFilterInput = {
    id?: SearchableIDFilterInput | null;
    category?: SearchableStringFilterInput | null;
    content?: SearchableStringFilterInput | null;
    lastUpdate?: SearchableFloatFilterInput | null;
    published?: SearchableBooleanFilterInput | null;
    slug?: SearchableStringFilterInput | null;
    title?: SearchableStringFilterInput | null;
    and?: Array<SearchablePostFilterInput | null> | null;
    or?: Array<SearchablePostFilterInput | null> | null;
    not?: SearchablePostFilterInput | null;
};

export type SearchablePostSortInput = {
    field?: SearchablePostSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchablePostSortableFields {
    id = 'id',
    category = 'category',
    content = 'content',
    lastUpdate = 'lastUpdate',
    published = 'published',
    slug = 'slug',
    title = 'title'
}

export type SearchablePostConnection = {
    __typename: 'SearchablePostConnection';
    items?: Array<Post | null> | null;
    nextToken?: string | null;
    total?: number | null;
};

export type CreateSchoolMutationVariables = {
    input?: CreateSchoolInput;
    condition?: ModelSchoolConditionInput | null;
};

export type CreateSchoolMutation = {
    createSchool?: {
        __typename: 'School';
        id: string;
        city: string;
        country: string;
        coverPhoto: string;
        contactEmail?: string | null;
        contactJobTitle?: string | null;
        contactName?: string | null;
        contactPhone?: string | null;
        contractStatus: string;
        creationYear: number;
        description?: string | null;
        institutionType: string;
        internationalStudents: number;
        lastUpdate: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        createdAt: string;
        updatedAt: string;
        programs?: {
            __typename: 'ModelProgramConnection';
            items?: Array<{
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type UpdateSchoolMutationVariables = {
    input?: UpdateSchoolInput;
    condition?: ModelSchoolConditionInput | null;
};

export type UpdateSchoolMutation = {
    updateSchool?: {
        __typename: 'School';
        id: string;
        city: string;
        country: string;
        coverPhoto: string;
        contactEmail?: string | null;
        contactJobTitle?: string | null;
        contactName?: string | null;
        contactPhone?: string | null;
        contractStatus: string;
        creationYear: number;
        description?: string | null;
        institutionType: string;
        internationalStudents: number;
        lastUpdate: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        createdAt: string;
        updatedAt: string;
        programs?: {
            __typename: 'ModelProgramConnection';
            items?: Array<{
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type DeleteSchoolMutationVariables = {
    input?: DeleteSchoolInput;
    condition?: ModelSchoolConditionInput | null;
};

export type DeleteSchoolMutation = {
    deleteSchool?: {
        __typename: 'School';
        id: string;
        city: string;
        country: string;
        coverPhoto: string;
        contactEmail?: string | null;
        contactJobTitle?: string | null;
        contactName?: string | null;
        contactPhone?: string | null;
        contractStatus: string;
        creationYear: number;
        description?: string | null;
        institutionType: string;
        internationalStudents: number;
        lastUpdate: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        createdAt: string;
        updatedAt: string;
        programs?: {
            __typename: 'ModelProgramConnection';
            items?: Array<{
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type CreateProgramMutationVariables = {
    input?: CreateProgramInput;
    condition?: ModelProgramConditionInput | null;
};

export type CreateProgramMutation = {
    createProgram?: {
        __typename: 'Program';
        id: string;
        applicationFee: number;
        applicationFeeCurrency: string;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: string;
        country: string;
        degree: string;
        description?: string | null;
        discipline: string;
        duration: number;
        durationUnit: string;
        fee: number;
        feeCurrency: string;
        feeUnit: string;
        feesAndFinancing?: string | null;
        gradePointAverage: number;
        highestEducationLevel: number;
        intakeInformation?: string | null;
        intakes: string;
        languages: Array<string | null>;
        lastUpdate: number;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: string;
        name: string;
        otherRequirements?: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string;
            isMandatory?: boolean | null;
            storageKey?: string | null;
            description?: string | null;
            condition?: string | null;
            isSpecific?: boolean | null;
        }>;
        schedule: string;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testCeliCilsItPlida: number;
        testDele: number;
        testDelfdalf: number;
        testGmat: number;
        testGoethe: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school?: {
            __typename: 'School';
            id: string;
            city: string;
            country: string;
            coverPhoto: string;
            contactEmail?: string | null;
            contactJobTitle?: string | null;
            contactName?: string | null;
            contactPhone?: string | null;
            contractStatus: string;
            creationYear: number;
            description?: string | null;
            institutionType: string;
            internationalStudents: number;
            lastUpdate: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            createdAt: string;
            updatedAt: string;
            programs?: {
                __typename: 'ModelProgramConnection';
                nextToken?: string | null;
            } | null;
        } | null;
    } | null;
};

export type UpdateProgramMutationVariables = {
    input?: UpdateProgramInput;
    condition?: ModelProgramConditionInput | null;
};

export type UpdateProgramMutation = {
    updateProgram?: {
        __typename: 'Program';
        id: string;
        applicationFee: number;
        applicationFeeCurrency: string;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: string;
        country: string;
        degree: string;
        description?: string | null;
        discipline: string;
        duration: number;
        durationUnit: string;
        fee: number;
        feeCurrency: string;
        feeUnit: string;
        feesAndFinancing?: string | null;
        gradePointAverage: number;
        highestEducationLevel: number;
        intakeInformation?: string | null;
        intakes: string;
        languages: Array<string | null>;
        lastUpdate: number;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: string;
        name: string;
        otherRequirements?: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string;
            isMandatory?: boolean | null;
            storageKey?: string | null;
            description?: string | null;
            condition?: string | null;
            isSpecific?: boolean | null;
        }>;
        schedule: string;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testCeliCilsItPlida: number;
        testDele: number;
        testDelfdalf: number;
        testGmat: number;
        testGoethe: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school?: {
            __typename: 'School';
            id: string;
            city: string;
            country: string;
            coverPhoto: string;
            contactEmail?: string | null;
            contactJobTitle?: string | null;
            contactName?: string | null;
            contactPhone?: string | null;
            contractStatus: string;
            creationYear: number;
            description?: string | null;
            institutionType: string;
            internationalStudents: number;
            lastUpdate: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            createdAt: string;
            updatedAt: string;
            programs?: {
                __typename: 'ModelProgramConnection';
                nextToken?: string | null;
            } | null;
        } | null;
    } | null;
};

export type DeleteProgramMutationVariables = {
    input?: DeleteProgramInput;
    condition?: ModelProgramConditionInput | null;
};

export type DeleteProgramMutation = {
    deleteProgram?: {
        __typename: 'Program';
        id: string;
        applicationFee: number;
        applicationFeeCurrency: string;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: string;
        country: string;
        degree: string;
        description?: string | null;
        discipline: string;
        duration: number;
        durationUnit: string;
        fee: number;
        feeCurrency: string;
        feeUnit: string;
        feesAndFinancing?: string | null;
        gradePointAverage: number;
        highestEducationLevel: number;
        intakeInformation?: string | null;
        intakes: string;
        languages: Array<string | null>;
        lastUpdate: number;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: string;
        name: string;
        otherRequirements?: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string;
            isMandatory?: boolean | null;
            storageKey?: string | null;
            description?: string | null;
            condition?: string | null;
            isSpecific?: boolean | null;
        }>;
        schedule: string;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testCeliCilsItPlida: number;
        testDele: number;
        testDelfdalf: number;
        testGmat: number;
        testGoethe: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school?: {
            __typename: 'School';
            id: string;
            city: string;
            country: string;
            coverPhoto: string;
            contactEmail?: string | null;
            contactJobTitle?: string | null;
            contactName?: string | null;
            contactPhone?: string | null;
            contractStatus: string;
            creationYear: number;
            description?: string | null;
            institutionType: string;
            internationalStudents: number;
            lastUpdate: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            createdAt: string;
            updatedAt: string;
            programs?: {
                __typename: 'ModelProgramConnection';
                nextToken?: string | null;
            } | null;
        } | null;
    } | null;
};

export type CreateStudentMutationVariables = {
    input?: CreateStudentInput;
    condition?: ModelStudentConditionInput | null;
};

export type CreateStudentMutation = {
    createStudent?: {
        __typename: 'Student';
        id: string;
        address?: string | null;
        applications?: {
            __typename: 'ModelApplicationConnection';
            items?: Array<{
                __typename: 'Application';
                id: string;
                admissionResult?: string | null;
                document?: string | null;
                decisionLetterDate?: string | null;
                intake: string;
                interviewDate?: string | null;
                lastUpdate: number;
                modalApplicationCompletedViewed: boolean;
                programId: string;
                studentId: string;
                todo?: string | null;
                tuitionsFeePaymentDate?: string | null;
                visaDate?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        birthday?: string | null;
        city?: string | null;
        country?: string | null;
        degrees?: Array<string | null> | null;
        disciplines?: Array<string | null> | null;
        documents?: {
            __typename: 'ModelDocumentConnection';
            items?: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string;
                storageKey?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        educationCountry?: string | null;
        email?: string | null;
        fatherFirstName?: string | null;
        fatherLastName?: string | null;
        firstLanguage?: string | null;
        firstName?: string | null;
        favoritePrograms?: Array<string | null> | null;
        favoriteSchools?: Array<string | null> | null;
        gender?: string | null;
        gradePointAverage?: number | null;
        guardianFirstName?: string | null;
        guardianLastName?: string | null;
        hasMandatoryDocuments?: boolean | null;
        highestEducationLevel?: number | null;
        lastName?: string | null;
        lastUpdate: number;
        locale?: string | null;
        maritalStatus?: string | null;
        middleName?: string | null;
        modalProfileCompletedViewed?: boolean | null;
        phoneNumber?: string | null;
        motherFirstName?: string | null;
        motherMaidenName?: string | null;
        nationality?: string | null;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        parentsAddress?: string | null;
        parentsCity?: string | null;
        parentsCountry?: string | null;
        parentsEmail?: string | null;
        parentsPhoneNumber?: string | null;
        passportNumber?: string | null;
        refusedVisa?: boolean | null;
        refusedVisaReason?: string | null;
        schoolsAttended?: Array<{
            __typename: 'SchoolAttended';
            address?: string | null;
            attendedInstitutionFrom?: string | null;
            attendedInstitutionTo?: string | null;
            city?: string | null;
            country?: string | null;
            degreeAwarded?: number | null;
            degreeAwardedOn?: string | null;
            educationLevel?: number | null;
            name?: string | null;
            primaryLanguageInstruction?: string | null;
        } | null> | null;
        testCambridgeAdvanced?: number | null;
        testCambridgeAdvancedDate?: string | null;
        testCambridgeFirst?: number | null;
        testCambridgeFirstDate?: string | null;
        testCeliCilsItPlida?: number | null;
        testCeliCilsItPlidaDate?: string | null;
        testDele?: number | null;
        testDeleDate?: string | null;
        testDelfdalf?: number | null;
        testDelfdalfDate?: string | null;
        testEnglishPending?: boolean | null;
        testGmat?: number | null;
        testGmatDate?: string | null;
        testGoethe?: number | null;
        testGoetheDate?: string | null;
        testGre?: number | null;
        testGreDate?: string | null;
        testIelts?: number | null;
        testIeltsDate?: string | null;
        testLogicAndReasoningPending?: boolean | null;
        testOtherLanguagesPending?: boolean | null;
        testTagemage?: number | null;
        testTagemageDate?: string | null;
        testTcftef?: number | null;
        testTcftefDate?: string | null;
        testToefl?: number | null;
        testToeflDate?: string | null;
        testToeic?: number | null;
        testToeicDate?: string | null;
        validVisa?: boolean | null;
        workExperiences?: Array<{
            __typename: 'WorkExperience';
            address?: string | null;
            compagnyName?: string | null;
            title?: string | null;
            workedFrom?: string | null;
            workedTo?: string | null;
        } | null> | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type UpdateStudentMutationVariables = {
    input?: UpdateStudentInput;
    condition?: ModelStudentConditionInput | null;
};

export type UpdateStudentMutation = {
    updateStudent?: {
        __typename: 'Student';
        id: string;
        address?: string | null;
        applications?: {
            __typename: 'ModelApplicationConnection';
            items?: Array<{
                __typename: 'Application';
                id: string;
                admissionResult?: string | null;
                document?: string | null;
                decisionLetterDate?: string | null;
                intake: string;
                interviewDate?: string | null;
                lastUpdate: number;
                modalApplicationCompletedViewed: boolean;
                programId: string;
                studentId: string;
                todo?: string | null;
                tuitionsFeePaymentDate?: string | null;
                visaDate?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        birthday?: string | null;
        city?: string | null;
        country?: string | null;
        degrees?: Array<string | null> | null;
        disciplines?: Array<string | null> | null;
        documents?: {
            __typename: 'ModelDocumentConnection';
            items?: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string;
                storageKey?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        educationCountry?: string | null;
        email?: string | null;
        fatherFirstName?: string | null;
        fatherLastName?: string | null;
        firstLanguage?: string | null;
        firstName?: string | null;
        favoritePrograms?: Array<string | null> | null;
        favoriteSchools?: Array<string | null> | null;
        gender?: string | null;
        gradePointAverage?: number | null;
        guardianFirstName?: string | null;
        guardianLastName?: string | null;
        hasMandatoryDocuments?: boolean | null;
        highestEducationLevel?: number | null;
        lastName?: string | null;
        lastUpdate: number;
        locale?: string | null;
        maritalStatus?: string | null;
        middleName?: string | null;
        modalProfileCompletedViewed?: boolean | null;
        phoneNumber?: string | null;
        motherFirstName?: string | null;
        motherMaidenName?: string | null;
        nationality?: string | null;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        parentsAddress?: string | null;
        parentsCity?: string | null;
        parentsCountry?: string | null;
        parentsEmail?: string | null;
        parentsPhoneNumber?: string | null;
        passportNumber?: string | null;
        refusedVisa?: boolean | null;
        refusedVisaReason?: string | null;
        schoolsAttended?: Array<{
            __typename: 'SchoolAttended';
            address?: string | null;
            attendedInstitutionFrom?: string | null;
            attendedInstitutionTo?: string | null;
            city?: string | null;
            country?: string | null;
            degreeAwarded?: number | null;
            degreeAwardedOn?: string | null;
            educationLevel?: number | null;
            name?: string | null;
            primaryLanguageInstruction?: string | null;
        } | null> | null;
        testCambridgeAdvanced?: number | null;
        testCambridgeAdvancedDate?: string | null;
        testCambridgeFirst?: number | null;
        testCambridgeFirstDate?: string | null;
        testCeliCilsItPlida?: number | null;
        testCeliCilsItPlidaDate?: string | null;
        testDele?: number | null;
        testDeleDate?: string | null;
        testDelfdalf?: number | null;
        testDelfdalfDate?: string | null;
        testEnglishPending?: boolean | null;
        testGmat?: number | null;
        testGmatDate?: string | null;
        testGoethe?: number | null;
        testGoetheDate?: string | null;
        testGre?: number | null;
        testGreDate?: string | null;
        testIelts?: number | null;
        testIeltsDate?: string | null;
        testLogicAndReasoningPending?: boolean | null;
        testOtherLanguagesPending?: boolean | null;
        testTagemage?: number | null;
        testTagemageDate?: string | null;
        testTcftef?: number | null;
        testTcftefDate?: string | null;
        testToefl?: number | null;
        testToeflDate?: string | null;
        testToeic?: number | null;
        testToeicDate?: string | null;
        validVisa?: boolean | null;
        workExperiences?: Array<{
            __typename: 'WorkExperience';
            address?: string | null;
            compagnyName?: string | null;
            title?: string | null;
            workedFrom?: string | null;
            workedTo?: string | null;
        } | null> | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type DeleteStudentMutationVariables = {
    input?: DeleteStudentInput;
    condition?: ModelStudentConditionInput | null;
};

export type DeleteStudentMutation = {
    deleteStudent?: {
        __typename: 'Student';
        id: string;
        address?: string | null;
        applications?: {
            __typename: 'ModelApplicationConnection';
            items?: Array<{
                __typename: 'Application';
                id: string;
                admissionResult?: string | null;
                document?: string | null;
                decisionLetterDate?: string | null;
                intake: string;
                interviewDate?: string | null;
                lastUpdate: number;
                modalApplicationCompletedViewed: boolean;
                programId: string;
                studentId: string;
                todo?: string | null;
                tuitionsFeePaymentDate?: string | null;
                visaDate?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        birthday?: string | null;
        city?: string | null;
        country?: string | null;
        degrees?: Array<string | null> | null;
        disciplines?: Array<string | null> | null;
        documents?: {
            __typename: 'ModelDocumentConnection';
            items?: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string;
                storageKey?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        educationCountry?: string | null;
        email?: string | null;
        fatherFirstName?: string | null;
        fatherLastName?: string | null;
        firstLanguage?: string | null;
        firstName?: string | null;
        favoritePrograms?: Array<string | null> | null;
        favoriteSchools?: Array<string | null> | null;
        gender?: string | null;
        gradePointAverage?: number | null;
        guardianFirstName?: string | null;
        guardianLastName?: string | null;
        hasMandatoryDocuments?: boolean | null;
        highestEducationLevel?: number | null;
        lastName?: string | null;
        lastUpdate: number;
        locale?: string | null;
        maritalStatus?: string | null;
        middleName?: string | null;
        modalProfileCompletedViewed?: boolean | null;
        phoneNumber?: string | null;
        motherFirstName?: string | null;
        motherMaidenName?: string | null;
        nationality?: string | null;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        parentsAddress?: string | null;
        parentsCity?: string | null;
        parentsCountry?: string | null;
        parentsEmail?: string | null;
        parentsPhoneNumber?: string | null;
        passportNumber?: string | null;
        refusedVisa?: boolean | null;
        refusedVisaReason?: string | null;
        schoolsAttended?: Array<{
            __typename: 'SchoolAttended';
            address?: string | null;
            attendedInstitutionFrom?: string | null;
            attendedInstitutionTo?: string | null;
            city?: string | null;
            country?: string | null;
            degreeAwarded?: number | null;
            degreeAwardedOn?: string | null;
            educationLevel?: number | null;
            name?: string | null;
            primaryLanguageInstruction?: string | null;
        } | null> | null;
        testCambridgeAdvanced?: number | null;
        testCambridgeAdvancedDate?: string | null;
        testCambridgeFirst?: number | null;
        testCambridgeFirstDate?: string | null;
        testCeliCilsItPlida?: number | null;
        testCeliCilsItPlidaDate?: string | null;
        testDele?: number | null;
        testDeleDate?: string | null;
        testDelfdalf?: number | null;
        testDelfdalfDate?: string | null;
        testEnglishPending?: boolean | null;
        testGmat?: number | null;
        testGmatDate?: string | null;
        testGoethe?: number | null;
        testGoetheDate?: string | null;
        testGre?: number | null;
        testGreDate?: string | null;
        testIelts?: number | null;
        testIeltsDate?: string | null;
        testLogicAndReasoningPending?: boolean | null;
        testOtherLanguagesPending?: boolean | null;
        testTagemage?: number | null;
        testTagemageDate?: string | null;
        testTcftef?: number | null;
        testTcftefDate?: string | null;
        testToefl?: number | null;
        testToeflDate?: string | null;
        testToeic?: number | null;
        testToeicDate?: string | null;
        validVisa?: boolean | null;
        workExperiences?: Array<{
            __typename: 'WorkExperience';
            address?: string | null;
            compagnyName?: string | null;
            title?: string | null;
            workedFrom?: string | null;
            workedTo?: string | null;
        } | null> | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type CreateDocumentMutationVariables = {
    input?: CreateDocumentInput;
    condition?: ModelDocumentConditionInput | null;
};

export type CreateDocumentMutation = {
    createDocument?: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        name: string;
        storageKey?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type UpdateDocumentMutationVariables = {
    input?: UpdateDocumentInput;
    condition?: ModelDocumentConditionInput | null;
};

export type UpdateDocumentMutation = {
    updateDocument?: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        name: string;
        storageKey?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type DeleteDocumentMutationVariables = {
    input?: DeleteDocumentInput;
    condition?: ModelDocumentConditionInput | null;
};

export type DeleteDocumentMutation = {
    deleteDocument?: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        name: string;
        storageKey?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type CreateApplicationMutationVariables = {
    input?: CreateApplicationInput;
    condition?: ModelApplicationConditionInput | null;
};

export type CreateApplicationMutation = {
    createApplication?: {
        __typename: 'Application';
        id: string;
        admissionResult?: string | null;
        document?: string | null;
        decisionLetterDate?: string | null;
        intake: string;
        interviewDate?: string | null;
        lastUpdate: number;
        modalApplicationCompletedViewed: boolean;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        programId: string;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            date: string;
            isMandatory: boolean;
            label: string;
            status: string;
        }>;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        todo?: string | null;
        tuitionsFeePaymentDate?: string | null;
        visaDate?: string | null;
        createdAt: string;
        updatedAt: string;
        program?: {
            __typename: 'Program';
            id: string;
            applicationFee: number;
            applicationFeeCurrency: string;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: string;
            country: string;
            degree: string;
            description?: string | null;
            discipline: string;
            duration: number;
            durationUnit: string;
            fee: number;
            feeCurrency: string;
            feeUnit: string;
            feesAndFinancing?: string | null;
            gradePointAverage: number;
            highestEducationLevel: number;
            intakeInformation?: string | null;
            intakes: string;
            languages: Array<string | null>;
            lastUpdate: number;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: string;
            name: string;
            otherRequirements?: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string;
                isMandatory?: boolean | null;
                storageKey?: string | null;
                description?: string | null;
                condition?: string | null;
                isSpecific?: boolean | null;
            }>;
            schedule: string;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testCeliCilsItPlida: number;
            testDele: number;
            testDelfdalf: number;
            testGmat: number;
            testGoethe: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school?: {
                __typename: 'School';
                id: string;
                city: string;
                country: string;
                coverPhoto: string;
                contactEmail?: string | null;
                contactJobTitle?: string | null;
                contactName?: string | null;
                contactPhone?: string | null;
                contractStatus: string;
                creationYear: number;
                description?: string | null;
                institutionType: string;
                internationalStudents: number;
                lastUpdate: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner?: string | null;
    } | null;
};

export type UpdateApplicationMutationVariables = {
    input?: UpdateApplicationInput;
    condition?: ModelApplicationConditionInput | null;
};

export type UpdateApplicationMutation = {
    updateApplication?: {
        __typename: 'Application';
        id: string;
        admissionResult?: string | null;
        document?: string | null;
        decisionLetterDate?: string | null;
        intake: string;
        interviewDate?: string | null;
        lastUpdate: number;
        modalApplicationCompletedViewed: boolean;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        programId: string;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            date: string;
            isMandatory: boolean;
            label: string;
            status: string;
        }>;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        todo?: string | null;
        tuitionsFeePaymentDate?: string | null;
        visaDate?: string | null;
        createdAt: string;
        updatedAt: string;
        program?: {
            __typename: 'Program';
            id: string;
            applicationFee: number;
            applicationFeeCurrency: string;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: string;
            country: string;
            degree: string;
            description?: string | null;
            discipline: string;
            duration: number;
            durationUnit: string;
            fee: number;
            feeCurrency: string;
            feeUnit: string;
            feesAndFinancing?: string | null;
            gradePointAverage: number;
            highestEducationLevel: number;
            intakeInformation?: string | null;
            intakes: string;
            languages: Array<string | null>;
            lastUpdate: number;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: string;
            name: string;
            otherRequirements?: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string;
                isMandatory?: boolean | null;
                storageKey?: string | null;
                description?: string | null;
                condition?: string | null;
                isSpecific?: boolean | null;
            }>;
            schedule: string;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testCeliCilsItPlida: number;
            testDele: number;
            testDelfdalf: number;
            testGmat: number;
            testGoethe: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school?: {
                __typename: 'School';
                id: string;
                city: string;
                country: string;
                coverPhoto: string;
                contactEmail?: string | null;
                contactJobTitle?: string | null;
                contactName?: string | null;
                contactPhone?: string | null;
                contractStatus: string;
                creationYear: number;
                description?: string | null;
                institutionType: string;
                internationalStudents: number;
                lastUpdate: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner?: string | null;
    } | null;
};

export type DeleteApplicationMutationVariables = {
    input?: DeleteApplicationInput;
    condition?: ModelApplicationConditionInput | null;
};

export type DeleteApplicationMutation = {
    deleteApplication?: {
        __typename: 'Application';
        id: string;
        admissionResult?: string | null;
        document?: string | null;
        decisionLetterDate?: string | null;
        intake: string;
        interviewDate?: string | null;
        lastUpdate: number;
        modalApplicationCompletedViewed: boolean;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        programId: string;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            date: string;
            isMandatory: boolean;
            label: string;
            status: string;
        }>;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        todo?: string | null;
        tuitionsFeePaymentDate?: string | null;
        visaDate?: string | null;
        createdAt: string;
        updatedAt: string;
        program?: {
            __typename: 'Program';
            id: string;
            applicationFee: number;
            applicationFeeCurrency: string;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: string;
            country: string;
            degree: string;
            description?: string | null;
            discipline: string;
            duration: number;
            durationUnit: string;
            fee: number;
            feeCurrency: string;
            feeUnit: string;
            feesAndFinancing?: string | null;
            gradePointAverage: number;
            highestEducationLevel: number;
            intakeInformation?: string | null;
            intakes: string;
            languages: Array<string | null>;
            lastUpdate: number;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: string;
            name: string;
            otherRequirements?: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string;
                isMandatory?: boolean | null;
                storageKey?: string | null;
                description?: string | null;
                condition?: string | null;
                isSpecific?: boolean | null;
            }>;
            schedule: string;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testCeliCilsItPlida: number;
            testDele: number;
            testDelfdalf: number;
            testGmat: number;
            testGoethe: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school?: {
                __typename: 'School';
                id: string;
                city: string;
                country: string;
                coverPhoto: string;
                contactEmail?: string | null;
                contactJobTitle?: string | null;
                contactName?: string | null;
                contactPhone?: string | null;
                contractStatus: string;
                creationYear: number;
                description?: string | null;
                institutionType: string;
                internationalStudents: number;
                lastUpdate: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner?: string | null;
    } | null;
};

export type UpdateSearchAlertMutationVariables = {
    input?: UpdateSearchAlertInput;
    condition?: ModelSearchAlertConditionInput | null;
};

export type UpdateSearchAlertMutation = {
    updateSearchAlert?: {
        __typename: 'SearchAlert';
        id: string;
        lastUpdate: number;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        studentId?: string | null;
        type: string;
        query: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type DeleteSearchAlertMutationVariables = {
    input?: DeleteSearchAlertInput;
    condition?: ModelSearchAlertConditionInput | null;
};

export type DeleteSearchAlertMutation = {
    deleteSearchAlert?: {
        __typename: 'SearchAlert';
        id: string;
        lastUpdate: number;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        studentId?: string | null;
        type: string;
        query: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type CreateFeedbackMutationVariables = {
    input?: CreateFeedbackInput;
    condition?: ModelFeedbackConditionInput | null;
};

export type CreateFeedbackMutation = {
    createFeedback?: {
        __typename: 'Feedback';
        id: string;
        application?: {
            __typename: 'Application';
            id: string;
            admissionResult?: string | null;
            document?: string | null;
            decisionLetterDate?: string | null;
            intake: string;
            interviewDate?: string | null;
            lastUpdate: number;
            modalApplicationCompletedViewed: boolean;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            programId: string;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                date: string;
                isMandatory: boolean;
                label: string;
                status: string;
            }>;
            studentId: string;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            todo?: string | null;
            tuitionsFeePaymentDate?: string | null;
            visaDate?: string | null;
            createdAt: string;
            updatedAt: string;
            program?: {
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner?: string | null;
        } | null;
        applicationId: string;
        lastUpdate: number;
        rating: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type UpdateFeedbackMutationVariables = {
    input?: UpdateFeedbackInput;
    condition?: ModelFeedbackConditionInput | null;
};

export type UpdateFeedbackMutation = {
    updateFeedback?: {
        __typename: 'Feedback';
        id: string;
        application?: {
            __typename: 'Application';
            id: string;
            admissionResult?: string | null;
            document?: string | null;
            decisionLetterDate?: string | null;
            intake: string;
            interviewDate?: string | null;
            lastUpdate: number;
            modalApplicationCompletedViewed: boolean;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            programId: string;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                date: string;
                isMandatory: boolean;
                label: string;
                status: string;
            }>;
            studentId: string;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            todo?: string | null;
            tuitionsFeePaymentDate?: string | null;
            visaDate?: string | null;
            createdAt: string;
            updatedAt: string;
            program?: {
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner?: string | null;
        } | null;
        applicationId: string;
        lastUpdate: number;
        rating: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type DeleteFeedbackMutationVariables = {
    input?: DeleteFeedbackInput;
    condition?: ModelFeedbackConditionInput | null;
};

export type DeleteFeedbackMutation = {
    deleteFeedback?: {
        __typename: 'Feedback';
        id: string;
        application?: {
            __typename: 'Application';
            id: string;
            admissionResult?: string | null;
            document?: string | null;
            decisionLetterDate?: string | null;
            intake: string;
            interviewDate?: string | null;
            lastUpdate: number;
            modalApplicationCompletedViewed: boolean;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            programId: string;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                date: string;
                isMandatory: boolean;
                label: string;
                status: string;
            }>;
            studentId: string;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            todo?: string | null;
            tuitionsFeePaymentDate?: string | null;
            visaDate?: string | null;
            createdAt: string;
            updatedAt: string;
            program?: {
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner?: string | null;
        } | null;
        applicationId: string;
        lastUpdate: number;
        rating: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type CreatePostMutationVariables = {
    input?: CreatePostInput;
    condition?: ModelPostConditionInput | null;
};

export type CreatePostMutation = {
    createPost?: {
        __typename: 'Post';
        id: string;
        category: string;
        content: string;
        lastUpdate: number;
        published: boolean;
        slug: string;
        title: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdatePostMutationVariables = {
    input?: UpdatePostInput;
    condition?: ModelPostConditionInput | null;
};

export type UpdatePostMutation = {
    updatePost?: {
        __typename: 'Post';
        id: string;
        category: string;
        content: string;
        lastUpdate: number;
        published: boolean;
        slug: string;
        title: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeletePostMutationVariables = {
    input?: DeletePostInput;
    condition?: ModelPostConditionInput | null;
};

export type DeletePostMutation = {
    deletePost?: {
        __typename: 'Post';
        id: string;
        category: string;
        content: string;
        lastUpdate: number;
        published: boolean;
        slug: string;
        title: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateSearchAlertMutationVariables = {
    input?: CreateSearchAlertInput;
    condition?: ModelSearchAlertConditionInput | null;
};

export type CreateSearchAlertMutation = {
    createSearchAlert?: {
        __typename: 'SearchAlert';
        id: string;
        lastUpdate: number;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        studentId?: string | null;
        type: string;
        query: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type GetStudentQueryVariables = {
    id?: string;
};

export type GetStudentQuery = {
    getStudent?: {
        __typename: 'Student';
        id: string;
        address?: string | null;
        applications?: {
            __typename: 'ModelApplicationConnection';
            items?: Array<{
                __typename: 'Application';
                id: string;
                admissionResult?: string | null;
                document?: string | null;
                decisionLetterDate?: string | null;
                intake: string;
                interviewDate?: string | null;
                lastUpdate: number;
                modalApplicationCompletedViewed: boolean;
                programId: string;
                studentId: string;
                todo?: string | null;
                tuitionsFeePaymentDate?: string | null;
                visaDate?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        birthday?: string | null;
        city?: string | null;
        country?: string | null;
        degrees?: Array<string | null> | null;
        disciplines?: Array<string | null> | null;
        documents?: {
            __typename: 'ModelDocumentConnection';
            items?: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string;
                storageKey?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        educationCountry?: string | null;
        email?: string | null;
        fatherFirstName?: string | null;
        fatherLastName?: string | null;
        firstLanguage?: string | null;
        firstName?: string | null;
        favoritePrograms?: Array<string | null> | null;
        favoriteSchools?: Array<string | null> | null;
        gender?: string | null;
        gradePointAverage?: number | null;
        guardianFirstName?: string | null;
        guardianLastName?: string | null;
        hasMandatoryDocuments?: boolean | null;
        highestEducationLevel?: number | null;
        lastName?: string | null;
        lastUpdate: number;
        locale?: string | null;
        maritalStatus?: string | null;
        middleName?: string | null;
        modalProfileCompletedViewed?: boolean | null;
        phoneNumber?: string | null;
        motherFirstName?: string | null;
        motherMaidenName?: string | null;
        nationality?: string | null;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        parentsAddress?: string | null;
        parentsCity?: string | null;
        parentsCountry?: string | null;
        parentsEmail?: string | null;
        parentsPhoneNumber?: string | null;
        passportNumber?: string | null;
        refusedVisa?: boolean | null;
        refusedVisaReason?: string | null;
        schoolsAttended?: Array<{
            __typename: 'SchoolAttended';
            address?: string | null;
            attendedInstitutionFrom?: string | null;
            attendedInstitutionTo?: string | null;
            city?: string | null;
            country?: string | null;
            degreeAwarded?: number | null;
            degreeAwardedOn?: string | null;
            educationLevel?: number | null;
            name?: string | null;
            primaryLanguageInstruction?: string | null;
        } | null> | null;
        testCambridgeAdvanced?: number | null;
        testCambridgeAdvancedDate?: string | null;
        testCambridgeFirst?: number | null;
        testCambridgeFirstDate?: string | null;
        testCeliCilsItPlida?: number | null;
        testCeliCilsItPlidaDate?: string | null;
        testDele?: number | null;
        testDeleDate?: string | null;
        testDelfdalf?: number | null;
        testDelfdalfDate?: string | null;
        testEnglishPending?: boolean | null;
        testGmat?: number | null;
        testGmatDate?: string | null;
        testGoethe?: number | null;
        testGoetheDate?: string | null;
        testGre?: number | null;
        testGreDate?: string | null;
        testIelts?: number | null;
        testIeltsDate?: string | null;
        testLogicAndReasoningPending?: boolean | null;
        testOtherLanguagesPending?: boolean | null;
        testTagemage?: number | null;
        testTagemageDate?: string | null;
        testTcftef?: number | null;
        testTcftefDate?: string | null;
        testToefl?: number | null;
        testToeflDate?: string | null;
        testToeic?: number | null;
        testToeicDate?: string | null;
        validVisa?: boolean | null;
        workExperiences?: Array<{
            __typename: 'WorkExperience';
            address?: string | null;
            compagnyName?: string | null;
            title?: string | null;
            workedFrom?: string | null;
            workedTo?: string | null;
        } | null> | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type ListStudentsQueryVariables = {
    filter?: ModelStudentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListStudentsQuery = {
    listStudents?: {
        __typename: 'ModelStudentConnection';
        items?: Array<{
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};

export type GetDocumentQueryVariables = {
    id?: string;
};

export type GetDocumentQuery = {
    getDocument?: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        name: string;
        storageKey?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type ListDocumentsQueryVariables = {
    filter?: ModelDocumentFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListDocumentsQuery = {
    listDocuments?: {
        __typename: 'ModelDocumentConnection';
        items?: Array<{
            __typename: 'Document';
            id: string;
            studentId: string;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            name: string;
            storageKey?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};

export type GetApplicationQueryVariables = {
    id?: string;
};

export type GetApplicationQuery = {
    getApplication?: {
        __typename: 'Application';
        id: string;
        admissionResult?: string | null;
        document?: string | null;
        decisionLetterDate?: string | null;
        intake: string;
        interviewDate?: string | null;
        lastUpdate: number;
        modalApplicationCompletedViewed: boolean;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        programId: string;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            date: string;
            isMandatory: boolean;
            label: string;
            status: string;
        }>;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        todo?: string | null;
        tuitionsFeePaymentDate?: string | null;
        visaDate?: string | null;
        createdAt: string;
        updatedAt: string;
        program?: {
            __typename: 'Program';
            id: string;
            applicationFee: number;
            applicationFeeCurrency: string;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: string;
            country: string;
            degree: string;
            description?: string | null;
            discipline: string;
            duration: number;
            durationUnit: string;
            fee: number;
            feeCurrency: string;
            feeUnit: string;
            feesAndFinancing?: string | null;
            gradePointAverage: number;
            highestEducationLevel: number;
            intakeInformation?: string | null;
            intakes: string;
            languages: Array<string | null>;
            lastUpdate: number;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: string;
            name: string;
            otherRequirements?: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string;
                isMandatory?: boolean | null;
                storageKey?: string | null;
                description?: string | null;
                condition?: string | null;
                isSpecific?: boolean | null;
            }>;
            schedule: string;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testCeliCilsItPlida: number;
            testDele: number;
            testDelfdalf: number;
            testGmat: number;
            testGoethe: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school?: {
                __typename: 'School';
                id: string;
                city: string;
                country: string;
                coverPhoto: string;
                contactEmail?: string | null;
                contactJobTitle?: string | null;
                contactName?: string | null;
                contactPhone?: string | null;
                contractStatus: string;
                creationYear: number;
                description?: string | null;
                institutionType: string;
                internationalStudents: number;
                lastUpdate: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner?: string | null;
    } | null;
};

export type ListApplicationsQueryVariables = {
    filter?: ModelApplicationFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListApplicationsQuery = {
    listApplications?: {
        __typename: 'ModelApplicationConnection';
        items?: Array<{
            __typename: 'Application';
            id: string;
            admissionResult?: string | null;
            document?: string | null;
            decisionLetterDate?: string | null;
            intake: string;
            interviewDate?: string | null;
            lastUpdate: number;
            modalApplicationCompletedViewed: boolean;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            programId: string;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                date: string;
                isMandatory: boolean;
                label: string;
                status: string;
            }>;
            studentId: string;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            todo?: string | null;
            tuitionsFeePaymentDate?: string | null;
            visaDate?: string | null;
            createdAt: string;
            updatedAt: string;
            program?: {
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};

export type GetSearchAlertQueryVariables = {
    id?: string;
};

export type GetSearchAlertQuery = {
    getSearchAlert?: {
        __typename: 'SearchAlert';
        id: string;
        lastUpdate: number;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        studentId?: string | null;
        type: string;
        query: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type ListSearchAlertsQueryVariables = {
    filter?: ModelSearchAlertFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListSearchAlertsQuery = {
    listSearchAlerts?: {
        __typename: 'ModelSearchAlertConnection';
        items?: Array<{
            __typename: 'SearchAlert';
            id: string;
            lastUpdate: number;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            studentId?: string | null;
            type: string;
            query: string;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};

export type GetFeedbackQueryVariables = {
    id?: string;
};

export type GetFeedbackQuery = {
    getFeedback?: {
        __typename: 'Feedback';
        id: string;
        application?: {
            __typename: 'Application';
            id: string;
            admissionResult?: string | null;
            document?: string | null;
            decisionLetterDate?: string | null;
            intake: string;
            interviewDate?: string | null;
            lastUpdate: number;
            modalApplicationCompletedViewed: boolean;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            programId: string;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                date: string;
                isMandatory: boolean;
                label: string;
                status: string;
            }>;
            studentId: string;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            todo?: string | null;
            tuitionsFeePaymentDate?: string | null;
            visaDate?: string | null;
            createdAt: string;
            updatedAt: string;
            program?: {
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner?: string | null;
        } | null;
        applicationId: string;
        lastUpdate: number;
        rating: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type ListFeedbacksQueryVariables = {
    filter?: ModelFeedbackFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListFeedbacksQuery = {
    listFeedbacks?: {
        __typename: 'ModelFeedbackConnection';
        items?: Array<{
            __typename: 'Feedback';
            id: string;
            application?: {
                __typename: 'Application';
                id: string;
                admissionResult?: string | null;
                document?: string | null;
                decisionLetterDate?: string | null;
                intake: string;
                interviewDate?: string | null;
                lastUpdate: number;
                modalApplicationCompletedViewed: boolean;
                programId: string;
                studentId: string;
                todo?: string | null;
                tuitionsFeePaymentDate?: string | null;
                visaDate?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            applicationId: string;
            lastUpdate: number;
            rating: number;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
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
    getStudentByEmail?: {
        __typename: 'ModelStudentConnection';
        items?: Array<{
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
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
    getDocumentByStudent?: {
        __typename: 'ModelDocumentConnection';
        items?: Array<{
            __typename: 'Document';
            id: string;
            studentId: string;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            name: string;
            storageKey?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
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
    getDocumentByStorageKey?: {
        __typename: 'ModelDocumentConnection';
        items?: Array<{
            __typename: 'Document';
            id: string;
            studentId: string;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            name: string;
            storageKey?: string | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
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
    getApplicationByStudent?: {
        __typename: 'ModelApplicationConnection';
        items?: Array<{
            __typename: 'Application';
            id: string;
            admissionResult?: string | null;
            document?: string | null;
            decisionLetterDate?: string | null;
            intake: string;
            interviewDate?: string | null;
            lastUpdate: number;
            modalApplicationCompletedViewed: boolean;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            programId: string;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                date: string;
                isMandatory: boolean;
                label: string;
                status: string;
            }>;
            studentId: string;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            todo?: string | null;
            tuitionsFeePaymentDate?: string | null;
            visaDate?: string | null;
            createdAt: string;
            updatedAt: string;
            program?: {
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                school: {
                    logo: string;
                    name: string;
                    slug: string;
                };
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};

export type SearchStudentsQueryVariables = {
    filter?: SearchableStudentFilterInput | null;
    sort?: SearchableStudentSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
};

export type SearchStudentsQuery = {
    searchStudents?: {
        __typename: 'SearchableStudentConnection';
        items?: Array<{
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
        total?: number | null;
    } | null;
};

export type SearchApplicationsQueryVariables = {
    filter?: SearchableApplicationFilterInput | null;
    sort?: SearchableApplicationSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
};

export type SearchApplicationsQuery = {
    searchApplications?: {
        __typename: 'SearchableApplicationConnection';
        items?: Array<{
            __typename: 'Application';
            id: string;
            admissionResult?: string | null;
            document?: string | null;
            decisionLetterDate?: string | null;
            intake: string;
            interviewDate?: string | null;
            lastUpdate: number;
            modalApplicationCompletedViewed: boolean;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            programId: string;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                date: string;
                isMandatory: boolean;
                label: string;
                status: string;
            }>;
            studentId: string;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            todo?: string | null;
            tuitionsFeePaymentDate?: string | null;
            visaDate?: string | null;
            createdAt: string;
            updatedAt: string;
            program?: {
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
        total?: number | null;
    } | null;
};

export type SearchSearchAlertsQueryVariables = {
    filter?: SearchableSearchAlertFilterInput | null;
    sort?: SearchableSearchAlertSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
};

export type SearchSearchAlertsQuery = {
    searchSearchAlerts?: {
        __typename: 'SearchableSearchAlertConnection';
        items?: Array<{
            __typename: 'SearchAlert';
            id: string;
            lastUpdate: number;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            studentId?: string | null;
            type: string;
            query: string;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
        total?: number | null;
    } | null;
};

export type SearchFeedbacksQueryVariables = {
    filter?: SearchableFeedbackFilterInput | null;
    sort?: SearchableFeedbackSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
};

export type SearchFeedbacksQuery = {
    searchFeedbacks?: {
        __typename: 'SearchableFeedbackConnection';
        items?: Array<{
            __typename: 'Feedback';
            id: string;
            application?: {
                __typename: 'Application';
                id: string;
                admissionResult?: string | null;
                document?: string | null;
                decisionLetterDate?: string | null;
                intake: string;
                interviewDate?: string | null;
                lastUpdate: number;
                modalApplicationCompletedViewed: boolean;
                programId: string;
                studentId: string;
                todo?: string | null;
                tuitionsFeePaymentDate?: string | null;
                visaDate?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            applicationId: string;
            lastUpdate: number;
            rating: number;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null> | null;
        nextToken?: string | null;
        total?: number | null;
    } | null;
};

export type ListSchoolsQueryVariables = {
    filter?: ModelSchoolFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListSchoolsQuery = {
    listSchools?: {
        __typename: 'ModelSchoolConnection';
        items?: Array<{
            __typename: 'School';
            id: string;
            city: string;
            country: string;
            coverPhoto: string;
            contactEmail?: string | null;
            contactJobTitle?: string | null;
            contactName?: string | null;
            contactPhone?: string | null;
            contractStatus: string;
            creationYear: number;
            description?: string | null;
            institutionType: string;
            internationalStudents: number;
            lastUpdate: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            createdAt: string;
            updatedAt: string;
            programs?: {
                __typename: 'ModelProgramConnection';
                nextToken?: string | null;
            } | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};

export type GetSchoolQueryVariables = {
    id?: string;
};

export type GetSchoolQuery = {
    getSchool?: {
        __typename: 'School';
        id: string;
        city: string;
        country: string;
        coverPhoto: string;
        contactEmail?: string | null;
        contactJobTitle?: string | null;
        contactName?: string | null;
        contactPhone?: string | null;
        contractStatus: string;
        creationYear: number;
        description?: string | null;
        institutionType: string;
        internationalStudents: number;
        lastUpdate: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        createdAt: string;
        updatedAt: string;
        programs?: {
            __typename: 'ModelProgramConnection';
            items?: Array<{
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
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
    getSchoolBySlug?: {
        __typename: 'ModelSchoolConnection';
        items?: Array<{
            __typename: 'School';
            id: string;
            city: string;
            country: string;
            coverPhoto: string;
            contactEmail?: string | null;
            contactJobTitle?: string | null;
            contactName?: string | null;
            contactPhone?: string | null;
            contractStatus: string;
            creationYear: number;
            description?: string | null;
            institutionType: string;
            internationalStudents: number;
            lastUpdate: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            createdAt: string;
            updatedAt: string;
            programs?: {
                __typename: 'ModelProgramConnection';
                nextToken?: string | null;
            } | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};

export type SearchSchoolsQueryVariables = {
    filter?: SearchableSchoolFilterInput | null;
    sort?: SearchableSchoolSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
};

export type SearchSchoolsQuery = {
    searchSchools?: {
        __typename: 'SearchableSchoolConnection';
        items?: Array<{
            __typename: 'School';
            id: string;
            city: string;
            country: string;
            coverPhoto: string;
            contactEmail?: string | null;
            contactJobTitle?: string | null;
            contactName?: string | null;
            contactPhone?: string | null;
            contractStatus: string;
            creationYear: number;
            description?: string | null;
            institutionType: string;
            internationalStudents: number;
            lastUpdate: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            createdAt: string;
            updatedAt: string;
            programs?: {
                __typename: 'ModelProgramConnection';
                nextToken?: string | null;
            } | null;
        } | null> | null;
        nextToken?: string | null;
        total?: number | null;
    } | null;
};

export type ListProgramsQueryVariables = {
    filter?: ModelProgramFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListProgramsQuery = {
    listPrograms?: {
        __typename: 'ModelProgramConnection';
        items?: Array<{
            __typename: 'Program';
            id: string;
            applicationFee: number;
            applicationFeeCurrency: string;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: string;
            country: string;
            degree: string;
            description?: string | null;
            discipline: string;
            duration: number;
            durationUnit: string;
            fee: number;
            feeCurrency: string;
            feeUnit: string;
            feesAndFinancing?: string | null;
            gradePointAverage: number;
            highestEducationLevel: number;
            intakeInformation?: string | null;
            intakes: string;
            languages: Array<string | null>;
            lastUpdate: number;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: string;
            name: string;
            otherRequirements?: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string;
                isMandatory?: boolean | null;
                storageKey?: string | null;
                description?: string | null;
                condition?: string | null;
                isSpecific?: boolean | null;
            }>;
            schedule: string;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testCeliCilsItPlida: number;
            testDele: number;
            testDelfdalf: number;
            testGmat: number;
            testGoethe: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school?: {
                __typename: 'School';
                id: string;
                city: string;
                country: string;
                coverPhoto: string;
                contactEmail?: string | null;
                contactJobTitle?: string | null;
                contactName?: string | null;
                contactPhone?: string | null;
                contractStatus: string;
                creationYear: number;
                description?: string | null;
                institutionType: string;
                internationalStudents: number;
                lastUpdate: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};

export type GetProgramQueryVariables = {
    id?: string;
};

export type GetProgramQuery = {
    getProgram?: {
        __typename: 'Program';
        id: string;
        applicationFee: number;
        applicationFeeCurrency: string;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: string;
        country: string;
        degree: string;
        description?: string | null;
        discipline: string;
        duration: number;
        durationUnit: string;
        fee: number;
        feeCurrency: string;
        feeUnit: string;
        feesAndFinancing?: string | null;
        gradePointAverage: number;
        highestEducationLevel: number;
        intakeInformation?: string | null;
        intakes: string;
        languages: Array<string | null>;
        lastUpdate: number;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: string;
        name: string;
        otherRequirements?: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string;
            isMandatory?: boolean | null;
            storageKey?: string | null;
            description?: string | null;
            condition?: string | null;
            isSpecific?: boolean | null;
        }>;
        schedule: string;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testCeliCilsItPlida: number;
        testDele: number;
        testDelfdalf: number;
        testGmat: number;
        testGoethe: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school?: {
            __typename: 'School';
            id: string;
            city: string;
            country: string;
            coverPhoto: string;
            contactEmail?: string | null;
            contactJobTitle?: string | null;
            contactName?: string | null;
            contactPhone?: string | null;
            contractStatus: string;
            creationYear: number;
            description?: string | null;
            institutionType: string;
            internationalStudents: number;
            lastUpdate: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            createdAt: string;
            updatedAt: string;
            programs?: {
                __typename: 'ModelProgramConnection';
                nextToken?: string | null;
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
    getProgramBySlug?: {
        __typename: 'ModelProgramConnection';
        items?: Array<{
            __typename: 'Program';
            id: string;
            applicationFee: number;
            applicationFeeCurrency: string;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: string;
            country: string;
            degree: string;
            description?: string | null;
            discipline: string;
            duration: number;
            durationUnit: string;
            fee: number;
            feeCurrency: string;
            feeUnit: string;
            feesAndFinancing?: string | null;
            gradePointAverage: number;
            highestEducationLevel: number;
            intakeInformation?: string | null;
            intakes: string;
            languages: Array<string | null>;
            lastUpdate: number;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: string;
            name: string;
            otherRequirements?: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string;
                isMandatory?: boolean | null;
                storageKey?: string | null;
                description?: string | null;
                condition?: string | null;
                isSpecific?: boolean | null;
            }>;
            schedule: string;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testCeliCilsItPlida: number;
            testDele: number;
            testDelfdalf: number;
            testGmat: number;
            testGoethe: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school?: {
                __typename: 'School';
                id: string;
                city: string;
                country: string;
                coverPhoto: string;
                contactEmail?: string | null;
                contactJobTitle?: string | null;
                contactName?: string | null;
                contactPhone?: string | null;
                contractStatus: string;
                creationYear: number;
                description?: string | null;
                institutionType: string;
                internationalStudents: number;
                lastUpdate: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};

export type GetProgramBySchoolQueryVariables = {
    schoolId?: string | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelProgramFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type GetProgramBySchoolQuery = {
    getProgramBySchool?: {
        __typename: 'ModelProgramConnection';
        items?: Array<{
            __typename: 'Program';
            id: string;
            applicationFee: number;
            applicationFeeCurrency: string;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: string;
            country: string;
            degree: string;
            description?: string | null;
            discipline: string;
            duration: number;
            durationUnit: string;
            fee: number;
            feeCurrency: string;
            feeUnit: string;
            feesAndFinancing?: string | null;
            gradePointAverage: number;
            highestEducationLevel: number;
            intakeInformation?: string | null;
            intakes: string;
            languages: Array<string | null>;
            lastUpdate: number;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: string;
            name: string;
            otherRequirements?: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string;
                isMandatory?: boolean | null;
                storageKey?: string | null;
                description?: string | null;
                condition?: string | null;
                isSpecific?: boolean | null;
            }>;
            schedule: string;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testCeliCilsItPlida: number;
            testDele: number;
            testDelfdalf: number;
            testGmat: number;
            testGoethe: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school?: {
                __typename: 'School';
                id: string;
                city: string;
                country: string;
                coverPhoto: string;
                contactEmail?: string | null;
                contactJobTitle?: string | null;
                contactName?: string | null;
                contactPhone?: string | null;
                contractStatus: string;
                creationYear: number;
                description?: string | null;
                institutionType: string;
                internationalStudents: number;
                lastUpdate: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};

export type SearchProgramsQueryVariables = {
    filter?: SearchableProgramFilterInput | null;
    sort?: SearchableProgramSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
};

export type SearchProgramsQuery = {
    searchPrograms?: {
        __typename: 'SearchableProgramConnection';
        items?: Array<{
            __typename: 'Program';
            id: string;
            applicationFee: number;
            applicationFeeCurrency: string;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: string;
            country: string;
            degree: string;
            description?: string | null;
            discipline: string;
            duration: number;
            durationUnit: string;
            fee: number;
            feeCurrency: string;
            feeUnit: string;
            feesAndFinancing?: string | null;
            gradePointAverage: number;
            highestEducationLevel: number;
            intakeInformation?: string | null;
            intakes: string;
            languages: Array<string | null>;
            lastUpdate: number;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: string;
            name: string;
            otherRequirements?: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string;
                isMandatory?: boolean | null;
                storageKey?: string | null;
                description?: string | null;
                condition?: string | null;
                isSpecific?: boolean | null;
            }>;
            schedule: string;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testCeliCilsItPlida: number;
            testDele: number;
            testDelfdalf: number;
            testGmat: number;
            testGoethe: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school?: {
                __typename: 'School';
                id: string;
                city: string;
                country: string;
                coverPhoto: string;
                contactEmail?: string | null;
                contactJobTitle?: string | null;
                contactName?: string | null;
                contactPhone?: string | null;
                contractStatus: string;
                creationYear: number;
                description?: string | null;
                institutionType: string;
                internationalStudents: number;
                lastUpdate: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null> | null;
        nextToken?: string | null;
        total?: number | null;
    } | null;
};

export type GetPostQueryVariables = {
    id?: string;
};

export type GetPostQuery = {
    getPost?: {
        __typename: 'Post';
        id: string;
        category: string;
        content: string;
        lastUpdate: number;
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
    listPosts?: {
        __typename: 'ModelPostConnection';
        items?: Array<{
            __typename: 'Post';
            id: string;
            category: string;
            content: string;
            lastUpdate: number;
            published: boolean;
            slug: string;
            title: string;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken?: string | null;
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
    getPostBySlug?: {
        __typename: 'ModelPostConnection';
        items?: Array<{
            __typename: 'Post';
            id: string;
            category: string;
            content: string;
            lastUpdate: number;
            published: boolean;
            slug: string;
            title: string;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};

export type SearchPostsQueryVariables = {
    filter?: SearchablePostFilterInput | null;
    sort?: SearchablePostSortInput | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
};

export type SearchPostsQuery = {
    searchPosts?: {
        __typename: 'SearchablePostConnection';
        items?: Array<{
            __typename: 'Post';
            id: string;
            category: string;
            content: string;
            lastUpdate: number;
            published: boolean;
            slug: string;
            title: string;
            createdAt: string;
            updatedAt: string;
        } | null> | null;
        nextToken?: string | null;
        total?: number | null;
    } | null;
};

export type OnCreateStudentSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateStudentSubscription = {
    onCreateStudent?: {
        __typename: 'Student';
        id: string;
        address?: string | null;
        applications?: {
            __typename: 'ModelApplicationConnection';
            items?: Array<{
                __typename: 'Application';
                id: string;
                admissionResult?: string | null;
                document?: string | null;
                decisionLetterDate?: string | null;
                intake: string;
                interviewDate?: string | null;
                lastUpdate: number;
                modalApplicationCompletedViewed: boolean;
                programId: string;
                studentId: string;
                todo?: string | null;
                tuitionsFeePaymentDate?: string | null;
                visaDate?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        birthday?: string | null;
        city?: string | null;
        country?: string | null;
        degrees?: Array<string | null> | null;
        disciplines?: Array<string | null> | null;
        documents?: {
            __typename: 'ModelDocumentConnection';
            items?: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string;
                storageKey?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        educationCountry?: string | null;
        email?: string | null;
        fatherFirstName?: string | null;
        fatherLastName?: string | null;
        firstLanguage?: string | null;
        firstName?: string | null;
        favoritePrograms?: Array<string | null> | null;
        favoriteSchools?: Array<string | null> | null;
        gender?: string | null;
        gradePointAverage?: number | null;
        guardianFirstName?: string | null;
        guardianLastName?: string | null;
        hasMandatoryDocuments?: boolean | null;
        highestEducationLevel?: number | null;
        lastName?: string | null;
        lastUpdate: number;
        locale?: string | null;
        maritalStatus?: string | null;
        middleName?: string | null;
        modalProfileCompletedViewed?: boolean | null;
        phoneNumber?: string | null;
        motherFirstName?: string | null;
        motherMaidenName?: string | null;
        nationality?: string | null;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        parentsAddress?: string | null;
        parentsCity?: string | null;
        parentsCountry?: string | null;
        parentsEmail?: string | null;
        parentsPhoneNumber?: string | null;
        passportNumber?: string | null;
        refusedVisa?: boolean | null;
        refusedVisaReason?: string | null;
        schoolsAttended?: Array<{
            __typename: 'SchoolAttended';
            address?: string | null;
            attendedInstitutionFrom?: string | null;
            attendedInstitutionTo?: string | null;
            city?: string | null;
            country?: string | null;
            degreeAwarded?: number | null;
            degreeAwardedOn?: string | null;
            educationLevel?: number | null;
            name?: string | null;
            primaryLanguageInstruction?: string | null;
        } | null> | null;
        testCambridgeAdvanced?: number | null;
        testCambridgeAdvancedDate?: string | null;
        testCambridgeFirst?: number | null;
        testCambridgeFirstDate?: string | null;
        testCeliCilsItPlida?: number | null;
        testCeliCilsItPlidaDate?: string | null;
        testDele?: number | null;
        testDeleDate?: string | null;
        testDelfdalf?: number | null;
        testDelfdalfDate?: string | null;
        testEnglishPending?: boolean | null;
        testGmat?: number | null;
        testGmatDate?: string | null;
        testGoethe?: number | null;
        testGoetheDate?: string | null;
        testGre?: number | null;
        testGreDate?: string | null;
        testIelts?: number | null;
        testIeltsDate?: string | null;
        testLogicAndReasoningPending?: boolean | null;
        testOtherLanguagesPending?: boolean | null;
        testTagemage?: number | null;
        testTagemageDate?: string | null;
        testTcftef?: number | null;
        testTcftefDate?: string | null;
        testToefl?: number | null;
        testToeflDate?: string | null;
        testToeic?: number | null;
        testToeicDate?: string | null;
        validVisa?: boolean | null;
        workExperiences?: Array<{
            __typename: 'WorkExperience';
            address?: string | null;
            compagnyName?: string | null;
            title?: string | null;
            workedFrom?: string | null;
            workedTo?: string | null;
        } | null> | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type OnUpdateStudentSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateStudentSubscription = {
    onUpdateStudent?: {
        __typename: 'Student';
        id: string;
        address?: string | null;
        applications?: {
            __typename: 'ModelApplicationConnection';
            items?: Array<{
                __typename: 'Application';
                id: string;
                admissionResult?: string | null;
                document?: string | null;
                decisionLetterDate?: string | null;
                intake: string;
                interviewDate?: string | null;
                lastUpdate: number;
                modalApplicationCompletedViewed: boolean;
                programId: string;
                studentId: string;
                todo?: string | null;
                tuitionsFeePaymentDate?: string | null;
                visaDate?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        birthday?: string | null;
        city?: string | null;
        country?: string | null;
        degrees?: Array<string | null> | null;
        disciplines?: Array<string | null> | null;
        documents?: {
            __typename: 'ModelDocumentConnection';
            items?: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string;
                storageKey?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        educationCountry?: string | null;
        email?: string | null;
        fatherFirstName?: string | null;
        fatherLastName?: string | null;
        firstLanguage?: string | null;
        firstName?: string | null;
        favoritePrograms?: Array<string | null> | null;
        favoriteSchools?: Array<string | null> | null;
        gender?: string | null;
        gradePointAverage?: number | null;
        guardianFirstName?: string | null;
        guardianLastName?: string | null;
        hasMandatoryDocuments?: boolean | null;
        highestEducationLevel?: number | null;
        lastName?: string | null;
        lastUpdate: number;
        locale?: string | null;
        maritalStatus?: string | null;
        middleName?: string | null;
        modalProfileCompletedViewed?: boolean | null;
        phoneNumber?: string | null;
        motherFirstName?: string | null;
        motherMaidenName?: string | null;
        nationality?: string | null;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        parentsAddress?: string | null;
        parentsCity?: string | null;
        parentsCountry?: string | null;
        parentsEmail?: string | null;
        parentsPhoneNumber?: string | null;
        passportNumber?: string | null;
        refusedVisa?: boolean | null;
        refusedVisaReason?: string | null;
        schoolsAttended?: Array<{
            __typename: 'SchoolAttended';
            address?: string | null;
            attendedInstitutionFrom?: string | null;
            attendedInstitutionTo?: string | null;
            city?: string | null;
            country?: string | null;
            degreeAwarded?: number | null;
            degreeAwardedOn?: string | null;
            educationLevel?: number | null;
            name?: string | null;
            primaryLanguageInstruction?: string | null;
        } | null> | null;
        testCambridgeAdvanced?: number | null;
        testCambridgeAdvancedDate?: string | null;
        testCambridgeFirst?: number | null;
        testCambridgeFirstDate?: string | null;
        testCeliCilsItPlida?: number | null;
        testCeliCilsItPlidaDate?: string | null;
        testDele?: number | null;
        testDeleDate?: string | null;
        testDelfdalf?: number | null;
        testDelfdalfDate?: string | null;
        testEnglishPending?: boolean | null;
        testGmat?: number | null;
        testGmatDate?: string | null;
        testGoethe?: number | null;
        testGoetheDate?: string | null;
        testGre?: number | null;
        testGreDate?: string | null;
        testIelts?: number | null;
        testIeltsDate?: string | null;
        testLogicAndReasoningPending?: boolean | null;
        testOtherLanguagesPending?: boolean | null;
        testTagemage?: number | null;
        testTagemageDate?: string | null;
        testTcftef?: number | null;
        testTcftefDate?: string | null;
        testToefl?: number | null;
        testToeflDate?: string | null;
        testToeic?: number | null;
        testToeicDate?: string | null;
        validVisa?: boolean | null;
        workExperiences?: Array<{
            __typename: 'WorkExperience';
            address?: string | null;
            compagnyName?: string | null;
            title?: string | null;
            workedFrom?: string | null;
            workedTo?: string | null;
        } | null> | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type OnDeleteStudentSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteStudentSubscription = {
    onDeleteStudent?: {
        __typename: 'Student';
        id: string;
        address?: string | null;
        applications?: {
            __typename: 'ModelApplicationConnection';
            items?: Array<{
                __typename: 'Application';
                id: string;
                admissionResult?: string | null;
                document?: string | null;
                decisionLetterDate?: string | null;
                intake: string;
                interviewDate?: string | null;
                lastUpdate: number;
                modalApplicationCompletedViewed: boolean;
                programId: string;
                studentId: string;
                todo?: string | null;
                tuitionsFeePaymentDate?: string | null;
                visaDate?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        birthday?: string | null;
        city?: string | null;
        country?: string | null;
        degrees?: Array<string | null> | null;
        disciplines?: Array<string | null> | null;
        documents?: {
            __typename: 'ModelDocumentConnection';
            items?: Array<{
                __typename: 'Document';
                id: string;
                studentId: string;
                name: string;
                storageKey?: string | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        educationCountry?: string | null;
        email?: string | null;
        fatherFirstName?: string | null;
        fatherLastName?: string | null;
        firstLanguage?: string | null;
        firstName?: string | null;
        favoritePrograms?: Array<string | null> | null;
        favoriteSchools?: Array<string | null> | null;
        gender?: string | null;
        gradePointAverage?: number | null;
        guardianFirstName?: string | null;
        guardianLastName?: string | null;
        hasMandatoryDocuments?: boolean | null;
        highestEducationLevel?: number | null;
        lastName?: string | null;
        lastUpdate: number;
        locale?: string | null;
        maritalStatus?: string | null;
        middleName?: string | null;
        modalProfileCompletedViewed?: boolean | null;
        phoneNumber?: string | null;
        motherFirstName?: string | null;
        motherMaidenName?: string | null;
        nationality?: string | null;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        parentsAddress?: string | null;
        parentsCity?: string | null;
        parentsCountry?: string | null;
        parentsEmail?: string | null;
        parentsPhoneNumber?: string | null;
        passportNumber?: string | null;
        refusedVisa?: boolean | null;
        refusedVisaReason?: string | null;
        schoolsAttended?: Array<{
            __typename: 'SchoolAttended';
            address?: string | null;
            attendedInstitutionFrom?: string | null;
            attendedInstitutionTo?: string | null;
            city?: string | null;
            country?: string | null;
            degreeAwarded?: number | null;
            degreeAwardedOn?: string | null;
            educationLevel?: number | null;
            name?: string | null;
            primaryLanguageInstruction?: string | null;
        } | null> | null;
        testCambridgeAdvanced?: number | null;
        testCambridgeAdvancedDate?: string | null;
        testCambridgeFirst?: number | null;
        testCambridgeFirstDate?: string | null;
        testCeliCilsItPlida?: number | null;
        testCeliCilsItPlidaDate?: string | null;
        testDele?: number | null;
        testDeleDate?: string | null;
        testDelfdalf?: number | null;
        testDelfdalfDate?: string | null;
        testEnglishPending?: boolean | null;
        testGmat?: number | null;
        testGmatDate?: string | null;
        testGoethe?: number | null;
        testGoetheDate?: string | null;
        testGre?: number | null;
        testGreDate?: string | null;
        testIelts?: number | null;
        testIeltsDate?: string | null;
        testLogicAndReasoningPending?: boolean | null;
        testOtherLanguagesPending?: boolean | null;
        testTagemage?: number | null;
        testTagemageDate?: string | null;
        testTcftef?: number | null;
        testTcftefDate?: string | null;
        testToefl?: number | null;
        testToeflDate?: string | null;
        testToeic?: number | null;
        testToeicDate?: string | null;
        validVisa?: boolean | null;
        workExperiences?: Array<{
            __typename: 'WorkExperience';
            address?: string | null;
            compagnyName?: string | null;
            title?: string | null;
            workedFrom?: string | null;
            workedTo?: string | null;
        } | null> | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type OnCreateDocumentSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateDocumentSubscription = {
    onCreateDocument?: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        name: string;
        storageKey?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type OnUpdateDocumentSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateDocumentSubscription = {
    onUpdateDocument?: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        name: string;
        storageKey?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type OnDeleteDocumentSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteDocumentSubscription = {
    onDeleteDocument?: {
        __typename: 'Document';
        id: string;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        name: string;
        storageKey?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type OnCreateApplicationSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateApplicationSubscription = {
    onCreateApplication?: {
        __typename: 'Application';
        id: string;
        admissionResult?: string | null;
        document?: string | null;
        decisionLetterDate?: string | null;
        intake: string;
        interviewDate?: string | null;
        lastUpdate: number;
        modalApplicationCompletedViewed: boolean;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        programId: string;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            date: string;
            isMandatory: boolean;
            label: string;
            status: string;
        }>;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        todo?: string | null;
        tuitionsFeePaymentDate?: string | null;
        visaDate?: string | null;
        createdAt: string;
        updatedAt: string;
        program?: {
            __typename: 'Program';
            id: string;
            applicationFee: number;
            applicationFeeCurrency: string;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: string;
            country: string;
            degree: string;
            description?: string | null;
            discipline: string;
            duration: number;
            durationUnit: string;
            fee: number;
            feeCurrency: string;
            feeUnit: string;
            feesAndFinancing?: string | null;
            gradePointAverage: number;
            highestEducationLevel: number;
            intakeInformation?: string | null;
            intakes: string;
            languages: Array<string | null>;
            lastUpdate: number;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: string;
            name: string;
            otherRequirements?: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string;
                isMandatory?: boolean | null;
                storageKey?: string | null;
                description?: string | null;
                condition?: string | null;
                isSpecific?: boolean | null;
            }>;
            schedule: string;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testCeliCilsItPlida: number;
            testDele: number;
            testDelfdalf: number;
            testGmat: number;
            testGoethe: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school?: {
                __typename: 'School';
                id: string;
                city: string;
                country: string;
                coverPhoto: string;
                contactEmail?: string | null;
                contactJobTitle?: string | null;
                contactName?: string | null;
                contactPhone?: string | null;
                contractStatus: string;
                creationYear: number;
                description?: string | null;
                institutionType: string;
                internationalStudents: number;
                lastUpdate: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner?: string | null;
    } | null;
};

export type OnUpdateApplicationSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateApplicationSubscription = {
    onUpdateApplication?: {
        __typename: 'Application';
        id: string;
        admissionResult?: string | null;
        document?: string | null;
        decisionLetterDate?: string | null;
        intake: string;
        interviewDate?: string | null;
        lastUpdate: number;
        modalApplicationCompletedViewed: boolean;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        programId: string;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            date: string;
            isMandatory: boolean;
            label: string;
            status: string;
        }>;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        todo?: string | null;
        tuitionsFeePaymentDate?: string | null;
        visaDate?: string | null;
        createdAt: string;
        updatedAt: string;
        program?: {
            __typename: 'Program';
            id: string;
            applicationFee: number;
            applicationFeeCurrency: string;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: string;
            country: string;
            degree: string;
            description?: string | null;
            discipline: string;
            duration: number;
            durationUnit: string;
            fee: number;
            feeCurrency: string;
            feeUnit: string;
            feesAndFinancing?: string | null;
            gradePointAverage: number;
            highestEducationLevel: number;
            intakeInformation?: string | null;
            intakes: string;
            languages: Array<string | null>;
            lastUpdate: number;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: string;
            name: string;
            otherRequirements?: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string;
                isMandatory?: boolean | null;
                storageKey?: string | null;
                description?: string | null;
                condition?: string | null;
                isSpecific?: boolean | null;
            }>;
            schedule: string;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testCeliCilsItPlida: number;
            testDele: number;
            testDelfdalf: number;
            testGmat: number;
            testGoethe: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school?: {
                __typename: 'School';
                id: string;
                city: string;
                country: string;
                coverPhoto: string;
                contactEmail?: string | null;
                contactJobTitle?: string | null;
                contactName?: string | null;
                contactPhone?: string | null;
                contractStatus: string;
                creationYear: number;
                description?: string | null;
                institutionType: string;
                internationalStudents: number;
                lastUpdate: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner?: string | null;
    } | null;
};

export type OnDeleteApplicationSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteApplicationSubscription = {
    onDeleteApplication?: {
        __typename: 'Application';
        id: string;
        admissionResult?: string | null;
        document?: string | null;
        decisionLetterDate?: string | null;
        intake: string;
        interviewDate?: string | null;
        lastUpdate: number;
        modalApplicationCompletedViewed: boolean;
        notifications?: Array<{
            __typename: 'Notification';
            date: string;
            description: string;
            descriptionOptions: string;
            link: string;
            seen: boolean;
            title: string;
            titleOptions: string;
        } | null> | null;
        programId: string;
        steps: Array<{
            __typename: 'ApplicationStep';
            id: string;
            date: string;
            isMandatory: boolean;
            label: string;
            status: string;
        }>;
        studentId: string;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        todo?: string | null;
        tuitionsFeePaymentDate?: string | null;
        visaDate?: string | null;
        createdAt: string;
        updatedAt: string;
        program?: {
            __typename: 'Program';
            id: string;
            applicationFee: number;
            applicationFeeCurrency: string;
            city: string;
            costOfLiving: number;
            costOfLivingCurrency: string;
            country: string;
            degree: string;
            description?: string | null;
            discipline: string;
            duration: number;
            durationUnit: string;
            fee: number;
            feeCurrency: string;
            feeUnit: string;
            feesAndFinancing?: string | null;
            gradePointAverage: number;
            highestEducationLevel: number;
            intakeInformation?: string | null;
            intakes: string;
            languages: Array<string | null>;
            lastUpdate: number;
            minimumAge: number;
            minimumWorkExperience: number;
            minimumWorkExperienceUnit: string;
            name: string;
            otherRequirements?: string | null;
            published: boolean;
            requestedDocuments: Array<{
                __typename: 'RequestedDocument';
                name: string;
                isMandatory?: boolean | null;
                storageKey?: string | null;
                description?: string | null;
                condition?: string | null;
                isSpecific?: boolean | null;
            }>;
            schedule: string;
            schoolId: string;
            schoolName: string;
            slug: string;
            submissionDeadline: string;
            testCambridgeAdvanced: number;
            testCambridgeFirst: number;
            testCeliCilsItPlida: number;
            testDele: number;
            testDelfdalf: number;
            testGmat: number;
            testGoethe: number;
            testGre: number;
            testIelts: number;
            testTagemage: number;
            testTcftef: number;
            testToefl: number;
            testToeic: number;
            createdAt: string;
            updatedAt: string;
            school?: {
                __typename: 'School';
                id: string;
                city: string;
                country: string;
                coverPhoto: string;
                contactEmail?: string | null;
                contactJobTitle?: string | null;
                contactName?: string | null;
                contactPhone?: string | null;
                contractStatus: string;
                creationYear: number;
                description?: string | null;
                institutionType: string;
                internationalStudents: number;
                lastUpdate: number;
                logo: string;
                name: string;
                totalStudents: number;
                slug: string;
                published: boolean;
                createdAt: string;
                updatedAt: string;
            } | null;
        } | null;
        owner?: string | null;
    } | null;
};

export type OnCreateSearchAlertSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateSearchAlertSubscription = {
    onCreateSearchAlert?: {
        __typename: 'SearchAlert';
        id: string;
        lastUpdate: number;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        studentId?: string | null;
        type: string;
        query: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type OnUpdateSearchAlertSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateSearchAlertSubscription = {
    onUpdateSearchAlert?: {
        __typename: 'SearchAlert';
        id: string;
        lastUpdate: number;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        studentId?: string | null;
        type: string;
        query: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type OnDeleteSearchAlertSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteSearchAlertSubscription = {
    onDeleteSearchAlert?: {
        __typename: 'SearchAlert';
        id: string;
        lastUpdate: number;
        student?: {
            __typename: 'Student';
            id: string;
            address?: string | null;
            applications?: {
                __typename: 'ModelApplicationConnection';
                nextToken?: string | null;
            } | null;
            birthday?: string | null;
            city?: string | null;
            country?: string | null;
            degrees?: Array<string | null> | null;
            disciplines?: Array<string | null> | null;
            documents?: {
                __typename: 'ModelDocumentConnection';
                nextToken?: string | null;
            } | null;
            educationCountry?: string | null;
            email?: string | null;
            fatherFirstName?: string | null;
            fatherLastName?: string | null;
            firstLanguage?: string | null;
            firstName?: string | null;
            favoritePrograms?: Array<string | null> | null;
            favoriteSchools?: Array<string | null> | null;
            gender?: string | null;
            gradePointAverage?: number | null;
            guardianFirstName?: string | null;
            guardianLastName?: string | null;
            hasMandatoryDocuments?: boolean | null;
            highestEducationLevel?: number | null;
            lastName?: string | null;
            lastUpdate: number;
            locale?: string | null;
            maritalStatus?: string | null;
            middleName?: string | null;
            modalProfileCompletedViewed?: boolean | null;
            phoneNumber?: string | null;
            motherFirstName?: string | null;
            motherMaidenName?: string | null;
            nationality?: string | null;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            parentsAddress?: string | null;
            parentsCity?: string | null;
            parentsCountry?: string | null;
            parentsEmail?: string | null;
            parentsPhoneNumber?: string | null;
            passportNumber?: string | null;
            refusedVisa?: boolean | null;
            refusedVisaReason?: string | null;
            schoolsAttended?: Array<{
                __typename: 'SchoolAttended';
                address?: string | null;
                attendedInstitutionFrom?: string | null;
                attendedInstitutionTo?: string | null;
                city?: string | null;
                country?: string | null;
                degreeAwarded?: number | null;
                degreeAwardedOn?: string | null;
                educationLevel?: number | null;
                name?: string | null;
                primaryLanguageInstruction?: string | null;
            } | null> | null;
            testCambridgeAdvanced?: number | null;
            testCambridgeAdvancedDate?: string | null;
            testCambridgeFirst?: number | null;
            testCambridgeFirstDate?: string | null;
            testCeliCilsItPlida?: number | null;
            testCeliCilsItPlidaDate?: string | null;
            testDele?: number | null;
            testDeleDate?: string | null;
            testDelfdalf?: number | null;
            testDelfdalfDate?: string | null;
            testEnglishPending?: boolean | null;
            testGmat?: number | null;
            testGmatDate?: string | null;
            testGoethe?: number | null;
            testGoetheDate?: string | null;
            testGre?: number | null;
            testGreDate?: string | null;
            testIelts?: number | null;
            testIeltsDate?: string | null;
            testLogicAndReasoningPending?: boolean | null;
            testOtherLanguagesPending?: boolean | null;
            testTagemage?: number | null;
            testTagemageDate?: string | null;
            testTcftef?: number | null;
            testTcftefDate?: string | null;
            testToefl?: number | null;
            testToeflDate?: string | null;
            testToeic?: number | null;
            testToeicDate?: string | null;
            validVisa?: boolean | null;
            workExperiences?: Array<{
                __typename: 'WorkExperience';
                address?: string | null;
                compagnyName?: string | null;
                title?: string | null;
                workedFrom?: string | null;
                workedTo?: string | null;
            } | null> | null;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
        } | null;
        studentId?: string | null;
        type: string;
        query: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type OnCreateFeedbackSubscriptionVariables = {
    owner?: string | null;
};

export type OnCreateFeedbackSubscription = {
    onCreateFeedback?: {
        __typename: 'Feedback';
        id: string;
        application?: {
            __typename: 'Application';
            id: string;
            admissionResult?: string | null;
            document?: string | null;
            decisionLetterDate?: string | null;
            intake: string;
            interviewDate?: string | null;
            lastUpdate: number;
            modalApplicationCompletedViewed: boolean;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            programId: string;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                date: string;
                isMandatory: boolean;
                label: string;
                status: string;
            }>;
            studentId: string;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            todo?: string | null;
            tuitionsFeePaymentDate?: string | null;
            visaDate?: string | null;
            createdAt: string;
            updatedAt: string;
            program?: {
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner?: string | null;
        } | null;
        applicationId: string;
        lastUpdate: number;
        rating: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type OnUpdateFeedbackSubscriptionVariables = {
    owner?: string | null;
};

export type OnUpdateFeedbackSubscription = {
    onUpdateFeedback?: {
        __typename: 'Feedback';
        id: string;
        application?: {
            __typename: 'Application';
            id: string;
            admissionResult?: string | null;
            document?: string | null;
            decisionLetterDate?: string | null;
            intake: string;
            interviewDate?: string | null;
            lastUpdate: number;
            modalApplicationCompletedViewed: boolean;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            programId: string;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                date: string;
                isMandatory: boolean;
                label: string;
                status: string;
            }>;
            studentId: string;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            todo?: string | null;
            tuitionsFeePaymentDate?: string | null;
            visaDate?: string | null;
            createdAt: string;
            updatedAt: string;
            program?: {
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner?: string | null;
        } | null;
        applicationId: string;
        lastUpdate: number;
        rating: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type OnDeleteFeedbackSubscriptionVariables = {
    owner?: string | null;
};

export type OnDeleteFeedbackSubscription = {
    onDeleteFeedback?: {
        __typename: 'Feedback';
        id: string;
        application?: {
            __typename: 'Application';
            id: string;
            admissionResult?: string | null;
            document?: string | null;
            decisionLetterDate?: string | null;
            intake: string;
            interviewDate?: string | null;
            lastUpdate: number;
            modalApplicationCompletedViewed: boolean;
            notifications?: Array<{
                __typename: 'Notification';
                date: string;
                description: string;
                descriptionOptions: string;
                link: string;
                seen: boolean;
                title: string;
                titleOptions: string;
            } | null> | null;
            programId: string;
            steps: Array<{
                __typename: 'ApplicationStep';
                id: string;
                date: string;
                isMandatory: boolean;
                label: string;
                status: string;
            }>;
            studentId: string;
            student?: {
                __typename: 'Student';
                id: string;
                address?: string | null;
                birthday?: string | null;
                city?: string | null;
                country?: string | null;
                degrees?: Array<string | null> | null;
                disciplines?: Array<string | null> | null;
                educationCountry?: string | null;
                email?: string | null;
                fatherFirstName?: string | null;
                fatherLastName?: string | null;
                firstLanguage?: string | null;
                firstName?: string | null;
                favoritePrograms?: Array<string | null> | null;
                favoriteSchools?: Array<string | null> | null;
                gender?: string | null;
                gradePointAverage?: number | null;
                guardianFirstName?: string | null;
                guardianLastName?: string | null;
                hasMandatoryDocuments?: boolean | null;
                highestEducationLevel?: number | null;
                lastName?: string | null;
                lastUpdate: number;
                locale?: string | null;
                maritalStatus?: string | null;
                middleName?: string | null;
                modalProfileCompletedViewed?: boolean | null;
                phoneNumber?: string | null;
                motherFirstName?: string | null;
                motherMaidenName?: string | null;
                nationality?: string | null;
                parentsAddress?: string | null;
                parentsCity?: string | null;
                parentsCountry?: string | null;
                parentsEmail?: string | null;
                parentsPhoneNumber?: string | null;
                passportNumber?: string | null;
                refusedVisa?: boolean | null;
                refusedVisaReason?: string | null;
                testCambridgeAdvanced?: number | null;
                testCambridgeAdvancedDate?: string | null;
                testCambridgeFirst?: number | null;
                testCambridgeFirstDate?: string | null;
                testCeliCilsItPlida?: number | null;
                testCeliCilsItPlidaDate?: string | null;
                testDele?: number | null;
                testDeleDate?: string | null;
                testDelfdalf?: number | null;
                testDelfdalfDate?: string | null;
                testEnglishPending?: boolean | null;
                testGmat?: number | null;
                testGmatDate?: string | null;
                testGoethe?: number | null;
                testGoetheDate?: string | null;
                testGre?: number | null;
                testGreDate?: string | null;
                testIelts?: number | null;
                testIeltsDate?: string | null;
                testLogicAndReasoningPending?: boolean | null;
                testOtherLanguagesPending?: boolean | null;
                testTagemage?: number | null;
                testTagemageDate?: string | null;
                testTcftef?: number | null;
                testTcftefDate?: string | null;
                testToefl?: number | null;
                testToeflDate?: string | null;
                testToeic?: number | null;
                testToeicDate?: string | null;
                validVisa?: boolean | null;
                createdAt: string;
                updatedAt: string;
                owner?: string | null;
            } | null;
            todo?: string | null;
            tuitionsFeePaymentDate?: string | null;
            visaDate?: string | null;
            createdAt: string;
            updatedAt: string;
            program?: {
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null;
            owner?: string | null;
        } | null;
        applicationId: string;
        lastUpdate: number;
        rating: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
    } | null;
};

export type OnCreateSchoolSubscription = {
    onCreateSchool?: {
        __typename: 'School';
        id: string;
        city: string;
        country: string;
        coverPhoto: string;
        contactEmail?: string | null;
        contactJobTitle?: string | null;
        contactName?: string | null;
        contactPhone?: string | null;
        contractStatus: string;
        creationYear: number;
        description?: string | null;
        institutionType: string;
        internationalStudents: number;
        lastUpdate: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        createdAt: string;
        updatedAt: string;
        programs?: {
            __typename: 'ModelProgramConnection';
            items?: Array<{
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type OnUpdateSchoolSubscription = {
    onUpdateSchool?: {
        __typename: 'School';
        id: string;
        city: string;
        country: string;
        coverPhoto: string;
        contactEmail?: string | null;
        contactJobTitle?: string | null;
        contactName?: string | null;
        contactPhone?: string | null;
        contractStatus: string;
        creationYear: number;
        description?: string | null;
        institutionType: string;
        internationalStudents: number;
        lastUpdate: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        createdAt: string;
        updatedAt: string;
        programs?: {
            __typename: 'ModelProgramConnection';
            items?: Array<{
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type OnDeleteSchoolSubscription = {
    onDeleteSchool?: {
        __typename: 'School';
        id: string;
        city: string;
        country: string;
        coverPhoto: string;
        contactEmail?: string | null;
        contactJobTitle?: string | null;
        contactName?: string | null;
        contactPhone?: string | null;
        contractStatus: string;
        creationYear: number;
        description?: string | null;
        institutionType: string;
        internationalStudents: number;
        lastUpdate: number;
        logo: string;
        name: string;
        totalStudents: number;
        slug: string;
        published: boolean;
        createdAt: string;
        updatedAt: string;
        programs?: {
            __typename: 'ModelProgramConnection';
            items?: Array<{
                __typename: 'Program';
                id: string;
                applicationFee: number;
                applicationFeeCurrency: string;
                city: string;
                costOfLiving: number;
                costOfLivingCurrency: string;
                country: string;
                degree: string;
                description?: string | null;
                discipline: string;
                duration: number;
                durationUnit: string;
                fee: number;
                feeCurrency: string;
                feeUnit: string;
                feesAndFinancing?: string | null;
                gradePointAverage: number;
                highestEducationLevel: number;
                intakeInformation?: string | null;
                intakes: string;
                languages: Array<string | null>;
                lastUpdate: number;
                minimumAge: number;
                minimumWorkExperience: number;
                minimumWorkExperienceUnit: string;
                name: string;
                otherRequirements?: string | null;
                published: boolean;
                schedule: string;
                schoolId: string;
                schoolName: string;
                slug: string;
                submissionDeadline: string;
                testCambridgeAdvanced: number;
                testCambridgeFirst: number;
                testCeliCilsItPlida: number;
                testDele: number;
                testDelfdalf: number;
                testGmat: number;
                testGoethe: number;
                testGre: number;
                testIelts: number;
                testTagemage: number;
                testTcftef: number;
                testToefl: number;
                testToeic: number;
                createdAt: string;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};

export type OnCreateProgramSubscription = {
    onCreateProgram?: {
        __typename: 'Program';
        id: string;
        applicationFee: number;
        applicationFeeCurrency: string;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: string;
        country: string;
        degree: string;
        description?: string | null;
        discipline: string;
        duration: number;
        durationUnit: string;
        fee: number;
        feeCurrency: string;
        feeUnit: string;
        feesAndFinancing?: string | null;
        gradePointAverage: number;
        highestEducationLevel: number;
        intakeInformation?: string | null;
        intakes: string;
        languages: Array<string | null>;
        lastUpdate: number;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: string;
        name: string;
        otherRequirements?: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string;
            isMandatory?: boolean | null;
            storageKey?: string | null;
            description?: string | null;
            condition?: string | null;
            isSpecific?: boolean | null;
        }>;
        schedule: string;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testCeliCilsItPlida: number;
        testDele: number;
        testDelfdalf: number;
        testGmat: number;
        testGoethe: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school?: {
            __typename: 'School';
            id: string;
            city: string;
            country: string;
            coverPhoto: string;
            contactEmail?: string | null;
            contactJobTitle?: string | null;
            contactName?: string | null;
            contactPhone?: string | null;
            contractStatus: string;
            creationYear: number;
            description?: string | null;
            institutionType: string;
            internationalStudents: number;
            lastUpdate: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            createdAt: string;
            updatedAt: string;
            programs?: {
                __typename: 'ModelProgramConnection';
                nextToken?: string | null;
            } | null;
        } | null;
    } | null;
};

export type OnUpdateProgramSubscription = {
    onUpdateProgram?: {
        __typename: 'Program';
        id: string;
        applicationFee: number;
        applicationFeeCurrency: string;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: string;
        country: string;
        degree: string;
        description?: string | null;
        discipline: string;
        duration: number;
        durationUnit: string;
        fee: number;
        feeCurrency: string;
        feeUnit: string;
        feesAndFinancing?: string | null;
        gradePointAverage: number;
        highestEducationLevel: number;
        intakeInformation?: string | null;
        intakes: string;
        languages: Array<string | null>;
        lastUpdate: number;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: string;
        name: string;
        otherRequirements?: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string;
            isMandatory?: boolean | null;
            storageKey?: string | null;
            description?: string | null;
            condition?: string | null;
            isSpecific?: boolean | null;
        }>;
        schedule: string;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testCeliCilsItPlida: number;
        testDele: number;
        testDelfdalf: number;
        testGmat: number;
        testGoethe: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school?: {
            __typename: 'School';
            id: string;
            city: string;
            country: string;
            coverPhoto: string;
            contactEmail?: string | null;
            contactJobTitle?: string | null;
            contactName?: string | null;
            contactPhone?: string | null;
            contractStatus: string;
            creationYear: number;
            description?: string | null;
            institutionType: string;
            internationalStudents: number;
            lastUpdate: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            createdAt: string;
            updatedAt: string;
            programs?: {
                __typename: 'ModelProgramConnection';
                nextToken?: string | null;
            } | null;
        } | null;
    } | null;
};

export type OnDeleteProgramSubscription = {
    onDeleteProgram?: {
        __typename: 'Program';
        id: string;
        applicationFee: number;
        applicationFeeCurrency: string;
        city: string;
        costOfLiving: number;
        costOfLivingCurrency: string;
        country: string;
        degree: string;
        description?: string | null;
        discipline: string;
        duration: number;
        durationUnit: string;
        fee: number;
        feeCurrency: string;
        feeUnit: string;
        feesAndFinancing?: string | null;
        gradePointAverage: number;
        highestEducationLevel: number;
        intakeInformation?: string | null;
        intakes: string;
        languages: Array<string | null>;
        lastUpdate: number;
        minimumAge: number;
        minimumWorkExperience: number;
        minimumWorkExperienceUnit: string;
        name: string;
        otherRequirements?: string | null;
        published: boolean;
        requestedDocuments: Array<{
            __typename: 'RequestedDocument';
            name: string;
            isMandatory?: boolean | null;
            storageKey?: string | null;
            description?: string | null;
            condition?: string | null;
            isSpecific?: boolean | null;
        }>;
        schedule: string;
        schoolId: string;
        schoolName: string;
        slug: string;
        submissionDeadline: string;
        testCambridgeAdvanced: number;
        testCambridgeFirst: number;
        testCeliCilsItPlida: number;
        testDele: number;
        testDelfdalf: number;
        testGmat: number;
        testGoethe: number;
        testGre: number;
        testIelts: number;
        testTagemage: number;
        testTcftef: number;
        testToefl: number;
        testToeic: number;
        createdAt: string;
        updatedAt: string;
        school?: {
            __typename: 'School';
            id: string;
            city: string;
            country: string;
            coverPhoto: string;
            contactEmail?: string | null;
            contactJobTitle?: string | null;
            contactName?: string | null;
            contactPhone?: string | null;
            contractStatus: string;
            creationYear: number;
            description?: string | null;
            institutionType: string;
            internationalStudents: number;
            lastUpdate: number;
            logo: string;
            name: string;
            totalStudents: number;
            slug: string;
            published: boolean;
            createdAt: string;
            updatedAt: string;
            programs?: {
                __typename: 'ModelProgramConnection';
                nextToken?: string | null;
            } | null;
        } | null;
    } | null;
};

export type OnCreatePostSubscription = {
    onCreatePost?: {
        __typename: 'Post';
        id: string;
        category: string;
        content: string;
        lastUpdate: number;
        published: boolean;
        slug: string;
        title: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdatePostSubscription = {
    onUpdatePost?: {
        __typename: 'Post';
        id: string;
        category: string;
        content: string;
        lastUpdate: number;
        published: boolean;
        slug: string;
        title: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeletePostSubscription = {
    onDeletePost?: {
        __typename: 'Post';
        id: string;
        category: string;
        content: string;
        lastUpdate: number;
        published: boolean;
        slug: string;
        title: string;
        createdAt: string;
        updatedAt: string;
    } | null;
};
