import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Formik } from 'formik';
import React from 'react';
import { boolean, object, string } from 'yup';

import CompagnyInfo from './CompagnyInfo';

describe.skip('CompagnyInfo', () => {
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

    it('can render without crashing', () => {
        render(
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ errors, values }) => (
                    <Form>
                        <CompagnyInfo
                            errors={errors}
                            handleNextStep={handleNextStep}
                            values={values}
                        />
                    </Form>
                )}
            </Formik>
        );

        const compagnyNameInput = screen.getByLabelText(/recruiter-form:compagny-name/);

        expect(compagnyNameInput).toBeInTheDocument();
    });

    it('can fill the form', async () => {
        render(
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                {({ errors, values }) => (
                    <Form>
                        <CompagnyInfo
                            errors={errors}
                            handleNextStep={handleNextStep}
                            values={values}
                        />
                    </Form>
                )}
            </Formik>
        );

        const compagnyNameInput = screen.getByLabelText(/recruiter-form:compagny-name/);
        const emailInput = screen.getByLabelText(/landing:contact-form-email/);
        const websiteInput = screen.getByLabelText(/recruiter-form:website/);
        const facebookInput = screen.getByLabelText(/recruiter-form:facebook/);
        const instagramInput = screen.getByLabelText(/recruiter-form:instagram/);
        const twitterInput = screen.getByLabelText(/recruiter-form:twitter/);
        const linkedInInput = screen.getByLabelText(/recruiter-form:linked-in/);
        const nextStepButton = screen.getByText(/common:next-step/);

        userEvent.type(compagnyNameInput, fakeRecruiter.compagnyName);
        userEvent.type(emailInput, fakeRecruiter.email);
        userEvent.type(websiteInput, fakeRecruiter.website);
        userEvent.type(facebookInput, fakeRecruiter.facebook);
        userEvent.type(instagramInput, fakeRecruiter.instagram);
        userEvent.type(twitterInput, fakeRecruiter.twitter);
        userEvent.type(linkedInInput, fakeRecruiter.linkedIn);
        userEvent.click(nextStepButton);

        expect(handleNextStep).toHaveBeenCalled();
    });
});
