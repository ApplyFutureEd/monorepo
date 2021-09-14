import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Formik } from 'formik';
import React from 'react';
import { boolean, object, string } from 'yup';

import RecruitementDetails from './RecruitementDetails';

describe.skip('RecruitementDetails', () => {
    const validationSchema = object().shape({
        additionalComments: string(),
        averageServiceFee: string().required('common:error-required'),
        beginRecruitingDate: string(),
        belongTo: string().required('common:error-required'),
        city: string().required('common:error-required'),
        compagnyName: string().required('common:error-required'),
        confirmation: boolean().required('common:error-required'),
        country: string(),
        email: string().email('common:error-email-format').required('common:error-email-required'),
        estimatedStudents: string().required('common:error-required'),
        facebook: string(),
        firstName: string().required('common:error-required'),
        howManyStudents: string(),
        instagram: string(),
        institutionsRepresenting: string(),
        lastName: string().required('common:error-required'),
        linkedIn: string(),
        mainSourceOfStudents: string().required('common:error-required'),
        marketingMethods: string().required('common:error-required'),
        phone: string().required('common:error-required'),
        postalCode: string(),
        recruitFrom: string(),
        ref: string(),
        referenceBusinessEmail: string(),
        referenceInstitution: string(),
        referenceName: string(),
        referencePhone: string().required('common:error-required'),
        referenceWebsite: string(),
        servicesProvided: string().required('common:error-required'),
        skypeId: string(),
        stateOrProvince: string(),
        streetAddress: string().required('common:error-required'),
        twitter: string(),
        website: string(),
        whatsAppId: string()
    });

    const initialValues = {
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

    const onSubmit = jest.fn();

    const fakeRecruiter = {
        additionalComments: 'Lorem ipsum',
        averageServiceFee: '0 - 250€',
        beginRecruitingDate: '01/01/2021',
        belongTo: 'Lorem ipsum',
        city: 'Paris',
        compagnyName: 'Lorem ipsum',
        confirmation: true,
        country: 'CN',
        email: 'awesome.recruiter@gmail.com',
        estimatedStudents: '1 - 5',
        facebook: 'https://www.facebook.com/awesome.recruiter',
        firstName: 'John',
        howManyStudents: '1 - 5',
        instagram: '@awesome.recruiter',
        institutionsRepresenting: 'Lorem ipsum',
        lastName: 'Doe',
        linkedIn: 'https://www.linkedin.com/awesome.recruiter',
        mainSourceOfStudents: 'CN',
        marketingMethods: 'Online Advertising',
        phone: '+33621122955',
        postalCode: '75007',
        recruitFrom: 'CN',
        ref: 'Ying Zhang',
        referenceBusinessEmail: 'amazing.recruiter@gmail.com',
        referenceInstitution: 'Lorem ipsum',
        referenceName: 'Jane Doe',
        referencePhone: '+33612212955',
        referenceWebsite: 'www.amazingrecruiter.com',
        servicesProvided: 'Lorem ipsum',
        skypeId: 'awesome.recruiter',
        stateOrProvince: 'Paris',
        streetAddress: '87 rue de Rome',
        twitter: '@awesome.recruiter',
        website: 'www.awesomerecruiter.com',
        whatsAppId: 'awesome.recruiter'
    };

    const handlePreviousStep = jest.fn();

    it('can render without crashing', () => {
        render(
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ errors, isSubmitting, values }) => (
                    <Form>
                        <RecruitementDetails
                            errorMessage=""
                            errors={errors}
                            handlePreviousStep={handlePreviousStep}
                            isSubmitting={isSubmitting}
                            submitted={false}
                            values={values}
                        />
                    </Form>
                )}
            </Formik>
        );

        const beginRecruitingDateInput = screen.getByLabelText(
            /recruiter-form:when-begin-question/
        );

        expect(beginRecruitingDateInput).toBeInTheDocument();
    });

    it('can fill the form', async () => {
        render(
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ errors, isSubmitting, values }) => (
                    <Form>
                        <RecruitementDetails
                            errorMessage=""
                            errors={errors}
                            handlePreviousStep={handlePreviousStep}
                            isSubmitting={isSubmitting}
                            submitted={false}
                            values={{ ...fakeRecruiter, ...values }}
                        />
                    </Form>
                )}
            </Formik>
        );

        const beginRecruitingDateInput = screen.getByLabelText(
            /recruiter-form:when-begin-question/
        );
        const servicesProvidedInput = screen.getByLabelText(
            /recruiter-form:service-provide-question/
        );
        const institutionsRepresentingInput = screen.getByLabelText(
            /recruiter-form:institutions-representing-question/
        );
        const belongToInput = screen.getByLabelText(
            /recruiter-form:organization-belong-to-question/
        );
        const additionalCommentsInput = screen.getByLabelText(/recruiter-form:additional-comments/);
        const referenceNameInput = screen.getByLabelText(/recruiter-form:reference-name/);
        const referenceInstitutionInput = screen.getByLabelText(
            /recruiter-form:reference-institution-name/
        );
        const referenceBusinessEmailInput = screen.getByLabelText(
            /recruiter-form:reference-business-email/
        );
        const referencePhoneInput = screen.getByTestId(/recruiter-form:reference-phone/);
        const referenceWebsiteInput = screen.getByLabelText(/recruiter-form:reference-website/);
        const confirmationInput = screen.getByLabelText(/recruiter-form:i-declare/);
        const submitButton = screen.getByText(/landing:contact-form-submit-button/);

        userEvent.type(beginRecruitingDateInput, fakeRecruiter.beginRecruitingDate);
        userEvent.type(servicesProvidedInput, fakeRecruiter.servicesProvided);
        userEvent.type(institutionsRepresentingInput, fakeRecruiter.institutionsRepresenting);
        userEvent.type(belongToInput, fakeRecruiter.belongTo);
        userEvent.type(additionalCommentsInput, fakeRecruiter.additionalComments);
        userEvent.type(referenceNameInput, fakeRecruiter.referenceName);
        userEvent.type(referenceInstitutionInput, fakeRecruiter.referenceInstitution);
        userEvent.type(referenceBusinessEmailInput, fakeRecruiter.referenceBusinessEmail);
        userEvent.type(referencePhoneInput, fakeRecruiter.referencePhone);
        userEvent.type(referenceWebsiteInput, fakeRecruiter.referenceWebsite);
        userEvent.click(confirmationInput);

        await waitFor(() => {
            userEvent.click(submitButton);
        });

        expect(onSubmit).toHaveBeenCalled();
    });

    it('can display submitted button', () => {
        render(
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ errors, isSubmitting, values }) => (
                    <Form>
                        <RecruitementDetails
                            errorMessage=""
                            errors={errors}
                            handlePreviousStep={handlePreviousStep}
                            isSubmitting={isSubmitting}
                            submitted={true}
                            values={values}
                        />
                    </Form>
                )}
            </Formik>
        );

        const submittedButton = screen.getByText(/landing:contact-form-email-sent/);

        expect(submittedButton).toBeInTheDocument();
    });

    it('can display error message', () => {
        render(
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ errors, isSubmitting, values }) => (
                    <Form>
                        <RecruitementDetails
                            errorMessage="Something went wrong"
                            errors={errors}
                            handlePreviousStep={handlePreviousStep}
                            isSubmitting={isSubmitting}
                            submitted={false}
                            values={values}
                        />
                    </Form>
                )}
            </Formik>
        );

        const errorMessage = screen.getByText('Something went wrong');

        expect(errorMessage).toBeInTheDocument();
    });
});
