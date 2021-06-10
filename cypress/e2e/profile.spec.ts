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

        cy.get('input[name=phoneNumber]').clear().type('+33621122955');
        cy.findAllByLabelText(/Address/)
            .eq(0)
            .clear()
            .type('33 rue du General Leclerc');
        cy.wait(2000);
        cy.findAllByLabelText(/First Name/)
            .eq(0)
            .clear()
            .type('Paul');
        cy.findAllByLabelText(/Last Name/)
            .eq(0)
            .clear()
            .type('Cailly');
        cy.get('.react-datepicker__input-container > input').clear().type('11/01/1995');
        cy.findByLabelText(/First Language/).select('FR');
        cy.findByLabelText(/Nationality/).select('FR');
        cy.findByLabelText(/Passport Number/)
            .clear()
            .type('N123456789');
        cy.findByLabelText(/Gender/).select('male');
        cy.findByLabelText(/Marital Status/).select('married');
        cy.findByLabelText(/Father's First Name/)
            .clear()
            .type('Philippe');
        cy.findByLabelText(/Father's Last Name/)
            .clear()
            .type('Cailly');
        cy.findByLabelText(/Mother's First Name/)
            .clear()
            .type('Juliette');
        cy.findByLabelText(/Mother's Maiden Name/)
            .clear()
            .type('Lang');
        cy.findByLabelText(/Guardian\/Sponsor's First Name/)
            .clear()
            .type('Ying');
        cy.findByLabelText(/Guardian\/Sponsor's Last Name/)
            .clear()
            .type('Zhang');
        cy.findAllByLabelText(/Address/)
            .eq(1)
            .clear()
            .type('5 chemin du Moulin');
        cy.wait(2000);
        cy.get('input[name=parentsPhoneNumber]').clear().type('+33616768383');
        cy.findByLabelText(/Parents Email/)
            .clear()
            .type('philippe@cailly.eu');

        cy.findByText(/Save/).click();
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
        cy.findByLabelText(/GPA/).clear().type('4');
        cy.findByLabelText(/Name/).clear().type('Wild Code School');
        cy.findByLabelText(/Address/)
            .clear()
            .type('44 Rue Alphonse Penaud');
        cy.wait(2000);
        cy.findByLabelText(/Level of Education/).select('3');
        cy.findByLabelText(/Primary Language Instruction/).select('FR');
        cy.findByLabelText(/Degree Awarded/).select('3');
        cy.get('.react-datepicker__input-container > input').eq(0).clear().type('06/01/2020');
        cy.get('.react-datepicker__input-container > input').eq(1).clear().type('01/01/2020');
        cy.get('.react-datepicker__input-container > input').eq(2).clear().type('05/01/2020');

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
            .clear()
            .type('I have been refused a visa because...');
        cy.findByLabelText(/Job Title/)
            .clear()
            .type('Web Developer');
        cy.findByLabelText(/Company Name/)
            .clear()
            .type('Deezer');
        cy.findByLabelText(/Address/)
            .clear()
            .type('24 rue de Calais');
        cy.wait(2000);
        cy.get('.react-datepicker__input-container > input').eq(0).clear().type('01/01/2020');
        cy.get('.react-datepicker__input-container > input').eq(1).clear().type('06/01/2020');

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
