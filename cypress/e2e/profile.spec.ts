describe('Profile tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/sign-in');
        cy.findByLabelText(/Email/).type(`${Cypress.env('uuid')}@mailsac.com`);
        cy.findByLabelText(/Password/).type(Cypress.env('uuid'));
        cy.findByText(/Sign In/).click();
        cy.wait(3000);
    });

    it('Fill general information', () => {
        cy.findByText(/Profile/).click();
        cy.wait(3000);

        cy.get('input[name=phoneNumber]')
            .clear({ force: true })
            .type('+33621122955', { force: true });
        cy.findAllByLabelText(/Address/)
            .eq(0)
            .clear({ force: true })
            .type('33 rue du General Leclerc', { force: true });
        cy.wait(2000);
        cy.findAllByLabelText(/First Name/)
            .eq(0)
            .clear({ force: true })
            .type('Paul', { force: true });
        cy.findAllByLabelText(/Last Name/)
            .eq(0)
            .clear({ force: true })
            .type('Cailly', { force: true });
        cy.get('.react-datepicker__input-container > input')
            .clear({ force: true })
            .type('11/01/1995', { force: true });
        cy.findByLabelText(/First Language/)
            .type('Fra', { force: true })
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
        cy.wait(2000);
        cy.get('input[name=parentsPhoneNumber]')
            .clear({ force: true })
            .type('+33616768383', { force: true });
        cy.findByLabelText(/Parents Email/)
            .clear({ force: true })
            .type('philippe@cailly.eu', { force: true });

        cy.findByText(/Save/).click({ force: true });
        cy.wait(2000);

        cy.findByText(/Information updated/).should('exist');
    });

    it('Fill education history', () => {
        cy.findByText(/Profile/).click();
        cy.wait(3000);
        cy.findByText(/Education History/).click();
        cy.wait(3000);

        cy.findByLabelText(/Education Country/).select('FR');
        cy.findByLabelText(/Highest Education Level/).select('1');
        cy.findByLabelText(/GPA/).clear({ force: true }).type('4');
        cy.findByLabelText(/Name/).clear({ force: true }).type('Wild Code School');
        cy.findByLabelText(/Address/)
            .clear({ force: true })
            .type('44 Rue Alphonse Penaud');
        cy.wait(2000);
        cy.findByLabelText(/Level of Education/).select('3');
        cy.findByLabelText(/Primary Language Instruction/).select('FR');
        cy.findByLabelText(/Degree Awarded/).select('3');
        cy.get('.react-datepicker__input-container > input')
            .eq(0)
            .clear({ force: true })
            .type('06/01/2020');
        cy.get('.react-datepicker__input-container > input')
            .eq(1)
            .clear({ force: true })
            .type('01/01/2020');
        cy.get('.react-datepicker__input-container > input')
            .eq(2)
            .clear({ force: true })
            .type('05/01/2020');

        cy.findByText(/Save/).click();
        cy.wait(2000);

        cy.findByText(/Information updated/).should('exist');
    });

    it('Fill background information', () => {
        cy.findByText(/Profile/).click();
        cy.wait(3000);
        cy.findByText(/Background Information/).click();
        cy.wait(3000);

        cy.findAllByText(/No/).eq(0).click();
        cy.findAllByText(/Yes/).eq(0).click();
        cy.findAllByText(/No/).eq(1).click();
        cy.findAllByText(/Yes/).eq(1).click();
        cy.findByLabelText(/If you answered/)
            .clear({ force: true })
            .type('I have been refused a visa because...');
        cy.findByLabelText(/Job Title/)
            .clear({ force: true })
            .type('Web Developer');
        cy.findByLabelText(/Company Name/)
            .clear({ force: true })
            .type('Deezer');
        cy.findByLabelText(/Address/)
            .clear({ force: true })
            .type('24 rue de Calais');
        cy.wait(2000);
        cy.get('.react-datepicker__input-container > input')
            .eq(0)
            .clear({ force: true })
            .type('01/01/2020');
        cy.get('.react-datepicker__input-container > input')
            .eq(1)
            .clear({ force: true })
            .type('06/01/2020');

        cy.findByText(/Save/).click();
        cy.wait(2000);

        cy.findByText(/Information updated/).should('exist');
    });

    it('Fill upload documents', () => {
        cy.findByText(/Profile/).click();
        cy.wait(3000);
        cy.findByText(/Upload Documents/).click();
        cy.wait(3000);

        for (let index = 0; index < 15; index++) {
            cy.wait(2000);
            cy.get('[type="file"]').eq(0).attachFile('sample.jpg');
        }
        cy.wait(5000);

        cy.findAllByText(/Save/).eq(0).click();
        cy.wait(2000);

        cy.findByText(/Documents saved/).should('exist');
    });
});
