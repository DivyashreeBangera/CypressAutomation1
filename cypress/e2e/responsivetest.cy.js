describe('Web Page Responsiveness Testing - Sample Site', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com'); // Visit the homepage before each test
    });
  
    // Test for iPhone 5
    it('Checks responsiveness on iPhone 5', () => {
      cy.viewport('iphone-5'); // Simulate iPhone 5 dimensions
      cy.get('h2').should('be.visible'); // Ensure the heading is visible
      cy.get('a').should('be.visible').and('have.css', 'font-size').and('be.gte', '14px'); // Ensure links are readable
    });
  
    // Test for iPad (Portrait and Landscape)
    it('Checks responsiveness on iPad (Portrait and Landscape)', () => {
      cy.viewport('ipad-2', 'portrait'); // Simulate iPad portrait
      cy.get('h2').should('be.visible'); // Assert heading visibility
      cy.get('.example').should('have.css', 'width').and('be.lt', '768px'); // Assert content width adjusts for portrait
  
      cy.viewport('ipad-2', 'landscape'); // Simulate iPad landscape
      cy.get('.example').should('have.css', 'width').and('be.gte', '768px'); // Assert content width for landscape
    });
  
    // Test for Desktop
    it('Checks responsiveness on a large desktop', () => {
      cy.viewport(1920, 1080); // Simulate desktop resolution
      cy.get('h2').should('be.visible'); // Assert the heading is visible
      cy.get('.example').should('have.css', 'margin').and('contain', 'auto'); // Assert content is centered
    });
  
    // Verify Hamburger Menu (if applicable)
    it('Checks for Hamburger Menu on small screens', () => {
      cy.viewport('iphone-x'); // Simulate iPhone X
      cy.get('.hamburger-menu').should('be.visible'); // Check if the hamburger menu is visible
      cy.get('.nav-links').should('not.be.visible'); // Ensure the nav links are hidden by default
      cy.get('.hamburger-menu').click(); // Open the menu
      cy.get('.nav-links').should('be.visible'); // Ensure the nav links are displayed
    });
  
    // Test Element Overlap or Clipping
    it('Ensures no elements are overlapping', () => {
      cy.viewport(1366, 768); // Custom viewport
      cy.get('.footer').then(($footer) => {
        const footerTop = $footer.offset().top; // Get footer position
        cy.get('.main-content').then(($content) => {
          const contentBottom = $content.offset().top + $content.outerHeight();
          expect(contentBottom).to.be.lte(footerTop); // Assert no overlap
        });
      });
    });
  });
  