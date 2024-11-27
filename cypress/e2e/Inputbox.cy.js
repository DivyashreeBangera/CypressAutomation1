describe('Input Box Test on Cypress Example Site', () => {
  it("Inputbox", function(){
      // Visit the Cypress example site before each test
      cy.visit('https://demo.nopcommerce.com/');
   
  it('should type text into the input box and verify the input', () => {
      const inputBoxSelector = 'input[type="text"]'; // Input box selector
      
      // Type text into the input box
      cy.get(inputBoxSelector).type('apple iCam');

      // Verify that the input box contains the expected text
      cy.get(inputBoxSelector).should('have.value', 'apple iCam');
  });

  it('should clear the input box and verify it is empty', () => {
      const inputBoxSelector = 'input[type="text"]'; // Input box selector

      // Type text into the input box
      cy.get(inputBoxSelector).type('apple iPhone');

      // Clear the input box
      cy.get(inputBoxSelector).clear();

      // Verify that the input box is empty
      cy.get(inputBoxSelector).should('have.value', '');
  });
})
})