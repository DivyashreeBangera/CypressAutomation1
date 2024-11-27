describe('template spec', () => {

  before(() => {
    cy.log('**********This is a SETUP Block*********')
    
    //runs once before all tests in the block
  })

  after(() => {
    //runs once after all tests in the block
    cy.log('**********This is TEAR DOWN Block*********')
  })

  beforeEach(() => {
    //runs before each tests in the block
    cy.log('**********This is LOGIN Block*********')
    cy.visit('https://demo.opencart.com/admin/')
    cy.get("[name='username']").clear()
    cy.get("[name='password']").clear()
    cy.get("[name='username']").type("demo")
    cy.get("[name='password']").type("demo")
    cy.get('.btn').click()
    cy.get("[class='btn-close']").click()
  })

  afterEach(() => {
    //runs after each tests in the block
    cy.log('**********This is LOGOUT Block*********')
    cy.get("#header-logout").click()

  })

  it('searching', () => {
    //send some statements
    cy.log('**********This is Searching Test*********')
    

  })

  it('Advanced searching', () => {
    cy.log('**********This is Advanced Searching Test*********')
  })

  it('listing Products', () => {

    cy.log('**********This is Listing Products Test*********')
  })


})