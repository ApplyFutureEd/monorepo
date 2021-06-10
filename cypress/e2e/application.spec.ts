describe('Application tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/sign-in');
        cy.findByLabelText(/Email/).type(`${Cypress.env('uuid')}@mailsac.com`);
        cy.findByLabelText(/Password/).type(Cypress.env('uuid'));
        cy.findByText(/Sign In/).click();
        cy.wait(3000);
    });

    it('Fill an application', () => {
        cy.findAllByText(/bachelor in/i)
            .eq(0)
            .click();
        cy.wait(3000);

        cy.findByRole('button', { name: /apply/i }).click();
        cy.findAllByRole('button', { name: /202/i }).eq(0).click();
        cy.get('[type="file"]').eq(0).attachFile('sample.jpg');
        cy.wait(5000);

        cy.findByText(/next step/i).click();
        cy.wait(15000);

        cy.get('input[type=checkbox]').eq(0).check();
        cy.findByLabelText(/close/i).click();
        cy.get('input[type=checkbox]').eq(1).check();

        cy.findByText(/next step/i).click();
        cy.wait(3000);
        cy.findByText(/follow my application/i).click();
    });
});
