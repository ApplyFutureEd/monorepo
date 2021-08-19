import {
    createDocument,
    getDocumentByStorageKey,
    GetDocumentByStorageKeyQuery,
    GetDocumentByStorageKeyQueryVariables,
    getDocumentByStudent,
    GetDocumentByStudentQuery,
    GetDocumentByStudentQueryVariables,
    getStudent,
    GetStudentQuery,
    GetStudentQueryVariables,
    updateDocument,
    updateStudent,
    UpdateStudentMutation,
    UpdateStudentMutationVariables
} from '@applyfuture/graphql';
import { graphql, toast, useQuery, withPrivateAccess } from '@applyfuture/utils';
import StudentForm, { StudentFormValues } from '@components/forms/student/StudentForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FormikHelpers } from 'formik';
import { kebabCase, toUpper } from 'lodash';
import { useRouter } from 'next/router';
import { FC } from 'react';

const UpdateStudentPage: FC = () => {
    const router = useRouter();
    const { data: studentData, isLoading: studentIsLoading, refetch: studentRefetch } = useQuery<
        GetStudentQuery,
        GetStudentQueryVariables
    >(getStudent, { id: router.query.id as string });
    const {
        data: documentsData,
        isLoading: documentsIsLoading,
        refetch: documentsRefetch
    } = useQuery<GetDocumentByStudentQuery, GetDocumentByStudentQueryVariables>(
        getDocumentByStudent,
        { studentId: router.query.id as string }
    );

    const refetch = () => {
        studentRefetch();
        documentsRefetch();
    };

    const handleSubmit = async (
        values: StudentFormValues,
        actions: FormikHelpers<StudentFormValues>
    ) => {
        try {
            const documentIds = [
                'cae',
                'cils',
                'celi',
                'dalf-delf',
                'dele',
                'fce',
                'gmat',
                'goethe',
                'gre',
                'ielts',
                'it',
                'last-3-transcript-1',
                'last-3-transcript-2',
                'last-3-transcript-3',
                'passport',
                'passportPhoto',
                'plida',
                'resume',
                'tageMage',
                'tef-tcf',
                'toefl',
                'toeic'
            ];

            const documents = documentIds
                .map((id) => ({
                    name: kebabCase(id),
                    storageKey: values[id],
                    studentId: router.query.id
                }))
                .filter((document) => document.storageKey);

            const promises = documents.map((document) => {
                const fetch = async () => {
                    try {
                        const existingDocument = await graphql<
                            GetDocumentByStorageKeyQuery,
                            GetDocumentByStorageKeyQueryVariables
                        >(getDocumentByStorageKey, {
                            storageKey: document.storageKey
                        });

                        if (existingDocument?.getDocumentByStorageKey?.items?.[0]) {
                            return await graphql(updateDocument, {
                                input: {
                                    ...document,
                                    id: existingDocument?.getDocumentByStorageKey?.items?.[0]?.id
                                }
                            });
                        }

                        return await graphql(createDocument, {
                            input: {
                                ...document
                            }
                        });
                    } catch (error) {
                        console.log(error);
                    }
                };
                return fetch();
            });

            await Promise.all(promises);

            values.lastName = toUpper(values.lastName || '');
            values.fatherLastName = toUpper(values.fatherLastName || '');
            values.motherMaidenName = toUpper(values.motherMaidenName || '');
            values.guardianLastName = toUpper(values.guardianLastName || '');
            values.refusedVisa = Boolean(values.refusedVisa);
            values.validVisa = Boolean(values.validVisa);

            const newStudent = { ...values, lastUpdate: new Date().valueOf() };
            delete newStudent.studentId;
            delete newStudent.cae;
            delete newStudent['celi-cils-it-plida'];
            delete newStudent['dalf-delf'];
            delete newStudent.dele;
            delete newStudent.fce;
            delete newStudent.gmat;
            delete newStudent.goethe;
            delete newStudent.gre;
            delete newStudent.ielts;
            delete newStudent['last-3-transcript-1'];
            delete newStudent['last-3-transcript-2'];
            delete newStudent['last-3-transcript-3'];
            delete newStudent.passport;
            delete newStudent.passportPhoto;
            delete newStudent.resume;
            delete newStudent.tageMage;
            delete newStudent['tef-tcf'];
            delete newStudent.toefl;
            delete newStudent.toeic;

            await graphql<UpdateStudentMutation, UpdateStudentMutationVariables>(updateStudent, {
                input: {
                    ...newStudent,
                    id: router.query.id as string
                }
            });

            toast({
                description: `Student ${values.studentId} successfully updated`,
                title: 'Student updated',
                variant: 'success'
            });

            refetch();
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: 'An error occured',
                variant: 'error'
            });
        }
        actions.setSubmitting(false);
    };

    return (
        <DashboardLayout title="Student">
            <StudentForm
                documentsData={documentsData}
                handleSubmit={handleSubmit}
                isLoading={studentIsLoading || documentsIsLoading}
                studentData={studentData}
            />
        </DashboardLayout>
    );
};

export default withPrivateAccess(UpdateStudentPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
