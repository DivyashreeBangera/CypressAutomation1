// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // Handle the exception as needed
  console.error('Uncaught Exception:', err.message);
  // Return false to prevent the unhandled exception from failing the test
  return false;
});


describe('Fixtures Demo', () => {
  //let data; //closure variable

  before(function() 
{
  cy.fixture('example.json').then(function(data)
{
  Cypress.data=data;
})
})

  it('fixturesdemo', () => {

    cy.visit('https://demo.nopcommerce.com/register?returnUrl=%2F')
    cy.get('#gender-female').check()
    // Text Input fields
    cy.get('#FirstName').type(Cypress.data.firstname) //First Name
    cy.get('#LastName').type(Cypress.data.LastName) // Last Name
    cy.get('#Email').type(Cypress.data.Email) //Email
    cy.get('#Company').type(Cypress.data.Company) //Company
    cy.get('#Password').type(Cypress.data.Password) //Password
    cy.get('#ConfirmPassword').type(Cypress.data.ConfirmPassword) //Confirm Password
//Date Picker
cy.get("[name='DateOfBirthDay']").select(Cypress.data.BirthDay) //Birth Day
cy.get("[name='DateOfBirthMonth']").select(Cypress.data.BirthMonth) //Birth Month
cy.get("[name='DateOfBirthYear']").select(Cypress.data.BirthYear) //Birth Year

//submit buttom
//cy.get('#register-button').click()

  })
})