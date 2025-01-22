describe('Breakpoint and Debugging Test - The Internet', () => {
    const breakpoints = [
      { device: 'Mobile - iPhone SE', width: 375, height: 667 },
      { device: 'Tablet - iPad', width: 768, height: 1024 },
      { device: 'Desktop - Full HD', width: 1920, height: 1080 },
    ];
  
    beforeEach(() => {
      // Visit the sample website
      cy.visit('https://the-internet.herokuapp.com');
    });
  
    breakpoints.forEach((breakpoint) => {
      it(`should test layout at ${breakpoint.device}`, () => {
        // Set viewport to test breakpoint
        cy.viewport(breakpoint.width, breakpoint.height);
        cy.log(`Testing at ${breakpoint.device}`);
  
        // Validate header is visible
        cy.get('h1').should('contain.text', 'Welcome to the-internet');
  
        // Debugging: Take a screenshot to verify layout
        cy.screenshot(`Breakpoint-${breakpoint.device}`);
  
        // Check if navigation menu adapts for smaller screens
        if (breakpoint.width <= 768) {
          cy.get('.nav-menu').should('not.be.visible'); // Assuming mobile menu is hidden
          cy.log('Mobile menu is hidden on smaller screens');
        } else {
          cy.get('.nav-menu').should('be.visible'); // Desktop menu is visible
          cy.log('Desktop menu is visible on larger screens');
        }
  
        // Add Cypress debugger for troubleshooting
        cy.get('h1').debug();
      });
    });
  });