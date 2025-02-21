describe('Negative Testing - Dummy Ticket Site', () => {
    const coupontext = 'invalidcoupon'; 

    beforeEach(() => {
      cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
    cy.wait(200)
    })
  
    it('Should show error for empty fields', () => {
        cy.get('#travname').clear()
        cy.get('#place_order').click()
      cy.contains('Billing Phone is a required field.').should('be.visible')
      cy.contains('Billing Email address is a required field.').should('be.visible')
      cy.contains('Billing Street address is a required field.').should('be.visible')
      cy.contains('Billing Town / City is a required field.').should('be.visible')
      cy.contains('Billing State / District / Province is a required field.').should('be.visible')
      cy.contains('Billing Postcode / ZIP / PIN code is a required field.').should('be.visible')
      cy.contains('Last / Surname is a required field.').should('be.visible')
      cy.contains('First / Given name is a required field').should('be.visible')
      cy.contains('Date of birth is a required field.').should('be.visible')
      cy.contains('Sex is a required field.').should('be.visible')
      cy.contains('From city / Origin is a required field.').should('be.visible')
      cy.contains('To city. /Dest. is a required field.').should('be.visible')
      cy.contains('Departure date is a required field.').should('be.visible')
    })
  
    it('Should show error for invalid email', () => {
        cy.get('#billing_email').type('invalidemail')
      cy.get('#place_order').click()
      cy.contains('Invalid billing email address').should('be.visible')
    })
  
    it('Should show error for invalid phone', () => {
        cy.get('#billing_phone').type('invalidnumber')
      cy.get('#place_order').click()
      cy.contains('Billing Phone is not a valid phone number.').should('be.visible')
    })

    it('Should show error for invalid post code', () => {
        cy.get('#billing_postcode').type('invalidnumber')
      cy.get('#place_order').click()
      cy.contains('Billing Postcode / ZIP / PIN code is not a valid postcode / ZIP.').should('be.visible')
    })
  
    it('Should show error for invalid coupon code', () => {
       cy.get('.showcoupon').click()
       
        cy.get('#coupon_code').type(coupontext)
      cy.get('.form-row-last > .button').click()
      cy.contains(`Coupon "${coupontext}" does not exist!`).should('be.visible');

    })


  })
  