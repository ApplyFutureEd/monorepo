export type Completion = {
    backgroundInformation: boolean;
    educationHistory: boolean;
    generalInformation: boolean;
    testScores: boolean;
    uploadDocuments: boolean;
};

export const isCompleted = (student: any): Completion => {
    const completion = {
        backgroundInformation: false,
        educationHistory: false,
        generalInformation: false,
        testScores: false,
        uploadDocuments: true
    };
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
            schoolsAttended[0].name
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
        return completion;
    } catch (error) {
        return completion;
    }
};
