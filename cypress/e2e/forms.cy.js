/// <reference types="Cypress" />

describe('Forms, Buttons & Checkbox', () => {
    it('Submit And Assert Form', () => {
        // Variables with Data
        const name = "Petter";
        const drink = "Water";
        const color = "Red";
        const email = "peter@test.com";
        const message = "I like Cypress";

        cy.visit('https://practice-automation.com/form-fields/');
        cy.getByTestData('contact-form').should('be.visible');

        // Fill the form
        cy.getById('g1103-name').should('be.visible');
        // cy.get('#g1103-name').type(name);
        cy.getById('g1103-name').type(name)
        cy.contains(drink).click();
        cy.contains(color).click();
        cy.get('#email').type(email);
        cy.get('#contact-form-comment-message').type(message);
        cy.getById('contact-form-comment-message').type(message);
        cy.contains('Submit').click();
    });
});