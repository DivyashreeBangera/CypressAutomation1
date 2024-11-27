import cypress from "cypress"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/')
    cy.get('[name="q"]').type('Cypress Automation').type('{enter}')
  })
})