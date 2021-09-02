import { render, screen } from '@testing-library/react';

import StatusIcon from './StatusIcon';

describe('StatusIcon', () => {
    it('can render idle icon', () => {
        render(<StatusIcon status="IDLE" />);

        const icon = screen.getByRole('img', { hidden: true });

        expect(icon).toBeInTheDocument();
    });

    it('can render progress icon', () => {
        render(<StatusIcon status="PROGRESS" />);

        const icon = screen.getByRole('img', { hidden: true });

        expect(icon).toBeInTheDocument();
    });

    it('can render done icon', () => {
        render(<StatusIcon status="DONE" />);

        const icon = screen.getByRole('img', { hidden: true });

        expect(icon).toBeInTheDocument();
    });

    it('can render error icon', () => {
        render(<StatusIcon status="ERROR" />);

        const icon = screen.getByRole('img', { hidden: true });

        expect(icon).toBeInTheDocument();
    });
});
