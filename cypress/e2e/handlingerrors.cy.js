describe('Handling Alert buttons', () => {

  it('passes', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
    cy.wait(3000)
    cy.get('#alertbtn').click()
    // Cypress will auto accept confirmations. Return false from this event and the confirmation will be canceled.
    cy.on('window alert', (str)=>(
      expect(str).to.equal('Hello , share this practice page who love to learn automation')
    ))
  })
  it('passes', () => {
    cy.visit('https://codenboxautomationlab.com/practice/')
    cy.get('#confirmbtn').click()
    cy.on('window confirm', (str)=>(
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    ))
  })
})
