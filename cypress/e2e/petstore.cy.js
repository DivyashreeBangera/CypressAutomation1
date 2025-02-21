/// <reference types="cypress" />

describe('Swagger Petstore Automation', () => {

    const baseUrl = 'https://petstore.swagger.io/'
  
    it('Visits the Petstore site', () => {
      cy.visit(baseUrl)
      cy.contains('Swagger Petstore').should('be.visible')
    })
  
    it('Adds a new pet using API', () => {
      cy.request('POST', '/v2/pet', {
        id: 101,
        name: 'Fluffy',
        status: 'available'
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('Fluffy')
      })
    })
  
    it('Finds the pet by ID', () => {
      cy.request('GET', '/v2/pet/101').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('Fluffy')
      })
    })
  
    it('Updates the pet status', () => {
      cy.request('PUT', '/v2/pet', {
        id: 101,
        name: 'Fluffy',
        status: 'sold'
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.status).to.eq('sold')
      })
    })
  
    it('Deletes the pet', () => {
      cy.request('DELETE', '/v2/pet/101').then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })
  