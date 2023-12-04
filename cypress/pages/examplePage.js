class ExamplePage {
    openExamplePage() {
        // cy.visit('https://example.cypress.io');
        cy.visit('/');
    }

    assertUrl() {
        const baseUrl = Cypress.config('baseUrl');
        cy.url().should('contain', `${baseUrl}`);
    }

    assertTitle() {
        cy.title().should('contain', 'Kitchen Sink');
    }
}

export default ExamplePage;