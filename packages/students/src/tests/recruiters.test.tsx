import Recruiters from '@pages/recruiters';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { API } from 'aws-amplify';
import { FC } from 'react';

jest.mock('@applyfuture/ui', () => ({
    ...(jest.requireActual('@applyfuture/ui') as Record<string, FC>),
    Header: jest.fn().mockImplementation(() => <div />)
}));

describe('Recruiters', () => {
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

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('can render without crashing', () => {
        render(<Recruiters />);

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
    });

    it.skip('can fill the form', async () => {
        API.post = jest.fn().mockImplementation(() => {
            return true;
        });

        render(<Recruiters />);

        const firstNextStepButton = screen.getAllByText(/common:next-step/)[0];
        const firstPreviousStepButton = screen.getAllByText(/common:previous-step/)[0];
        const secondNextStepButton = screen.getAllByText(/common:next-step/)[1];
        const submitButton = screen.getByRole(/button/, { name: /submit/i });

        const compagnyName = screen.getByLabelText(/recruiter-form:compagny-name/);
        const email = screen.getByLabelText(/landing:contact-form-email/);
        const website = screen.getByLabelText(/recruiter-form:website/);
        const facebook = screen.getByLabelText(/recruiter-form:facebook/);
        const instagram = screen.getByLabelText(/recruiter-form:instagram/);
        const twitter = screen.getByLabelText(/recruiter-form:twitter/);
        const linkedIn = screen.getByLabelText(/recruiter-form:linked-in/);
        const firstName = screen.getByLabelText(/landing:contact-form-first-name/);
        const lastName = screen.getByLabelText(/landing:contact-form-last-name/);
        const phone = screen.getByTestId(/recruiter-form:phone/);
        const streetAddress = screen.getByLabelText(/recruiter-form:street-address/);
        const city = screen.getByLabelText(/recruiter-form:city/);
        const stateOrProvince = screen.getByLabelText(/recruiter-form:state-province/);
        const postalCode = screen.getByLabelText(/recruiter-form:postal-code/);
        const skypeId = screen.getByLabelText(/recruiter-form:skype-id/);
        const whatsAppId = screen.getByLabelText(/recruiter-form:whats-app-id/);
        const ref = screen.getByLabelText(/recruiter-form:referred-question/);
        const beginRecruitingDate = screen.getByLabelText(/recruiter-form:when-begin-question/);
        const servicesProvided = screen.getByLabelText(/recruiter-form:service-provide-question/);
        const institutionsRepresenting = screen.getByLabelText(
            /recruiter-form:institutions-representing-question/
        );
        const belongTo = screen.getByLabelText(/recruiter-form:organization-belong-to-question/);
        const additionalComments = screen.getByLabelText(/recruiter-form:additional-comments/);
        const referenceName = screen.getByLabelText(/recruiter-form:reference-name/);
        const referenceInstitution = screen.getByLabelText(
            /recruiter-form:reference-institution-name/
        );
        const referenceBusinessEmail = screen.getByLabelText(
            /recruiter-form:reference-business-email/
        );
        const referencePhone = screen.getByTestId(/recruiter-form:reference-phone/);
        const referenceWebsite = screen.getByLabelText(/recruiter-form:reference-website/);
        const confirmation = screen.getByLabelText(/recruiter-form:i-declare/);

        await waitFor(() => {
            fireEvent.change(compagnyName, {
                target: {
                    value: fakeRecruiter.compagnyName
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeRecruiter.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(website, {
                target: {
                    value: fakeRecruiter.website
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(facebook, {
                target: {
                    value: fakeRecruiter.facebook
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(instagram, {
                target: {
                    value: fakeRecruiter.instagram
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(twitter, {
                target: {
                    value: fakeRecruiter.twitter
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(linkedIn, {
                target: {
                    value: fakeRecruiter.linkedIn
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(firstNextStepButton);
        });

        await waitFor(() => {
            fireEvent.click(firstPreviousStepButton);
        });

        await waitFor(() => {
            fireEvent.click(firstNextStepButton);
        });

        await waitFor(() => {
            fireEvent.change(firstName, {
                target: {
                    value: fakeRecruiter.firstName
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(lastName, {
                target: {
                    value: fakeRecruiter.lastName
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(phone, {
                target: {
                    value: fakeRecruiter.phone
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(streetAddress, {
                target: {
                    value: fakeRecruiter.streetAddress
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(city, {
                target: {
                    value: fakeRecruiter.city
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(stateOrProvince, {
                target: {
                    value: fakeRecruiter.stateOrProvince
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(postalCode, {
                target: {
                    value: fakeRecruiter.postalCode
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(skypeId, {
                target: {
                    value: fakeRecruiter.skypeId
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(whatsAppId, {
                target: {
                    value: fakeRecruiter.whatsAppId
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(ref, {
                target: {
                    value: fakeRecruiter.ref
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(secondNextStepButton);
        });

        await waitFor(() => {
            fireEvent.change(beginRecruitingDate, {
                target: {
                    value: fakeRecruiter.beginRecruitingDate
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(servicesProvided, {
                target: {
                    value: fakeRecruiter.servicesProvided
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(institutionsRepresenting, {
                target: {
                    value: fakeRecruiter.institutionsRepresenting
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(belongTo, {
                target: {
                    value: fakeRecruiter.belongTo
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(additionalComments, {
                target: {
                    value: fakeRecruiter.additionalComments
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(referenceName, {
                target: {
                    value: fakeRecruiter.referenceName
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(referenceInstitution, {
                target: {
                    value: fakeRecruiter.referenceInstitution
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(referenceBusinessEmail, {
                target: {
                    value: fakeRecruiter.referenceBusinessEmail
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(referencePhone, {
                target: {
                    value: fakeRecruiter.referencePhone
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(referenceWebsite, {
                target: {
                    value: fakeRecruiter.referenceWebsite
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(confirmation);
        });

        await waitFor(() => {
            fireEvent.click(submitButton);
        });

        expect(API.post).toHaveBeenCalledWith('rest', '/recruiters-contact-form', {
            body: fakeRecruiter
        });
    });

    it.skip('can display the right error message when an Error is thrown', async () => {
        API.post = jest.fn().mockImplementation(() => {
            throw new Error();
        });

        render(<Recruiters />);

        const firstNextStepButton = screen.getAllByText(/common:next-step/)[0];
        const firstPreviousStepButton = screen.getAllByText(/common:previous-step/)[0];
        const secondNextStepButton = screen.getAllByText(/common:next-step/)[1];
        const submitButton = screen.getByRole(/button/, { name: /submit/i });

        const compagnyName = screen.getByLabelText(/recruiter-form:compagny-name/);
        const email = screen.getByLabelText(/landing:contact-form-email/);
        const website = screen.getByLabelText(/recruiter-form:website/);
        const facebook = screen.getByLabelText(/recruiter-form:facebook/);
        const instagram = screen.getByLabelText(/recruiter-form:instagram/);
        const twitter = screen.getByLabelText(/recruiter-form:twitter/);
        const linkedIn = screen.getByLabelText(/recruiter-form:linked-in/);
        const firstName = screen.getByLabelText(/landing:contact-form-first-name/);
        const lastName = screen.getByLabelText(/landing:contact-form-last-name/);
        const phone = screen.getByTestId(/recruiter-form:phone/);
        const streetAddress = screen.getByLabelText(/recruiter-form:street-address/);
        const city = screen.getByLabelText(/recruiter-form:city/);
        const stateOrProvince = screen.getByLabelText(/recruiter-form:state-province/);
        const postalCode = screen.getByLabelText(/recruiter-form:postal-code/);
        const skypeId = screen.getByLabelText(/recruiter-form:skype-id/);
        const whatsAppId = screen.getByLabelText(/recruiter-form:whats-app-id/);
        const ref = screen.getByLabelText(/recruiter-form:referred-question/);

        const beginRecruitingDate = screen.getByLabelText(/recruiter-form:when-begin-question/);
        const servicesProvided = screen.getByLabelText(/recruiter-form:service-provide-question/);
        const institutionsRepresenting = screen.getByLabelText(
            /recruiter-form:institutions-representing-question/
        );
        const belongTo = screen.getByLabelText(/recruiter-form:organization-belong-to-question/);
        const additionalComments = screen.getByLabelText(/recruiter-form:additional-comments/);
        const referenceName = screen.getByLabelText(/recruiter-form:reference-name/);
        const referenceInstitution = screen.getByLabelText(
            /recruiter-form:reference-institution-name/
        );
        const referenceBusinessEmail = screen.getByLabelText(
            /recruiter-form:reference-business-email/
        );
        const referencePhone = screen.getByTestId(/recruiter-form:reference-phone/);
        const referenceWebsite = screen.getByLabelText(/recruiter-form:reference-website/);
        const confirmation = screen.getByLabelText(/recruiter-form:i-declare/);

        await waitFor(() => {
            fireEvent.change(compagnyName, {
                target: {
                    value: fakeRecruiter.compagnyName
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(email, {
                target: {
                    value: fakeRecruiter.email
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(website, {
                target: {
                    value: fakeRecruiter.website
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(facebook, {
                target: {
                    value: fakeRecruiter.facebook
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(instagram, {
                target: {
                    value: fakeRecruiter.instagram
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(twitter, {
                target: {
                    value: fakeRecruiter.twitter
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(linkedIn, {
                target: {
                    value: fakeRecruiter.linkedIn
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(firstNextStepButton);
        });

        await waitFor(() => {
            fireEvent.click(firstPreviousStepButton);
        });

        await waitFor(() => {
            fireEvent.click(firstNextStepButton);
        });

        await waitFor(() => {
            fireEvent.change(firstName, {
                target: {
                    value: fakeRecruiter.firstName
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(lastName, {
                target: {
                    value: fakeRecruiter.lastName
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(phone, {
                target: {
                    value: fakeRecruiter.phone
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(streetAddress, {
                target: {
                    value: fakeRecruiter.streetAddress
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(city, {
                target: {
                    value: fakeRecruiter.city
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(stateOrProvince, {
                target: {
                    value: fakeRecruiter.stateOrProvince
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(postalCode, {
                target: {
                    value: fakeRecruiter.postalCode
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(skypeId, {
                target: {
                    value: fakeRecruiter.skypeId
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(whatsAppId, {
                target: {
                    value: fakeRecruiter.whatsAppId
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(ref, {
                target: {
                    value: fakeRecruiter.ref
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(secondNextStepButton);
        });

        await waitFor(() => {
            fireEvent.change(beginRecruitingDate, {
                target: {
                    value: fakeRecruiter.beginRecruitingDate
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(servicesProvided, {
                target: {
                    value: fakeRecruiter.servicesProvided
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(institutionsRepresenting, {
                target: {
                    value: fakeRecruiter.institutionsRepresenting
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(belongTo, {
                target: {
                    value: fakeRecruiter.belongTo
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(additionalComments, {
                target: {
                    value: fakeRecruiter.additionalComments
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(referenceName, {
                target: {
                    value: fakeRecruiter.referenceName
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(referenceInstitution, {
                target: {
                    value: fakeRecruiter.referenceInstitution
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(referenceBusinessEmail, {
                target: {
                    value: fakeRecruiter.referenceBusinessEmail
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(referencePhone, {
                target: {
                    value: fakeRecruiter.referencePhone
                }
            });
        });

        await waitFor(() => {
            fireEvent.change(referenceWebsite, {
                target: {
                    value: fakeRecruiter.referenceWebsite
                }
            });
        });

        await waitFor(() => {
            fireEvent.click(confirmation);
        });

        await waitFor(() => {
            fireEvent.click(submitButton);
        });

        expect(API.post).toThrow();

        const errorMessage = screen.getByText(/landing:contact-form-error/);
        expect(errorMessage).toBeVisible();
    });
});
