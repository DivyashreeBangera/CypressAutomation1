describe('Amazon Website Automation', () => {
  
    const baseUrl = 'https://www.amazon.com'; // Change if needed for other regions
    const email = 'divyashree@qaoncloud.com'; // Replace with test email
    const password = 'test@123';      // Replace with test password
    const productSearchTerm = 'hp laptop';         // Replace with desired search term


    beforeEach(() => {
        cy.visit(baseUrl); 
        cy.get('#nav-link-accountList').click();
        cy.get('#ap_email').type(email);        // Enter email
        cy.get('#continue').click();            // Click continue
        cy.get('#ap_password').type(password);  // Enter password
        cy.get('#signInSubmit').click();  
      });

       /*it('Sign Up', () => {
    cy.visit('https://www.amazon.com');

    // Click on the "Sign-In" button
    cy.get('#nav-link-accountList').click();

    // Click on "Create your Amazon account" link
    cy.get('a#createAccountSubmit').click();

    // Fill out the signup form
    cy.get('input#ap_customer_name').type('John Doe'); // Enter full name
    cy.get('input#ap_email').type('johndoe@example.com'); // Enter email
    cy.get('input#ap_password').type('Password123!'); // Enter password
    cy.get('input#ap_password_check').type('Password123!'); // Re-enter password

    // Submit the form
    cy.get('input#continue').click();

    
    cy.url().should('include', 'register');
    cy.contains('Verify email').should('be.visible');
    })*/

    it('Login successfull', () => {
        //cy.get('#nav-link-accountList').click(); // Click "Accounts & Lists"
// Fill the login form
      //cy.get('#ap_email').type(email);        // Enter email
      //cy.get('#continue').click();            // Click continue
      //cy.get('#ap_password').type(password);  // Enter password
      //cy.get('#signInSubmit').click();        // Click Sign-In

      // Verify login is successful   
     cy.get('#nav-link-accountList-nav-line-1')
     .should('contain.text', 'Hello, divya'); // Replace "Test" with your test user name    
});

it('Search a Product', () => {
    // Search for a product
    cy.get('#twotabsearchtextbox').type(productSearchTerm); // Enter search term
    cy.get('#nav-search-submit-button').click();            // Click search button

    // Verify the product listing page
    cy.url().should('include', 'k=' + encodeURIComponent(productSearchTerm));
    cy.get('.s-main-slot').should('exist'); // Check if product listings are displayed
  });

  it('Product Listing', () => {
    // Assuming product search has already been performed
    cy.get('#twotabsearchtextbox').type(productSearchTerm);
    cy.get('#nav-search-submit-button').click();

    // Verify the first few products in the listing
    cy.get('.s-main-slot .s-result-item')
      .should('have.length.greaterThan', 0) // Ensure there are product listings
      .each(($el, index) => { //Iterates over each of the selected product items.
        if (index < 5) { // Check first 5 products
          cy.wrap($el).find('h2').should('exist'); // Ensure product title exists
          cy.wrap($el).find('.a-price').should('exist'); // Ensure price exists
        }
      });
  });
});