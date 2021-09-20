describe('Legal Page tests', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
    });

    it('Can find the privacy policy page and view its content', () => {
        cy.visit('/help');
        cy.findByText(/What documents do I need to apply to a program?/).click();
        cy.findByText(/programs require recommendation letters/);
    });
});
