import Input from '@components/core/input/Input';
import { render, screen } from '@testing-library/react';

describe('Input', () => {
    const baseClasses = 'form-input py-input-y block w-full sm:text-sm sm:leading-5"';
    const disabledClasses = 'bg-gray-100 cursor-not-allowed';
    const onErrorClasses =
        'placeholder-red-300 pr-10 text-red-900 border-red-300 focus:border-red-300 focus:shadow-outline-red';

    it('can render an input without crashing', () => {
        render(<Input label="First Name" name="firstName" />);

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
    });

    it('can render a default input', () => {
        render(<Input label="First Name" name="firstName" />);

        const input = screen.getByRole('textbox');

        expect(input).toHaveClass(baseClasses);
        expect(input).not.toHaveClass(disabledClasses);
        expect(input).not.toHaveClass(onErrorClasses);
    });

    it('can render an input with a placeholder', () => {
        render(<Input label="Email" name="email" placeholder="Enter your email address" />);

        const input = screen.getByPlaceholderText('Enter your email address');

        expect(input).toBeInTheDocument();
    });

    it('can render an input with a tooltip', () => {
        render(
            <Input
                label="Passport Number"
                name="passportNumber"
                tooltip="We collect your passport information for identity verification proposes, your school or program of interest may require this information to process your application. If applicable, it may also be used for processing your visa."
            />
        );

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
    });

    it('can render an input with optional label', () => {
        render(<Input optional label="Middle Name" name="middleName" />);

        const optionalLabel = screen.getByText(/optional/);

        expect(optionalLabel).toBeInTheDocument();
    });

    it('can render a disabled input', () => {
        render(<Input disabled label="Student ID" name="studentId" />);

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
        expect(input).toHaveClass(baseClasses);
        expect(input).toHaveClass(disabledClasses);
        expect(input).not.toHaveClass(onErrorClasses);
    });

    it('can render an onError input', () => {
        render(
            <Input
                errors={{ firstName: { message: 'This field is required', type: 'required' } }}
                label="First Name"
                name="firstName"
            />
        );

        const input = screen.getByRole('textbox');

        expect(input).toBeInTheDocument();
        expect(input).toHaveClass(baseClasses);
        expect(input).toHaveClass(onErrorClasses);
        expect(input).not.toHaveClass(disabledClasses);
    });

    it('can render a skeleton when loading', () => {
        const { container } = render(<Input isLoading label="First Name" name="firstName" />);

        const skeleton = container.querySelector('.react-loading-skeleton');

        expect(skeleton).toBeInTheDocument();
    });
});
