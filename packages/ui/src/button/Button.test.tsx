import { faArrowLeft, faArrowRight } from '@fortawesome/pro-light-svg-icons';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
    const baseClasses =
        'min-h-button inline-flex items-center px-4 py-2 font-sans text-base font-medium leading-6 border rounded-md transition duration-150 ease-in-out';
    const primaryClasses =
        'text-white hover:bg-indigo-500 bg-indigo-600 active:bg-indigo-700 focus:border-indigo-700 border-transparent focus:outline-none focus:ring-indigo';
    const secondaryClasses =
        'hover:text-gray-500 text-gray-700 active:text-gray-800 active:bg-gray-50 bg-white border-gray-300 focus:outline-none';
    const successClasses =
        'text-white bg-green-400 focus:border-green-700 border-transparent focus:outline-none focus:ring-green cursor-default';
    const dangerClasses =
        'text-white hover:bg-red-500 bg-red-600 focus:border-red-700 border-transparent focus:outline-none focus:ring-red';
    const disabledClasses = 'text-gray-500 bg-indigo-100 border-transparent cursor-not-allowed';

    it('can render a button without crashing', () => {
        render(<Button>Apply</Button>);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    it('can render a button with text', () => {
        render(<Button>Apply</Button>);

        const button = screen.getByRole('button');

        expect(button).toHaveTextContent('Apply');
    });

    it('can render a primary variant button', () => {
        render(<Button variant="primary">Apply</Button>);

        const button = screen.getByRole('button');

        expect(button).toHaveClass(baseClasses);
        expect(button).toHaveClass(primaryClasses);
        expect(button).not.toHaveClass(secondaryClasses);
        expect(button).not.toHaveClass(successClasses);
        expect(button).not.toHaveClass(dangerClasses);
        expect(button).not.toHaveClass(disabledClasses);
    });

    it('can render a secondary variant button', () => {
        render(<Button variant="secondary">Apply</Button>);

        const button = screen.getByRole('button');

        expect(button).toHaveClass(baseClasses);
        expect(button).toHaveClass(secondaryClasses);
        expect(button).not.toHaveClass(primaryClasses);
        expect(button).not.toHaveClass(successClasses);
        expect(button).not.toHaveClass(dangerClasses);
        expect(button).not.toHaveClass(disabledClasses);
    });

    it('can render a success variant button', () => {
        render(<Button variant="success">Sent</Button>);

        const button = screen.getByRole('button');

        expect(button).toHaveClass(baseClasses);
        expect(button).toHaveClass(successClasses);
        expect(button).not.toHaveClass(primaryClasses);
        expect(button).not.toHaveClass(secondaryClasses);
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
        expect(button).not.toHaveClass(successClasses);
        expect(button).not.toHaveClass(disabledClasses);
    });

    it('can render a disabled button', () => {
        render(
            <Button disabled variant="primary">
                Apply
            </Button>
        );

        const button = screen.getByRole('button');

        expect(button).toHaveClass(baseClasses);
        expect(button).toHaveClass(disabledClasses);
        expect(button).not.toHaveClass(primaryClasses);
        expect(button).not.toHaveClass(secondaryClasses);
        expect(button).not.toHaveClass(successClasses);
        expect(button).not.toHaveClass(dangerClasses);
    });

    it('can render a button with a start icon', () => {
        render(
            <Button startIcon={faArrowLeft} variant="primary">
                Previous
            </Button>
        );

        const button = screen.getByRole('button');
        const icon = button.querySelector('svg[role="img"]');

        expect(button).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    });

    it('can render a button with a end icon', () => {
        render(
            <Button endIcon={faArrowRight} variant="primary">
                Next
            </Button>
        );

        const button = screen.getByRole('button');
        const icon = button.querySelector('svg[role="img"]');

        expect(button).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    });

    it('can render a submitting button', () => {
        render(
            <Button isSubmitting variant="primary">
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

    it('can render a loading button', () => {
        const { container } = render(
            <Button isLoading variant="primary">
                Apply
            </Button>
        );

        const skeleton = container.querySelector('.react-loading-skeleton');

        expect(skeleton).toBeInTheDocument();
    });
});
