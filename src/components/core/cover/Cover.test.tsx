import Cover from '@components/core/cover/Cover';
import { render, screen } from '@testing-library/react';

describe('Cover', () => {
    it('can render without crashing', () => {
        render(<Cover alt="" src="" />);

        const cover = screen.getByRole('img');

        expect(cover).toBeInTheDocument();
    });
});
