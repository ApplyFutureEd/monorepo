describe('Programs tests', () => {
    beforeEach(() => {
        cy.visit('/programs');
        cy.viewport(1920, 1080);
    });

    it('Can find programs', () => {
        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');
    });
});
