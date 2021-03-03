import { GetSchoolQuery } from '@applyfuture/graphql';
import { Editor, Input, Section, Select } from '@applyfuture/ui';
import { contractStatus, countries, institutionTypes } from '@applyfuture/utils';
// import { faArrowLeft, faPencil, faPlus, faSave, faTrash } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useEffect, useState } from 'react';
import { object, string } from 'yup';

type Props = {
    handleSubmit: (
        values: SchoolFormValues,
        actions: FormikHelpers<SchoolFormValues>
    ) => Promise<void>;
    isLoading: boolean;
    schoolData?: GetSchoolQuery;
};

export type SchoolFormValues = {
    city: string;
    contractStatusOptions: string;
    country: string;
    creationYear: number;
    description: string | null;
    institutionType: string;
    name: string;
    slug: string;
};

const SchoolForm: FC<Props> = (props) => {
    const { handleSubmit, isLoading, schoolData } = props;
    const { t } = useTranslation();

    const validationSchema = object().shape({
        name: string().required(t('common:required')),
        schoolId: string().required(t('common:required'))
    });

    const [initialValues, setInitialValues] = useState<SchoolFormValues>({
        city: '',
        contractStatusOptions: '',
        country: 'FR',
        creationYear: -1,
        description: '',
        institutionType: '',
        name: '',
        slug: ''
    });

    useEffect(() => {
        if (schoolData?.getSchool) {
            const school: any = schoolData?.getSchool;

            delete school.__typename;
            delete school.updatedAt;
            delete school.createdAt;
            delete school.school;

            setInitialValues(school);
        }
    }, [schoolData]);

    const contractStatusOptions = contractStatus.map((status) => ({
        label: t(`common:${status.label}`),
        value: status.value
    }));

    const countriesOptions = countries.map((country) => ({
        label: t(`common:${country.label}`),
        value: country.value
    }));

    const institutionTypesOptions = institutionTypes.map((institutionType) => ({
        label: institutionType.label,
        value: institutionType.value
    }));

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {(props) => {
                const { isSubmitting } = props;

                return (
                    <Form className="space-y-6">
                        <Section isLoading={isLoading} title="School info">
                            <div className="space-y-3">
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/3">
                                        <Field id="name" name="name">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label="Name"
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:w-1/3">
                                        <Field id="city" name="city">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label="City"
                                                    type="text"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:mt-0 sm:w-1/3">
                                        <Field id="country" name="country">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label="Country"
                                                    options={countriesOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/4">
                                        <Field id="totalStudents" name="totalStudents">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label="Total students"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:w-1/4">
                                        <Field
                                            id="internationalStudents"
                                            name="internationalStudents">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label="Overseas students"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:mt-0 sm:w-1/4">
                                        <Field id="institutionType" name="institutionType">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label="Institution type"
                                                    options={institutionTypesOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                    <div className="w-full sm:mt-0 sm:w-1/4">
                                        <Field id="creationYear" name="creationYear">
                                            {(fieldProps: FieldProps) => (
                                                <Input
                                                    isLoading={isLoading}
                                                    label="Creation year"
                                                    type="number"
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <Field id="description" name="description">
                                        {(fieldProps: FieldProps) => (
                                            <Editor
                                                isLoading={isLoading}
                                                label="Description"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </Section>
                        <Section isLoading={isLoading} title="Media">
                            <div className="space-y-3">
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <Field id="logo" name="logo">
                                        {(fieldProps: FieldProps) => (
                                            <Input
                                                isLoading={isLoading}
                                                label="Logo"
                                                type="number"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                    <Field id="coverPhoto" name="coverPhoto">
                                        {(fieldProps: FieldProps) => (
                                            <Input
                                                isLoading={isLoading}
                                                label="Cover photo"
                                                type="number"
                                                {...fieldProps}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </Section>
                        <Section isLoading={isLoading} title="Contact">
                            <div className="space-y-3">
                                <div className="flex flex-col w-full sm:flex-row sm:space-x-4">
                                    <div className="w-full sm:w-1/2">
                                        <Field id="contractStatus" name="contractStatus">
                                            {(fieldProps: FieldProps) => (
                                                <Select
                                                    isLoading={isLoading}
                                                    label="Contract status"
                                                    options={contractStatusOptions}
                                                    {...fieldProps}
                                                />
                                            )}
                                        </Field>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default SchoolForm;
