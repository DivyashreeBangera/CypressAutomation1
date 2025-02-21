describe('Automate Login for Desicrew CrystalHR', () => {

    const baseUrl = 'https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex';
    const now = new Date();
    const monthYear = now.toLocaleString('default', { month: 'long', year: 'numeric' });

    beforeEach(() => {
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex');
    
        cy.wait(200)
    });

    it('Should login with valid credentials', () => {
        cy.get('#frmLogin > fieldset > :nth-child(2) > .block > #Username').type('DK1410'); 
        cy.get('#Password').type('divyamahesh', { log: false }); 

        // Click the login button
        cy.get('#btnLogin').click();

        // Assert successful login (adjust selectors as needed)
        cy.url().should('include', '/Home/Index');
        cy.get('.card-actions > .row > :nth-child(2) > .btn').contains('ESS').should('be.visible');
        cy.get('#cardTypeButtons > :nth-child(3) > .btn').contains('MSS').should('be.visible');
        cy.get(':nth-child(4) > .btn').contains('Information').should('be.visible');
        
        //cy.contains('Web Punch').should('be.visible');
    });

    it('Should show error message for invalid login', () => {
        cy.get('#frmLogin > fieldset > :nth-child(2) > .block > #Username').type('test');
        cy.get('#Password').type('testingpassword');
        cy.get('#btnLogin').click();

        // Assert error message appears
        cy.contains('Invalid Username/Password').should('be.visible');
    });

    it('In Punch and Out Punch verification', () => {
        cy.get('#frmLogin > fieldset > :nth-child(2) > .block > #Username').type('DK1410'); 
        cy.get('#Password').type('divyamahesh', { log: false }); 

        // Click the login button
        cy.get('#btnLogin').click();
        //in punch successfully
        cy.get('.row > :nth-child(1) > .btn').click()
        cy.get('.gritter-without-image > p')
        cy.contains('Web punch saved successfully').should('be.visible')
        cy.reload();
        // out punch successfully
        cy.get('.card-actions > .row > :nth-child(2) > .btn').click()
        cy.contains('Web punch saved successfully').should('be.visible')
    });

    it('Navigate to calendar page', () => {
        cy.get('#frmLogin > fieldset > :nth-child(2) > .block > #Username').type('DK1410'); 
        cy.get('#Password').type('divyamahesh', { log: false }); 

        // Click the login button
        cy.get('#btnLogin').click();
    
        cy.get('.hover-show > a > .menu-icon').click()
        
        cy.get('h2').should('contain.text', monthYear);
    })
});
