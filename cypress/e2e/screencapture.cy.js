describe('Screenshot & Video Capture on Failure', () => {
    it('Failed test capture screenshot and video', () => {
      // Visit the sample website
      cy.visit('/');
  
      // capturing the non-existence element
      cy.get('.non-existent-element').should('be.visible');
    });
  });