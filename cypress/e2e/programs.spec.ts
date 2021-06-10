describe('Programs tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/programs');
        cy.wait(3000);
    });

    it('Find programs', () => {
        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');
    });

    it('Open and apply filters', () => {
        cy.get('button[data-testid=button-sideover]').click();

        cy.findByLabelText('Country').type('Fra', { force: true }).type('{enter}', { force: true });
        cy.findByLabelText('City').type('Par', { force: true }).type('{enter}', { force: true });
        cy.findByLabelText('Discipline')
            .type('Bus', { force: true })
            .type('{enter}', { force: true });
        cy.findByLabelText('Degree').type('Mas', { force: true }).type('{enter}', { force: true });

        cy.findByText(/Apply filters/i).click();
        cy.wait(3000);

        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');
    });

    it('Use searchbar', () => {
        cy.findByPlaceholderText(/search/i).type('Glion');
        cy.wait(3000);

        cy.findAllByText(/Glion Institute of Higher Education/i)
            .eq(0)
            .should('be.visible');
    });

    it('Use sortby', () => {
        cy.findByText('Sort by').click();

        cy.findByText(/by school/i).click();
        cy.wait(3000);
        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');

        cy.findByText(/by school/i).click();
        cy.findByText(/by country/i).click();
        cy.wait(3000);
        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');

        cy.findByText(/by country/i).click();
        cy.findByText(/by duration/i).click();
        cy.wait(3000);
        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');

        cy.findByText(/by duration/i).click();
        cy.findByText(/high to low/i).click();
        cy.wait(3000);
        cy.findAllByText(/master of science in/i)
            .eq(0)
            .should('be.visible');

        cy.findByText(/high to low/i).click();
        cy.findByText(/fee \(low to high\)/i).click();
        cy.wait(3000);
        cy.findAllByText(/bachelor in/i)
            .eq(0)
            .should('be.visible');
    });
});
