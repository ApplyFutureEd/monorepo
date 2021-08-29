import ProfileActionPanel from '@components/programs/profile-action-panel/ProfileActionPanel';
import { render, screen } from '@testing-library/react';

describe.skip('ProfileActionPanel', () => {
    it('can render without crashing', () => {
        render(<ProfileActionPanel />);

        const title = screen.getByText('programs:profile-action-panel-title');

        expect(title).toBeInTheDocument;
    });
});
