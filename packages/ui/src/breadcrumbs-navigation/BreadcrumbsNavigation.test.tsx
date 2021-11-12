import { render, screen } from '@testing-library/react';

import { BreadcrumbsNavigation } from './BreadcrumbsNavigation';

const pages = [
    { label: 'programs', link: '/programs' },
    { label: 'schools', link: '/schools' },
    { label: 'thisSchool', link: '/schools/this-school' },
    { label: 'thisProgram', link: '/programs/this-program' }
];

describe('BreadcrumbNavigation', () => {
    it('can render without crashing', () => {
        render(<BreadcrumbsNavigation items={pages} />);

        const breadcrumbsNavigation = screen.getByRole('navigation');

        expect(breadcrumbsNavigation).toBeInTheDocument();
    });
});
