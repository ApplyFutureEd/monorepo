import { render, screen } from '@testing-library/react';

import { Stepper } from './Stepper';

describe('Stepper', () => {
    const steps = ['Your project', 'Your information', 'Your results'];

    it('can render without crashing', () => {
        render(<Stepper currentStep={0} steps={steps} />);

        const firstStep = screen.getAllByText(/your project/i)[0];
        const secondStep = screen.getAllByText(/your information/i)[0];
        const thirdStep = screen.getAllByText(/your results/i)[0];

        expect(firstStep).toBeInTheDocument();
        expect(secondStep).toBeInTheDocument();
        expect(thirdStep).toBeInTheDocument();
    });

    it('can render a skeleton when loading', () => {
        const { container } = render(<Stepper isLoading currentStep={0} steps={steps} />);

        const skeleton = container.querySelector('.react-loading-skeleton');

        expect(skeleton).toBeInTheDocument();
    });
});
