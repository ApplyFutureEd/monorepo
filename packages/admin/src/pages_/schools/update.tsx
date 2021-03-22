import {
    getSchool,
    GetSchoolQuery,
    updateSchool,
    UpdateSchoolMutation
} from '@applyfuture/graphql';
import { graphql, toast, useQuery, withPrivateAccess } from '@applyfuture/utils';
import SchoolForm, { SchoolFormValues } from '@components/forms/school/SchoolForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FormikHelpers } from 'formik';
import { kebabCase } from 'lodash';
import { useRouter } from 'next/router';
import { FC } from 'react';

const UpdateSchoolPage: FC = () => {
    const router = useRouter();
    const { data: schoolData, isLoading: schoolIsLoading } = useQuery<GetSchoolQuery>(getSchool, {
        id: router.query.id as string
    });

    const handleSubmit = async (
        values: SchoolFormValues,
        actions: FormikHelpers<SchoolFormValues>
    ) => {
        try {
            const school: any = {
                ...values,
                slug: kebabCase(`${values.name}`)
            };

            delete school.programs;

            graphql<UpdateSchoolMutation>(updateSchool, {
                input: school
            });
            actions.setSubmitting(false);
            toast({
                description: `${values.name} successfully updated`,
                title: 'School updated',
                variant: 'success'
            });
            router.push('/schools');
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: 'An error occured',
                variant: 'error'
            });
        }
    };

    return (
        <DashboardLayout title="School">
            <SchoolForm
                handleSubmit={handleSubmit}
                isLoading={schoolIsLoading}
                schoolData={schoolData}
            />
        </DashboardLayout>
    );
};

export default withPrivateAccess(UpdateSchoolPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
