describe('Onboarding tests', () => {
    it('Sign up', () => {
        cy.visit('http://localhost:3000/sign-up');
        cy.findByLabelText(/Email/).type(`${Cypress.env('uuid')}@mailsac.com`);
        cy.findByLabelText(/Password/).type(Cypress.env('uuid'));
        cy.findByText(/Sign Up/).click();
        cy.wait(5000);
    });

    it('Retreive verification code', () => {
        cy.visit('https://mailsac.com/');
        cy.get('.myinbox').type(Cypress.env('uuid'));
        cy.wait(5000);
        cy.findByText(/Check the mail!/).click();
        cy.get('tbody > tr').eq(1).click();
        cy.findByText(/Your verification code is (.*)/).then((value) => {
            cy.writeFile(
                'verificationCode.txt',
                value[0].textContent?.match(/[0-9]/gi)?.join('') || ''
            );
        });
    });

    it('Verify account and complete onboarding', () => {
        let verificationCode = '';
        cy.readFile('verificationCode.txt')
            .then((value) => {
                verificationCode = value;
            })
            .then(() => {
                cy.visit('http://localhost:3000/confirm-account');
                cy.findByLabelText(/Email/).type(`${Cypress.env('uuid')}@mailsac.com`);
                cy.findByLabelText(/Verification Code/).type(verificationCode);
                cy.findByLabelText(/Password/).type(Cypress.env('uuid'));
                cy.findAllByText(/Confirm/)
                    .eq(1)
                    .click();
                cy.wait(5000);

                cy.findByText(/Bachelor's Degree/).click();
                cy.findByText(/Master's Degree/).click();
                cy.findByText(/Business Management and Economics/).click();
                cy.findByText(/Engineering and Technology/).click();
                cy.findByText(/Culinary Arts/).click();
                cy.findAllByText(/Next step/)
                    .eq(0)
                    .click();
                cy.findByLabelText(/What is your nationality/).select('FR');
                cy.findByLabelText(/Where did you study/).select('FR');
                cy.findByLabelText(/What is your highest education level/).select('1');
                cy.findByLabelText(/What is your current GPA/)
                    .clear()
                    .type('4');
                cy.findAllByText(/Next step/)
                    .eq(1)
                    .click();
                cy.findAllByText(/Yes/).eq(0).click();
                cy.findByLabelText(/TOEFL/).type('667');
                cy.findAllByText(/Yes/).eq(1).click();
                cy.findByLabelText(/TCF \/ TEF/).select('2');
                cy.get('button[type=submit]').eq(0).click();
                cy.wait(3000);
            });
    });
});
