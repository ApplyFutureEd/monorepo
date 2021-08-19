import {
    createProgram,
    CreateProgramMutation,
    getSchool,
    GetSchoolQuery,
    listSchools,
    ListSchoolsQuery
} from '@applyfuture/graphql';
import {
    convertUnitToSeconds,
    graphql,
    toast,
    useQuery,
    withPrivateAccess
} from '@applyfuture/utils';
import ProgramForm, { ProgramFormValues } from '@components/forms/program/ProgramForm';
import DashboardLayout from '@components/layouts/dashboard-layout/DashboardLayout';
import { FormikHelpers } from 'formik';
import kebabCase from 'lodash/kebabCase';
import { useRouter } from 'next/router';
import { FC } from 'react';

const CreateProgramPage: FC = () => {
    const router = useRouter();
    const { data: schoolsData, isLoading } = useQuery<ListSchoolsQuery>(listSchools, {});

    const handleSubmit = async (
        values: ProgramFormValues,
        actions: FormikHelpers<ProgramFormValues>
    ) => {
        try {
            const { getSchool: school } = await graphql<GetSchoolQuery>(getSchool, {
                id: values.schoolId
            });

            const program = {
                ...values,
                duration: convertUnitToSeconds({
                    unit: values.durationUnit as 'DAY' | 'MONTH' | 'YEAR' | 'WEEK',
                    value: values.duration
                }),
                gradePointAverage: values.gradePointAverage || -1,
                highestEducationLevel: values.highestEducationLevel || -1,
                intakes: values.intakes.join(),
                lastUpdate: new Date().valueOf(),
                minimumAge: values.minimumAge || -1,
                minimumWorkExperience: values.minimumWorkExperience || -1,
                schoolName: school?.name,
                slug: kebabCase(`${values.name} ${school?.slug}`),
                testCambridgeAdvanced: values.testCambridgeAdvanced || -1,
                testCambridgeFirst: values.testCambridgeFirst || -1,
                testCeliCilsItPlida: values.testCeliCilsItPlida || -1,
                testDele: values.testDele || -1,
                testDelfdalf: values.testDelfdalf || -1,
                testGmat: values.testGmat || -1,
                testGoethe: values.testGoethe || -1,
                testGre: values.testGre || -1,
                testIelts: values.testIelts || -1,
                testTagemage: values.testTagemage || -1,
                testTcftef: values.testTcftef || -1,
                testToefl: values.testToefl || -1,
                testToeic: values.testToeic || -1
            };
            graphql<CreateProgramMutation>(createProgram, {
                input: program
            });
            actions.setSubmitting(false);
            toast({
                description: `${values.name} successfully created`,
                title: 'Program created',
                variant: 'success'
            });
            router.push('/programs');
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
        <DashboardLayout title="Program">
            <ProgramForm
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                schoolsData={schoolsData}
            />
        </DashboardLayout>
    );
};

export default withPrivateAccess(CreateProgramPage, {
    groups: ['admin'],
    redirection: '/sign-in'
});
