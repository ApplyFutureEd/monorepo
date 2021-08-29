import SchoolReviewProgress from '@components/applications/timeline/school-review/SchoolReviewProgress';
import { render, screen } from '@testing-library/react';

describe.skip('SchoolReviewProgress', () => {
    it('can render without crashing', () => {
        render(<SchoolReviewProgress />);

        const description = screen.getByText('application:timeline-step-school-review-description');

        expect(description).toBeInTheDocument;
    });
});
