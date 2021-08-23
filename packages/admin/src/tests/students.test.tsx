/* eslint-disable sort-keys */
import { SearchStudentsQuery } from '@applyfuture/graphql';
import StudentsPage from '@pages/students';
import { fireEvent, render, screen } from '@testing-library/react';

const mockedPush = jest.fn();

jest.mock('next/router', () => ({
    useRouter() {
        return {
            push: mockedPush,
            query: {}
        };
    }
}));

const mockedData = {
    searchStudents: {
        items: [
            {
                address: '',
                applications: {
                    nextToken: null
                },
                birthday: null,
                city: '',
                country: '',
                createdAt: '2021-02-17T16:52:20.353Z',
                degrees: null,
                disciplines: null,
                documents: {
                    nextToken: null
                },
                educationCountry: '',
                email: 'awesome.student@gmail.com',
                fatherFirstName: '',
                fatherLastName: '',
                favoritePrograms: null,
                favoriteSchools: null,
                firstLanguage: '',
                firstName: 'John',
                gender: '',
                gradePointAverage: 0,
                guardianFirstName: '',
                guardianLastName: '',
                hasMandatoryDocuments: null,
                highestEducationLevel: -1,
                id: 'c0a0a830-0de4-4cad-8d46-30231e2e93dc',
                lastName: '',
                locale: null,
                maritalStatus: '',
                middleName: '',
                modalProfileCompletedViewed: null,
                motherFirstName: '',
                motherMaidenName: '',
                nationality: '',
                notifications: null,
                owner: 'e93a8261-7392-42ff-9331-1d33f0fdb589',
                parentsAddress: '',
                parentsCity: '',
                parentsCountry: '',
                parentsEmail: '',
                parentsPhoneNumber: '',
                passportNumber: '',
                phoneNumber: '',
                refusedVisa: null,
                refusedVisaReason: '',
                schoolsAttended: [
                    {
                        address: '',
                        attendedInstitutionFrom: null,
                        attendedInstitutionTo: null,
                        city: '',
                        country: '',
                        degreeAwarded: -1,
                        degreeAwardedOn: null,
                        educationLevel: -1,
                        name: '',
                        primaryLanguageInstruction: ''
                    }
                ],
                testCambridgeAdvanced: null,
                testCambridgeAdvancedDate: null,
                testCambridgeFirst: null,
                testCambridgeFirstDate: null,
                testDelfdalf: null,
                testDelfdalfDate: null,
                testEnglishPending: null,
                testOtherLanguagesPending: null,
                testGmat: null,
                testGmatDate: null,
                testGre: null,
                testGreDate: null,
                testIelts: null,
                testIeltsDate: null,
                testLogicAndReasoningPending: null,
                testTagemage: null,
                testTagemageDate: null,
                testTcftef: null,
                testTcftefDate: null,
                testToefl: null,
                testToeflDate: null,
                testToeic: null,
                testToeicDate: null,
                updatedAt: '2021-02-17T16:52:20.353Z',
                validVisa: null,
                workExperiences: [
                    {
                        address: '',
                        compagnyName: '',
                        title: '',
                        workedFrom: null,
                        workedTo: null
                    }
                ]
            }
        ],
        nextToken: '674b32b-3e4e-410c-a26c-f7ghe8123c5',
        total: 1
    }
} as unknown as SearchStudentsQuery;

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

describe('StudentsPage', () => {
    it('can render without crashing', () => {
        render(<StudentsPage />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can open context menu', () => {
        render(<StudentsPage />);

        const student = screen.getByText('awesome.student@gmail.com');

        fireEvent.contextMenu(student);

        expect(mockedShow).toHaveBeenCalled();
    });
});
