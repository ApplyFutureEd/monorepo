import { graphql, toast } from '@applyfuture/utils';
import UpdateStudentPage from '@pages/students/update';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FC } from 'react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en',
            push: jest.fn(),
            query: {
                id: 'c0a0a830-0de4-4cad-8d46-30231e2e93dc'
            }
        };
    }
}));

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

const mockedStudent = {
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
    testGmat: null,
    testGmatDate: null,
    testGre: null,
    testGreDate: null,
    testIelts: null,
    testIeltsDate: null,
    testLogicAndReasoningPending: null,
    testOtherLanguagesPending: null,
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
};

const mockedData = {
    getStudent: mockedStudent
};

const mockedIsLoading = jest.fn().mockReturnValue(false);

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    graphql: jest.fn().mockImplementation(() => {
        return {
            getStudent: mockedStudent
        };
    }),
    toast: jest.fn(),
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

describe('UpdateStudentPage', () => {
    it('can render without crashing', () => {
        render(<UpdateStudentPage />);

        const heading = screen.getByText('profile:personal-information-title');

        expect(heading).toBeInTheDocument();
    });

    it('can update a student', async () => {
        render(<UpdateStudentPage />);

        const firstNameInput = screen.getByLabelText(/profile:first-name/i);
        const saveButton = screen.getAllByText(/profile:save/i)[0];

        await waitFor(() => {
            fireEvent.change(firstNameInput, {
                target: {
                    value: 'Paul'
                }
            });
        });

        await waitFor(() => {
            userEvent.click(saveButton);
        });

        await waitFor(() => {
            expect(graphql).toHaveBeenCalled();
            expect(toast).toHaveBeenCalled();
        });
    });
});
