import { GetProgramBySchoolQuery, GetStudentByEmailQuery } from '@applyfuture/graphql';
import { graphql } from '@applyfuture/utils';
import IntakesModal from '@components/programs/intakes-modal/IntakesModal';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { uniqueId } from 'lodash';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    checkApplicationExistance: jest.fn().mockReturnValue({ applicationId: null, stepId: null }),
    graphql: jest.fn()
}));

const handleClose = jest.fn();

const program = {
    city: 'Murcia',
    country: 'ES',
    duration: 31540000,
    durationUnit: 'YEAR',
    fee: 9000,
    feeCurrency: 'EUR',
    feeUnit: 'TOTAL',
    intakes: '2021-11-09T00:00:00.000Z',
    name: 'Master’s Degree in Business Administration - MBA',
    schedule: 'FULL_TIME',
    school: {
        logo: '8ddb88ed-8510-460b-a51f-860d345cfbea',
        name: ' UCAM Universidad Católica San Antonio de Murcia'
    },
    slug:
        'masters-degree-in-business-administration-mba-ucam-universidad-catolica-san-antonio-de-murcia-murcia'
} as NonNullable<NonNullable<GetProgramBySchoolQuery['getProgramBySchool']>['items']>[0];

const student = {
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
} as NonNullable<NonNullable<GetStudentByEmailQuery['getStudentByEmail']>['items']>[0];

describe.skip('IntakesModal', () => {
    it('can render without crashing', () => {
        render(
            <IntakesModal
                handleClose={handleClose}
                open={true}
                program={program}
                student={student}
            />
        );

        const title = screen.getByText('programs:multiple-intakes-modal-title');

        expect(title).toBeInTheDocument;
    });

    it('can submit the form', async () => {
        render(
            <IntakesModal
                handleClose={handleClose}
                open={true}
                program={program}
                student={student}
            />
        );

        const button = screen.getByText(/2021/);

        await waitFor(() => {
            fireEvent.click(button);
        });

        await waitFor(() => {
            expect(graphql).toHaveBeenCalled();
        });
    });
});
