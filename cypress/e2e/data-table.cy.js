/// <reference types="Cypress" />

describe('Data Tables', () => {
    it('should validate data table', () => {
        cy.visit('https://practice-automation.com/tables/');

        cy.get('.wp-block-table').should('be.visible').within(() => {
            cy.get('td').eq(0).should('contain', 'Item');
            cy.get('td').eq(1).should('contain', 'Price');
        });
    });
});