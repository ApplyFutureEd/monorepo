import 'yup-phone';

import CompagnyInfo from '@components/forms/recruiters/compagny-info/CompagnyInfo';
import ContactInfo from '@components/forms/recruiters/contact-info/ContactInfo';
import { API } from 'aws-amplify';
import cx from 'classnames';
import { Form, Formik, FormikHelpers } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';
import { boolean, object, string } from 'yup';

import RecruitementDetails from './recruitement-details/RecruitementDetails';

type Props = {
    currentStep: number;
    handleNextStep: () => void;
    handlePreviousStep: () => void;
};

export type FormValues = {
    additionalComments: string;
    averageServiceFee: string;
    beginRecruitingDate: string;
    belongTo: string;
    city: string;
    compagnyName: string;
    confirmation: boolean;
    country: string;
    email: string;
    estimatedStudents: string;
    facebook: string;
    firstName: string;
    howManyStudents: string;
    instagram: string;
    institutionsRepresenting: string;
    lastName: string;
    linkedIn: string;
    mainSourceOfStudents: string;
    marketingMethods: string;
    phone: string;
    postalCode: string;
    recruitFrom: string;
    ref: string;
    referenceBusinessEmail: string;
    referenceInstitution: string;
    referenceName: string;
    referencePhone: string;
    referenceWebsite: string;
    servicesProvided: string;
    skypeId: string;
    stateOrProvince: string;
    streetAddress: string;
    twitter: string;
    website: string;
    whatsAppId: string;
};

const RecruitersForm: FC<Props> = (props) => {
    const { currentStep, handleNextStep, handlePreviousStep } = props;
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const validationSchema = object().shape({
        additionalComments: string(),
        averageServiceFee: string().required(t('common:error-required')),
        beginRecruitingDate: string(),
        belongTo: string().required(t('common:error-required')),
        city: string().required(t('common:error-required')),
        compagnyName: string().required(t('common:error-required')),
        confirmation: boolean().required(t('common:error-required')),
        country: string(),
        email: string()
            .email(t('common:error-email-format'))
            .required(t('common:error-email-required')),
        estimatedStudents: string().required(t('common:error-required')),
        facebook: string(),
        firstName: string().required(t('common:error-required')),
        howManyStudents: string(),
        instagram: string(),
        institutionsRepresenting: string(),
        lastName: string().required(t('common:error-required')),
        linkedIn: string(),
        mainSourceOfStudents: string().required(t('common:error-required')),
        marketingMethods: string().required(t('common:error-required')),
        phone: string()
            /* .phone(undefined, false, t('common:error-phone-format')) */
            .required(t('common:error-required')),
        postalCode: string(),
        recruitFrom: string(),
        ref: string(),
        referenceBusinessEmail: string(),
        referenceInstitution: string(),
        referenceName: string(),
        referencePhone: string()
            /* .phone(undefined, false, t('common:error-phone-format')) */
            .required(t('common:error-required')),
        referenceWebsite: string(),
        servicesProvided: string().required(t('common:error-required')),
        skypeId: string(),
        stateOrProvince: string(),
        streetAddress: string().required(t('common:error-required')),
        twitter: string(),
        website: string(),
        whatsAppId: string()
    });

    const initialValues: FormValues = {
        additionalComments: '',
        averageServiceFee: '0 - 250€',
        beginRecruitingDate: '',
        belongTo: '',
        city: '',
        compagnyName: '',
        confirmation: false,
        country: 'CN',
        email: '',
        estimatedStudents: '1 - 5',
        facebook: '',
        firstName: '',
        howManyStudents: '1 - 5',
        instagram: '',
        institutionsRepresenting: '',
        lastName: '',
        linkedIn: '',
        mainSourceOfStudents: 'CN',
        marketingMethods: 'Online Advertising',
        phone: '',
        postalCode: '',
        recruitFrom: 'CN',
        ref: '',
        referenceBusinessEmail: '',
        referenceInstitution: '',
        referenceName: '',
        referencePhone: '',
        referenceWebsite: '',
        servicesProvided: '',
        skypeId: '',
        stateOrProvince: '',
        streetAddress: '',
        twitter: '',
        website: '',
        whatsAppId: ''
    };

    const onSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
        try {
            API.post('REST', '/ses/recruiters-contact-form', {
                body: values
            });
            actions.setSubmitting(false);
            setSubmitted(true);
        } catch (error) {
            setErrorMessage(t('landing:contact-form-error'));
            actions.setSubmitting(false);
            setSubmitted(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ errors, isSubmitting, values }) => (
                <Form>
                    <div className={cx({ hidden: currentStep !== 0 })}>
                        <CompagnyInfo
                            errors={errors}
                            handleNextStep={handleNextStep}
                            values={values}
                        />
                    </div>
                    <div className={cx({ hidden: currentStep !== 1 })}>
                        <ContactInfo
                            errors={errors}
                            handleNextStep={handleNextStep}
                            handlePreviousStep={handlePreviousStep}
                            values={values}
                        />
                    </div>
                    <div className={cx({ hidden: currentStep !== 2 })}>
                        <RecruitementDetails
                            errorMessage={errorMessage}
                            errors={errors}
                            handlePreviousStep={handlePreviousStep}
                            isSubmitting={isSubmitting}
                            submitted={submitted}
                            values={values}
                        />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default RecruitersForm;
