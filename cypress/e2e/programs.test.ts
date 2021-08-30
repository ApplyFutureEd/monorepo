describe('Programs tests', () => {
    beforeEach(() => {
        cy.visit('/programs');
        cy.wait(3000);
    });

    it('Find programs', () => {
        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');
    });

    it('Open and apply filters', () => {
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
        cy.wait(3000);

        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');
    });

    it('Use searchbar', () => {
        cy.findByPlaceholderText(/search/i).type('Glion', { force: true });
        cy.wait(3000);

        cy.findAllByText(/Glion Institute of Higher Education/i)
            .eq(0)
            .should('be.visible');
    });

    it('Use sortby', () => {
        cy.findByText(/by school/i).click({ force: true });

        cy.findByText(/by country/i).click();
        cy.wait(3000);
        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');

        cy.findByText(/by country/i).click({ force: true });
        cy.findByText(/by duration/i).click();
        cy.wait(3000);
        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');

        cy.findByText(/by duration/i).click({ force: true });
        cy.findByText(/high to low/i).click();
        cy.wait(3000);
        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');

        cy.findByText(/high to low/i).click({ force: true });
        cy.findByText(/fee \(low to high\)/i).click();
        cy.wait(3000);
        cy.findAllByText(/bachelor in/i)
            .eq(0)
            .should('be.visible');
    });
});
