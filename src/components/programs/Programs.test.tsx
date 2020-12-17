import Programs from '@components/programs/Programs';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import selectEvent from 'react-select-event';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

let mockedData = {
    searchPrograms: {
        items: [
            {
                city: 'Paris',
                country: 'FR',
                duration: 39420000,
                durationUnit: 'month',
                fee: 18200,
                feeCurrency: 'EUR',
                feeUnit: 'total-fee',
                id: '28f4b32b-a65e-479c-a26c-f7d8e8939dc5',
                intakes: '2021-09-18T00:00:00.000Z, 2022-09-18T00:00:00.000Z',
                name: 'Master of Science in Creative Project Management, Culture and Design',
                school: '6c13495b-cb3a-4ee1-ae7b-f8240ea8a10c',
                slug:
                    'master-of-science-in-creative-project-management-culture-and-design-rennes-school-of-business-rennes'
            }
        ],
        nextToken: '674b32b-3e4e-410c-a26c-f7ghe8123c5'
    }
};
const mockedFetchMore = jest.fn();
let mockedIsLoading = jest.fn().mockReturnValue(false);

jest.mock('@utils/hooks/useQuery', () => ({
    useQuery() {
        return {
            data: mockedData,
            fetchMore: mockedFetchMore,
            isLoading: mockedIsLoading()
        };
    }
}));

jest.mock('@utils/hooks/usePageBottom', () => ({
    usePageBottom() {
        return true;
    }
}));

describe('Programs', () => {
    it('can render without crashing', () => {
        render(<Programs />);

        const title = screen.getByText(/programs:programs/);

        expect(title).toBeInTheDocument();
    });

    it('can call fetchMore callback function when the bottom of the page is reached and isLoading is false', () => {
        render(<Programs />);

        expect(mockedFetchMore).toHaveBeenCalled();
    });

    it('can call onClick callback function when clicking on Apply button', async () => {
        render(<Programs />);

        const button = screen.getByText('programs:apply');

        await userEvent.click(button);
    });

    it('can call display skeletons when isLoading is true', async () => {
        mockedIsLoading = jest.fn().mockReturnValue(true);

        render(<Programs />);

        const button = screen.getByText('programs:apply');

        await userEvent.click(button);
    });

    it('can handle the search', async () => {
        render(<Programs />);

        const input = screen.getByRole('textbox');

        await act(async () => {
            await userEvent.type(input, 'Business');
        });
    });

    it('can handle the filters', async () => {
        render(<Programs />);

        const button = screen.getAllByRole('button')[0];

        const countryInput = screen.getByLabelText(/programs:country/);
        const cityInput = screen.getByLabelText(/programs:city/);
        const disciplineInput = screen.getByLabelText(/programs:discipline/);
        const degreeInput = screen.getByLabelText(/programs:degree/);
        const minTuitionFeeInput = screen.getByLabelText(/programs:min-tuition-fee/);
        const maxTuitionFeeInput = screen.getByLabelText(/programs:max-tuition-fee/);
        const minApplicationFeeInput = screen.getByLabelText(/programs:min-application-fee/);
        const maxApplicationFeeInput = screen.getByLabelText(/programs:max-application-fee/);

        const submitButton = screen.getByText(/side-over-apply-filters/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await selectEvent.select(countryInput, ['common:france']);
        });

        await act(async () => {
            await selectEvent.select(cityInput, ['Paris', 'Bordeaux']);
        });

        await act(async () => {
            await selectEvent.select(disciplineInput, [
                'profile:business-management-and-economics',
                'profile:engineering-and-technology'
            ]);
        });

        await act(async () => {
            await selectEvent.select(degreeInput, [
                'profile:master-degree',
                'profile:bachelor-degree'
            ]);
        });

        await act(async () => {
            await fireEvent.change(minTuitionFeeInput, {
                target: {
                    value: 3000
                }
            });
        });

        await act(async () => {
            await fireEvent.change(maxTuitionFeeInput, {
                target: {
                    value: 12000
                }
            });
        });

        await act(async () => {
            await fireEvent.change(minApplicationFeeInput, {
                target: {
                    value: 12000
                }
            });
        });

        await act(async () => {
            await fireEvent.change(maxApplicationFeeInput, {
                target: {
                    value: 100
                }
            });
        });

        await act(async () => {
            await userEvent.click(submitButton);
        });
    });

    it('can handle the sort by', () => {
        render(<Programs />);

        const button = screen.getAllByRole('button')[1];

        fireEvent.click(button);

        const alphabeticalOrder = screen.getAllByText(
            /programs:sort-by-option-alphabetical-order/
        )[1];

        fireEvent.click(alphabeticalOrder);
    });

    it('can handle missing data and can render without crashing', () => {
        mockedData = {
            searchPrograms: {
                items: [{ school: '' }] as any,
                nextToken: ''
            }
        };

        render(<Programs />);

        const title = screen.getByText(/programs:programs/);

        expect(title).toBeInTheDocument();
    });
});
