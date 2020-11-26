import Students from '@components/landing/root/students/Students';
import { render, screen } from '@testing-library/react';

describe('Students', () => {
    it('can render without crashing', () => {
        render(<Students />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });
});
