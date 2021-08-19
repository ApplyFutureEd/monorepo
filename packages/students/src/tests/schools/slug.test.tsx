import { GetProgramBySchoolQuery, GetSchoolBySlugQuery } from '@applyfuture/graphql';
import SchoolPage from '@pages/schools/[slug]';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

let mockIsFallback = false;

jest.mock('next/router', () => ({
    useRouter() {
        return {
            isFallback: mockIsFallback,
            locale: 'en'
        };
    }
}));

const programs = [
    {
        applicationFee: 50,
        applicationFeeCurrency: 'EUR',
        city: 'Paris',
        costOfLiving: 900,
        costOfLivingCurrency: 'EUR',
        country: 'FR',
        degree: 'MASTER',
        description:
            '### Overview \n\nThis Master of Science is a joint programme between EPITA (Graduate School of Computer Science) and EM Normandie Business School.\n\nThe MSc Artificial Intelligence for Marketing Strategy combines teaching in marketing basics with technical knowledge. Students gain expertise in marketing-applied Artificial Intelligence, which they can use to significantly improve business performance.\n\nThe goal of the MSc in Artificial Intelligence for Marketing Strategy (AIMS), which is accredited by the Conference of Grandes Ecoles (CGE), is to train marketing strategists to create a market-focused company using innovative and revolutionary AI technologies. Managers will learn to use strategies and efficient decision-making processes using cutting-edge “martechs” (marketing technology service providers), enabling human managers to perform better in terms of generating and retaining business.\n \n### Strong points \n\n- Joint training by a major Engineering School and a prominent Business School (both French “Grande Ecoles”)\n- Programme fully taught in English\n- Skills in both marketing and Artificial Intelligence\n- A professional training trip to Dublin to find out more about Big Tech\n\n### Programme Structure \n\n**Semester 1**\n\n- CULTURAL INTEGRATION\n- FOUNDATION IN MARKETING\n- MANAGEMENT AND SOFT SKILLS\n- TECHNICAL FOUNDATION\n\n**Semester 2**\n\n- BUSINESS EXPOSURE\n- DATA SCIENCE\n- DIGITAL MARKETING\n- MANAGEMENT AND SOFT SKILLS\n\n**Semester 3**\n\n- APPLICATIONS OF ARTIFICIAL INTELLIGENCE\n- ARTIFICIAL INTELLIGENCE FOR MARKETING\n- BUSINESS EXPOSURE\n- MANAGEMENT AND SOFT SKILLS\n\n**Semester 4**\n\n- INTERNSHIP\n\n### Career\n\n- Data Enabler\n- Data Visualization Consultant\n- Marketing Data Analyst\n- Entrepreneur\n- Customer Intelligence Manager\n- E-marketer\n- Operational Researcher\n- Business Intelligence Consultant\n- Data Manager\n- Data Analyst\n- Data Strategist\n- Big Data Consultant\n- Data Strategist\n- Marketing Scientist\n- Big Data Consultant\n- Data Scientist\n- Marketing Strategist\n- Expert/Analyst in Marketing/Marketing Research/CRM/Credit Analysis\n- Business Data Analyst',
        discipline: 'BUSINESS_MANAGEMENT_AND_ECONOMICS',
        duration: 31540000,
        durationUnit: 'YEAR',
        fee: 19400,
        feeCurrency: 'EUR',
        feeUnit: 'ANNUAL',
        feesAndFinancing: null,
        gradePointAverage: -1,
        highestEducationLevel: 5,
        id: 'd52bd8a8-3494-473c-9784-f4988c146988',
        intakeInformation: null,
        intakes: '2021-09-19T00:00:00.000Z,2022-09-01T22:00:00.000Z',
        languages: ['EN'],
        minimumAge: -1,
        minimumWorkExperience: -1,
        minimumWorkExperienceUnit: 'YEAR',
        name: 'Master of Science in Artificial Intelligence for Marketing Strategy',
        otherRequirements:
            'No English language test score is required for students with a degree from an English-speaking university. ',
        published: true,
        schedule: 'FULL_TIME'
    },
    {
        applicationFee: 50,
        applicationFeeCurrency: 'EUR',
        city: 'Paris',
        costOfLiving: 900,
        costOfLivingCurrency: 'EUR',
        country: 'FR',
        degree: 'BACHELOR',
        description:
            '### Overview \n\nThis Master of Science is a joint programme between EPITA (Graduate School of Computer Science) and EM Normandie Business School.\n\nThe MSc Artificial Intelligence for Marketing Strategy combines teaching in marketing basics with technical knowledge. Students gain expertise in marketing-applied Artificial Intelligence, which they can use to significantly improve business performance.\n\nThe goal of the MSc in Artificial Intelligence for Marketing Strategy (AIMS), which is accredited by the Conference of Grandes Ecoles (CGE), is to train marketing strategists to create a market-focused company using innovative and revolutionary AI technologies. Managers will learn to use strategies and efficient decision-making processes using cutting-edge “martechs” (marketing technology service providers), enabling human managers to perform better in terms of generating and retaining business.\n \n### Strong points \n\n- Joint training by a major Engineering School and a prominent Business School (both French “Grande Ecoles”)\n- Programme fully taught in English\n- Skills in both marketing and Artificial Intelligence\n- A professional training trip to Dublin to find out more about Big Tech\n\n### Programme Structure \n\n**Semester 1**\n\n- CULTURAL INTEGRATION\n- FOUNDATION IN MARKETING\n- MANAGEMENT AND SOFT SKILLS\n- TECHNICAL FOUNDATION\n\n**Semester 2**\n\n- BUSINESS EXPOSURE\n- DATA SCIENCE\n- DIGITAL MARKETING\n- MANAGEMENT AND SOFT SKILLS\n\n**Semester 3**\n\n- APPLICATIONS OF ARTIFICIAL INTELLIGENCE\n- ARTIFICIAL INTELLIGENCE FOR MARKETING\n- BUSINESS EXPOSURE\n- MANAGEMENT AND SOFT SKILLS\n\n**Semester 4**\n\n- INTERNSHIP\n\n### Career\n\n- Data Enabler\n- Data Visualization Consultant\n- Marketing Data Analyst\n- Entrepreneur\n- Customer Intelligence Manager\n- E-marketer\n- Operational Researcher\n- Business Intelligence Consultant\n- Data Manager\n- Data Analyst\n- Data Strategist\n- Big Data Consultant\n- Data Strategist\n- Marketing Scientist\n- Big Data Consultant\n- Data Scientist\n- Marketing Strategist\n- Expert/Analyst in Marketing/Marketing Research/CRM/Credit Analysis\n- Business Data Analyst',
        discipline: 'BUSINESS_MANAGEMENT_AND_ECONOMICS',
        duration: 31540000,
        durationUnit: 'YEAR',
        fee: 19400,
        feeCurrency: 'EUR',
        feeUnit: 'ANNUAL',
        feesAndFinancing: null,
        gradePointAverage: -1,
        highestEducationLevel: 5,
        id: 'd52bd8a8-3494-473c-9784-f4988c146988',
        intakeInformation: null,
        intakes: '2021-09-19T00:00:00.000Z,2022-09-01T22:00:00.000Z',
        languages: ['EN'],
        minimumAge: -1,
        minimumWorkExperience: -1,
        minimumWorkExperienceUnit: 'YEAR',
        name: 'Bachelor of Science in Artificial Intelligence for Marketing Strategy',
        otherRequirements:
            'No English language test score is required for students with a degree from an English-speaking university. ',
        published: true,
        schedule: 'FULL_TIME'
    },
    {
        applicationFee: 50,
        applicationFeeCurrency: 'EUR',
        city: 'Paris',
        costOfLiving: 900,
        costOfLivingCurrency: 'EUR',
        country: 'FR',
        degree: 'DOCTORATE',
        description:
            '### Overview \n\nThis Master of Science is a joint programme between EPITA (Graduate School of Computer Science) and EM Normandie Business School.\n\nThe MSc Artificial Intelligence for Marketing Strategy combines teaching in marketing basics with technical knowledge. Students gain expertise in marketing-applied Artificial Intelligence, which they can use to significantly improve business performance.\n\nThe goal of the MSc in Artificial Intelligence for Marketing Strategy (AIMS), which is accredited by the Conference of Grandes Ecoles (CGE), is to train marketing strategists to create a market-focused company using innovative and revolutionary AI technologies. Managers will learn to use strategies and efficient decision-making processes using cutting-edge “martechs” (marketing technology service providers), enabling human managers to perform better in terms of generating and retaining business.\n \n### Strong points \n\n- Joint training by a major Engineering School and a prominent Business School (both French “Grande Ecoles”)\n- Programme fully taught in English\n- Skills in both marketing and Artificial Intelligence\n- A professional training trip to Dublin to find out more about Big Tech\n\n### Programme Structure \n\n**Semester 1**\n\n- CULTURAL INTEGRATION\n- FOUNDATION IN MARKETING\n- MANAGEMENT AND SOFT SKILLS\n- TECHNICAL FOUNDATION\n\n**Semester 2**\n\n- BUSINESS EXPOSURE\n- DATA SCIENCE\n- DIGITAL MARKETING\n- MANAGEMENT AND SOFT SKILLS\n\n**Semester 3**\n\n- APPLICATIONS OF ARTIFICIAL INTELLIGENCE\n- ARTIFICIAL INTELLIGENCE FOR MARKETING\n- BUSINESS EXPOSURE\n- MANAGEMENT AND SOFT SKILLS\n\n**Semester 4**\n\n- INTERNSHIP\n\n### Career\n\n- Data Enabler\n- Data Visualization Consultant\n- Marketing Data Analyst\n- Entrepreneur\n- Customer Intelligence Manager\n- E-marketer\n- Operational Researcher\n- Business Intelligence Consultant\n- Data Manager\n- Data Analyst\n- Data Strategist\n- Big Data Consultant\n- Data Strategist\n- Marketing Scientist\n- Big Data Consultant\n- Data Scientist\n- Marketing Strategist\n- Expert/Analyst in Marketing/Marketing Research/CRM/Credit Analysis\n- Business Data Analyst',
        discipline: 'BUSINESS_MANAGEMENT_AND_ECONOMICS',
        duration: 31540000,
        durationUnit: 'YEAR',
        fee: 19400,
        feeCurrency: 'EUR',
        feeUnit: 'ANNUAL',
        feesAndFinancing: null,
        gradePointAverage: -1,
        highestEducationLevel: 5,
        id: 'd52bd8a8-3494-473c-9784-f4988c146988',
        intakeInformation: null,
        intakes: '2021-09-19T00:00:00.000Z,2022-09-01T22:00:00.000Z',
        languages: ['EN'],
        minimumAge: -1,
        minimumWorkExperience: -1,
        minimumWorkExperienceUnit: 'YEAR',
        name: 'Doctorate of Science in Artificial Intelligence for Marketing Strategy',
        otherRequirements:
            'No English language test score is required for students with a degree from an English-speaking university. ',
        published: true,
        schedule: 'FULL_TIME'
    },
    {
        applicationFee: 50,
        applicationFeeCurrency: 'EUR',
        city: 'Paris',
        costOfLiving: 900,
        costOfLivingCurrency: 'EUR',
        country: 'FR',
        degree: 'CERTIFICATE',
        description:
            '### Overview \n\nThis Master of Science is a joint programme between EPITA (Graduate School of Computer Science) and EM Normandie Business School.\n\nThe MSc Artificial Intelligence for Marketing Strategy combines teaching in marketing basics with technical knowledge. Students gain expertise in marketing-applied Artificial Intelligence, which they can use to significantly improve business performance.\n\nThe goal of the MSc in Artificial Intelligence for Marketing Strategy (AIMS), which is accredited by the Conference of Grandes Ecoles (CGE), is to train marketing strategists to create a market-focused company using innovative and revolutionary AI technologies. Managers will learn to use strategies and efficient decision-making processes using cutting-edge “martechs” (marketing technology service providers), enabling human managers to perform better in terms of generating and retaining business.\n \n### Strong points \n\n- Joint training by a major Engineering School and a prominent Business School (both French “Grande Ecoles”)\n- Programme fully taught in English\n- Skills in both marketing and Artificial Intelligence\n- A professional training trip to Dublin to find out more about Big Tech\n\n### Programme Structure \n\n**Semester 1**\n\n- CULTURAL INTEGRATION\n- FOUNDATION IN MARKETING\n- MANAGEMENT AND SOFT SKILLS\n- TECHNICAL FOUNDATION\n\n**Semester 2**\n\n- BUSINESS EXPOSURE\n- DATA SCIENCE\n- DIGITAL MARKETING\n- MANAGEMENT AND SOFT SKILLS\n\n**Semester 3**\n\n- APPLICATIONS OF ARTIFICIAL INTELLIGENCE\n- ARTIFICIAL INTELLIGENCE FOR MARKETING\n- BUSINESS EXPOSURE\n- MANAGEMENT AND SOFT SKILLS\n\n**Semester 4**\n\n- INTERNSHIP\n\n### Career\n\n- Data Enabler\n- Data Visualization Consultant\n- Marketing Data Analyst\n- Entrepreneur\n- Customer Intelligence Manager\n- E-marketer\n- Operational Researcher\n- Business Intelligence Consultant\n- Data Manager\n- Data Analyst\n- Data Strategist\n- Big Data Consultant\n- Data Strategist\n- Marketing Scientist\n- Big Data Consultant\n- Data Scientist\n- Marketing Strategist\n- Expert/Analyst in Marketing/Marketing Research/CRM/Credit Analysis\n- Business Data Analyst',
        discipline: 'BUSINESS_MANAGEMENT_AND_ECONOMICS',
        duration: 31540000,
        durationUnit: 'YEAR',
        fee: 19400,
        feeCurrency: 'EUR',
        feeUnit: 'ANNUAL',
        feesAndFinancing: null,
        gradePointAverage: -1,
        highestEducationLevel: 5,
        id: 'd52bd8a8-3494-473c-9784-f4988c146988',
        intakeInformation: null,
        intakes: '2021-09-19T00:00:00.000Z,2022-09-01T22:00:00.000Z',
        languages: ['EN'],
        minimumAge: -1,
        minimumWorkExperience: -1,
        minimumWorkExperienceUnit: 'YEAR',
        name: 'Certificate of Science in Artificial Intelligence for Marketing Strategy',
        otherRequirements:
            'No English language test score is required for students with a degree from an English-speaking university. ',
        published: true,
        schedule: 'FULL_TIME'
    },
    {
        applicationFee: 50,
        applicationFeeCurrency: 'EUR',
        city: 'Paris',
        costOfLiving: 900,
        costOfLivingCurrency: 'EUR',
        country: 'FR',
        degree: 'MASTER',
        description:
            '### Overview \n\nThis Master of Science is a joint programme between EPITA (Graduate School of Computer Science) and EM Normandie Business School.\n\nThe MSc Artificial Intelligence for Marketing Strategy combines teaching in marketing basics with technical knowledge. Students gain expertise in marketing-applied Artificial Intelligence, which they can use to significantly improve business performance.\n\nThe goal of the MSc in Artificial Intelligence for Marketing Strategy (AIMS), which is accredited by the Conference of Grandes Ecoles (CGE), is to train marketing strategists to create a market-focused company using innovative and revolutionary AI technologies. Managers will learn to use strategies and efficient decision-making processes using cutting-edge “martechs” (marketing technology service providers), enabling human managers to perform better in terms of generating and retaining business.\n \n### Strong points \n\n- Joint training by a major Engineering School and a prominent Business School (both French “Grande Ecoles”)\n- Programme fully taught in English\n- Skills in both marketing and Artificial Intelligence\n- A professional training trip to Dublin to find out more about Big Tech\n\n### Programme Structure \n\n**Semester 1**\n\n- CULTURAL INTEGRATION\n- FOUNDATION IN MARKETING\n- MANAGEMENT AND SOFT SKILLS\n- TECHNICAL FOUNDATION\n\n**Semester 2**\n\n- BUSINESS EXPOSURE\n- DATA SCIENCE\n- DIGITAL MARKETING\n- MANAGEMENT AND SOFT SKILLS\n\n**Semester 3**\n\n- APPLICATIONS OF ARTIFICIAL INTELLIGENCE\n- ARTIFICIAL INTELLIGENCE FOR MARKETING\n- BUSINESS EXPOSURE\n- MANAGEMENT AND SOFT SKILLS\n\n**Semester 4**\n\n- INTERNSHIP\n\n### Career\n\n- Data Enabler\n- Data Visualization Consultant\n- Marketing Data Analyst\n- Entrepreneur\n- Customer Intelligence Manager\n- E-marketer\n- Operational Researcher\n- Business Intelligence Consultant\n- Data Manager\n- Data Analyst\n- Data Strategist\n- Big Data Consultant\n- Data Strategist\n- Marketing Scientist\n- Big Data Consultant\n- Data Scientist\n- Marketing Strategist\n- Expert/Analyst in Marketing/Marketing Research/CRM/Credit Analysis\n- Business Data Analyst',
        discipline: 'BUSINESS_MANAGEMENT_AND_ECONOMICS',
        duration: 31540000,
        durationUnit: 'YEAR',
        fee: 19400,
        feeCurrency: 'EUR',
        feeUnit: 'ANNUAL',
        feesAndFinancing: null,
        gradePointAverage: -1,
        highestEducationLevel: 5,
        id: 'd52bd8a8-3494-473c-9784-f4988c146988',
        intakeInformation: null,
        intakes: '2021-09-19T00:00:00.000Z,2022-09-01T22:00:00.000Z',
        languages: ['EN'],
        minimumAge: -1,
        minimumWorkExperience: -1,
        minimumWorkExperienceUnit: 'YEAR',
        name: 'Master of Ninja Science',
        otherRequirements:
            'No English language test score is required for students with a degree from an English-speaking university. ',
        published: false,
        schedule: 'FULL_TIME'
    }
] as unknown as NonNullable<NonNullable<GetProgramBySchoolQuery['getProgramBySchool']>['items']>;

const school = {
    city: 'Paris',
    contactEmail: null,
    contactJobTitle: null,
    contactName: null,
    contactPhone: null,
    contractStatus: 'CONTACTED',
    country: 'FR',
    coverPhoto: '10d77697-2165-4b89-bb3c-a57f81e9c9d0',
    createdAt: '2020-09-18T11:05:22.059Z',
    creationYear: '1871',
    description: 'Lorem ipsum',
    id: 'fe2851b6-ef6c-439f-bf47-fc934d356511',
    institutionType: 'PRIVATE',
    internationalStudents: 700,
    logo: 'a340753b-28d6-40da-8f2c-72b5379ec66c',
    name: 'EM Normandie',
    programs: { nextToken: null },
    published: true,
    slug: 'em-normandie-paris',
    stepsTemplates: [{ targets: ['all'] }],
    totalStudents: 4500,
    updatedAt: '2020-09-23T11:32:28.030Z'
} as unknown as NonNullable<NonNullable<GetSchoolBySlugQuery['getSchoolBySlug']>['items']>[0];

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    isBrowser: jest.fn().mockImplementation(() => true),
    useQuery: () => ({
        data: mockedData
    })
}));

const mockedData = {
    searchPrograms: {
        items: [programs],
        nextToken: '674b32b-3e4e-410c-a26c-f7ghe8123c5'
    }
};

describe('SchoolPage', () => {
    it('can render without crashing', () => {
        render(<SchoolPage programs={programs} school={school} />);

        const name = screen.getByText('EM Normandie');

        expect(name).toBeInTheDocument();
    });

    it('can render a master program', () => {
        render(<SchoolPage programs={programs} school={school} />);

        const programName = screen.getByText(
            'Master of Science in Artificial Intelligence for Marketing Strategy'
        );

        expect(programName).toBeInTheDocument();
    });

    it('can render a bachelor program', () => {
        render(<SchoolPage programs={programs} school={school} />);

        const programName = screen.getByText(
            'Bachelor of Science in Artificial Intelligence for Marketing Strategy'
        );

        expect(programName).toBeInTheDocument();
    });

    it('can render a doctorate program', () => {
        render(<SchoolPage programs={programs} school={school} />);

        const programName = screen.getByText(
            'Doctorate of Science in Artificial Intelligence for Marketing Strategy'
        );

        expect(programName).toBeInTheDocument();
    });

    it('can render a certificate program', () => {
        render(<SchoolPage programs={programs} school={school} />);

        const programName = screen.getByText(
            'Certificate of Science in Artificial Intelligence for Marketing Strategy'
        );

        expect(programName).toBeInTheDocument();
    });

    it('does not render a non published program', () => {
        render(<SchoolPage programs={programs} school={school} />);

        const programName = screen.queryByText('Master of Ninja Science');

        expect(programName).not.toBeInTheDocument();
    });

    it('can render a loading message if fallback', () => {
        mockIsFallback = true;

        render(<SchoolPage programs={programs} school={school} />);

        const loading = screen.getByText('Loading...');

        expect(loading).toBeInTheDocument();
    });
});
