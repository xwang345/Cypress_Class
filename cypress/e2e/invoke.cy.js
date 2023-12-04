/// <reference types="Cypress" />

describe('Execute js code inside Cypress', () => {
    it('invoke calulation of numbers', () => {
        const fn = (a, b, c) => {
            return a + b + c;
        }

    cy.wrap({sum: fn}).invoke('sum', 1, 2, 3).should('equal', 6);
    })
});