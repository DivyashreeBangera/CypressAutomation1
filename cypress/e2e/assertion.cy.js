describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()

    //Implicit assertions
    cy.get('#query-btn').should('contain', 'Button')
    .should('have.class', 'query-btn')
    .should('be.visible')
    .should('be.enabled')
    cy.get('#query-btn').invoke('attr','id').should('equal','query-btn')
    cy.get('#query-btn').should('contain', 'Button')
    .and('have.class', 'query-btn')
  
    //Explicit Assertions
    expect(true).to.be.true
    let name='Divya'
    expect(name).to.be.equal('Divya')

  })
})