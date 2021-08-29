import { GetProgramBySlugQuery } from '@applyfuture/graphql';
import ProgramPage from '@pages/programs/[slug]';
import { render, screen } from '@testing-library/react';
let mockIsFallback = false;

jest.mock('next/router', () => ({
    useRouter() {
        return {
            isFallback: mockIsFallback,
            locale: 'en'
        };
    }
}));

const program = ({
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
} as unknown) as NonNullable<NonNullable<GetProgramBySlugQuery['getProgramBySlug']>['items']>[0];

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, unknown>),
    useAuthenticatedUser: jest.fn().mockImplementation(() => ({
        user: {
            attributes: {
                email: 'awesome.student@gmail.com'
            }
        }
    })),
    useQuery: () => ({
        data: {},
        isLoading: false
    })
}));

const mockedCheckCompletion = jest.fn().mockImplementation(() => true);
const mockedCheckEligibility = jest.fn().mockImplementation(() => ({
    isEligible: true,
    reasons: []
}));

describe.skip('ProgramPage', () => {
    beforeAll(() => {
        jest.mock('@applyfuture/utils', () => ({
            checkCompletion: mockedCheckCompletion,
            checkEligibility: mockedCheckEligibility
        }));
    });

    it('can render without crashing', () => {
        render(<ProgramPage program={program} />);

        const name = screen.getByText(
            'Master of Science in Artificial Intelligence for Marketing Strategy'
        );

        expect(name).toBeInTheDocument();
    });

    it('can render a loading message if fallback', () => {
        mockIsFallback = true;

        render(<ProgramPage program={program} />);

        const loading = screen.getByText('Loading...');

        expect(loading).toBeInTheDocument();
    });

    it('can render disabled if not eligible', () => {
        mockIsFallback = false;

        mockedCheckEligibility.mockImplementation(() => ({
            isEligible: false,
            reasons: []
        }));

        render(<ProgramPage program={program} />);

        const button = screen.getByText('programs:not-eligible');

        expect(button).toBeInTheDocument();
    });

    it('can render disabled if not eligible', () => {
        mockIsFallback = false;

        mockedCheckEligibility.mockImplementation(() => ({
            isEligible: false,
            reasons: []
        }));

        render(<ProgramPage program={program} />);

        const button = screen.getByText('programs:not-eligible');

        expect(button).toBeInTheDocument();
    });
});
