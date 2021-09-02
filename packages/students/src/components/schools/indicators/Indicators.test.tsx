import { GetProgramBySchoolQuery, GetSchoolBySlugQuery } from '@applyfuture/graphql/src';
import { RequestedDocument } from '@applyfuture/models';
import Indicators from '@components/schools/indicators/Indicators';
import { render } from '@testing-library/react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

describe('Indicators', () => {
    const programs = [
        {
            applicationFee: 50,
            applicationFeeCurrency: 'EUR',
            city: 'Paris',
            costOfLiving: 950,
            costOfLivingCurrency: 'EUR',
            country: 'FR',
            degree: 'MASTER',
            description:
                "### Overview \n\nThe outcome of joint action by researchers, equine nutrition experts, recognised professionals and the Hippolia Pole of Competitiveness, the  Equine Industry Sciences and Management programme at Ecole de Management de Normandie  trains tomorrow's Equine Industry Managers.\n\n \n\nSince it opened in 2007, its specific educational model has reflected its strong values: ambition to contribute to the development of the equine industry  passion for horses and international orientation.\n\n\n\n \n### Taught in three locations and two countries \n\n* **AgroSup Dijon**: the National Institute of Agronomy, Food and Environment Sciences is one of the 6 Higher Institutions in France specialised in this field. More info on AgroSup Dijon.\n\n \n\n* **EM Normandie**: Caen and Paris Campuses: a Management Grande Ecole accredited by AACSB and EQUIS, which trains professionals who can take up the managerial and entrepreneurial challenges of tomorrow. More info on EM Normandie.\n\n \n\n* **Kentucky University** Lexington, USA: the College of Agriculture, Food and Environment offers programmes and conducts research in Social Sciences and Agronomy. More information on Kentucky University.\n\n \n### Career Opportunities \n\nMS MESB Graduates -  Equine Industry Sciences and Management  work in all sectors of the Equine Industry:\n\n \n\n* Races: 49%\n\n \n\n* Sports: 16%\n\n \n\n* Multi-Sector: 21%\n\n \n\n* Other Industries: 14%\n\n \n\nGraduates take up executive positions within a few months after graduation. Most of them are hired by the professional immersion structure they were in as interns. Half the positions are on long-term contracts and the majority  have an international orientation.\n\n \n### Accreditation \n\nAccredited by the French Conference des Grande Ecole.\n \n### Programme Structure \n\n**Courses include:**\n\n \n\n* Management\n\n \n\n* Project Management\n\n \n\n* Starting a Business\n\n \n\n* Management\n\n \n\n* Industry Context\n\n \n\n* Equine Sciences",
            discipline: 'BUSINESS_MANAGEMENT_AND_ECONOMICS',
            duration: 39420000,
            durationUnit: 'MONTH',
            fee: 13500,
            feeCurrency: 'EUR',
            feeUnit: 'TOTAL',
            feesAndFinancing: '',
            gradePointAverage: -1,
            highestEducationLevel: 5,
            id: '3e197061-35e9-4ff1-bbfc-1309bb1a92aa',
            intakeInformation: '',
            intakes: '2021-09-01T00:00:00.000Z',
            languages: ['EN', 'FR'],
            minimumAge: -1,
            minimumWorkExperience: 3,
            minimumWorkExperienceUnit: 'YEAR',
            name: 'Master of Science in Equine Industry Sciences and Management',
            otherRequirements:
                '### General requirements\n\nThe programme is open to students holding the following degrees:\n\n* Master degree or equivalent ("Bac+ 5" or 5 years after secondary education) \n\n* At the Jury’s discretion: 4-year undergraduate degree with 3 years of professional experience (internships excluded).\n\n* Exceptionally the admissions board may accept applications that do not meet the formal criteria listed above but appear exceptional on other aspects (academic excellence, community work, international experience, internships, etc.)\n\n* Candidates for MSc programmes must show evidence of a level in English equivalent to: TOEIC score of 790 TOEFL CBT score of 230/IBT of 83 IELTS between 6 and 6.5 (according to the MSc) or equivalent',
            published: true,
            requestedDocuments: [] as RequestedDocument[],
            schedule: 'FULL_TIME',
            schoolId: 'fe2851b6-ef6c-439f-bf47-fc934d356511',
            schoolName: 'EM Normandie',
            slug: 'master-of-science-in-equine-industry-sciences-and-management-em-normandie-paris',
            submissionDeadline: '2021-07-01T00:00:00.000Z',
            testCambridgeAdvanced: -1,
            testCambridgeFirst: -1,
            testDelfdalf: -1,
            testGmat: -1,
            testGre: -1,
            testIelts: 6,
            testTagemage: -1,
            testTcftef: -1,
            testToefl: 557,
            testToeic: 790
        }
    ] as NonNullable<NonNullable<GetProgramBySchoolQuery['getProgramBySchool']>['items']>;

    const school = {
        city: 'Roma',
        country: 'IT',
        logo: '8ddb88ed-8510-460b-a51f-860d345cfbea',
        name: 'Accademia delle Arti e Nuove Tecnologie',
        slug: 'aant-accademia-delle-arti-e-nuove-tecnologie-roma'
    } as NonNullable<NonNullable<GetSchoolBySlugQuery['getSchoolBySlug']>['items']>[0];

    it('can render without crashing', () => {
        render(<Indicators programs={programs} school={school} />);
    });

    it('can render indicators for a program with one language without crashing', () => {
        render(<Indicators programs={programs} school={school} />);
    });
});
