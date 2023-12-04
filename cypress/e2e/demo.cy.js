/// <referece types="Cypress" />
import ExamplePage from "../pages/examplePage";

describe('Cypress E2E Testing Demo', () => {
  beforeEach(() => {
    // cy.visit('https://example.cypress.io')
    const examplePage = new ExamplePage();
    examplePage.openExamplePage();
  });

  afterEach(() => {
    cy.log('Running after each of my tests');
  });

  it('Assert url and title', () => {
    // cy.visit('https://example.cypress.io');
    // cy.url().should('contain', 'example.cypress.io');
    const examplePage = new ExamplePage();
    examplePage.assertUrl();
    examplePage.assertTitle();
  });

  it.only('Assert Element', {retries: 3}, () => {
    // cy.visit('https://example.cypress.io');
    cy.get('h1').should('be.visible');
    cy.wait(2000);
    cy.get('p').should('be.visible');
  });

  it.skip('Reload and Logs', () => {
    cy.log('Before Reload');
    cy.reload();
    cy.log('After Reload');
  });
})