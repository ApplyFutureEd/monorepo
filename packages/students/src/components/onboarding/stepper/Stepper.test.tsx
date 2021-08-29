import Stepper from '@components/onboarding/stepper/Stepper';
import { render, screen } from '@testing-library/react';

const steps = [
    { name: 'country', status: 'DONE' },
    { name: 'highest-education-level', status: 'CURRENT' },
    { name: 'discipline', status: 'UPCOMING' },
    { name: 'degree', status: 'UPCOMING' }
];

describe.skip('Stepper', () => {
    it('can render without crashing', () => {
        render(<Stepper steps={steps} />);

        const countryBullet = screen.getByText('country');

        expect(countryBullet).toBeInTheDocument();
    });
});
