describe('Sauce Demo - Automate Login, Search, Product Listing, Add to Cart, and Amount Calculation', () => {
    const baseUrl = 'https://www.saucedemo.com';
  
    beforeEach(() => {
      // Visit the Sauce Demo site
      cy.visit(baseUrl);
    });
  
    it('should log in, search for a product, add to cart, and verify total amount', () => {
      // Step 1: Log in
      cy.get('#user-name').type('standard_user'); // Enter username
      cy.get('#password').type('secret_sauce'); // Enter password
      cy.get('#login-button').click(); // Click login button
  
      // Verify successful login
      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('contain.text', 'Products');
  
      // Step 2: Search for a product (filter by "Name (A to Z)" to simulate search)
      cy.get('.product_sort_container').select('Name (A to Z)'); // Sort dropdown
      cy.get('.inventory_item_name').first().should('be.visible'); // Verify product list is displayed
  
      // Step 3: Add products to the cart
      cy.get('.inventory_item').first().within(() => {
        cy.get('.inventory_item_price').invoke('text').as('productPrice'); // Save product price
        cy.get('button').contains('Add to cart').click(); // Add to cart
      });
  
      // Step 4: Open cart and verify product details
      cy.get('.shopping_cart_link').click(); // Open cart
      cy.url().should('include', '/cart.html'); // Verify cart page
      cy.get('.cart_item').should('have.length', 1); // Verify one item in the cart
  
      // Verify product price in the cart
      cy.get('@productPrice').then((price) => {
        cy.get('.inventory_item_price').should('contain.text', price);
      });
  
      // Step 5: Proceed to checkout
      cy.get('button').contains('Checkout').click();
      cy.url().should('include', '/checkout-step-one.html'); // Verify checkout page
  
      // Step 6: Enter user details for checkout
      cy.get('#first-name').type('John');
      cy.get('#last-name').type('Doe');
      cy.get('#postal-code').type('12345');
      cy.get('#continue').click();
  
      // Step 7: Verify total amount calculation on the summary page
      cy.url().should('include', '/checkout-step-two.html'); // Verify checkout summary page
  
      // Verify item total and tax calculation
      cy.get('.summary_subtotal_label').invoke('text').then((subtotalText) => {
        const subtotal = parseFloat(subtotalText.replace('Item total: $', ''));
        cy.get('.summary_tax_label').invoke('text').then((taxText) => {
          const tax = parseFloat(taxText.replace('Tax: $', ''));
          cy.get('.summary_total_label').invoke('text').then((totalText) => {
            const total = parseFloat(totalText.replace('Total: $', ''));
            expect(total).to.equal(subtotal + tax); // Validate total calculation
          });
        });
      });
  
      // Step 8: Complete the order
      cy.get('button').contains('Finish').click();
      cy.url().should('include', '/checkout-complete.html'); // Verify order completion page
      cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER');
    });
  });
  