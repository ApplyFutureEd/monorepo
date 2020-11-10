import Button from '@components/core/button/Button';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    const baseClasses =
        'items-center rounded-md border inline-flex text-base font-medium leading-6 px-4 py-2 duration-150 transition ease-in-out';
    const primaryClasses =
        'hover:bg-indigo-500 bg-indigo-600 active:bg-indigo-700 focus:border-indigo-700 border-transparent focus:shadow-outline-indigo focus:outline-none text-white';
    const secondaryClasses =
        'active:bg-gray-50 bg-white border-gray-300 focus:outline-none hover:text-gray-500 text-gray-700 active:text-gray-800';
    const dangerClasses =
        'hover:bg-red-500 bg-red-600 focus:border-red-700 border-transparent focus:shadow-outline-red focus:outline-none text-white';
    const disabledClasses = 'bg-indigo-100 border-transparent cursor-not-allowed text-gray-500';

    it('can render without crashing', () => {
        render(<Button variant="primary">Apply</Button>);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    it('can render text', () => {
        render(<Button variant="primary">Apply</Button>);

        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('Apply');
    });

    it('can render a primary variant button', () => {
        render(<Button variant="primary">Apply</Button>);

        const button = screen.getByRole('button');

        expect(button).toHaveClass(baseClasses);
        expect(button).toHaveClass(primaryClasses);
        expect(button).not.toHaveClass(secondaryClasses);
        expect(button).not.toHaveClass(dangerClasses);
        expect(button).not.toHaveClass(disabledClasses);
    });

    it('can render a secondary variant button', () => {
        render(<Button variant="secondary">Apply</Button>);

        const button = screen.getByRole('button');

        expect(button).toHaveClass(baseClasses);
        expect(button).toHaveClass(secondaryClasses);
        expect(button).not.toHaveClass(primaryClasses);
        expect(button).not.toHaveClass(dangerClasses);
        expect(button).not.toHaveClass(disabledClasses);
    });

    it('can render a danger variant button', () => {
        render(<Button variant="danger">Delete</Button>);

        const button = screen.getByRole('button');

        expect(button).toHaveClass(baseClasses);
        expect(button).toHaveClass(dangerClasses);
        expect(button).not.toHaveClass(primaryClasses);
        expect(button).not.toHaveClass(secondaryClasses);
        expect(button).not.toHaveClass(disabledClasses);
    });

    it('can render a disabled button', () => {
        render(
            <Button variant="primary" disabled>
                Apply
            </Button>
        );

        const button = screen.getByRole('button');

        expect(button).toHaveClass(baseClasses);
        expect(button).toHaveClass(disabledClasses);
        expect(button).not.toHaveClass(primaryClasses);
        expect(button).not.toHaveClass(secondaryClasses);
        expect(button).not.toHaveClass(dangerClasses);
    });

    it('can render a button with a start icon', () => {
        render(
            <Button variant="primary" startIcon={faArrowLeft}>
                Previous
            </Button>
        );

        const button = screen.getByRole('button');
        const icon = button.querySelector('svg[role="img"]');

        expect(button).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    });

    it('can render a button with a start icon', () => {
        render(
            <Button variant="primary" endIcon={faArrowRight}>
                Next
            </Button>
        );

        const button = screen.getByRole('button');
        const icon = button.querySelector('svg[role="img"]');

        expect(button).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    });

    it('can render a loading button', () => {
        render(
            <Button variant="primary" loading>
                Apply
            </Button>
        );

        const button = screen.getByRole('button');
        const iconContainer = button.querySelector('.loader');
        const icon = button.querySelector('svg[role="img"]');

        expect(button).toBeInTheDocument();
        expect(iconContainer).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    });
});
