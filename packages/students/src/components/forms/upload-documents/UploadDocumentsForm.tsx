import { GetStudentByEmailQuery } from '@applyfuture/graphql';
import { Button, FileUploader, Section } from '@applyfuture/ui';
import Navigation from '@components/profile/navigation/Navigation';
import { faSave } from '@fortawesome/pro-light-svg-icons';
import { Field, FieldProps, Form, Formik, FormikHelpers } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React, { FC, useState } from 'react';
import { mixed, object } from 'yup';

type Props = {
    data: GetStudentByEmailQuery;
    isLoading: boolean;
};

const UploadDocumentForm: FC<Props> = (props) => {
    const { data, isLoading } = props;
    const { t } = useTranslation();

    const validationSchema = object().shape({
        passport: mixed().required(t('common:error-field-required')),
        passportPhoto: mixed().required(t('common:error-field-required')),
        resume: mixed().required(t('common:error-field-required'))
    });

    type FormValues = {
        passport: string;
        passportPhoto: string;
        resume: string;
        toefl: string;
        ielts: string;
        toeic: string;
        fce: string;
        cae: string;
        gmat: string;
        gre: string;
        tageMage: string;
        'tef-tcf': string;
        'dalf-delf': string;
        'last-3-transcript-1': string;
        'last-3-transcript-2': string;
        'last-3-transcript-3': string;
    };

    const [initialValues] = useState<FormValues>({
        cae: '',
        'dalf-delf': '',
        fce: '',
        gmat: '',
        gre: '',
        ielts: '',
        'last-3-transcript-1': '',
        'last-3-transcript-2': '',
        'last-3-transcript-3': '',
        passport: '',
        passportPhoto: '',
        resume: '',
        tageMage: '',
        'tef-tcf': '',
        toefl: '',
        toeic: ''
    });

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        console.log(values, actions);
    };

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {(props) => {
                const { isSubmitting } = props;

                return (
                    <Form className="space-y-6">
                        <Section
                            description={t('profile:required-by-all-schools-description')}
                            headerComponent={<Navigation completion={{}} isLoading={isLoading} />}
                            isLoading={isLoading}
                            title={t('profile:required-by-all-schools-title')}>
                            <div className="mb-8 space-y-8">
                                <Field id="passport" name="passport">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:passport')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="passportPhoto" name="passportPhoto">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:passport-photo')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="resume" name="resume">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:resume')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <Button
                                    disabled={isSubmitting}
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    startIcon={faSave}
                                    type="submit"
                                    variant="primary">
                                    {t('profile:save')}
                                </Button>
                            </div>
                        </Section>
                        <Section
                            description={t('profile:certificates-description')}
                            isLoading={isLoading}
                            title={t('profile:certificates-title')}>
                            <div className="mb-8 space-y-8">
                                <Field id="toefl" name="toefl">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:toefl')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="ielts" name="ielts">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:ielts')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="toeic" name="toeic">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:toeic')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="fce" name="fce">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:fce')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="gmat" name="gmat">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:gmat')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="gre" name="gre">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:gre')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="tageMage" name="tageMage">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:tage-mage')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="tef-tcf" name="tef-tcf">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:tef-tcf')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="dalf-delf" name="dalf-delf">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:dalf-delf')}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="last-3-transcript-1" name="last-3-transcript-1">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:last-3-transcript', { number: 1 })}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="last-3-transcript-2" name="last-3-transcript-2">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:last-3-transcript', { number: 2 })}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                                <Field id="last-3-transcript-3" name="last-3-transcript-3">
                                    {(fieldProps: FieldProps) => (
                                        <FileUploader
                                            isLoading={isLoading}
                                            label={t('profile:last-3-transcript', { number: 3 })}
                                            {...fieldProps}
                                        />
                                    )}
                                </Field>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <Button
                                    disabled={isSubmitting}
                                    isLoading={isLoading}
                                    isSubmitting={isSubmitting}
                                    startIcon={faSave}
                                    type="submit"
                                    variant="primary">
                                    {t('profile:save')}
                                </Button>
                            </div>
                        </Section>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default UploadDocumentForm;
