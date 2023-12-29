class HomePage {
  pageVisit() {
    cy.visit("https://demoqa.com/");
  }
  clickElements() {
    cy.get(":nth-child(1) > :nth-child(1) > .card-body").click();
  }
  clickForm() {
    cy.get(":nth-child(2) > :nth-child(1) > .card-body > h5").click();
  }
  clickAlerts() {
    cy.get(":nth-child(3) > :nth-child(1) > .card-body > h5").click();
  }
  ClickWeidgets() {
    cy.get(":nth-child(4) > :nth-child(1) > .card-body > h5").click();
  }
  ClickInteractions() {
    cy.get(":nth-child(5) > :nth-child(1) > .card-body > h5").click();
  }
  ClickBookStoreApplication() {
    cy.get(":nth-child(6) > :nth-child(1) > .card-body > h5").click();
  }
}

export default HomePage;
