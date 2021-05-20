/* eslint-disable sort-keys */
import { GetDocumentByStudentQuery } from '@applyfuture/graphql';
import Documents from '@components/applications/documents/Documents';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('Table', () => {
    const refetch = jest.fn();

    const documentsData = ({
        getDocumentByStudent: {
            items: [
                {
                    id: '9eb58915-5e27-4e0d-8666-c83be3a5a71b',
                    studentId: 'a5319bc4-e609-403b-a2af-35ff3f886b31',
                    student: {
                        id: 'a5319bc4-e609-403b-a2af-35ff3f886b31',
                        address: '33 Rue du Général Leclerc, Issy-les-Moulineaux, France',
                        birthday: '2021-03-22T23:00:00.000Z',
                        city: '',
                        country: '',
                        degrees: null,
                        disciplines: null,
                        educationCountry: 'FR',
                        email: 'pcailly@pm.me',
                        fatherFirstName: 'Philippe',
                        fatherLastName: 'CAILLY',
                        firstLanguage: 'FR',
                        firstName: 'Paul',
                        favoritePrograms: null,
                        favoriteSchools: null,
                        gender: 'MALE',
                        gradePointAverage: 4,
                        guardianFirstName: '',
                        guardianLastName: '',
                        hasMandatoryDocuments: null,
                        highestEducationLevel: 5,
                        lastName: 'CAILLY',
                        lastUpdate: 1617502027097,
                        locale: null,
                        maritalStatus: 'SINGLE',
                        middleName: '',
                        modalProfileCompletedViewed: true,
                        phoneNumber: '+33621122955',
                        motherFirstName: 'Juliette',
                        motherMaidenName: 'LANG',
                        nationality: 'FR',
                        parentsAddress: '5 Chemin du Moulin, Fontaine-Simon, France',
                        parentsCity: '',
                        parentsCountry: '',
                        parentsEmail: 'philippe@cailly.eu',
                        parentsPhoneNumber: '+33621122955',
                        passportNumber: 'N1234567',
                        refusedVisa: false,
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
                        testEnglishPending: false,
                        testGmat: null,
                        testGmatDate: null,
                        testGoethe: null,
                        testGoetheDate: null,
                        testGre: null,
                        testGreDate: null,
                        testIelts: null,
                        testIeltsDate: null,
                        testLogicAndReasoningPending: true,
                        testOtherLanguagesPending: true,
                        testTagemage: null,
                        testTagemageDate: null,
                        testTcftef: null,
                        testTcftefDate: null,
                        testToefl: 660,
                        testToeflDate: null,
                        testToeic: null,
                        testToeicDate: null,
                        validVisa: true,
                        createdAt: '2021-03-23T18:49:25.156Z',
                        updatedAt: '2021-04-04T02:07:08.005Z',
                        owner: '6e79f0ea-f81b-4791-bc96-e052ce147d7b'
                    },
                    name: 'toefl',
                    storageKey: 'paul-cailly-A5319B-toefl',
                    createdAt: '2021-04-29T10:47:52.028Z',
                    updatedAt: '2021-04-30T07:44:23.772Z',
                    owner: '6e79f0ea-f81b-4791-bc96-e052ce147d7b'
                }
            ],
            nextToken: null
        }
    } as unknown) as GetDocumentByStudentQuery;

    it('can render without crashing', () => {
        render(<Documents data={documentsData} refetch={refetch} />);

        const applicationDate = screen.getByText('paul-cailly-A5319B-toefl');

        expect(applicationDate).toBeInTheDocument();
    });

    it('can reset column width', () => {
        render(<Documents data={documentsData} refetch={refetch} />);

        const resetWidthsButton = screen.getAllByRole('button')[0];

        userEvent.click(resetWidthsButton);
    });
});
