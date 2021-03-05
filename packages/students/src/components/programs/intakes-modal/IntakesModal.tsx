import { Program } from '@applyfuture/models';
import { Button, Modal } from '@applyfuture/ui';
import { date } from '@applyfuture/utils';
import { Field, Form, Formik } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
    handleClose: () => void;
    open: boolean;
    program: Program;
};

const IntakesModal: FC<Props> = (props) => {
    const { handleClose, open, program } = props;
    const { t } = useTranslation();

    type FormValues = {
        intake: string;
    };

    const initialValues = {
        intake: ''
    };

    const onSubmit = () => {
        console.log('submit');
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ isSubmitting, setFieldValue, values, submitForm }) => (
                    <Form>
                        <div className="p-6 sm:p-0">
                            <h2 className="mt-1 text-gray-900 text-3xl font-extrabold tracking-tight leading-9 sm:text-4xl sm:leading-10">
                                {t('programs:multiple-intakes-modal-title')}
                            </h2>
                            <p className="mt-1">
                                {t('programs:multiple-intakes-modal-description')}
                            </p>
                            <div className="mt-4">
                                <Field key="intake" id="intake" name="intake">
                                    {(props: any) => (
                                        <div className="flex justify-center mt-4 space-x-4">
                                            {program?.intakes.split(',').map((intake: any) => (
                                                <Button
                                                    key={intake}
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
                                                    {date({ scheme: 'LLLL y', value: intake })}
                                                </Button>
                                            ))}
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

export default IntakesModal;
