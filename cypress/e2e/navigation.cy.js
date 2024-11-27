describe('template spec', () => {
  it('navigation test', () => {
    cy.visit('https://demo.nopcommerce.com/')
    // confirming the title of the Home page
    cy.title().should('eq', 'nopCommerce demo store')
    cy.get('.ico-register').click()
    // verifying the title of the Register page
    cy.title().should('eq', 'nopCommerce demo store. Register')

    //command to go back to homepage
    cy.go('back')
    cy.title().should('eq', 'nopCommerce demo store')

    //command to go back to previous opened page
    cy.go('forward')
    cy.title().should('eq', 'nopCommerce demo store. Register')

   //reload the page
    cy.reload()

  })
})