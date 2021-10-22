import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Formik } from 'formik';
import React from 'react';
import { boolean, object, string } from 'yup';

import ContactInfo from './ContactInfo';

describe.skip('ContactInfo', () => {
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

    const handleNextStep = jest.fn();
    const handlePreviousStep = jest.fn();

    it('can render without crashing', () => {
        render(
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ errors, values }) => (
                    <Form>
                        <ContactInfo
                            errors={errors}
                            handleNextStep={handleNextStep}
                            handlePreviousStep={handlePreviousStep}
                            values={values}
                        />
                    </Form>
                )}
            </Formik>
        );

        const firstNameInput = screen.getByLabelText(/landing:contact-form-first-name/);

        expect(firstNameInput).toBeInTheDocument();
    });

    it('can fill the form', async () => {
        render(
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ errors, values }) => (
                    <Form>
                        <ContactInfo
                            errors={errors}
                            handleNextStep={handleNextStep}
                            handlePreviousStep={handlePreviousStep}
                            values={values}
                        />
                    </Form>
                )}
            </Formik>
        );

        const firstNameInput = screen.getByLabelText(/landing:contact-form-first-name/);
        const lastNameInput = screen.getByLabelText(/landing:contact-form-last-name/);
        const phoneInput = screen.getByTestId(/recruiters:phone/);
        const streetAddressInput = screen.getByLabelText(/recruiters:street-address/);
        const cityInput = screen.getByLabelText(/recruiters:city/);
        const stateOrProvinceInput = screen.getByLabelText(/recruiters:state-province/);
        const postalCodeInput = screen.getByLabelText(/recruiters:postal-code/);
        const skypeIdInput = screen.getByLabelText(/recruiters:skype-id/);
        const whatsAppIdInput = screen.getByLabelText(/recruiters:whats-app-id/);
        const refInput = screen.getByLabelText(/recruiters:referred-question/);
        const nextStepButton = screen.getByText(/common:next-step/);

        userEvent.type(firstNameInput, fakeRecruiter.firstName);
        userEvent.type(lastNameInput, fakeRecruiter.lastName);
        userEvent.type(phoneInput, fakeRecruiter.phone);
        userEvent.type(streetAddressInput, fakeRecruiter.streetAddress);
        userEvent.type(cityInput, fakeRecruiter.city);
        userEvent.type(stateOrProvinceInput, fakeRecruiter.stateOrProvince);
        userEvent.type(postalCodeInput, fakeRecruiter.postalCode);
        userEvent.type(skypeIdInput, fakeRecruiter.skypeId);
        userEvent.type(whatsAppIdInput, fakeRecruiter.whatsAppId);
        userEvent.type(refInput, fakeRecruiter.ref);
        userEvent.click(nextStepButton);

        expect(handleNextStep).toHaveBeenCalled();
    });
});
