describe('Automate Desicrew Website', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('https://desicrew.in/');
    });

    it('Should verify the homepage loads correctly', () => {
        cy.title().should('include', 'DesiCrew');
        //cy.get('nav').should('be.visible');
    });

    it('Should navigate to the Solutions page', () => {
        cy.get('.elementor-menu-toggle').click()
       // cy.get('li.menu-item-has-children').contains('Solutions').trigger('mouseover');

        // Click the submenu item
        cy.get('#elementor-item elementor-item-anchor has-submenu').eq(4).contains('Solutions').click();

        // Verify the Solutions page
        cy.url().should('include', 'solutions');
        cy.contains('Solutions').should('be.visible');
    });

    it('Should fill out and submit the contact form', () => {
        cy.get('a').contains('Contact Us').click();

        // Fill out the contact form
        cy.get('input[name="your-name"]').type('John Doe');
        cy.get('input[name="your-email"]').type('john.doe@example.com');
        cy.get('input[name="your-subject"]').type('Inquiry');
        cy.get('textarea[name="your-message"]').type('I would like to know more about your services.');

        // Submit the form
        cy.get('button[type="submit"]').click();

        // Validate success message
        cy.contains('Thank you for your message').should('be.visible');
    });

    it('Should validate navigation menu links', () => {
        // Validate each menu item navigation
        const menuItems = ['Home', 'About Us', 'Solutions', 'Careers', 'Contact Us'];
        menuItems.forEach((item) => {
            cy.get('nav').contains(item).click();
            cy.contains(item).should('be.visible');
            cy.go('back');
        });
    });
});
