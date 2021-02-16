import { Program } from '@applyfuture/models';
import Row from '@components/programs/row/Row';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    } as Program;

    const onClick = jest.fn();

    it('can render without crashing', () => {
        render(<Row program={program} onClick={onClick} />);

        const name = screen.getByText('Master’s Degree in Business Administration - MBA');

        expect(name).toBeInTheDocument();
    });

    it('can call onClick callback function when clicking the CTA button', async () => {
        render(<Row program={program} onClick={onClick} />);

        const button = screen.getByRole('button');

        await waitFor(() => {
            userEvent.click(button);
        });

        expect(onClick).toHaveBeenCalled();
    });
});
