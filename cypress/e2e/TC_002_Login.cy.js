/// <reference types="Cypress" />


describe('TC_002_Login', () => {
    it('should login and logout from application', () => {
        cy.viewport('macbook-16');
        cy.fixture('example.json').as('userData');

        cy.get('@userData').then(user => {
            cy.visit('https://www.demoblaze.com/index.html');

            cy.get('#login2').click();
    
            cy.get('#logInModal').should('be.visible');
            cy.get('#loginusername').type(`${user.name}`, {force: true});
            cy.get('#loginpassword').type(`${user.email}`, {force: true});
    
            cy.get('.btn-primary').contains('Log in').click();
    
            cy.get('#nameofuser').should('contain', `Welcome ${user.name}`);
        });        
    });
});