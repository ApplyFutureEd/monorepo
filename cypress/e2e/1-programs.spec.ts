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

    it('Can Open and apply filters', () => {
        cy.findAllByText(/filters/i)
            .eq(0)
            .click({ force: true });

        cy.findAllByLabelText(/country/i)
            .eq(0)
            .type('Fra', { force: true })
            .type('{enter}', { force: true });
        cy.findByLabelText(/city/i).type('Par', { force: true }).type('{enter}', { force: true });
        cy.findByLabelText(/discipline/i)
            .type('Bus', { force: true })
            .type('{enter}', { force: true });
        cy.findByLabelText(/degree/i)
            .type('Mas', { force: true })
            .type('{enter}', { force: true });

        cy.findByText(/apply filters/i).click();

        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');
    });

    it('Can use the searchbar', () => {
        cy.findByPlaceholderText(/search/i).type('Glion', { force: true });

        cy.findAllByText(/Glion Institute of Higher Education/i)
            .eq(0)
            .should('be.visible');
    });

    it('Can use sortby', () => {
        cy.findByText(/by school/i).click({ force: true });

        cy.findByText(/by country/i).click();

        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');

        cy.findByText(/by country/i).click({ force: true });
        cy.findByText(/by duration/i).click();

        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');

        cy.findByText(/by duration/i).click({ force: true });
        cy.findByText(/high to low/i).click();

        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');

        cy.findByText(/high to low/i).click({ force: true });
        cy.findByText(/fee \(low to high\)/i).click();

        cy.findAllByText(/bachelor in/i)
            .eq(0)
            .should('be.visible');
    });
});
