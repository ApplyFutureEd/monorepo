describe('Application tests', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('/sign-in');
        cy.findByLabelText(/Email/).type(`${Cypress.env('uuid')}@mailsac.com`);
        cy.findByLabelText(/Password/).type(Cypress.env('uuid'));
        cy.findByText(/Sign In/).click();
    });

    it('Can fill in an application', () => {
        cy.visit(
            '/programs/masters-degree-programme-in-tourism-management-major-of-the-master-in-fashion-luxury-tourism-management-luiss-business-school-roma'
        );

        cy.findByRole('button', { name: /apply/i }).click({ force: true });
        cy.findAllByRole('button', { name: /202/i }).eq(0).click({ force: true });

        cy.get('[type="file"]').eq(0).attachFile('sample.jpg');

        cy.findByText(/next step/i).click({ force: true });

        cy.get('input[type=checkbox]').eq(0).check({ force: true });

        cy.findByText(/next step/i).click({ force: true });

        cy.findByText(/follow my application/i).click({ force: true });
    });
});
