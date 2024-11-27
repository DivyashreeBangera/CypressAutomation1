describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //negative scenario
    cy.get("[name='username']").type("ABC")
    cy.get("[name='password']").type("123")
    cy.get("[type='submit']").click()
    //positive scenario
    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("admin123")
    cy.get("[type='submit']").click()
})
})