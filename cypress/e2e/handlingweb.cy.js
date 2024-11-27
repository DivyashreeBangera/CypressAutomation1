// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // Handle the exception as needed
  console.error('Uncaught Exception:', err.message);
  // Return false to prevent the unhandled exception from failing the test
  return false;
});

describe('template spec', () => {

  it('passes', () => {
    cy.visit('https://demo.opencart.com/admin/')
    cy.get("[name='username']").clear()
    cy.get("[name='password']").clear()

  


    cy.get("[name='username']").type("demo")
    cy.get("[name='password']").type("demo")
    cy.get('.btn').click()
   // cy.get("[class='btn btn-primary']").click()
    cy.wait(3000)
//locate the table
//1. check value presence anywhere in the table
cy.get('table[class="table"]').contains('td', 'eliana cardoso').should('be.visible')

//2. check value presence in specific row & column
//cy.get('table[class="table"] > tbody > tr:nth-child(1) > td:nth-child(3)').contains("Shipped").should('be.visible')
cy.get('tbody > :nth-child(3) > :nth-child(3)').contains("Shipped").should('be.visible')
//3. check value presence beased on condition by iterating rows
// verify the customer name 'Michael Johnson' whose Order ID is "3020"

cy.get('table[class="table"] > tbody > tr td:nth-child(2)').each(($el, index, $list) => {
  const text=$el.text()
  if(text.includes("eliana cardoso"))
  {
    cy.get('table[class="table"] > tbody > tr td:nth-child(1)').eq(index).then(function(oid)
  {
    const orderid = oid.text()
    expect(orderid).to.equal("3024")
  })
  }
})



  })
})