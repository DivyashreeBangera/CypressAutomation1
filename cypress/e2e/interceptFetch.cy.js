describe('Intercept Network Requests (XHR & Fetch)', () => {
  //beforeEach(() => {
   // cy.visit('https://jsonplaceholder.typicode.com/users'); // Visit the API URL directly
 // });

  it('Intercepts and modifies GET /users request', () => {
    // Intercepting the GET request to /users
    cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', {
        statusCode: 200,
        body: [
          {
            id: 1,
            name: 'Mocked User',
            username: 'mockeduser',
            email: 'mock@mock.com',
          },
        ],
      }).as('getUsers');
  
      // Now visit the page
      cy.visit('https://jsonplaceholder.typicode.com/users');
  
      // Wait for the intercepted request
      cy.wait('@getUsers').then((interception) => {
        cy.log('Intercepted Request:', JSON.stringify(interception.response.body));
  
      // Check if the mocked response is shown
      cy.contains('Mocked User').should('exist');
    });
  });
})
  
  