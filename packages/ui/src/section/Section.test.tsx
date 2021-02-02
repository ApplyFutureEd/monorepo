import { render, screen } from '@testing-library/react';

import { Section } from './Section';

describe('Section', () => {
    it('can render without crashing', () => {
        render(
            <Section description="Available programs" title="Programs">
                <div>Lorem ipsum</div>
            </Section>
        );

        const title = screen.getByText('Programs');
        const description = screen.getByText('Available programs');
        const content = screen.getByText('Lorem ipsum');

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(content).toBeInTheDocument();
    });

    it('can render with optional label', () => {
        render(
            <Section optional title="Programs">
                <div>Lorem ipsum</div>
            </Section>
        );

        const title = screen.getByText('Programs');
        const optionalLabel = screen.getByText(/common:optional/i);

        expect(title).toBeInTheDocument();
        expect(optionalLabel).toBeInTheDocument();
    });

    it('can render a skeleton when loading', () => {
        const { container } = render(
            <Section description="Available programs" isLoading={true} title="Programs">
                <div>Lorem ipsum</div>
            </Section>
        );

        const skeleton = container.querySelector('.react-loading-skeleton');

        expect(skeleton).toBeInTheDocument();
    });
});
