describe('Ultimate QA Automation - Practical 3', () => {
    beforeEach(() => {
      // Visit the Ultimate QA Automation page
      cy.visit('https://ultimateqa.com/automation');
    });
  
    it('should load the homepage correctly', () => {
      // Verify that the URL is correct
      cy.url().should('eq', 'https://ultimateqa.com/automation');
  
      // Verify that a main heading exists
      cy.get('h1').should('contain.text', 'Automation');
    });
  
    it('should navigate to a linked section and verify its content', () => {
      // Example: Click a link or button on the page
      // Replace 'Courses' with an actual link text or a more precise selector from the site.
      cy.contains('Courses').click();
  
      // Verify that the URL includes the expected path after navigation
      cy.url().should('include', '/courses');
  
      // Confirm that a heading or element unique to the Courses page is visible
      // Adjust the selector and text as necessary.
      cy.get('h1').should('exist').and('contain.text', 'Courses');
    });
  });
  