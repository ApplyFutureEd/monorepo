import { GetProgramBySchoolQuery, GetStudentByEmailQuery } from '@applyfuture/graphql';
import Row from '@components/programs/row/Row';
import { render, screen } from '@testing-library/react';
import { uniqueId } from 'lodash';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

describe('Row', () => {
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

    it('can render without crashing', () => {
        render(<Row program={program} student={student} />);

        const name = screen.getByText('Master’s Degree in Business Administration - MBA');

        expect(name).toBeInTheDocument();
    });
});
