import { GetDocumentByStudentQuery, GetStudentByEmailQuery } from '@applyfuture/graphql';

import { findDocument } from './documents';

export type Completion = {
    backgroundInformation: boolean;
    educationHistory: boolean;
    generalInformation: boolean;
    testScores: boolean;
    uploadDocuments: boolean;
};

export const isCompleted = (
    student:
        | NonNullable<NonNullable<GetStudentByEmailQuery['getStudentByEmail']>['items']>[0]
        | null
        | undefined,
    documents:
        | NonNullable<GetDocumentByStudentQuery['getDocumentByStudent']>['items']
        | null
        | undefined
): Completion => {
    const completion = {
        backgroundInformation: false,
        educationHistory: false,
        generalInformation: false,
        testScores: false,
        uploadDocuments: false
    };

    if (!student) {
        return completion;
    }

    try {
        const {
            email,
            phoneNumber,
            address,
            firstName,
            lastName,
            birthday,
            firstLanguage,
            nationality,
            passportNumber,
            gender,
            maritalStatus,
            fatherLastName,
            fatherFirstName,
            motherMaidenName,
            motherFirstName,
            parentsAddress,
            parentsPhoneNumber,
            parentsEmail,
            educationCountry,
            highestEducationLevel,
            gradePointAverage,
            schoolsAttended,
            testToefl,
            testIelts,
            testToeic,
            testTcftef,
            testDelfdalf,
            testGre,
            testGmat,
            testTagemage,
            testCambridgeFirst,
            testCambridgeAdvanced,
            testEnglishPending,
            testFrenchPending,
            testLogicAndReasoningPending,
            validVisa,
            refusedVisa
        } = student;

        if (
            email &&
            phoneNumber &&
            address &&
            firstName &&
            lastName &&
            birthday &&
            firstLanguage &&
            nationality &&
            passportNumber &&
            gender &&
            maritalStatus &&
            fatherLastName &&
            fatherFirstName &&
            motherMaidenName &&
            motherFirstName &&
            parentsAddress &&
            parentsPhoneNumber &&
            parentsEmail
        ) {
            completion.generalInformation = true;
        }

        if (
            educationCountry &&
            highestEducationLevel &&
            gradePointAverage &&
            schoolsAttended &&
            schoolsAttended.length > 0 &&
            schoolsAttended?.[0]?.name
        ) {
            completion.educationHistory = true;
        }

        if (
            testToefl ||
            testIelts ||
            testToeic ||
            testTcftef ||
            testDelfdalf ||
            testGre ||
            testGmat ||
            testTagemage ||
            testCambridgeFirst ||
            testCambridgeAdvanced ||
            testEnglishPending ||
            testFrenchPending ||
            testLogicAndReasoningPending
        ) {
            completion.testScores = true;
        }

        if (validVisa !== null && refusedVisa !== null) {
            completion.backgroundInformation = true;
        }

        if (
            findDocument(documents, 'passport') &&
            findDocument(documents, 'passport-photo') &&
            findDocument(documents, 'resume')
        ) {
            completion.uploadDocuments = true;
        }

        return completion;
    } catch (error) {
        return completion;
    }
};
