class API{
    verifyPage() {
        cy.get(".main-header").should("have.text", "Book Store");
      }
    BookClick(){
        cy.get('a[href="/books?book=9781593277574"]').click();
        cy.get('#ISBN-wrapper > .col-md-9 > #userName-value').should("have.text","9781593277574")
        cy.get('#title-wrapper > .col-md-9').should("have.text",'Understanding ECMAScript 6')
    }
}
export default API;