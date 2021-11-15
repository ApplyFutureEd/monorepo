import { render, screen } from '@testing-library/react';

import Tabs from './Tabs';

describe('Tabs', () => {
    const handleSelected = jest.fn();
    const selected = 'account';

    it('can render without crashing', () => {
        render(<Tabs handleSelected={handleSelected} selected={selected} />);

        const tab = screen.getByText('Account');

        expect(tab).toBeInTheDocument();
    });
});
