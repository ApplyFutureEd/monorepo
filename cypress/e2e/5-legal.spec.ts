describe('Legal Page tests', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
    });

    it('Can find the privacy policy page and view its content', () => {
        cy.visit('/privacy-policy');
        cy.findByText(/Changes to our privacy policy/);
    });

    it('Can find the terms & conditions page and view its content', () => {
        cy.visit('/terms-and-conditions');
        cy.findByText(/10. Your Obligation to Report Errors/);
    });

    it('Can find the terms of use page and view its content', () => {
        cy.visit('/terms-of-use');
        cy.findByText(/12. Governing Law and Jurisdiction/);
    });
});
