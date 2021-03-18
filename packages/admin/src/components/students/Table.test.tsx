import { SearchStudentsQuery } from '@applyfuture/graphql';
import Table from '@components/students/Table';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const mockedData = ({
    searchStudents: {
        items: [
            {
                address: '',
                applications: {
                    nextToken: null
                },
                birthday: null,
                city: '',
                country: '',
                createdAt: '2021-02-17T16:52:20.353Z',
                degrees: null,
                disciplines: null,
                documents: {
                    nextToken: null
                },
                educationCountry: '',
                email: 'awesome.student@gmail.com',
                fatherFirstName: '',
                fatherLastName: '',
                favoritePrograms: null,
                favoriteSchools: null,
                firstLanguage: '',
                firstName: 'John',
                gender: '',
                gradePointAverage: 0,
                guardianFirstName: '',
                guardianLastName: '',
                hasMandatoryDocuments: null,
                highestEducationLevel: -1,
                id: 'c0a0a830-0de4-4cad-8d46-30231e2e93dc',
                lastName: '',
                locale: null,
                maritalStatus: '',
                middleName: '',
                modalProfileCompletedViewed: null,
                motherFirstName: '',
                motherMaidenName: '',
                nationality: '',
                notifications: null,
                owner: 'e93a8261-7392-42ff-9331-1d33f0fdb589',
                parentsAddress: '',
                parentsCity: '',
                parentsCountry: '',
                parentsEmail: '',
                parentsPhoneNumber: '',
                passportNumber: '',
                phoneNumber: '',
                refusedVisa: null,
                refusedVisaReason: '',
                schoolsAttended: [
                    {
                        address: '',
                        attendedInstitutionFrom: null,
                        attendedInstitutionTo: null,
                        city: '',
                        country: '',
                        degreeAwarded: -1,
                        degreeAwardedOn: null,
                        educationLevel: -1,
                        name: '',
                        primaryLanguageInstruction: ''
                    }
                ],
                testCambridgeAdvanced: null,
                testCambridgeAdvancedDate: null,
                testCambridgeFirst: null,
                testCambridgeFirstDate: null,
                testDelfdalf: null,
                testDelfdalfDate: null,
                testEnglishPending: null,
                testOtherLanguagesPending: null,
                testGmat: null,
                testGmatDate: null,
                testGre: null,
                testGreDate: null,
                testIelts: null,
                testIeltsDate: null,
                testLogicAndReasoningPending: null,
                testTagemage: null,
                testTagemageDate: null,
                testTcftef: null,
                testTcftefDate: null,
                testToefl: null,
                testToeflDate: null,
                testToeic: null,
                testToeicDate: null,
                updatedAt: '2021-02-17T16:52:20.353Z',
                validVisa: null,
                workExperiences: [
                    {
                        address: '',
                        compagnyName: '',
                        title: '',
                        workedFrom: null,
                        workedTo: null
                    }
                ]
            }
        ],
        nextToken: '674b32b-3e4e-410c-a26c-f7ghe8123c5',
        total: 1
    }
} as unknown) as SearchStudentsQuery;

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

        const student = screen.getByText('awesome.student@gmail.com');

        expect(student).toBeInTheDocument();
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

        userEvent.type(searchInput, 'awesome.student@gmail.com');

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

        userEvent.type(searchInput, 'awesome.student@gmail.com');
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

        userEvent.type(nameFilterInput, 'awesome.student@gmail.com');

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

        userEvent.type(nameFilterInput, 'John');
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
