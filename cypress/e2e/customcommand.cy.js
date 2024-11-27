
// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // Handle the exception as needed
  console.error('Uncaught Exception:', err.message);
  // Return false to prevent the unhandled exception from failing the test
  return false;
});

describe('custom commands', () => {
  it('Login Test', () => {
    cy.login('admin@yourstore.com', 'admin')//valid
    cy.title().should('be.equal','Dashboard / nopCommerce administration')

    cy.login('admin@yourstore.com', 'admin12')//in valid
    cy.title().should('be.equal','Your store. Login')

    cy.login('admi123n@yourstore.com', 'admin')//in valid
    cy.title().should('be.equal','Your store. Login')

  })

  it('Add Customer', () => {
    //Login script
    cy.login('admin@yourstore.com', 'admin')

    //script for adding customer
    cy.log('Adding Customer*********')

  })

  it('Edit Customer', () => {
    //Login script
    cy.login('admin@yourstore.com', 'admin')

    //script for adding customer
    cy.log('Editing Customer*********')
  })
})