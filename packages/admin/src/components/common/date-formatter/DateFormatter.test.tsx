import { render, screen } from '@testing-library/react';

import DateFormatter from './DateFormatter';

describe.skip('DateFormatter', () => {
    const column = {
        getCellValue: jest.fn(),
        name: 'date',
        title: 'Date'
    };

    it('can render without crashing', async () => {
        render(<DateFormatter column={column} value={new Date('01/01/2021')} />);

        const date = screen.getByText('Jan 2021');

        expect(date).toBeInTheDocument();
    });
});
