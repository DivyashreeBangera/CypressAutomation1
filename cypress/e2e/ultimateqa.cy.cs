describe('Ultimate QA Automation Practice', () => {
  beforeEach(() => {
    cy.visit('https://ultimateqa.com/automation');
  });

  it('Interacts with the Big page with many elements', () => {
    // Click on the link to navigate to the page
    cy.contains('Big page with many elements').click();

    // Verify the new URL
    cy.url().should('include', '/complicated-page');

    // Interact with elements on the page
    // Example: Click a button
    cy.get('button').contains('Button').click();

    // Example: Fill out a form
    cy.get('input[name="et_pb_contact_name_0"]').type('John Doe');
    cy.get('input[name="et_pb_contact_email_0"]').type('john.doe@example.com');
    cy.get('textarea[name="et_pb_contact_message_0"]').type('This is a test message.');
    cy.get('button').contains('Submit').click();

    // Add more interactions as needed
  });
});
