import { render, screen } from '@testing-library/react';

import { SubHeader } from './SubHeader';

describe('SubHeader', () => {
    const actionComponents = [
        <button key={0}>Add to favorites</button>,
        <button key={1}>Apply</button>
    ];

    const subtitleComponents = [
        <div key={0}>Awesome School</div>,
        <div key={1}>Paris, France</div>,
        <div key={2}>Program ID : 29X13</div>
    ];

    it('can render without crashing', () => {
        render(
            <SubHeader
                actionComponents={actionComponents}
                src=""
                subtitleComponents={subtitleComponents}
                title="Awesome Program in Business"
            />
        );

        const logo = screen.getAllByRole('img')[0];
        const title = screen.getByText('Awesome Program in Business');
        const schoolName = screen.getByText('Awesome School');
        const location = screen.getByText('Paris, France');
        const programId = screen.getByText('Program ID : 29X13');
        const secondaryAction = screen.getByText('Add to favorites');
        const primaryAction = screen.getByText('Apply');

        expect(logo).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(schoolName).toBeInTheDocument();
        expect(location).toBeInTheDocument();
        expect(programId).toBeInTheDocument();
        expect(secondaryAction).toBeInTheDocument();
        expect(primaryAction).toBeInTheDocument();
    });
});
