import { cities } from '../forms/cities';
import { supportedCountries } from '../forms/countries';
import { degrees } from '../forms/degrees';
import { disciplines } from '../forms/disciplines';

export const englishSpeakingCountries = ['EN', 'US', 'GB', 'CA', 'AU', 'ZA', 'IE', 'NZ'];

export const frenchSpeakingCountries = ['FR', 'BE'];

const cartesian = (...args: any[]) => {
    const result: any[] = [];
    const max = args.length - 1;
    const helper = (arr: any[], i: number) => {
        for (let j = 0, l = args[i].length; j < l; j++) {
            const a = arr.slice(0);
            a.push(args[i][j]);
            if (i === max) {
                result.push(a);
            } else {
                helper(a, i + 1);
            }
        }
    };
    helper([], 0);
    return result;
};

const generateOrConditions = (array: string[][]) => {
    return array.map((subArray) => {
        let conditions: any = {};
        subArray.forEach((element) => {
            if (supportedCountries.map((country) => country.value).includes(element)) {
                conditions = { ...conditions, country: { eq: element } };
            }
            if (cities.map((city) => city.label).includes(element)) {
                conditions = { ...conditions, city: { eq: element } };
            }
            if (disciplines.map((discipline) => discipline.value).includes(element)) {
                conditions = { ...conditions, discipline: { eq: element } };
            }
            if (degrees.map((degree) => degree.value).includes(element)) {
                conditions = { ...conditions, degree: { eq: element } };
            }
        });
        return conditions;
    });
};

export const createFilter = (values: any) => {
    let newFilter: any = { published: { eq: true } };
    let fee: any = {};
    let applicationFee: any = {};

    const hasFullfiledOneEnglishTest = () => {
        if (
            Number(values.testToefl) > 0 ||
            Number(values.testIelts) > 0 ||
            Number(values.testToeic) > 0 ||
            Number(values.testCambridgeFirst) > 0 ||
            Number(values.testCambridgeAdvanced) > 0
        ) {
            return true;
        } else {
            return false;
        }
    };

    const hasFullfiledOneFrenchTest = () => {
        if (Number(values.testTcftef) > 0 || Number(values.testDelfdalf) > 0) {
            return true;
        } else {
            return false;
        }
    };

    const hasFullfiledOneLogicAndReasoningTest = () => {
        if (
            Number(values.testGre) > 0 ||
            Number(values.testGmat) > 0 ||
            Number(values.testTagemage) > 0
        ) {
            return true;
        } else {
            return false;
        }
    };

    const params = [values.countries, values.cities, values.disciplines, values.degrees].filter(
        (p) => p?.length > 0
    );

    if (params?.length > 0) {
        const cartesianValues = cartesian(...params);

        const orConditions = generateOrConditions(cartesianValues);

        if (orConditions?.length > 0) {
            newFilter = {
                ...newFilter,
                or: orConditions
            };
        }
    }

    if (values.intake) {
        newFilter = {
            ...newFilter,
            intakes: {
                eq: values.intake
            }
        };
    }

    if (values.minTuitionFee > 0) {
        fee = { gte: values.minTuitionFee };
    }
    if (values.maxTuitionFee > 0) {
        fee = { ...fee, lte: values.maxTuitionFee };
    }

    if (values.minTuitionFee || values.maxTuitionFee) {
        newFilter = {
            ...newFilter,
            fee: { ...fee }
        };
    }

    if (values.maxTuitionFee === 0) {
        newFilter = {
            ...newFilter,
            fee: { eq: 0 }
        };
    }

    if (values.minApplicationFee) {
        applicationFee = { gte: Number(values.minApplicationFee) };
    }
    if (values.maxApplicationFee) {
        applicationFee = { ...fee, lte: Number(values.maxApplicationFee) };
    }

    if (values.minApplicationFee || values.maxApplicationFee) {
        newFilter = {
            ...newFilter,
            applicationFee
        };
    }

    if (values.maxApplicationFee === 0) {
        newFilter = {
            ...newFilter,
            applicationFee: { eq: 0 }
        };
    }

    if (Number(values.highestEducationLevel) > 0) {
        newFilter = {
            ...newFilter,
            highestEducationLevel: {
                lte: Number(values.highestEducationLevel)
            }
        };
    }

    if (Number(values.gradePointAverage) > 0) {
        newFilter = {
            ...newFilter,
            gradePointAverage: {
                lte: Number(values.gradePointAverage)
            }
        };
    }

    if (
        Number(values.testToefl) > 0 ||
        hasFullfiledOneFrenchTest() ||
        hasFullfiledOneLogicAndReasoningTest()
    ) {
        newFilter = {
            ...newFilter,
            testToefl: {
                lte: Number(values.testToefl)
            }
        };
    }

    if (
        Number(values.testIelts) > 0 ||
        hasFullfiledOneFrenchTest() ||
        hasFullfiledOneLogicAndReasoningTest()
    ) {
        newFilter = {
            ...newFilter,
            testIelts: {
                lte: Number(values.testIelts)
            }
        };
    }

    if (
        Number(values.testToeic) > 0 ||
        hasFullfiledOneFrenchTest() ||
        hasFullfiledOneLogicAndReasoningTest()
    ) {
        newFilter = {
            ...newFilter,
            testToeic: {
                lte: Number(values.testToeic)
            }
        };
    }

    if (
        Number(values.testCambridgeFirst) > 0 ||
        hasFullfiledOneFrenchTest() ||
        hasFullfiledOneLogicAndReasoningTest()
    ) {
        newFilter = {
            ...newFilter,
            testCambridgeFirst: {
                lte: Number(values.testCambridgeFirst)
            }
        };
    }

    if (
        Number(values.testCambridgeAdvanced) > 0 ||
        hasFullfiledOneFrenchTest() ||
        hasFullfiledOneLogicAndReasoningTest()
    ) {
        newFilter = {
            ...newFilter,
            testCambridgeAdvanced: {
                lte: Number(values.testCambridgeAdvanced)
            }
        };
    }

    if (
        Number(values.testTcftef) > 0 ||
        hasFullfiledOneEnglishTest() ||
        hasFullfiledOneLogicAndReasoningTest()
    ) {
        newFilter = {
            ...newFilter,
            testTcftef: {
                lte: Number(values.testTcftef)
            }
        };
    }

    if (
        Number(values.testDelfdalf) > 0 ||
        hasFullfiledOneEnglishTest() ||
        hasFullfiledOneLogicAndReasoningTest()
    ) {
        newFilter = {
            ...newFilter,
            testDelfdalf: {
                lte: Number(values.testDelfdalf)
            }
        };
    }

    if (Number(values.testGre) > 0 || hasFullfiledOneEnglishTest() || hasFullfiledOneFrenchTest()) {
        newFilter = {
            ...newFilter,
            testGre: {
                lte: Number(values.testGre)
            }
        };
    }

    if (
        Number(values.testGmat) > 0 ||
        hasFullfiledOneEnglishTest() ||
        hasFullfiledOneFrenchTest()
    ) {
        newFilter = {
            ...newFilter,
            testGmat: {
                lte: Number(values.testGmat)
            }
        };
    }

    if (
        Number(values.testTagemage) > 0 ||
        hasFullfiledOneEnglishTest() ||
        hasFullfiledOneFrenchTest()
    ) {
        newFilter = {
            ...newFilter,
            testTagemage: {
                lte: Number(values.testTagemage)
            }
        };
    }

    if (hasFullfiledOneEnglishTest()) {
        if (Number(values.testToefl) <= 0 && newFilter.testToefl) {
            delete newFilter.testToefl;
        }
        if (Number(values.testIelts) <= 0 && newFilter.testIelts) {
            delete newFilter.testIelts;
        }
        if (Number(values.testToeic) <= 0 && newFilter.testToeic) {
            delete newFilter.testToeic;
        }
        if (Number(values.testCambridgeFirst) <= 0 && newFilter.testCambridgeFirst) {
            delete newFilter.testCambridgeFirst;
        }
        if (Number(values.testCambridgeAdvanced) <= 0 && newFilter.testCambridgeAdvanced) {
            delete newFilter.testCambridgeAdvanced;
        }
    }

    if (hasFullfiledOneFrenchTest()) {
        if (Number(values.testTcftef) <= 0 && newFilter.testTcftef) {
            delete newFilter.testTcftef;
        }
        if (Number(values.testDelfdalf) <= 0 && newFilter.testDelfdalf) {
            delete newFilter.testDelfdalf;
        }
    }

    if (hasFullfiledOneLogicAndReasoningTest()) {
        if (Number(values.testGre) <= 0 && newFilter.testGre) {
            delete newFilter.testGre;
        }
        if (Number(values.testGmat) <= 0 && newFilter.testGmat) {
            delete newFilter.testGmat;
        }
        if (Number(values.testTagemage) <= 0 && newFilter.testTagemage) {
            delete newFilter.testTagemage;
        }
    }

    if (
        englishSpeakingCountries.includes(values.nationality) ||
        englishSpeakingCountries.includes(values.educationCountry) ||
        englishSpeakingCountries.includes(values.firstLanguage)
    ) {
        if (newFilter.testToefl) {
            delete newFilter.testCambridgeFirst;
        }
        if (newFilter.testIelts) {
            delete newFilter.testIelts;
        }
        if (newFilter.testToeic) {
            delete newFilter.testToeic;
        }
        if (newFilter.testCambridgeFirst) {
            delete newFilter.testCambridgeFirst;
        }
        if (newFilter.testCambridgeAdvanced) {
            delete newFilter.testCambridgeAdvanced;
        }
    }

    if (
        frenchSpeakingCountries.includes(values.nationality) ||
        frenchSpeakingCountries.includes(values.educationCountry) ||
        frenchSpeakingCountries.includes(values.firstLanguage)
    ) {
        if (newFilter.testTcftef) {
            delete newFilter.testTcftef;
        }
        if (newFilter.testDelfdalf) {
            delete newFilter.testDelfdalf;
        }
    }

    return newFilter;
};
