import { render, screen } from '@testing-library/react';

import { Cover } from './Cover';

describe('Cover', () => {
    it('can render without crashing', () => {
        render(<Cover alt="" src="" />);

        const cover = screen.getByRole('img');

        expect(cover).toBeInTheDocument();
    });
});
