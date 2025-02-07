describe('Read Excel Data using cy.task()', () => {
    it('Reads data from an Excel file and uses it in a test', () => {
      cy.task('readExcel', { filePath: 'cypress/fixtures/testData.xlsx', sheetName: 'Sheet1' })
        .then((data) => {
          cy.log('Excel Data:', JSON.stringify(data));
  
          // Example: Use data to fill a form on an example site
          cy.visit('https://example.cypress.io/commands/actions'); 
  
          // Fill out fields using data from Excel
          cy.get('input[placeholder="Email"]').type(data[0].Email);
          cy.get('input[placeholder="Password"]').type('Test@123'); // Dummy password
          cy.get('button').contains('Submit').click();
        });
    });
  });