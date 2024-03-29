import { GetProgramBySlugQuery, GetProgramQuery } from '@applyfuture/graphql';
import { differenceInDays } from 'date-fns';
import intersection from 'lodash/intersection';
import sumBy from 'lodash/sumBy';

import {
    englishSpokenCountries,
    frenchSpokenCountries,
    germanSpokenCountries,
    italianSpokenCountries,
    spanishSpokenCountries
} from '../constants/countries';
import {
    englishLanguages,
    frenchLanguages,
    germanLanguages,
    italianLanguages,
    spanishLanguages
} from './../constants/languages';

export const formatTestCambridgeFirstValue = (
    value: number
): 'U' | 'E' | 'D' | 'C' | 'B' | 'A' | null => {
    if (value === 1) {
        return 'U';
    }
    if (value === 2) {
        return 'E';
    }
    if (value === 3) {
        return 'D';
    }
    if (value === 4) {
        return 'C';
    }
    if (value === 5) {
        return 'B';
    }
    if (value === 6) {
        return 'A';
    }

    return null;
};

export const formatTestCambridgeAdvancedValue = (value: number): 'C' | 'B' | 'A' | null => {
    if (value === 1) {
        return 'C';
    }
    if (value === 2) {
        return 'B';
    }
    if (value === 3) {
        return 'A';
    }
    return null;
};

export const formatLanguageTestLevelsValue = (
    value: number
): 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | null => {
    if (value === 1) {
        return 'A1';
    }
    if (value === 2) {
        return 'A2';
    }
    if (value === 3) {
        return 'B1';
    }
    if (value === 4) {
        return 'B2';
    }
    if (value === 5) {
        return 'C1';
    }
    if (value === 6) {
        return 'C2';
    }
    return null;
};

export const formatEducationLevelValue = (value: number, t: any): any => {
    if (value === 1) {
        return t('programs:grade-12');
    }
    if (value === 2) {
        return t('programs:undergraduate-year-1');
    }
    if (value === 3) {
        return t('programs:undergraduate-year-2');
    }
    if (value === 4) {
        return t('programs:undergraduate-year-3');
    }
    if (value === 5) {
        return t('programs:undergraduate-year-4');
    }
    if (value === 6) {
        return t('programs:graduate-year-1');
    }
    if (value === 7) {
        return t('programs:graduate-year-2');
    }
    if (value === 8) {
        return t('programs:doctoral-degree');
    }
    return null;
};

export const hasBypass = (student: any) => {
    const bypasses = {
        english: false,
        french: false,
        german: false,
        italian: false,
        spanish: false
    };

    bypasses.english =
        englishSpokenCountries.includes(student?.nationality) ||
        englishSpokenCountries.includes(student?.educationCountry) ||
        englishLanguages.includes(student?.firstLanguage) ||
        (student?.schoolsAttended &&
            intersection(
                englishLanguages,
                student?.schoolsAttended.map((school: any) => school.primaryLanguageInstruction)
            ).length > 0);

    bypasses.french =
        frenchSpokenCountries.includes(student?.nationality) ||
        frenchSpokenCountries.includes(student?.educationCountry) ||
        frenchLanguages.includes(student?.firstLanguage) ||
        (student?.schoolsAttended &&
            intersection(
                frenchLanguages,
                student?.schoolsAttended.map((school: any) => school.primaryLanguageInstruction)
            ).length > 0);

    bypasses.german =
        germanSpokenCountries.includes(student?.nationality) ||
        germanSpokenCountries.includes(student?.educationCountry) ||
        germanLanguages.includes(student?.firstLanguage) ||
        (student?.schoolsAttended &&
            intersection(
                germanLanguages,
                student?.schoolsAttended.map((school: any) => school.primaryLanguageInstruction)
            ).length > 0);

    bypasses.italian =
        italianSpokenCountries.includes(student?.nationality) ||
        italianSpokenCountries.includes(student?.educationCountry) ||
        italianLanguages.includes(student?.firstLanguage) ||
        (student?.schoolsAttended &&
            intersection(
                italianLanguages,
                student?.schoolsAttended.map((school: any) => school.primaryLanguageInstruction)
            ).length > 0);

    bypasses.spanish =
        spanishSpokenCountries.includes(student?.nationality) ||
        spanishSpokenCountries.includes(student?.educationCountry) ||
        spanishLanguages.includes(student?.firstLanguage) ||
        (student?.schoolsAttended &&
            intersection(
                spanishLanguages,
                student?.schoolsAttended.map((school: any) => school.primaryLanguageInstruction)
            ).length > 0);

    return bypasses;
};

export type NonEligibilityReason = {
    id: string;
    message: string;
};

export type Eligibility = {
    isEligible: boolean;
    reasons: Array<NonEligibilityReason>;
};

export const checkEligibility = (
    program:
        | NonNullable<NonNullable<GetProgramBySlugQuery['getProgramBySlug']>['items']>[0]
        | NonNullable<NonNullable<GetProgramQuery['getProgram']>>
        | null
        | undefined,
    student: any,
    t: any
): Eligibility => {
    let eligibility: Eligibility = {
        isEligible: true,
        reasons: []
    };

    if (!program || !student) {
        eligibility = {
            isEligible: false,
            reasons: []
        };
        return eligibility;
    }

    try {
        /* Education level */

        if (student?.highestEducationLevel < program.highestEducationLevel) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'highestEducationLevel',
                        message: student?.highestEducationLevel
                            ? t('programs:test-too-low', {
                                  programValue: `(${formatEducationLevelValue(
                                      program.highestEducationLevel,
                                      t
                                  )})`,
                                  studentValue: `(${formatEducationLevelValue(
                                      student?.highestEducationLevel,
                                      t
                                  )})`,
                                  test: t('programs:highest-education-level')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('programs:highest-education-level')
                              })
                    }
                ]
            };
        }

        /* English tests */

        if (student?.testToefl < program.testToefl) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'testToefl',
                        message: student?.testToefl
                            ? t('programs:test-too-low', {
                                  programValue: `(${program.testToefl})`,
                                  studentValue: `(${student?.testToefl})`,
                                  test: t('profile:toefl')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('profile:toefl')
                              })
                    }
                ]
            };
        }

        if (student?.testIelts < program.testIelts) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'testIelts',
                        message: student?.testIelts
                            ? t('programs:test-too-low', {
                                  programValue: `(${program.testIelts})`,
                                  studentValue: `(${student?.testIelts})`,
                                  test: t('profile:ielts')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('profile:ielts')
                              })
                    }
                ]
            };
        }

        if (student?.testToeic < program.testToeic) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'testToeic',
                        message: student?.testToeic
                            ? t('programs:test-too-low', {
                                  programValue: `(${program.testToeic})`,
                                  studentValue: `(${student?.testToeic})`,
                                  test: t('profile:toeic')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('profile:toeic')
                              })
                    }
                ]
            };
        }

        if (student?.testCambridgeFirst < program.testCambridgeFirst) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'testCambridgeFirst',
                        message: student?.testCambridgeFirst
                            ? t('programs:test-too-low', {
                                  programValue: `(${formatTestCambridgeFirstValue(
                                      program.testCambridgeFirst
                                  )})`,
                                  studentValue: `(${formatTestCambridgeFirstValue(
                                      student?.testCambridgeFirst
                                  )})`,
                                  test: t('profile:cambridge-first')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('profile:cambridge-first')
                              })
                    }
                ]
            };
        }

        if (student?.testCambridgeAdvanced < program.testCambridgeAdvanced) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'testCambridgeAdvanced',
                        message: student?.testCambridgeAdvanced
                            ? t('programs:test-too-low', {
                                  programValue: `(${formatTestCambridgeAdvancedValue(
                                      program.testCambridgeAdvanced
                                  )})`,
                                  studentValue: `(${formatTestCambridgeAdvancedValue(
                                      student?.testCambridgeAdvanced
                                  )})`,
                                  test: t('profile:cambridge-advanced')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('profile:cambridge-advanced')
                              })
                    }
                ]
            };
        }

        if (
            (student?.testToefl >= program.testToefl && program.testToefl > 0) ||
            (student?.testIelts >= program.testIelts && program.testIelts > 0) ||
            (student?.testToeic >= program.testToeic && program.testToeic > 0) ||
            (student?.testCambridgeFirst > program.testCambridgeFirst &&
                program.testCambridgeFirst > 0) ||
            (student?.testCambridgeAdvanced > program.testCambridgeAdvanced &&
                program.testCambridgeAdvanced > 0) ||
            englishSpokenCountries.includes(student?.nationality) ||
            englishSpokenCountries.includes(student?.educationCountry) ||
            englishLanguages.includes(student?.firstLanguage)
        ) {
            eligibility = {
                isEligible: true,
                reasons: eligibility.reasons.filter((reason) => {
                    if (reason.id === 'testToefl') {
                        return false;
                    }
                    if (reason.id === 'testIelts') {
                        return false;
                    }
                    if (reason.id === 'testToeic') {
                        return false;
                    }
                    if (reason.id === 'testCambridgeFirst') {
                        return false;
                    }
                    if (reason.id === 'testCambridgeAdvanced') {
                        return false;
                    }
                    return true;
                })
            };
        }

        /* Other languages tests */

        if (student?.testTcftef < program.testTcftef) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'testTcftef',
                        message: student?.testTcftef
                            ? t('programs:test-too-low', {
                                  programValue: `(${formatLanguageTestLevelsValue(
                                      program.testTcftef
                                  )})`,
                                  studentValue: `(${formatLanguageTestLevelsValue(
                                      student?.testTcftef
                                  )})`,
                                  test: t('profile:tcf-tef')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('profile:tcf-tef')
                              })
                    }
                ]
            };
        }

        if (student?.testDelfdalf < program.testDelfdalf) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'testDelfdalf',
                        message: student?.testDelfdalf
                            ? t('programs:test-too-low', {
                                  programValue: `(${formatLanguageTestLevelsValue(
                                      program.testDelfdalf
                                  )})`,
                                  studentValue: `(${formatLanguageTestLevelsValue(
                                      student?.testDelfdalf
                                  )})`,
                                  test: t('profile:delf-dalf')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('profile:delf-dalf')
                              })
                    }
                ]
            };
        }

        if (
            (student?.testTcftef >= program.testTcftef && program.testTcftef > 0) ||
            (student?.testDelfdalf >= program.testDelfdalf && program.testDelfdalf > 0) ||
            frenchSpokenCountries.includes(student?.nationality) ||
            frenchSpokenCountries.includes(student?.educationCountry) ||
            frenchLanguages.includes(student?.firstLanguage)
        ) {
            eligibility = {
                isEligible: true,
                reasons: eligibility.reasons.filter((reason) => {
                    if (reason.id === 'testTcftef') {
                        return false;
                    }
                    if (reason.id === 'testDelfdalf') {
                        return false;
                    }
                    return true;
                })
            };
        }

        if (student?.testGoethe < program.testGoethe) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'testGoethe',
                        message: student?.testGoethe
                            ? t('programs:test-too-low', {
                                  programValue: `(${formatLanguageTestLevelsValue(
                                      program.testGoethe
                                  )})`,
                                  studentValue: `(${formatLanguageTestLevelsValue(
                                      student?.testGoethe
                                  )})`,
                                  test: t('profile:goethe')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('profile:goethe')
                              })
                    }
                ]
            };
        }

        if (student?.testDele < program.testDele) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'testDele',
                        message: student?.testDele
                            ? t('programs:test-too-low', {
                                  programValue: `(${formatLanguageTestLevelsValue(
                                      program.testDele
                                  )})`,
                                  studentValue: `(${formatLanguageTestLevelsValue(
                                      student?.testDele
                                  )})`,
                                  test: t('profile:dele')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('profile:dele')
                              })
                    }
                ]
            };
        }

        if (student?.testCeliCilsItPlida < program.testCeliCilsItPlida) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'testCeliCilsItPlida',
                        message: student?.testCeliCilsItPlida
                            ? t('programs:test-too-low', {
                                  programValue: `(${formatLanguageTestLevelsValue(
                                      program.testCeliCilsItPlida
                                  )})`,
                                  studentValue: `(${formatLanguageTestLevelsValue(
                                      student?.testCeliCilsItPlida
                                  )})`,
                                  test: t('profile:celi-cils-it-plida')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('profile:celi-cils-it-plida')
                              })
                    }
                ]
            };
        }

        /* Logic and reasoning tests */

        if (student?.testGre < program.testGre) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'testGre',
                        message: student?.testGre
                            ? t('programs:test-too-low', {
                                  programValue: `(${program.testGre})`,
                                  studentValue: `(${student?.testGre})`,
                                  test: t('profile:gre')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('profile:gre')
                              })
                    }
                ]
            };
        }

        if (student?.testGmat < program.testGmat) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'testGmat',
                        message: student?.testGmat
                            ? t('programs:test-too-low', {
                                  programValue: `(${program.testGmat})`,
                                  studentValue: `(${student?.testGmat})`,
                                  test: t('profile:gmat')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('profile:gmat')
                              })
                    }
                ]
            };
        }

        if (student?.testTagemage < program.testTagemage) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'testTagemage',
                        message: student?.testTagemage
                            ? t('programs:test-too-low', {
                                  programValue: `(${program.testTagemage})`,
                                  studentValue: `(${student?.testTagemage})`,
                                  test: t('programs:tage-mage')
                              })
                            : t('programs:test-not-provided', {
                                  test: t('programs:tage-mage')
                              })
                    }
                ]
            };
        }

        if (
            (student?.testGre >= program.testGre && program.testGre > 0) ||
            (student?.testGmat >= program.testGmat && program.testGmat > 0) ||
            (student?.testTagemage >= program.testTagemage && program.testTagemage > 0)
        ) {
            eligibility = {
                isEligible: true,
                reasons: eligibility.reasons.filter((reason) => {
                    if (reason.id === 'testGre') {
                        return false;
                    }
                    if (reason.id === 'testGmat') {
                        return false;
                    }
                    if (reason.id === 'testTagemage') {
                        return false;
                    }
                    return true;
                })
            };
        }

        /* Grade point average */

        if (student?.gradePointAverage < program.gradePointAverage) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'gradePointAverage',
                        message: student?.gradePointAverage
                            ? t('programs:test-too-low', {
                                  programValue: `(${program.gradePointAverage})`,
                                  studentValue: `(${student?.gradePointAverage})`,
                                  test: t('programs:gpa')
                              })
                            : t('programs:gpa-not-provided')
                    }
                ]
            };
        }

        /* Minimum age */

        const studentAge =
            student?.birthday && differenceInDays(new Date(), new Date(student?.birthday)) / 365;

        if (studentAge < program.minimumAge) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'age',
                        message: studentAge
                            ? t('programs:age-too-low', {
                                  programValue: `(${program.minimumAge})`,
                                  studentValue: `(${Math.floor(studentAge)})`
                              })
                            : t('programs:age-not-provided')
                    }
                ]
            };
        }

        /* Work experience */

        const workExperiences = student?.workExperiences as any;

        const cumulatedDays = Number(
            workExperiences &&
                workExperiences.length > 0 &&
                sumBy(workExperiences, (workExperience: any) => {
                    const from = new Date(workExperience.workedFrom);
                    const to = new Date(workExperience.workedTo);
                    return differenceInDays(to, from);
                })
        );

        if (
            program.minimumWorkExperienceUnit === 'year' &&
            cumulatedDays / 365 <= program.minimumWorkExperience
        ) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'workExperience',
                        message: t('work-experience-too-low', {
                            programUnit: t('programs:year', {
                                count: program.minimumWorkExperience
                            }),
                            programValue: program.minimumWorkExperience,
                            studentUnit: t('programs:year', {
                                count: Math.floor(cumulatedDays / 365)
                            }),
                            studentValue: Math.floor(cumulatedDays / 365)
                        })
                    }
                ]
            };
        }

        if (
            program.minimumWorkExperienceUnit === 'month' &&
            cumulatedDays / 30 <= program.minimumWorkExperience
        ) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'workExperience',
                        message: t('work-experience-too-low', {
                            programUnit: t('programs:month', {
                                count: program.minimumWorkExperience
                            }),
                            programValue: program.minimumWorkExperience,
                            studentUnit: t('programs:month', {
                                count: Math.floor(cumulatedDays / 30)
                            }),
                            studentValue: Math.floor(cumulatedDays / 30)
                        })
                    }
                ]
            };
        }

        if (
            program.minimumWorkExperienceUnit === 'day' &&
            cumulatedDays <= program.minimumWorkExperience
        ) {
            eligibility = {
                isEligible: false,
                reasons: [
                    ...eligibility.reasons,
                    {
                        id: 'workExperience',
                        message: t('work-experience-too-low', {
                            programUnit: t('programs:day', {
                                count: program.minimumWorkExperience
                            }),
                            programValue: program.minimumWorkExperience,
                            studentUnit: t('programs:day', {
                                count: Math.floor(cumulatedDays)
                            }),
                            studentValue: Math.floor(cumulatedDays)
                        })
                    }
                ]
            };
        }
    } catch (error) {
        console.log(error);
    }

    const bypasses = hasBypass(student);

    if (bypasses.english) {
        eligibility.reasons = eligibility.reasons.filter(
            (reason) =>
                ![
                    'testToefl',
                    'testIelts',
                    'testToeic',
                    'testCambridgeFirst',
                    'testCambridgeAdvanced'
                ].includes(reason.id)
        );
    }

    if (bypasses.french) {
        eligibility.reasons = eligibility.reasons.filter(
            (reason) => !['testTcftef', 'testDelfdalf'].includes(reason.id)
        );
    }

    if (bypasses.spanish) {
        eligibility.reasons = eligibility.reasons.filter(
            (reason) => !['testDele'].includes(reason.id)
        );
    }

    if (bypasses.german) {
        eligibility.reasons = eligibility.reasons.filter(
            (reason) => !['testGoethe'].includes(reason.id)
        );
    }

    if (bypasses.italian) {
        eligibility.reasons = eligibility.reasons.filter(
            (reason) => !['testCeliCilsItPlida'].includes(reason.id)
        );
    }

    if (eligibility.reasons.length > 0) {
        eligibility = {
            isEligible: false,
            reasons: [...eligibility.reasons]
        };
    }

    if (eligibility.reasons.length === 0) {
        eligibility.isEligible = true;
    }

    return eligibility;
};
