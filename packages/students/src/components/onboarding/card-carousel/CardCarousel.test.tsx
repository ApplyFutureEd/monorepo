import { GetProgramBySchoolQuery } from '@applyfuture/graphql';
import CardCarousel from '@components/onboarding/card-carousel/CardCarousel';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en',
            push: jest.fn()
        };
    }
}));

jest.mock('@applyfuture/utils', () => ({
    ...(jest.requireActual('@applyfuture/utils') as Record<string, any>),
    useAuthenticatedUser: jest.fn().mockImplementation(() => ({
        user: {
            attributes: {
                email: 'awesome.student@gmail.com'
            }
        }
    }))
}));

describe('CardCarousel', () => {
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
        slug: 'masters-degree-in-business-administration-mba-ucam-universidad-catolica-san-antonio-de-murcia-murcia'
    } as NonNullable<NonNullable<GetProgramBySchoolQuery['getProgramBySchool']>['items']>[0];

    it('can render without crashing', () => {
        render(<CardCarousel program={program} />);

        const name = screen.getByText('Master’s Degree in Business Administration - MBA');

        expect(name).toBeInTheDocument();
    });

    it('can handle routing on click', () => {
        render(<CardCarousel program={program} />);

        const name = screen.getByText('Master’s Degree in Business Administration - MBA');

        userEvent.click(name);
    });
});
