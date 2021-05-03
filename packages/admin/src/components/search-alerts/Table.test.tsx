import { SearchSearchAlertsQuery } from '@applyfuture/graphql';
import Table from '@components/search-alerts/Table';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const mockedData = ({
    searchSearchAlerts: {
        items: [
            {
                createdAt: '2021-04-28T20:51:13.189Z',
                id: '70639471-d622-4500-b5ac-af0117be64d8',
                lastUpdate: 1619643071145,
                nextToken: '1.61964307E12',
                owner: '2f54fbbb-7249-47f3-9ceb-385e4364f33b',
                query:
                    '{"filter":{"or":[{"name":{"matchPhrasePrefix":"bxl"}},{"city":{"matchPhrasePrefix":"bxl"}},{"country":{"matchPhrasePrefix":"bxl"}},{"schoolName":{"matchPhrasePrefix":"bxl"}}],"published":{"eq":true}},"limit":20}',
                student: {
                    address: '',
                    birthday: null,
                    city: '',
                    country: '',
                    createdAt: '2021-03-28T13:55:30.017Z',
                    degrees: null,
                    disciplines: null,
                    educationCountry: '',
                    email: 'test@hotmail.com',
                    fatherFirstName: '',
                    fatherLastName: '',
                    favoritePrograms: null,
                    favoriteSchools: null,
                    firstLanguage: '',
                    firstName: '',
                    gender: '',
                    gradePointAverage: 0,
                    guardianFirstName: '',
                    guardianLastName: '',
                    hasMandatoryDocuments: null,
                    highestEducationLevel: -1,
                    id: '8e5384fd-3686-4e80-b945-21bc052c6ed6',
                    lastName: '',
                    lastUpdate: 1616939727945,
                    locale: null,
                    maritalStatus: '',
                    middleName: '',
                    modalProfileCompletedViewed: null,
                    motherFirstName: '',
                    motherMaidenName: '',
                    nationality: '',
                    owner: '2f54fbbb-7249-47f3-9ceb-385e4364f33b',
                    parentsAddress: '',
                    parentsCity: '',
                    parentsCountry: '',
                    parentsEmail: '',
                    parentsPhoneNumber: '',
                    passportNumber: '',
                    phoneNumber: '',
                    refusedVisa: null,
                    refusedVisaReason: '',
                    testCambridgeAdvanced: null,
                    testCambridgeAdvancedDate: null,
                    testCambridgeFirst: null,
                    testCambridgeFirstDate: null,
                    testCeliCilsItPlida: null,
                    testCeliCilsItPlidaDate: null,
                    testDele: null,
                    testDeleDate: null,
                    testDelfdalf: null,
                    testDelfdalfDate: null,
                    testEnglishPending: null,
                    testGmat: null,
                    testGmatDate: null,
                    testGoethe: null,
                    testGoetheDate: null,
                    testGre: null,
                    testGreDate: null,
                    testIelts: null,
                    testIeltsDate: null,
                    testLogicAndReasoningPending: null,
                    testOtherLanguagesPending: null,
                    testTagemage: null,
                    testTagemageDate: null,
                    testTcftef: null,
                    testTcftefDate: null,
                    testToefl: null,
                    testToeflDate: null,
                    testToeic: null,
                    testToeicDate: null,
                    updatedAt: '2021-03-28T13:55:30.017Z',
                    validVisa: null
                },
                studentId: '8e5384fd-3686-4e80-b945-21bc052c6ed6',
                total: 1,
                type: 'Programs',
                updatedAt: '2021-04-28T20:51:13.189Z'
            }
        ],
        nextToken: '1.61964307E12'
    }
} as unknown) as SearchSearchAlertsQuery;

describe('Table', () => {
    const handleContextMenu = jest.fn();
    const setVariables = jest.fn();

    it('can render without crashing', () => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const email = screen.getByText('test@hotmail.com');

        expect(email).toBeInTheDocument();
    });

    it('can search data', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const searchInput = screen.getByPlaceholderText(/search/i);

        userEvent.type(searchInput, 'test@hotmail.com');

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can reset search', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const searchInput = screen.getByPlaceholderText(/search/i);

        userEvent.type(searchInput, 'test@hotmail.com');
        userEvent.clear(searchInput);

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can filter data', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const nameFilterInput = screen.getAllByPlaceholderText(/filter/i)[1];

        userEvent.type(nameFilterInput, 'test@hotmail.com');

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can reset filter', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const nameFilterInput = screen.getAllByPlaceholderText(/filter/i)[1];

        userEvent.type(nameFilterInput, 'test@hotmail.com');
        userEvent.clear(nameFilterInput);

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can sort data', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const nameHeader = screen.getAllByRole('button')[2];

        act(() => {
            userEvent.click(nameHeader, undefined, { skipHover: true });
        });

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can reset column width', () => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const resetWidthsButton = screen.getAllByRole('button')[0];

        userEvent.click(resetWidthsButton);
    });
});
