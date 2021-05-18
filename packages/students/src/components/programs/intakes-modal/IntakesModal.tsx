import {
    createApplication,
    CreateApplicationMutation,
    GetProgramBySlugQuery,
    GetProgramQuery,
    GetStudentByEmailQuery
} from '@applyfuture/graphql';
import { SupportedLocale } from '@applyfuture/models';
import { Button, Modal } from '@applyfuture/ui';
import { applicationSteps, date, graphql, toast } from '@applyfuture/utils';
import { faInfoCircle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    handleClose: () => void;
    open: boolean;
    program:
        | GetProgramQuery['getProgram']
        | NonNullable<NonNullable<GetProgramBySlugQuery['getProgramBySlug']>['items']>[0];
    student: NonNullable<NonNullable<GetStudentByEmailQuery['getStudentByEmail']>['items']>[0];
};

const IntakesModal: FC<Props> = (props) => {
    const { handleClose, open, program, student } = props;
    const router = useRouter();
    const locale = router.locale as SupportedLocale;
    const { t } = useTranslation();

    type FormValues = {
        intake: string;
    };

    const initialValues: FormValues = {
        intake: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        const { intake } = values;
        try {
            const result = await graphql<CreateApplicationMutation>(createApplication, {
                input: {
                    intake: intake,
                    lastUpdate: new Date().valueOf(),
                    modalApplicationCompletedViewed: false,
                    programId: program?.id,
                    steps: applicationSteps,
                    studentId: student?.id
                }
            });
            const application = result.createApplication;
            return router.push(`/applications/${application?.id}/${applicationSteps[0].id}`);
        } catch (error) {
            toast({
                description: `${error.message}`,
                title: t('common:toast-error-generic-message'),
                variant: 'error'
            });
        }
        actions.setSubmitting(false);
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ isSubmitting, setFieldValue, values, submitForm }) => (
                    <Form>
                        <div className="sm:flex sm:items-start">
                            <div className="flex flex-shrink-0 items-center justify-center mx-auto w-12 h-12 text-indigo-600 bg-indigo-100 rounded-full sm:mx-0 sm:w-10 sm:h-10">
                                <FontAwesomeIcon icon={faInfoCircle} size="lg" />
                            </div>
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3
                                    className="text-gray-900 text-lg font-medium leading-6"
                                    id="modal-headline">
                                    {t('programs:multiple-intakes-modal-title')}
                                </h3>
                                <div className="mt-2">
                                    <p className="text-gray-500 text-sm leading-5">
                                        {t('programs:multiple-intakes-modal-description')}
                                    </p>
                                    <Field key="intake" id="intake" name="intake">
                                        {() => (
                                            <div className="flex mt-4 space-x-4">
                                                {program?.intakes.split(',').map((intake: any) => (
                                                    <Button
                                                        key={intake}
                                                        disabled={!student}
                                                        isSubmitting={isSubmitting}
                                                        type="button"
                                                        variant={
                                                            values.intake === intake
                                                                ? 'primary'
                                                                : 'secondary'
                                                        }
                                                        onClick={() => {
                                                            setFieldValue('intake', intake);
                                                            submitForm();
                                                        }}>
                                                        {date({
                                                            locale: locale,
                                                            scheme: 'LLLL y',
                                                            value: intake
                                                        })}
                                                    </Button>
                                                ))}
                                            </div>
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default IntakesModal;
