import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { Translation, Values } from '@pages/index';
import { fireEvent, render, screen } from '@testing-library/react';
import { useState as useStateMock } from 'react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

/* jest.mock('react', () => ({
    ...(jest.requireActual('react') as Record<string, unknown>),
    useState: jest.fn()
})); */

// ERROR : TypeError: _react.useState.mockImplementation is not a function

describe('DashboardLayout', () => {
    const setOpenMobileMenu = jest.fn();

    /* beforeEach(() => {
        (useStateMock as jest.Mock).mockImplementation((init) => [init, setOpenMobileMenu]);
    }); */

    /* afterEach(() => {
        jest.clearAllMocks();
    }); */

    const displayForm = false;
    const filter = 'TRANSLATED';
    const handleFilter = jest.fn();
    const handleSearch = jest.fn();
    const handleSelected = jest.fn();
    const handleToggleDisplayForm = jest.fn();
    const isLoading = false;
    const selected = 'namespace';
    const translations = [
        {
            key: 'bonjour',
            namespace: 'namespace',
            values: { en: 'hello', fr: 'bonjour', zh: '你好' } as Values
        },
        {
            key: 'au revoir',
            namespace: 'namespace',
            values: { en: 'goodbye', fr: 'au revoir', zh: '' } as Values
        }
    ] as Translation[];

    it('can render without crashing', () => {
        render(
            <DashboardLayout
                description="Lorem ipsum"
                displayForm={displayForm}
                filter={filter}
                handleFilter={handleFilter}
                handleSearch={handleSearch}
                handleSelected={handleSelected}
                handleToggleDisplayForm={handleToggleDisplayForm}
                isLoading={isLoading}
                selected={selected}
                title="Hello World"
                translations={translations}>
                Hello World
            </DashboardLayout>
        );

        const children = screen.getByText('Hello World');

        expect(children).toBeInTheDocument();
    });

    it.skip('can call the open mobile menu callback function when clicking on an anchor', () => {
        render(
            <DashboardLayout
                description="Lorem ipsum"
                displayForm={displayForm}
                filter={filter}
                handleFilter={handleFilter}
                handleSearch={handleSearch}
                handleSelected={handleSelected}
                handleToggleDisplayForm={handleToggleDisplayForm}
                isLoading={isLoading}
                selected={selected}
                title="Hello World"
                translations={translations}>
                Hello World
            </DashboardLayout>
        );

        const openAnchor = screen.getByLabelText(/open/i);
        fireEvent.click(openAnchor);

        expect(setOpenMobileMenu).toHaveBeenNthCalledWith(1, true);
    });
});
