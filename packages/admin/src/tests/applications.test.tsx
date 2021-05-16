/* eslint-disable sort-keys */
import { SearchProgramsQuery } from '@applyfuture/graphql';
import ApplicationsPage from '@pages/applications';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

const mockedPush = jest.fn();

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: mockedPush,
            query: {}
        };
    }
}));

const mockedData = ({
    searchApplications: {
        items: [
            {
                id: '20e67ef3-8941-48c0-a87f-43cfba4662e8',
                admissionResult: null,
                document: null,
                decisionLetterDate: null,
                intake: '2021-02-28T23:00:00.000Z',
                interviewDate: null,
                lastUpdate: 1620655447690,
                modalApplicationCompletedViewed: false,
                notifications: null,
                programId: 'a4032a2e-8bf1-40b1-a80f-4be56dbb1807',
                steps: [
                    {
                        id: 'upload-documents',
                        date: '',
                        isMandatory: true,
                        label: 'application:step-upload-documents',
                        status: 'DONE'
                    },
                    {
                        id: 'review-documents',
                        date: 'Mon May 10 2021 16:04:15 GMT+0200 (heure d’été d’Europe centrale)',
                        isMandatory: true,
                        label: 'application:step-review-documents',
                        status: 'DONE'
                    },
                    {
                        id: 'fees-payment',
                        date: 'Mon May 10 2021 16:04:26 GMT+0200 (heure d’été d’Europe centrale)',
                        isMandatory: true,
                        label: 'application:step-payment',
                        status: 'DONE'
                    },
                    {
                        id: 'submission',
                        date: 'Mon May 10 2021 16:05:57 GMT+0200 (heure d’été d’Europe centrale)',
                        isMandatory: true,
                        label: 'application:step-submission',
                        status: 'DONE'
                    },
                    {
                        id: 'internal-review',
                        date: 'Mon May 10 2021 16:05:57 GMT+0200 (heure d’été d’Europe centrale)',
                        isMandatory: true,
                        label: 'TBD',
                        status: 'PROGRESS'
                    },
                    {
                        id: 'school-review',
                        date: '',
                        isMandatory: true,
                        label: 'TBD',
                        status: 'idle'
                    },
                    {
                        id: 'school-interview',
                        date: '',
                        isMandatory: true,
                        label: 'TBD',
                        status: 'idle'
                    },
                    {
                        id: 'school-result',
                        date: '',
                        isMandatory: true,
                        label: 'TBD',
                        status: 'idle'
                    },
                    {
                        id: 'school-tuitions-fee-payment',
                        date: '',
                        isMandatory: true,
                        label: 'TBD',
                        status: 'idle'
                    },
                    {
                        id: 'decision-letter',
                        date: '',
                        isMandatory: true,
                        label: 'TBD',
                        status: 'idle'
                    },
                    {
                        id: 'visa',
                        date: '',
                        isMandatory: true,
                        label: 'TBD',
                        status: 'idle'
                    }
                ],
                studentId: '5fb8ee2f-894b-417b-89c8-66a2d0fafdc5',
                student: {
                    id: '5fb8ee2f-894b-417b-89c8-66a2d0fafdc5',
                    address: '800 West Katella Avenue, Anaheim, Californie, États-Unis',
                    birthday: '1998-03-03T23:00:00.000Z',
                    city: '',
                    country: '',
                    degrees: null,
                    disciplines: null,
                    educationCountry: 'AL',
                    email: 'ying.zhang@applyfuture.com',
                    fatherFirstName: 'dfs',
                    fatherLastName: 'GDSF',
                    firstLanguage: 'SQ',
                    firstName: 'Ying',
                    favoritePrograms: null,
                    favoriteSchools: null,
                    gender: 'FEMALE',
                    gradePointAverage: 3,
                    guardianFirstName: '',
                    guardianLastName: '',
                    hasMandatoryDocuments: null,
                    highestEducationLevel: 5,
                    lastName: 'ZH',
                    lastUpdate: 1620808622993,
                    locale: null,
                    maritalStatus: 'SINGLE',
                    middleName: '',
                    modalProfileCompletedViewed: true,
                    phoneNumber: '+33600000000',
                    motherFirstName: 'fdg',
                    motherMaidenName: 'GFDS',
                    nationality: 'IT',
                    parentsAddress: 'fdsèç!à"çr\')é',
                    parentsCity: '',
                    parentsCountry: '',
                    parentsEmail: 'a@qq.com',
                    parentsPhoneNumber: '+33788888888',
                    passportNumber: 'J879087',
                    refusedVisa: false,
                    refusedVisaReason: '',
                    testCambridgeAdvanced: null,
                    testCambridgeAdvancedDate: null,
                    testCambridgeFirst: null,
                    testCambridgeFirstDate: null,
                    testCeliCilsItPlida: null,
                    testCeliCilsItPlidaDate: null,
                    testDele: null,
                    testDeleDate: null,
                    testDelfdalf: null,
                    testDelfdalfDate: null,
                    testEnglishPending: false,
                    testGmat: null,
                    testGmatDate: null,
                    testGoethe: null,
                    testGoetheDate: null,
                    testGre: 300,
                    testGreDate: null,
                    testIelts: null,
                    testIeltsDate: null,
                    testLogicAndReasoningPending: false,
                    testOtherLanguagesPending: true,
                    testTagemage: null,
                    testTagemageDate: null,
                    testTcftef: null,
                    testTcftefDate: null,
                    testToefl: 600,
                    testToeflDate: null,
                    testToeic: null,
                    testToeicDate: null,
                    validVisa: false,
                    createdAt: '2021-03-28T14:15:14.705Z',
                    updatedAt: '2021-05-12T08:37:03.332Z',
                    owner: '6fa8e5dc-631d-40b1-a554-70696c3a4e46'
                },
                todo: 'Review document',
                tuitionsFeePaymentDate: null,
                visaDate: null,
                createdAt: '2021-05-10T14:04:08.153Z',
                updatedAt: '2021-05-10T14:05:58.425Z',
                program: {
                    id: 'a4032a2e-8bf1-40b1-a80f-4be56dbb1807',
                    applicationFee: 275,
                    applicationFeeCurrency: 'CHF',
                    city: 'London',
                    costOfLiving: 500,
                    costOfLivingCurrency: 'CHF',
                    country: 'UK',
                    degree: 'MASTER',
                    description:
                        'The Master in International Hospitality Business will prepare you to lead a high-flying career in the world’s most prestigious international hospitality chains. Designed for recent graduates or career changers, this program will give you the skills to manage people, operations and business in hotels and hospitality companies.\n\n- 5-Star hospitality management training\n- Business management skills\n- Project management expertise\n- Real-world experience on your internship\n- Trips to partner institutions\n- Exclusive visits from industry experts\n\nLocation: Bulle campus, Switzerland or London campus, UK',
                    discipline: 'BUSINESS_MANAGEMENT_AND_ECONOMICS',
                    duration: 47310000,
                    durationUnit: 'YEAR',
                    fee: 45750,
                    feeCurrency: 'CHF',
                    feeUnit: 'TOTAL_FEE',
                    feesAndFinancing: null,
                    gradePointAverage: -1,
                    highestEducationLevel: 4,
                    intakeInformation: null,
                    intakes: '2021-02-28T23:00:00.000Z,2021-08-31T22:00:00.000Z',
                    languages: ['EN'],
                    lastUpdate: 1599468230915,
                    minimumAge: 21,
                    minimumWorkExperience: -1,
                    minimumWorkExperienceUnit: 'YEAR',
                    name: 'Master of Science in International Hospitality Business',
                    otherRequirements:
                        "- For the MSc program in London, except Non-EU or EEA passport holders will need to undertake IELTS UKVI: 6.0 overall and min. 5.5 in any sub-component.\n- If you have spent the last two years studying in an institution where English is the primary language of instruction, you don't need to have English Test.",
                    published: true,
                    schedule: 'FULL_TIME',
                    schoolId: '9fbabd87-f987-4106-9d61-9924d3118371',
                    schoolName: 'Glion Institute of Higher Education',
                    slug:
                        'master-of-science-in-international-hospitality-business-glion-institute-of-higher-education-london',
                    submissionDeadline: '2021-01-14T23:00:00.000Z',
                    testCambridgeAdvanced: 1,
                    testCambridgeFirst: 6,
                    testCeliCilsItPlida: -1,
                    testDele: -1,
                    testDelfdalf: -1,
                    testGmat: -1,
                    testGoethe: -1,
                    testGre: -1,
                    testIelts: 6,
                    testTagemage: -1,
                    testTcftef: -1,
                    testToefl: 550,
                    testToeic: -1,
                    createdAt: '2020-09-07T07:19:49.919Z',
                    updatedAt: '2020-09-07T08:43:50.915Z'
                },
                owner: '6fa8e5dc-631d-40b1-a554-70696c3a4e46'
            }
        ],
        nextToken: '674b32b-3e4e-410c-a26c-f7ghe8123c5',
        total: 1
    }
} as unknown) as SearchProgramsQuery;

const mockedIsLoading = jest.fn().mockReturnValue(false);

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    useOutsideAlerter: jest.fn(),
    useQuery: () => ({
        data: mockedData,
        isLoading: mockedIsLoading()
    }),
    withPrivateAccess: jest.fn().mockImplementation((Page) => {
        const PrivatePage = (props: any) => {
            return <Page {...props} />;
        };

        return PrivatePage;
    })
}));

const mockedShow = jest.fn();

jest.mock('react-contexify', () => ({
    ...(jest.requireActual('react-contexify') as Record<string, unknown>),
    useContextMenu: () => ({
        show: mockedShow
    })
}));

describe('ApplicationsPage', () => {
    it('can render without crashing', () => {
        render(<ApplicationsPage />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it.skip('can open context menu', () => {
        render(<ApplicationsPage />);

        const date = screen.getByText('10/05/21 16:05');

        fireEvent.contextMenu(date);

        expect(mockedShow).toHaveBeenCalled();
    });
});
