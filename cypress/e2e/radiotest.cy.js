describe("Radio Buttons" , function(){

  it("test1",function(){

          cy.visit("https://demo.guru99.com/test/radio.html")

          // Checking the visibility of the Radio Buttons

          cy.get("input#vfb-7-1").should("be.visible")
          cy.get("input#vfb-7-2").should("be.visible")
          cy.get("input#vfb-7-3").should("be.visible")

          // Selecting the 1 st Radio Button

          cy.get("input#vfb-7-1").check().should("be.checked")
          cy.get("input#vfb-7-2").should("not.be.checked")
          cy.get("input#vfb-7-3").should("not.be.checked")

          // Selecting the 2 nd  Radio Button

          cy.get("input#vfb-7-2").check().should("be.checked")    
          cy.get("input#vfb-7-1").should("not.be.checked")      
          cy.get("input#vfb-7-3").should("not.be.checked")

          // Selecting the 3 rd  Radio Button

          cy.get("input#vfb-7-3").check().should("be.checked")    
          cy.get("input#vfb-7-1").should("not.be.checked")
          cy.get("input#vfb-7-2").should("not.be.checked")
  })
})