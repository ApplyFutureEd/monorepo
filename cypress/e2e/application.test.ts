/* eslint-disable cypress/no-unnecessary-waiting */
describe('Application tests', () => {
    beforeEach(() => {
        cy.visit('/sign-in');
        cy.findByLabelText(/Email/).type(`${Cypress.env('uuid')}@mailsac.com`);
        cy.findByLabelText(/Password/).type(Cypress.env('uuid'));
        cy.findByText(/Sign In/).click();
        cy.wait(3000);
    });

    it('Fill an application', () => {
        cy.visit(
            '/programs/masters-degree-programme-in-tourism-management-major-of-the-master-in-fashion-luxury-tourism-management-luiss-business-school-roma'
        );
        cy.wait(3000);

        cy.findByRole('button', { name: /apply/i }).click({ force: true });
        cy.findAllByRole('button', { name: /202/i }).eq(0).click({ force: true });
        cy.wait(5000);

        cy.get('[type="file"]').eq(0).attachFile('sample.jpg');
        cy.wait(5000);

        cy.findByText(/next step/i).click({ force: true });
        cy.wait(15000);

        cy.get('input[type=checkbox]').eq(0).check({ force: true });

        cy.findByText(/next step/i).click({ force: true });
        cy.wait(3000);
        cy.findByText(/follow my application/i).click({ force: true });
    });
});
