import Students from '@components/landing/students/Students';
import { render, screen } from '@testing-library/react';

describe.skip('Students', () => {
    it('can render without crashing', () => {
        render(<Students />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
