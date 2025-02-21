describe('WebDriver University Login Test', () => {
    beforeEach(() => {
      cy.visit('http://webdriveruniversity.com/Login-Portal/index.html');
    });
  
    it('Successful Login', () => {
      cy.get('#text').type('webdriver'); 
      cy.get('#password').type('webdriver123'); 
      cy.get('#login-button').click(); 
  
      // Verify the alert message
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.include('validation succeeded');
      });
    });
  
    it('Unsuccessful Login', () => {
      cy.get('#text').type('wrongUser'); 
      cy.get('#password').type('wrongPass'); 
      cy.get('#login-button').click(); // 
  
      // Verify the alert message
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.include('validation failed');
      });
    });
})
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
    describe('WebDriver University Contact Us Form', () => {
        beforeEach(() => {
          cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html', { timeout: 10000 });
        });
      
        it('Submits the form successfully', () => {
          cy.get('input[name="first_name"]').type('John'); 
          cy.get('input[name="last_name"]').type('Doe'); 
          cy.get('input[name="email"]').type('john.doe@example.com'); 
          cy.get('textarea[name="message"]').type('This is a test message.'); 
          cy.get('input[type="submit"]').click(); 
      
          // Verify success message
          cy.get('h1').should('have.text', 'Thank You for your Message!');
        });
      
        it('Displays error when required fields are missing', () => {
          cy.get('input[name="first_name"]').type('John'); 
          cy.get('input[type="submit"]').click(); 
      
          // Verify error message
          cy.get('body').should('contain', 'Error: all fields are required');
        });
      });
      describe('WebDriver University Click Buttons Test', () => {
        beforeEach(() => {
            cy.clearCookies();
            cy.clearLocalStorage();
            cy.visit('http://webdriveruniversity.com/Click-Buttons/index.html');
            
        });
      
        it('Clicks on the WebElement button and verifies alert', () => {
          cy.get('#button1').click(); 
      
          // Verify alert message
          cy.on('window:alert', (alertText) => {
            expect(alertText).to.include('Congratulations!');
          });
        });
      
        it('Clicks on JavaScript Alert button and verifies alert', () => {
          cy.get('#button2').click();
      
          // Verify alert message
          cy.on('window:alert', (alertText) => {
            expect(alertText).to.include('You have successfully clicked an alert');
          });
        });
      
        it('Clicks on Action Move button and verifies alert', () => {
          cy.get('#button3').click(); 
      
          // Verify alert message
          cy.on('window:alert', (alertText) => {
            expect(alertText).to.include('Well done for successfully using the click() method!');
      cy.get('#myModalMoveClick > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        });
        });
      });
      
  


  