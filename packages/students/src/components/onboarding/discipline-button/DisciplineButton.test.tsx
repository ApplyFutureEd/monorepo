import { disciplines } from '@applyfuture/utils';
import DisciplineButton from '@components/onboarding/discipline-button/DisciplineButton';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const discipline = disciplines[0];
const handleClick = jest.fn();

describe('DisciplineButton', () => {
    it('can render without crashing', () => {
        render(
            <DisciplineButton
                key={discipline.value}
                handleClick={handleClick}
                icon={discipline.icon}
                label={discipline.label}
                toggle={false}
                value={discipline.value}
            />
        );

        const text = screen.getByText('business-management-and-economics');

        expect(text).toBeInTheDocument();
    });

    it('can handle click', () => {
        render(
            <DisciplineButton
                key={discipline.value}
                handleClick={handleClick}
                icon={discipline.icon}
                label={discipline.label}
                toggle={false}
                value={discipline.value}
            />
        );

        const button = screen.getByRole('button');

        userEvent.click(button);

        expect(handleClick).toHaveBeenCalledWith('BUSINESS_MANAGEMENT_AND_ECONOMICS');
    });
});
