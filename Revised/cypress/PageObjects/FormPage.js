class FormPage {
  pagevisit() {
    cy.visit("https://demoqa.com/forms");
  }
  clickPractice_form() {
    cy.get(":nth-child(2) > .element-list > .menu-list > #item-0").click();
  }
}
export default FormPage;
