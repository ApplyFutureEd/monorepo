import TermsAndConditions from '@components/landing/root/terms-and-conditions/TermsAndConditions';
import { render, screen } from '@testing-library/react';

describe('Collapse', () => {
    it('can render without crashing', () => {
        render(<TermsAndConditions />);

        const text = screen.getByText('breach or omission by the other party');

        expect(text).toBeInTheDocument();
    });
});
