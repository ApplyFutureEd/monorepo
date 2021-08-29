import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import BackgroundInformationPage from '@pages/profile/background-information';
import { render, screen } from '@testing-library/react';
import { uniqueId } from 'lodash';
import { FC } from 'react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

const MockedDashboardLayout: FC = (props) => {
    return <div>{props.children}</div>;
};

jest.mock('@components/layouts/dashboard-layout/DashboardLayout', () => ({
    __esModule: true,
    default: jest.fn()
}));

((DashboardLayout as unknown) as any).mockImplementation(MockedDashboardLayout);

const mockedStudent = {
    address: '',
    birthday: null,
    city: '',
    country: '',
    educationCountry: '',
    email: 'awesome.student@gmail.com',
    fatherFirstName: '',
    fatherLastName: '',
    firstLanguage: '',
    firstName: '',
    gender: '',
    gradePointAverage: 0,
    guardianFirstName: '',
    guardianLastName: '',
    highestEducationLevel: -1,
    id: uniqueId(),
    lastName: '',
    maritalStatus: '',
    middleName: '',
    motherFirstName: '',
    motherMaidenName: '',
    nationality: '',
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
    getStudentByEmail: {
        items: [mockedStudent]
    }
};

const mockedIsLoading = jest.fn().mockReturnValue(false);

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    graphql: jest.fn().mockImplementation(() => {
        return {
            getStudentByEmail: mockedStudent
        };
    }),
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

describe('Background Information page', () => {
    it('can render without crashing', () => {
        render(<BackgroundInformationPage />);

        const heading = screen.getByText('profile:background-information-title');

        expect(heading).toBeInTheDocument();
    });
});
