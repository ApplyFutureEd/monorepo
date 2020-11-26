import Process from '@components/landing/root/process/Process';
import { render, screen } from '@testing-library/react';

describe('Process', () => {
    it('can render without crashing', () => {
        render(<Process />);

        const heading = screen.getAllByRole('heading')[0];

        expect(heading).toBeInTheDocument();
    });
});
