import { render, screen } from '@testing-library/react';

import NoApplicationPanel from './NoApplicationPanel';

describe.skip('NoApplicationPanel', () => {
    it('can render without crashing', () => {
        render(<NoApplicationPanel isCompleted={false} />);

        const title = screen.getByText('application:complete-your-profile-cta');

        expect(title).toBeInTheDocument();
    });

    it('can render completed variant without crashing', () => {
        render(<NoApplicationPanel isCompleted={true} />);

        const title = screen.getByText('application:start-first-application-now-cta');

        expect(title).toBeInTheDocument();
    });
});
