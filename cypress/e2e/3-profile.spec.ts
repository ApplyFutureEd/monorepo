describe('Profile tests', () => {
    beforeEach(() => {
        // cy.intercept({
        //     method: 'POST',
        //     url: 'https://cognito-idp.ap-southeast-1.amazonaws.com/'
        // }).as('login');

        cy.viewport(1920, 1080);
        cy.visit('/sign-in');
        cy.findByLabelText(/Email/).type(`${Cypress.env('uuid')}@mailsac.com`);
        cy.findByLabelText(/Password/).type(Cypress.env('uuid'));
        cy.findByText(/Sign In/).click();
        // cy.wait('@login').then((interception) => {
        //     expect(interception.response?.statusCode).to.eq(200);
        // });
    });

    it('Can fill in general information', () => {
        cy.findByText(/Profile/).click();

        cy.get('input[name=phoneNumber]')
            .clear({ force: true })
            .type('+33621122955', { force: true });
        cy.findAllByLabelText(/Address/)
            .eq(0)
            .clear({ force: true })
            .type('33 rue du General Leclerc', { force: true });

        cy.findAllByLabelText(/First Name/)
            .eq(0)
            .clear({ force: true })
            .type('John', { force: true });
        cy.findAllByLabelText(/Last Name/)
            .eq(0)
            .clear({ force: true })
            .type('Doe', { force: true });
        cy.get('.react-datepicker__input-container > input')
            .clear({ force: true })
            .type('11/01/1995', { force: true });
        cy.findByLabelText(/First Language/)
            .type('Fre', { force: true })
            .type('{enter}', { force: true });
        cy.findByLabelText(/Nationality/)
            .type('Fra', { force: true })
            .type('{enter}', { force: true });
        cy.findByLabelText(/Passport Number/)
            .clear({ force: true })
            .type('N123456789', { force: true });
        cy.findByLabelText(/Gender/)
            .type('Mal', { force: true })
            .type('{enter}', { force: true });
        cy.findByLabelText(/Marital Status/)
            .type('Mar', { force: true })
            .type('{enter}', { force: true });
        cy.findByLabelText(/Father's First Name/)
            .clear({ force: true })
            .type('Philippe', { force: true });
        cy.findByLabelText(/Father's Last Name/)
            .clear({ force: true })
            .type('Cailly', { force: true });
        cy.findByLabelText(/Mother's First Name/)
            .clear({ force: true })
            .type('Juliette', { force: true });
        cy.findByLabelText(/Mother's Maiden Name/)
            .clear({ force: true })
            .type('Lang', { force: true });
        cy.findByLabelText(/Guardian\/Sponsor's First Name/)
            .clear({ force: true })
            .type('Ying');
        cy.findByLabelText(/Guardian\/Sponsor's Last Name/)
            .clear({ force: true })
            .type('Zhang', { force: true });
        cy.findAllByLabelText(/Address/)
            .eq(1)
            .clear({ force: true })
            .type('5 chemin du Moulin', { force: true });
        cy.get('input[name=parentsPhoneNumber]')
            .clear({ force: true })
            .type('+33616768383', { force: true });
        cy.findByLabelText(/Parents Email/)
            .clear({ force: true })
            .type('philippe@cailly.eu', { force: true });

        cy.findByText(/Save/).click({ force: true });

        cy.findByText(/Information updated/).should('exist');
    });

    it('Can fill in education history', () => {
        cy.findByText(/Profile/).click({ force: true });

        cy.findByText(/Education History/).click({ force: true });

        cy.findByLabelText(/Education Country/)
            .type('Fra', { force: true })
            .type('{enter}', { force: true });
        cy.findByLabelText(/Highest Education Level/)
            .type('Doc', { force: true })
            .type('{enter}', { force: true });
        cy.findByLabelText(/GPA/).clear({ force: true }).type('4', { force: true });
        cy.findByLabelText(/Name/).clear({ force: true }).type('Wild Code School', { force: true });
        cy.findByLabelText(/Address/)
            .clear({ force: true })
            .type('44 Rue Alphonse Penaud', { force: true });
        cy.findByLabelText(/Level of Education/)
            .type('Doc', { force: true })
            .type('{enter}', { force: true });
        cy.findByLabelText(/Primary Language Instruction/)
            .type('Fre', { force: true })
            .type('{enter}', { force: true });
        cy.findByLabelText(/Degree Awarded/)
            .type('Doc', { force: true })
            .type('{enter}', { force: true });
        cy.get('.react-datepicker__input-container > input')
            .eq(0)
            .clear({ force: true })
            .type('06/01/2020', { force: true });
        cy.get('.react-datepicker__input-container > input')
            .eq(1)
            .clear({ force: true })
            .type('01/01/2020', { force: true });
        cy.get('.react-datepicker__input-container > input')
            .eq(2)
            .clear({ force: true })
            .type('05/01/2020', { force: true });

        cy.findByText(/Save/).click({ force: true });

        cy.findByText(/Information updated/).should('exist');
    });

    it('Can fill in background information', () => {
        cy.findByText(/Profile/).click({ force: true });

        cy.findByText(/Background Information/).click({ force: true });

        cy.findAllByText(/No/).eq(0).click({ force: true });
        cy.findAllByText(/Yes/).eq(0).click({ force: true });
        cy.findAllByText(/No/).eq(1).click({ force: true });
        cy.findAllByText(/Yes/).eq(1).click({ force: true });
        cy.findByLabelText(/If you answered/)
            .clear({ force: true })
            .type('I have been refused a visa because...', { force: true });
        cy.findByLabelText(/Job Title/)
            .clear({ force: true })
            .type('Web Developer', { force: true });
        cy.findByLabelText(/Company Name/)
            .clear({ force: true })
            .type('Deezer', { force: true });
        cy.findByLabelText(/Address/)
            .clear({ force: true })
            .type('24 rue de Calais', { force: true });
        cy.get('.react-datepicker__input-container > input')
            .eq(0)
            .clear({ force: true })
            .type('01/01/2020', { force: true });
        cy.get('.react-datepicker__input-container > input')
            .eq(1)
            .clear({ force: true })
            .type('06/01/2020', { force: true });

        cy.findByText(/Save/).click({ force: true });

        cy.findByText(/Information updated/).should('exist');
    });

    it('Can fill in upload documents', () => {
        cy.findByText(/Profile/).click({ force: true });

        cy.findByText(/Upload Documents/).click({ force: true });

        for (let index = 0; index < 14; index++) {
            cy.get('[type="file"]').eq(0).attachFile('sample.jpg');
        }

        cy.findAllByText(/Save/).eq(0).click({ force: true });

        cy.findByText(/Documents saved/).should('exist');
    });
});
