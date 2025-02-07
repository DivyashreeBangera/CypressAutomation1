describe('Database Testing with Cypress', () => {
    it('Fetches data from the database and validates it', () => {
      cy.task('queryDatabase', 'SELECT * FROM users WHERE name = "John Doe"')
        .then((result) => {
          cy.log('Database Query Result:', result);
          
          // Assert that the retrieved data is correct
          expect(result).to.have.length(1);
          expect(result[0].email).to.equal('john@example.com');
        });
    });
  });