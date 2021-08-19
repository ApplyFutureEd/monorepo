/* eslint-disable sort-keys */
import { SearchProgramsQuery } from '@applyfuture/graphql';
import SearchAlerts from '@pages/search-alerts';
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

const mockedData = ({
    searchSearchAlerts: {
        items: [
            {
                createdAt: '2021-04-28T20:51:13.189Z',
                id: '70639471-d622-4500-b5ac-af0117be64d8',
                lastUpdate: 1619643071145,
                nextToken: '1.61964307E12',
                owner: '2f54fbbb-7249-47f3-9ceb-385e4364f33b',
                query:
                    '{"filter":{"or":[{"name":{"matchPhrasePrefix":"bxl"}},{"city":{"matchPhrasePrefix":"bxl"}},{"country":{"matchPhrasePrefix":"bxl"}},{"schoolName":{"matchPhrasePrefix":"bxl"}}],"published":{"eq":true}},"limit":20}',
                student: {
                    address: '',
                    birthday: null,
                    city: '',
                    country: '',
                    createdAt: '2021-03-28T13:55:30.017Z',
                    degrees: null,
                    disciplines: null,
                    educationCountry: '',
                    email: 'test@hotmail.com',
                    fatherFirstName: '',
                    fatherLastName: '',
                    favoritePrograms: null,
                    favoriteSchools: null,
                    firstLanguage: '',
                    firstName: '',
                    gender: '',
                    gradePointAverage: 0,
                    guardianFirstName: '',
                    guardianLastName: '',
                    hasMandatoryDocuments: null,
                    highestEducationLevel: -1,
                    id: '8e5384fd-3686-4e80-b945-21bc052c6ed6',
                    lastName: '',
                    lastUpdate: 1616939727945,
                    locale: null,
                    maritalStatus: '',
                    middleName: '',
                    modalProfileCompletedViewed: null,
                    motherFirstName: '',
                    motherMaidenName: '',
                    nationality: '',
                    owner: '2f54fbbb-7249-47f3-9ceb-385e4364f33b',
                    parentsAddress: '',
                    parentsCity: '',
                    parentsCountry: '',
                    parentsEmail: '',
                    parentsPhoneNumber: '',
                    passportNumber: '',
                    phoneNumber: '',
                    refusedVisa: null,
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
                    testEnglishPending: null,
                    testGmat: null,
                    testGmatDate: null,
                    testGoethe: null,
                    testGoetheDate: null,
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
                    updatedAt: '2021-03-28T13:55:30.017Z',
                    validVisa: null
                },
                studentId: '8e5384fd-3686-4e80-b945-21bc052c6ed6',
                total: 1,
                type: 'Programs',
                updatedAt: '2021-04-28T20:51:13.189Z'
            }
        ],
        nextToken: '1.61964307E12'
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

describe('SearchAlerts', () => {
    it('can render without crashing', () => {
        render(<SearchAlerts />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it('can open context menu', () => {
        render(<SearchAlerts />);

        const query = screen.getByText(/bxl/);

        fireEvent.contextMenu(query);

        expect(mockedShow).toHaveBeenCalled();
    });
});
