describe('Read Excel Data using cy.task()', () => {
    it('Reads data from an Excel file and uses it in a test', () => {
      cy.task('readExcel', { filePath: 'cypress/fixtures/testData.xlsx', sheetName: 'Sheet1' })
        .then((data) => {
          cy.log('Excel Data:', JSON.stringify(data));
  
          
          cy.visit('https://example.cypress.io/commands/actions'); 
  
       
          cy.get('input[placeholder="Email"]').type(data[0].Email);
          cy.get('input[placeholder="Password"]').type('Test@123'); 
          cy.get('button').contains('Submit').click();
        });
    });
  });