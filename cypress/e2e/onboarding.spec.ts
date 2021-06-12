describe('Onboarding tests', () => {
    it('Sign up', () => {
        cy.visit('/sign-up');
        cy.findByLabelText(/email/i).type(`${Cypress.env('uuid')}@mailsac.com`);
        cy.findByLabelText(/password/i).type(Cypress.env('uuid'));
        cy.findByText(/sign up/i).click();
        cy.wait(5000);
    });

    it('Retreive verification code', () => {
        cy.visit('https://mailsac.com/');
        cy.get('.myinbox').type(Cypress.env('uuid'));
        cy.wait(5000);
        cy.findByText(/check the mail!/i).click();
        cy.get('tbody > tr').eq(1).click();
        cy.findByText(/your verification code is (.*)/i).then((value) => {
            cy.writeFile(
                'packages/students/cypress/fixtures/verification-code.txt',
                (value[0].textContent &&
                    value[0].textContent.match(/[0-9]/gi) &&
                    value[0].textContent.match(/[0-9]/gi).join('')) ||
                    ''
            );
        });
    });

    it('Verify account and complete onboarding', () => {
        let verificationCode = '';
        cy.readFile('packages/students/cypress/fixtures/verification-code.txt')
            .then((value) => {
                verificationCode = value;
            })
            .then(() => {
                cy.visit('/confirm-account');
                cy.findByLabelText(/email/i).type(`${Cypress.env('uuid')}@mailsac.com`);
                cy.findByLabelText(/verification code/i).type(verificationCode);
                cy.findByLabelText(/password/i).type(Cypress.env('uuid'));
                cy.findAllByRole('button').eq(0).click();
                cy.wait(5000);

                cy.findByRole('textbox')
                    .type('Fra', { force: true })
                    .type('{enter}', { force: true });
                cy.findByText(/next/i).click();
                cy.wait(3000);

                cy.findByRole('textbox')
                    .type('Doc', { force: true })
                    .type('{enter}', { force: true });
                cy.findByText(/next/i).click();
                cy.wait(3000);

                cy.findByText(/business/i).click();
                cy.findByText(/next/i).click();
                cy.wait(3000);

                cy.findByRole('textbox')
                    .type('Mas', { force: true })
                    .type('{enter}', { force: true });
                cy.findByText(/next/i).click();
                cy.wait(3000);

                cy.findAllByText(/master/i)
                    .eq(0)
                    .click();

                cy.wait(3000);
            });
    });
});
