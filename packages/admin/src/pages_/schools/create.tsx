import {
    createSchool,
    CreateSchoolMutation,
    getSchool,
    GetSchoolQuery,
    listSchools,
    ListSchoolsQuery
} from '@applyfuture/graphql';
import { graphql, toast, useQuery, withPrivateAccess } from '@applyfuture/utils';
import SchoolForm, { SchoolFormValues } from '@components/forms/school/SchoolForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FormikHelpers } from 'formik';
import kebabCase from 'lodash/kebabCase';
import { useRouter } from 'next/router';
import { FC } from 'react';

const CreateSchoolPage: FC = () => {
    const router = useRouter();
    const { isLoading } = useQuery<ListSchoolsQuery>(listSchools, {});

    const handleSubmit = async (
        values: SchoolFormValues,
        actions: FormikHelpers<SchoolFormValues>
    ) => {
        try {
            const school = {
                ...values,
                slug: kebabCase(`${values.name}`)
            };
            graphql<CreateSchoolMutation>(createSchool, {
                input: school
            });
            actions.setSubmitting(false);
            toast({
                description: `${values.name} successfully created`,
                title: 'School created',
                variant: 'success'
            });
            router.push('/schools');
        } catch (error) {
            console.log(error);
            toast({
                description: `${error.message}`,
                title: 'An error occured',
                variant: 'error'
            });
        }
    };

    return (
        <DashboardLayout title="School">
            <SchoolForm handleSubmit={handleSubmit} isLoading={isLoading} />
        </DashboardLayout>
    );
};

export default withPrivateAccess(CreateSchoolPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
