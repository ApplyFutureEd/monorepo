import Filters from '@components/programs/filters/Filters';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';

describe('Search', () => {
    const handleFilter = jest.fn();

    it('can render without crashing', () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    it('can open and close the drawer', () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const closeIcon = screen.getByLabelText(/close/);

        userEvent.click(button);
        expect(closeIcon).toBeVisible();

        userEvent.click(closeIcon);
        expect(closeIcon).not.toBeVisible();
    });

    it('can open the drawer and switch tabs', () => {
        const activeClasses =
            'px-1 py-4 text-indigo-600 focus:text-indigo-800 whitespace-no-wrap text-sm font-medium leading-5 border-b-2 border-indigo-500 focus:border-indigo-700 focus:outline-none cursor-pointer';

        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const schoolAndProgramTab = screen.getByText(/programs:side-over-tab-school-and-program/);
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        userEvent.click(button);

        expect(schoolAndProgramTab).toHaveClass(activeClasses);
        expect(eligibilityTab).not.toHaveClass(activeClasses);

        userEvent.click(eligibilityTab);

        expect(schoolAndProgramTab).not.toHaveClass(activeClasses);
        expect(eligibilityTab).toHaveClass(activeClasses);

        userEvent.click(schoolAndProgramTab);

        expect(schoolAndProgramTab).toHaveClass(activeClasses);
        expect(eligibilityTab).not.toHaveClass(activeClasses);
    });

    it('can open the drawer, fill the GPA input with a value too low see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const gpaInput = screen.getByLabelText(/profile:gpa/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await fireEvent.change(gpaInput, {
                target: {
                    value: -1
                }
            });

            await fireEvent.blur(gpaInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText(/common:must-be-superior-validator/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the GPA input with a value too high see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const gpaInput = screen.getByLabelText(/profile:gpa/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await userEvent.clear(gpaInput);

        await act(async () => {
            await fireEvent.change(gpaInput, {
                target: {
                    value: 5
                }
            });

            await fireEvent.blur(gpaInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText(/common:must-be-inferior-or-equal-validator/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the TOELF input with a value too low and see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const toeflInput = screen.getByLabelText(/profile:toefl/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await fireEvent.change(toeflInput, {
                target: {
                    value: 300
                }
            });

            await fireEvent.blur(toeflInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText(/common:must-be-superior-validator/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the TOELF input with a value too high and see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const toeflInput = screen.getByLabelText(/profile:toefl/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await fireEvent.change(toeflInput, {
                target: {
                    value: 900
                }
            });

            await fireEvent.blur(toeflInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText('common:must-be-inferior-or-equal-validator');
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the IELTS input with a value too low and see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const ieltsInput = screen.getByLabelText(/profile:ielts/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await fireEvent.change(ieltsInput, {
                target: {
                    value: -1
                }
            });

            await fireEvent.blur(ieltsInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText(/common:must-be-superior-validator/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the IELTS input with a value too high and see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const ieltsInput = screen.getByLabelText(/profile:ielts/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await fireEvent.change(ieltsInput, {
                target: {
                    value: 10
                }
            });

            await fireEvent.blur(ieltsInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText('common:must-be-inferior-or-equal-validator');
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the TOEIC input with a value too low and see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const toeicInput = screen.getByLabelText(/profile:toeic/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await fireEvent.change(toeicInput, {
                target: {
                    value: -1
                }
            });

            await fireEvent.blur(toeicInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText(/common:must-be-superior-validator/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the TOEIC input with a value too high and see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const toeicInput = screen.getByLabelText(/profile:toeic/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await fireEvent.change(toeicInput, {
                target: {
                    value: 991
                }
            });

            await fireEvent.blur(toeicInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText('common:must-be-inferior-or-equal-validator');
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the GRE input with a value too low and see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const greInput = screen.getByLabelText(/profile:gre/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await fireEvent.change(greInput, {
                target: {
                    value: 259
                }
            });

            await fireEvent.blur(greInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText(/common:must-be-superior-validator/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the GRE input with a value too high and see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const greInput = screen.getByLabelText(/profile:gre/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await fireEvent.change(greInput, {
                target: {
                    value: 345
                }
            });

            await fireEvent.blur(greInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText('common:must-be-inferior-or-equal-validator');
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the GMAT input with a value too low and see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const gmatInput = screen.getByLabelText(/profile:gmat/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await fireEvent.change(gmatInput, {
                target: {
                    value: 199
                }
            });

            await fireEvent.blur(gmatInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText(/common:must-be-superior-validator/);
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the TAGE MAGE input with a value too low and see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const gmatInput = screen.getByLabelText(/profile:gmat/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await fireEvent.change(gmatInput, {
                target: {
                    value: 801
                }
            });

            await fireEvent.blur(gmatInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText('common:must-be-inferior-or-equal-validator');
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the TAGE MAGE input with a value too low and see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const tagemageInput = screen.getByLabelText(/profile:tage-mage/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await fireEvent.change(tagemageInput, {
                target: {
                    value: -1
                }
            });

            await fireEvent.blur(tagemageInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText('common:must-be-superior-validator');
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the TAGE MAGE input with a value too high and see related error message', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const tagemageInput = screen.getByLabelText(/profile:tage-mage/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await fireEvent.change(tagemageInput, {
                target: {
                    value: 601
                }
            });

            await fireEvent.blur(tagemageInput);
        });

        await waitFor(async () => {
            const errorMessage = screen.getByText('common:must-be-inferior-or-equal-validator');
            expect(errorMessage).toBeVisible();
        });
    });

    it('can open the drawer, fill the School & Program tab and submit', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');

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

        expect(handleFilter).toHaveBeenCalled();
    });

    it('can open the drawer, fill the School & Program tab and reset it', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');

        const countryInput = screen.getByLabelText(/programs:country/);
        const cityInput = screen.getByLabelText(/programs:city/);
        const disciplineInput = screen.getByLabelText(/programs:discipline/);
        const degreeInput = screen.getByLabelText(/programs:degree/);
        const minTuitionFeeInput = screen.getByLabelText(/programs:min-tuition-fee/);
        const maxTuitionFeeInput = screen.getByLabelText(/programs:max-tuition-fee/);
        const minApplicationFeeInput = screen.getByLabelText(/programs:min-application-fee/);
        const maxApplicationFeeInput = screen.getByLabelText(/programs:max-application-fee/);

        const resetButton = screen.getByText(/programs:side-over-clear-filters/);

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
            await userEvent.click(resetButton);
        });

        expect(countryInput).toHaveAttribute('value', '');
        expect(cityInput).toHaveAttribute('value', '');
        expect(disciplineInput).toHaveAttribute('value', '');
        expect(degreeInput).toHaveAttribute('value', '');
        expect(minTuitionFeeInput).toHaveAttribute('value', '');
        expect(maxTuitionFeeInput).toHaveAttribute('value', '');
        expect(minApplicationFeeInput).toHaveAttribute('value', '');
        expect(maxApplicationFeeInput).toHaveAttribute('value', '');
    });

    it('can open the drawer, fill the Egibility tab and submit', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const nationalityInput = screen.getByLabelText(/profile:nationality/);
        const educationCountryInput = screen.getByLabelText(/profile:education-country/);
        const highestEducationLevel = screen.getByLabelText(/profile:highest-education-level/);
        const gpaInput = screen.getByLabelText(/profile:gpa/);
        const toeflInput = screen.getByLabelText(/profile:toefl/);
        const ieltsInput = screen.getByLabelText(/profile:ielts/);
        const toeicInput = screen.getByLabelText(/profile:toeic/);
        const fceInput = screen.getByLabelText(/profile:fce/);
        const caeInput = screen.getByLabelText(/profile:cae/);
        const tcftefInput = screen.getByLabelText(/profile:tcf-tef/);
        const delfdalfInput = screen.getByLabelText(/profile:delf-dalf/);
        const greInput = screen.getByLabelText(/profile:gre/);
        const gmatInput = screen.getByLabelText(/profile:gmat/);
        const tagemageInput = screen.getByLabelText(/profile:tage-mage/);

        const submitButton = screen.getByText(/side-over-apply-filters/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await selectEvent.select(nationalityInput, 'common:france');
        });

        await act(async () => {
            await selectEvent.select(educationCountryInput, 'common:france');
        });

        await act(async () => {
            await selectEvent.select(highestEducationLevel, 'programs:grade-12');
        });

        await act(async () => {
            await fireEvent.change(gpaInput, {
                target: {
                    value: 4
                }
            });
        });

        await act(async () => {
            await fireEvent.change(toeflInput, {
                target: {
                    value: 667
                }
            });
        });

        await act(async () => {
            await fireEvent.change(ieltsInput, {
                target: {
                    value: 9
                }
            });
        });

        await act(async () => {
            await fireEvent.change(toeicInput, {
                target: {
                    value: 990
                }
            });
        });

        await act(async () => {
            await selectEvent.select(fceInput, 'A');
        });

        await act(async () => {
            await selectEvent.select(caeInput, 'A');
        });

        await act(async () => {
            await selectEvent.select(tcftefInput, 'C2');
        });

        await act(async () => {
            await selectEvent.select(delfdalfInput, 'C2');
        });

        await act(async () => {
            await fireEvent.change(greInput, {
                target: {
                    value: 344
                }
            });
        });

        await act(async () => {
            await fireEvent.change(gmatInput, {
                target: {
                    value: 800
                }
            });
        });

        await act(async () => {
            await fireEvent.change(tagemageInput, {
                target: {
                    value: 600
                }
            });
        });

        await act(async () => {
            await userEvent.click(submitButton);
        });

        expect(handleFilter).toHaveBeenCalled();
    });

    it('can open the drawer, fill the Egibility tab and reset it', async () => {
        render(<Filters handleFilter={handleFilter} />);

        const button = screen.getByRole('button');
        const eligibilityTab = screen.getByText(/programs:side-over-tab-eligibility/);

        const nationalityInput = screen.getByLabelText(/profile:nationality/);
        const educationCountryInput = screen.getByLabelText(/profile:education-country/);
        const highestEducationLevel = screen.getByLabelText(/profile:highest-education-level/);
        const gpaInput = screen.getByLabelText(/profile:gpa/);
        const toeflInput = screen.getByLabelText(/profile:toefl/);
        const ieltsInput = screen.getByLabelText(/profile:ielts/);
        const toeicInput = screen.getByLabelText(/profile:toeic/);
        const fceInput = screen.getByLabelText(/profile:fce/);
        const caeInput = screen.getByLabelText(/profile:cae/);
        const tcftefInput = screen.getByLabelText(/profile:tcf-tef/);
        const delfdalfInput = screen.getByLabelText(/profile:delf-dalf/);
        const greInput = screen.getByLabelText(/profile:gre/);
        const gmatInput = screen.getByLabelText(/profile:gmat/);
        const tagemageInput = screen.getByLabelText(/profile:tage-mage/);

        const resetButton = screen.getByText(/programs:side-over-clear-filters/);

        await act(async () => {
            await userEvent.click(button);
        });

        await act(async () => {
            await userEvent.click(eligibilityTab);
        });

        await act(async () => {
            await selectEvent.select(nationalityInput, 'common:france');
        });

        await act(async () => {
            await selectEvent.select(educationCountryInput, 'common:france');
        });

        await act(async () => {
            await selectEvent.select(highestEducationLevel, 'programs:grade-12');
        });

        await act(async () => {
            await fireEvent.change(gpaInput, {
                target: {
                    value: 4
                }
            });
        });

        await act(async () => {
            await fireEvent.change(toeflInput, {
                target: {
                    value: 667
                }
            });
        });

        await act(async () => {
            await fireEvent.change(ieltsInput, {
                target: {
                    value: 9
                }
            });
        });

        await act(async () => {
            await fireEvent.change(toeicInput, {
                target: {
                    value: 990
                }
            });
        });

        await act(async () => {
            await selectEvent.select(fceInput, 'A');
        });

        await act(async () => {
            await selectEvent.select(caeInput, 'A');
        });

        await act(async () => {
            await selectEvent.select(tcftefInput, 'C2');
        });

        await act(async () => {
            await selectEvent.select(delfdalfInput, 'C2');
        });

        await act(async () => {
            await fireEvent.change(greInput, {
                target: {
                    value: 344
                }
            });
        });

        await act(async () => {
            await fireEvent.change(gmatInput, {
                target: {
                    value: 800
                }
            });
        });

        await act(async () => {
            await fireEvent.change(tagemageInput, {
                target: {
                    value: 600
                }
            });
        });

        await act(async () => {
            await userEvent.click(resetButton);
        });

        expect(nationalityInput).toHaveAttribute('value', '');
        expect(educationCountryInput).toHaveAttribute('value', '');
        expect(highestEducationLevel).toHaveAttribute('value', '');
        expect(toeflInput).toHaveAttribute('value', '');
        expect(ieltsInput).toHaveAttribute('value', '');
        expect(toeicInput).toHaveAttribute('value', '');
        expect(fceInput).toHaveAttribute('value', '');
        expect(caeInput).toHaveAttribute('value', '');
        expect(tcftefInput).toHaveAttribute('value', '');
        expect(delfdalfInput).toHaveAttribute('value', '');
        expect(greInput).toHaveAttribute('value', '');
        expect(gmatInput).toHaveAttribute('value', '');
        expect(tagemageInput).toHaveAttribute('value', '');
    });
});
