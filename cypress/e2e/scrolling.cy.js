/// <reference types="Cypress" />

describe('Cypress Modals', () => {
    it('Scroll into footer view', () => {
        cy.visit('https://practice-automation.com/');
        cy.get('footer').scrollIntoView();
    });
});