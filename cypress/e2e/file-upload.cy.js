/// <reference types="Cypress" />

describe('Cypress Files Upload', () => {
    it('Should upload JSON file', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        // cy.get('#file-upload').selectFile('cypress/fixtures/example.json');
        cy.fixture('example.json', null).as('myFixture')
        cy.get('#file-upload').selectFile('@myFixture', { action: 'drag-drop' })

        cy.get('#file-submit').click();

        cy.get('h3').should('be.visible');
    });
});