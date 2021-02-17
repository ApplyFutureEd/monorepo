import {
    getDocumentByStudent,
    GetDocumentByStudentQuery,
    GetDocumentByStudentQueryVariables,
    getStudent,
    GetStudentQuery,
    GetStudentQueryVariables
} from '@applyfuture/graphql';
import { useQuery, withPrivateAccess } from '@applyfuture/utils';
import StudentForm, { StudentFormValues } from '@components/forms/student/StudentForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import { FC } from 'react';

const UpdateStudentPage: FC = () => {
    const router = useRouter();
    const { data: studentData, isLoading: studentIsLoading } = useQuery<
        GetStudentQuery,
        GetStudentQueryVariables
    >(getStudent, { id: router.query.id as string });
    const { data: documentsData, isLoading: documentsIsLoading } = useQuery<
        GetDocumentByStudentQuery,
        GetDocumentByStudentQueryVariables
    >(getDocumentByStudent, { studentId: router.query.id as string });

    const handleSubmit = async (
        values: StudentFormValues,
        actions: FormikHelpers<StudentFormValues>
    ) => {
        try {
            console.log(values);
        } catch (error) {
            console.log(error);
        }
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
