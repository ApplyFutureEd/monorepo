import SchoolInterviewProgress from '@components/applications/timeline/school-interview/SchoolInterviewProgress';
import { render, screen } from '@testing-library/react';

describe('SchoolInterviewProgress', () => {
    it('can render without crashing', () => {
        render(<SchoolInterviewProgress />);

        const description = screen.getByText(
            'application:timeline-step-school-interview-description'
        );

        expect(description).toBeInTheDocument;
    });
});
