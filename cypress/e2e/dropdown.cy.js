describe("Dropdowns",function(){

  it("Dropdown with select", function(){
      cy.visit("https://register.rediff.com/register/register.php")
      cy.get('#country').select('Bahrain').should("have.value",16)

  })

  it("Auto suggesstion drop down", function(){
      cy.visit("https://www.wikipedia.org/")
      cy.get("#searchInput").type('Automation')
      cy.get(".suggestion-link").contains("Automation").click()

  })

  it(" Dyanamic Auto suggesstion", function(){
          cy.visit("https://www.google.com/")
          cy.get(".gLFyf").type("cypress automation")
          cy.wait(3000)
          cy.get("div.wM6W7d>span").should("have.length",13)

          cy.get("div.wM6W7d>span").each(($el,index,$list) => {
              
                  if($el.text() == "cypress automation")
                      {
                      cy.wrap($el).click()
                  }
               })
          cy.get(".gLFyf").contains("cypress automation")
  })

})