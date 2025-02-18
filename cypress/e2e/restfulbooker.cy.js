/// <reference types="cypress" />

describe('Restful Booker API Automation', () => {

    const baseUrl = 'https://restful-booker.herokuapp.com'
    let token = '';
    let bookingId = '';
  
    it('Create Token', () => {
      cy.request('POST', `${baseUrl}/auth`, {
        username: 'admin',
        password: 'password123'
      }).then((response) => {
        expect(response.status).to.eq(200)
        token = response.body.token
        cy.log('Token:', token)
      })
    })
  
    it('Get Booking IDs', () => {
      cy.request('GET', `${baseUrl}/booking`).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
        bookingId = response.body[0].bookingid
        cy.log('Booking ID:', bookingId)
      })
    })
  
    it('Get Booking Details', () => {
      cy.request('GET', `${baseUrl}/booking/${bookingId}`).then((response) => {
        expect(response.status).to.eq(200)
        cy.log('Booking Details:', JSON.stringify(response.body))
      })
    })
  
    it('Create Booking', () => {
      const bookingData = {
        firstname: 'John',
        lastname: 'Doe',
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: '2024-02-01',
          checkout: '2024-02-10'
        },
        additionalneeds: 'Breakfast'
      }
  
      cy.request('POST', `${baseUrl}/booking`, bookingData).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.booking.firstname).to.eq('John')
        cy.log('New Booking ID:', response.body.bookingid)
        bookingId = response.body.bookingid
      })
    })
  
    it('Update Booking', () => {
      const updatedBooking = {
        firstname: 'Jane',
        lastname: 'Smith',
        totalprice: 200,
        depositpaid: false,
        bookingdates: {
          checkin: '2024-03-01',
          checkout: '2024-03-10'
        },
        additionalneeds: 'Lunch'
      }
  
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/booking/${bookingId}`,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cookie': `token=${token}`
        },
        body: updatedBooking
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.firstname).to.eq('Jane')
      })
    })
  
    it('Partial Update Booking', () => {
      const partialUpdate = {
        firstname: 'Mike'
      }
  
      cy.request({
        method: 'PATCH',
        url: `${baseUrl}/booking/${bookingId}`,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cookie': `token=${token}`
        },
        body: partialUpdate
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.firstname).to.eq('Mike')
      })
    })
  
    it('Delete Booking', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/booking/${bookingId}`,
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `token=${token}`
        }
      }).then((response) => {
        expect(response.status).to.eq(201)
      })
    })
  
    it('Health Check', () => {
      cy.request('GET', `${baseUrl}/ping`).then((response) => {
        expect(response.status).to.eq(201)
        cy.log('Health Check Passed')
      })
    })
  })
  