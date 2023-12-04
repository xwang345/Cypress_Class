/// <reference types="Cypress" />

describe('TC_001_SmokeTest', () => {
    it('Smoke Test', () => {
        cy.visit('https://www.demoblaze.com/index.html');

        cy.get('.navbar-brand').should('be.visible');
        cy.get('#navbarExample').should('be.visible');

        cy.get('#cat').should('be.visible');

        cy.get('#fotcont').should('be.visible');
    });
});