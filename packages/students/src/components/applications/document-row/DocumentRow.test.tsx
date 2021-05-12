/* eslint-disable sort-keys */
import { GetApplicationQuery, GetStudentByEmailQuery } from '@applyfuture/graphql';
import { toast } from '@applyfuture/utils';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Storage } from 'aws-amplify';
import React from 'react';

import DocumentRow from './DocumentRow';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

jest.mock('formik', () => ({
    Field: jest.fn().mockImplementation(() => <div />)
}));

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, any>),
    toast: jest.fn()
}));

Storage.get = jest.fn();
window.open = jest.fn();

describe('DocumentRow', () => {
    const application = ({
        admissionResult: null,
        createdAt: '2021-05-01T14:14:09.014Z',
        decisionLetterDate: null,
        document: null,
        id: '2b627cf1-7dfa-41dd-b2a4-acf73bdf0fb6',
        intake: '2022-01-31T23:00:00.000Z',
        interviewDate: null,
        lastUpdate: 1619878451124,
        modalApplicationCompletedViewed: false,
        notifications: null,
        owner: '6e79f0ea-f81b-4791-bc96-e052ce147d7b',
        program: { applicationFee: 1, feeCurrency: 'EUR' },
        programId: 'ff8987cd-bcd7-4ca7-812a-3d46d7d9234d',
        steps: [
            {
                date: '',
                id: 'upload-documents',
                isMandatory: true,
                label: 'application:step-upload-documents',
                status: 'idle'
            },
            {
                date: '',
                id: 'review-documents',
                isMandatory: true,
                label: 'application:step-review-documents',
                status: 'idle'
            },
            {
                date: '',
                id: 'payment',
                isMandatory: true,
                label: 'application:step-payment',
                status: 'idle'
            },
            {
                date: '',
                id: 'submission',
                isMandatory: true,
                label: 'application:step-submission',
                status: 'idle'
            },
            {
                date: '',
                id: 'application-internal-review',
                isMandatory: true,
                label: 'TBD',
                status: 'idle'
            },
            {
                date: '',
                id: 'school-review',
                isMandatory: true,
                label: 'TBD',
                status: 'idle'
            },
            {
                date: '',
                id: 'school-interview',
                isMandatory: true,
                label: 'TBD',
                status: 'idle'
            },
            {
                date: '',
                id: 'school-result',
                isMandatory: true,
                label: 'TBD',
                status: 'idle'
            },
            {
                date: '',
                id: 'school-tuitions-fee-payment',
                isMandatory: true,
                label: 'TBD',
                status: 'idle'
            },
            {
                date: '',
                id: 'decision-letter',
                isMandatory: true,
                label: 'TBD',
                status: 'idle'
            },
            {
                date: '',
                id: 'visa',
                isMandatory: true,
                label: 'TBD',
                status: 'idle'
            }
        ],
        student: {
            address: '33 Rue du Général Leclerc, Issy-les-Moulineaux, France',
            applications: {
                nextToken: null
            },
            birthday: '2021-03-22T23:00:00.000Z',
            city: '',
            country: '',
            createdAt: '2021-03-23T18:49:25.156Z',
            degrees: null,
            disciplines: null,
            documents: {
                nextToken: null
            },
            educationCountry: 'FR',
            email: 'pcailly@pm.me',
            fatherFirstName: 'Philippe',
            fatherLastName: 'CAILLY',
            favoritePrograms: null,
            favoriteSchools: null,
            firstLanguage: 'FR',
            firstName: 'Paul',
            gender: 'MALE',
            gradePointAverage: 4,
            guardianFirstName: '',
            guardianLastName: '',
            hasMandatorySummary: null,
            highestEducationLevel: 5,
            id: 'a5319bc4-e609-403b-a2af-35ff3f886b31',
            lastName: 'CAILLY',
            lastUpdate: 1617502027097,
            locale: null,
            maritalStatus: 'SINGLE',
            middleName: '',
            modalProfileCompletedViewed: true,
            motherFirstName: 'Juliette',
            motherMaidenName: 'LANG',
            nationality: 'FR',
            notifications: null,
            owner: '6e79f0ea-f81b-4791-bc96-e052ce147d7b',
            parentsAddress: '5 Chemin du Moulin, Fontaine-Simon, France',
            parentsCity: '',
            parentsCountry: '',
            parentsEmail: 'philippe@cailly.eu',
            parentsPhoneNumber: '+33621122955',
            passportNumber: 'N1234567',
            phoneNumber: '+33621122955',
            program: {
                id: 'ff8987cd-bcd7-4ca7-812a-3d46d7d9234d',
                applicationFee: -1,
                applicationFeeCurrency: 'EUR',
                city: 'Enschede',
                costOfLiving: 800,
                costOfLivingCurrency: 'EUR',
                country: 'NL',
                degree: 'MASTER',
                description:
                    "### Overview \n\nIn the MSc in Applied Physics at the University of Twente (UT)  we aim to achieve the ideal balance between 'hardcore' physics and engineering. Research is spread out over five clusters:\n\n \n\n* Physics of Fluids\n\n \n\n* Nanoelectronic Materials\n\n \n\n* Applied Nanophotonics\n\n \n\n* Soft Matter\n\n \n\n* Energy Materials and Systems\n\n \n\nThe themes that are covered within the programme are in perfect alignment with these five research clusters.\n\n\n\n \n### Careers \n\nApproximately half of our graduates work in Research & Development departments at a university, research institute or centre of expertise (e.g. TNO, ECN, CERN) or at a corporate Research & Development department (e.g. Philips Natlab, Shell, Océ), developing new materials, new technology, or new products, for example for space travel or medical science.\n\n \n\nMany Applied Physics graduates pursue their scientific studies at doctorate level, conducting independent research for four years under the guidance of a professor, and writing and defending a PhD dissertation. You can pursue a PhD at the University of Twente or at any other university in The Netherlands or abroad.\n\n \n\nSome graduates pursue a career in engineering or manufacturing. In engineering, you design new products or production processes, working for a major company or as an independent adviser. In manufacturing, the focus is on innovations in the production process.\n\n \n### Accreditation \n\nThis programme holds NVAO accreditation.\n\n \n \n### Programme Structure \n\n* Year 1\n\n \n\nIn the first year of this Master's programme you will take four general science courses related to physics theory, mathematical techniques, applied physics and experimental physics. Together these compulsory courses form the main thread of the programme. The four courses are divided over the four quartiles. As a result, you and your fellow students will get together on a regular basis throughout the first year. Another part of the year consists of specialisation courses closely linked to the research you are intersted in, the final third is completely elective.\n\n \n\n* Year 2\n\n \n\nThe second year is the practical year. You can now for example choose to focus on fundamental science, e.g. by doing research in a research group and an internship at a research institute. On the other hand, you can also opt for a more engineering driven approach by doing research in a more engineering oriented research group, combined with an industry internship.",
                discipline: 'SCIENCES',
                duration: 63080000,
                durationUnit: 'YEAR',
                fee: 16250,
                feeCurrency: 'EUR',
                feeUnit: 'ANNUAL-FEE',
                feesAndFinancing: null,
                gradePointAverage: -1,
                highestEducationLevel: 4,
                intakeInformation: null,
                intakes: '2021-09-01T00:00:00.000Z,2022-01-31T23:00:00.000Z',
                languages: ['EN'],
                lastUpdate: 1614091573962,
                minimumAge: -1,
                minimumWorkExperience: -1,
                minimumWorkExperienceUnit: 'YEAR',
                name: 'Master of Science in Applied Physics',
                otherRequirements:
                    '### General requirements\n\n* Bachelor of Science in Applied Physics\n\n* Knowledge of the following topics: Calculus and Analysis, Linear Algebra, Integration, Differential Equations',
                published: true,
                requestedSummary: [
                    {
                        name: 'passport',
                        isMandatory: true,
                        storageKey: null,
                        description: null,
                        condition: null,
                        isSpecific: null
                    },
                    {
                        name: 'passport-photo',
                        isMandatory: true,
                        storageKey: null,
                        description: null,
                        condition: null,
                        isSpecific: null
                    },
                    {
                        name: 'resume',
                        isMandatory: true,
                        storageKey: null,
                        description: null,
                        condition: null,
                        isSpecific: null
                    },
                    {
                        name: '3-year-baccalaureate',
                        isMandatory: true,
                        storageKey: null,
                        description: null,
                        condition: null,
                        isSpecific: null
                    },
                    {
                        name: 'last-3-transcript-1',
                        isMandatory: true,
                        storageKey: null,
                        description: null,
                        condition: null,
                        isSpecific: null
                    },
                    {
                        name: 'last-3-transcript-2',
                        isMandatory: true,
                        storageKey: null,
                        description: null,
                        condition: null,
                        isSpecific: null
                    },
                    {
                        name: 'last-3-transcript-3',
                        isMandatory: true,
                        storageKey: null,
                        description: null,
                        condition: null,
                        isSpecific: null
                    },
                    {
                        name: 'toefl',
                        isMandatory: true,
                        storageKey: null,
                        description: null,
                        condition: null,
                        isSpecific: null
                    },
                    {
                        name: 'ielts',
                        isMandatory: true,
                        storageKey: null,
                        description: null,
                        condition: null,
                        isSpecific: null
                    }
                ],
                schedule: 'FULL_TIME',
                schoolId: 'a22dcf03-5ece-42bf-bf83-101920e64c2d',
                schoolName: ' University of Twente (UT)',
                slug: 'master-of-science-in-applied-physics-university-of-twente-ut-enschede',
                submissionDeadline: '2021-05-01T00:00:00.000Z',
                testCambridgeAdvanced: -1,
                testCambridgeFirst: -1,
                testCeliCilsItPlida: -1,
                testDele: -1,
                testDelfdalf: -1,
                testGmat: -1,
                testGoethe: -1,
                testGre: -1,
                testIelts: 6.5,
                testTagemage: -1,
                testTcftef: -1,
                testToefl: 577,
                testToeic: -1,
                createdAt: '2021-02-21T23:49:03.865Z',
                updatedAt: '2021-02-23T14:46:13.962Z',
                school: {
                    id: 'a22dcf03-5ece-42bf-bf83-101920e64c2d',
                    city: 'Enschede',
                    country: 'NL',
                    coverPhoto: '195906ad-917c-4646-86a7-fe20b27ed636',
                    contactEmail: 'peter@cheereef.com',
                    contactJobTitle: 'Recruitment Officer of Overseas Study Department',
                    contactName: 'Peter Yi',
                    contactPhone: '+86-10-58693510-807',
                    contractStatus: 'IN_NEGOCIATION',
                    creationYear: 1961,
                    description:
                        "### Overview\n\nThe University of Twente (Dutch: Universiteit Twente is a public technical university located in Enschede, the Netherlands.\n\nThe UT collaborates with Delft University of Technology, Eindhoven University of Technology and the Wageningen University and Research Centre under the umbrella of 4TU and is also a partner in the European Consortium of Innovative Universities (ECIU).\n\nThe University has been placed in the top 400 universities in the world by three major ranking tables. The UT was ranked 65th in the Reuters's 2017 European Most Innovative Universities, and, 184th worldwide in 2019 according to the Times Higher Education magazine.\n\n### Education\n\nThe University of Twente offers a wide range of programmes from pre-university programmes to in-company training sessions and from summer school to part-time master's. Are you interested in fields as technical medicine, robotics, IT, business & public policy, chemistry and engineering science, earth observation, natural or social sciences? Are you looking for the perfect bachelor's or master's, or a professional looking for an educational partner for part-time courses? Discover our full-time, part-time and one-time education programmes. \n\n### History\n\nThe university was founded in 1961 as Technische Hogeschool Twente or (THT). After Delft University of Technology and Eindhoven University of Technology, it became the third polytechnic institute in the Netherlands to become a University. The institution was later renamed to Universiteit Twente (University of Twente) in 1986, as the result of the changes in the Dutch Academic Education Act in 1984.\n\nThe Dutch government's decision to locate the country's third technical university in Enschede, the main city of Twente, had much to do with the north-eastern province's rich manufacturing industry (textiles, metal, electrical engineering, chemicals). Another important consideration was the fact that the local economy needed a boost to compensate for the dwindling textile industry. Just as the fact that the municipality of Enschede made the Drienerlo estate available for the first campus University of the Netherlands.\n\n### Campus\n\nThe University of Twente was built on the former country estate of Drienerlo, situated between Hengelo and Enschede. The 140-hectare estate consists of woodland, meadows and water. Architects Van Tijen and Van Embden designed the first — and so far only — Dutch campus university along American lines where students and staff live, work and pursue their leisure activities on campus.\n\nThe Student Union, which is run entirely by students, manages several premises, including the student social centre(de pakkerij) and study centre(Wallstreet) in Enschede and The Water sport complex on the Twentekannal.",
                    institutionType: 'PUBLIC',
                    internationalStudents: 3000,
                    lastUpdate: 1616537293490,
                    logo: 'b9dc0b44-0930-4cf5-8196-d49a0d04bbce',
                    name: ' University of Twente (UT)',
                    totalStudents: 11000,
                    slug: 'university-of-twente-ut',
                    published: true,
                    createdAt: '2021-02-19T18:39:29.342Z',
                    updatedAt: '2021-03-23T22:08:14.594Z'
                }
            },
            refusedVisa: false,
            refusedVisaReason: '',
            schoolsAttended: [
                {
                    address: 'ESCE, Rue Sextius Michel, Paris, France',
                    attendedInstitutionFrom: '2021-03-16T23:00:00.000Z',
                    attendedInstitutionTo: '2021-03-19T23:00:00.000Z',
                    city: '',
                    country: '',
                    degreeAwarded: 1,
                    degreeAwardedOn: '2021-03-17T23:00:00.000Z',
                    educationLevel: 1,
                    name: 'ESCE',
                    primaryLanguageInstruction: 'FR'
                }
            ],
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
            testGre: null,
            testGreDate: null,
            testIelts: null,
            testIeltsDate: null,
            testLogicAndReasoningPending: true,
            testOtherLanguagesPending: true,
            testTagemage: null,
            testTagemageDate: null,
            testTcftef: null,
            testTcftefDate: null,
            testToefl: 660,
            testToeflDate: null,
            testToeic: null,
            testToeicDate: null,
            updatedAt: '2021-04-04T02:07:08.005Z',
            validVisa: true,
            workExperiences: [
                {
                    address: '',
                    compagnyName: '',
                    title: '',
                    workedFrom: null,
                    workedTo: null
                }
            ]
        },
        studentId: 'a5319bc4-e609-403b-a2af-35ff3f886b31',
        todo: null,
        tuitionsFeePaymentDate: null,
        updatedAt: '2021-05-01T14:14:09.014Z',
        visaDate: null
    } as unknown) as GetApplicationQuery['getApplication'];

    const document = ({
        name: 'ielts',
        isMandatory: true,
        storageKey: null,
        description: null,
        condition: null,
        isSpecific: null
    } as unknown) as NonNullable<
        NonNullable<GetApplicationQuery['getApplication']>['program']
    >['requestedDocuments'][0];

    const student = ({
        id: 'a5319bc4-e609-403b-a2af-35ff3f886b31',
        address: '33 Rue du Général Leclerc, Issy-les-Moulineaux, France',
        applications: {
            nextToken: null
        },
        birthday: '2021-03-22T23:00:00.000Z',
        city: '',
        country: '',
        degrees: null,
        disciplines: null,
        documents: {
            nextToken: null
        },
        educationCountry: 'FR',
        email: 'pcailly@pm.me',
        fatherFirstName: 'Philippe',
        fatherLastName: 'CAILLY',
        firstLanguage: 'FR',
        firstName: 'Paul',
        favoritePrograms: null,
        favoriteSchools: null,
        gender: 'MALE',
        gradePointAverage: 4,
        guardianFirstName: '',
        guardianLastName: '',
        hasMandatoryDocuments: null,
        highestEducationLevel: 5,
        lastName: 'CAILLY',
        lastUpdate: 1617502027097,
        locale: null,
        maritalStatus: 'SINGLE',
        middleName: '',
        modalProfileCompletedViewed: true,
        phoneNumber: '+33621122955',
        motherFirstName: 'Juliette',
        motherMaidenName: 'LANG',
        nationality: 'FR',
        notifications: null,
        parentsAddress: '5 Chemin du Moulin, Fontaine-Simon, France',
        parentsCity: '',
        parentsCountry: '',
        parentsEmail: 'philippe@cailly.eu',
        parentsPhoneNumber: '+33621122955',
        passportNumber: 'N1234567',
        refusedVisa: false,
        refusedVisaReason: '',
        schoolsAttended: [
            {
                address: 'ESCE, Rue Sextius Michel, Paris, France',
                attendedInstitutionFrom: '2021-03-16T23:00:00.000Z',
                attendedInstitutionTo: '2021-03-19T23:00:00.000Z',
                city: '',
                country: '',
                degreeAwarded: 1,
                degreeAwardedOn: '2021-03-17T23:00:00.000Z',
                educationLevel: 1,
                name: 'ESCE',
                primaryLanguageInstruction: 'FR'
            }
        ],
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
        testGre: null,
        testGreDate: null,
        testIelts: null,
        testIeltsDate: null,
        testLogicAndReasoningPending: true,
        testOtherLanguagesPending: true,
        testTagemage: null,
        testTagemageDate: null,
        testTcftef: null,
        testTcftefDate: null,
        testToefl: 660,
        testToeflDate: null,
        testToeic: null,
        testToeicDate: null,
        validVisa: true,
        workExperiences: [
            {
                address: '',
                compagnyName: '',
                title: '',
                workedFrom: null,
                workedTo: null
            }
        ],
        createdAt: '2021-03-23T18:49:25.156Z',
        updatedAt: '2021-04-04T02:07:08.005Z',
        owner: '6e79f0ea-f81b-4791-bc96-e052ce147d7b'
    } as unknown) as NonNullable<
        NonNullable<GetStudentByEmailQuery['getStudentByEmail']>['items']
    >[0];

    it('can render without crashing', () => {
        render(
            <DocumentRow
                application={application}
                document={document}
                index={0}
                student={student}
            />
        );

        const documentName = screen.getByText('profile:ielts');

        expect(documentName).toBeInTheDocument();
    });

    it('can display optional chip if the document is not mandatory', () => {
        const optionalDocument = ({
            name: 'ielts',
            isMandatory: false,
            storageKey: null,
            description: null,
            condition: null,
            isSpecific: null
        } as unknown) as NonNullable<
            NonNullable<GetApplicationQuery['getApplication']>['program']
        >['requestedDocuments'][0];

        render(
            <DocumentRow
                application={application}
                document={optionalDocument}
                index={0}
                student={student}
            />
        );

        const optionalChip = screen.getByText('application:optional');

        expect(optionalChip).toBeInTheDocument();
    });

    it('can display english document details', () => {
        const optionalDocument = ({
            name: 'ielts',
            isMandatory: false,
            storageKey: null,
            description: null,
            condition: null,
            isSpecific: null
        } as unknown) as NonNullable<
            NonNullable<GetApplicationQuery['getApplication']>['program']
        >['requestedDocuments'][0];

        render(
            <DocumentRow
                application={application}
                document={optionalDocument}
                index={0}
                student={student}
            />
        );

        const englishDocumentDetails = screen.getByText('application:english-test-proof-details');

        expect(englishDocumentDetails).toBeInTheDocument();
    });

    it('can display french document details', () => {
        const optionalDocument = ({
            name: 'tef-tcf',
            isMandatory: true,
            storageKey: null,
            description: null,
            condition: null,
            isSpecific: null
        } as unknown) as NonNullable<
            NonNullable<GetApplicationQuery['getApplication']>['program']
        >['requestedDocuments'][0];

        render(
            <DocumentRow
                application={application}
                document={optionalDocument}
                index={0}
                student={student}
            />
        );

        const frenchDocumentDetails = screen.getByText('application:french-test-proof-details');

        expect(frenchDocumentDetails).toBeInTheDocument();
    });

    it('can display logic and reasoning document details', () => {
        const optionalDocument = ({
            name: 'gmat',
            isMandatory: true,
            storageKey: null,
            description: null,
            condition: null,
            isSpecific: null
        } as unknown) as NonNullable<
            NonNullable<GetApplicationQuery['getApplication']>['program']
        >['requestedDocuments'][0];

        render(
            <DocumentRow
                application={application}
                document={optionalDocument}
                index={0}
                student={student}
            />
        );

        const logicAndReasoningDocumentDetails = screen.getByText(
            'application:logic-and-reasoning-test-proof-details'
        );

        expect(logicAndReasoningDocumentDetails).toBeInTheDocument();
    });

    it('can display download template button if the document has a storageKey', () => {
        const optionalDocument = ({
            name: 'health-statement',
            isMandatory: true,
            storageKey: 'health-statement-template-29390102',
            description: null,
            condition: null,
            isSpecific: null
        } as unknown) as NonNullable<
            NonNullable<GetApplicationQuery['getApplication']>['program']
        >['requestedDocuments'][0];

        render(
            <DocumentRow
                application={application}
                document={optionalDocument}
                index={0}
                student={student}
            />
        );

        const downloadTemplateButton = screen.getByText('application:download-template');

        expect(downloadTemplateButton).toBeInTheDocument();
    });

    it('can call Storage.get and window.open when the download template button is clicked', async () => {
        const optionalDocument = ({
            name: 'health-statement',
            isMandatory: true,
            storageKey: 'health-statement-template-29390102',
            description: null,
            condition: null,
            isSpecific: null
        } as unknown) as NonNullable<
            NonNullable<GetApplicationQuery['getApplication']>['program']
        >['requestedDocuments'][0];

        render(
            <DocumentRow
                application={application}
                document={optionalDocument}
                index={0}
                student={student}
            />
        );

        const downloadTemplateButton = screen.getByText('application:download-template');

        await waitFor(() => {
            fireEvent.click(downloadTemplateButton);
        });

        await waitFor(() => {
            expect(Storage.get).toHaveBeenCalledWith('health-statement-template-29390102', {
                level: 'public'
            });
            expect(window.open).toHaveBeenCalled();
        });
    });

    it('can call display a toast when the download template button is clicked and an error is thrown', async () => {
        Storage.get = jest.fn().mockImplementation(() => {
            throw new Error();
        });

        const optionalDocument = ({
            name: 'health-statement',
            isMandatory: true,
            storageKey: 'health-statement-template-29390102',
            description: null,
            condition: null,
            isSpecific: null
        } as unknown) as NonNullable<
            NonNullable<GetApplicationQuery['getApplication']>['program']
        >['requestedDocuments'][0];

        render(
            <DocumentRow
                application={application}
                document={optionalDocument}
                index={0}
                student={student}
            />
        );

        const downloadTemplateButton = screen.getByText('application:download-template');

        await waitFor(() => {
            fireEvent.click(downloadTemplateButton);
        });

        await waitFor(() => {
            expect(toast).toHaveBeenCalled();
        });
    });
});
