// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // Handle the exception as needed
  console.error('Uncaught Exception:', err.message);
  // Return false to prevent the unhandled exception from failing the test
  return false;
});

class LoginPage
{
  visit()
  {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

  }

  fillUsername(value)
  {
      const field=cy.get("[name='username']")
      field.clear()
      field.type(value)
      return this
  }

  fillPassword(value)
  {
      const field=cy.get("[name='password']")
      field.clear()
      field.type(value)
      return this
  }

  submit()
  {
      const buttom=cy.get("[type='submit']")
      buttom.click()

  }
}
  export default LoginPage