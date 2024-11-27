describe("Check Boxes",function(){

  it("Single Selection", function(){

      cy.visit("https://demo.guru99.com/test/radio.html")

      // Selecting Single Checkboxes

      cy.get("input#vfb-6-0").check().should("be.checked")
      cy.get("input#vfb-6-1").check().should("be.checked")
      cy.get("input#vfb-6-2").check().should("be.checked")

      cy.get("input#vfb-6-0").uncheck().should("not.be.checked")
      cy.get("input#vfb-6-1").uncheck().should("not.be.checked")
  })

  it("Multiple Selection",function(){

      // Multiple Selection

      cy.visit("https://demo.guru99.com/test/radio.html")
      cy.get('input[type="checkbox"]').check().should("be.checked")
  
      // Uncheck all the checkboxes
      cy.get('input[type="checkbox"]').uncheck().should("not.be.checked")

  })

  it("Checking First and Last checkbox",function(){

      // Checking First and Last checkbox

      cy.visit("https://demo.guru99.com/test/radio.html")
      cy.get('input[type="checkbox"]').check().first().should("be.checked")
      cy.get('input[type="checkbox"]').check().last().should("be.checked")
  
      // Uncheck first checkboxes
      cy.get('input[type="checkbox"]').first().uncheck().should("not.be.checked")

  })

})