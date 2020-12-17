import IconPanel from '@components/core/icon-panel/IconPanel';
import { faBook } from '@fortawesome/pro-light-svg-icons';
import { render, screen } from '@testing-library/react';

describe('IconPanel', () => {
    it('can render without crashing', () => {
        render(
            <IconPanel icon={faBook} label="GPA">
                3
            </IconPanel>
        );

        const icon = screen.getByRole('img', { hidden: true });
        const label = screen.getByText('GPA');
        const value = screen.getByText('3');

        expect(icon).toBeInTheDocument();
        expect(label).toBeInTheDocument();
        expect(value).toBeInTheDocument();
    });
});
