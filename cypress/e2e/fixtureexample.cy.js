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

    cy.visit('https://accounts.google.com/lifecycle/steps/signup/name?continue=https://mail.google.com/mail/u/0/&ddm=1&dsh=S-1022337335:1733323407071540&emr=1&flowEntry=SignUp&flowName=GlifWebSignIn&followup=https://mail.google.com/mail/u/0/&ifkv=AQDHYWo6Z8jIIYTuYmPm97n7IUQXN28UjxA5RIlgiRF8wW4-JyYpvG75vQZll3ECzKhDJ6WlTG_t&osid=1&service=mail&TL=AKOx4s1DiXGtVxTc4Hw771EPLDLzRgceF_SFpMPme_9D7A5oMSKv6P6THFWvfybe')
    //cy.get('#gender-female').check()
    cy.contains('Next').click();
    // Text Input fields
    cy.get("[name='firstName']").type(Cypress.data.firstname) //First Name
    cy.get("[name='lastName']").type(Cypress.data.LastName) // Last Name
    cy.contains('Next').click();
   // cy.get('#Email').type(Cypress.data.Email) //Email
    //cy.get('#Company').type(Cypress.data.Company) //Company
   // cy.get('#Password').type(Cypress.data.Password) //Password
   // cy.get('#ConfirmPassword').type(Cypress.data.ConfirmPassword) //Confirm Password
//Date Picker
cy.get("[id='month']").select(Cypress.data.BirthMonth) //Birth Day
cy.get("[id='day']").select(Cypress.data.BirthDay) //Birth Month
cy.get("[id='year']").select(Cypress.data.BirthYear) //Birth Year

//submit buttom
//cy.get('#register-button').click()

  })
})