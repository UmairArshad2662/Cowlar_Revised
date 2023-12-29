class FormFill {
  pagevisit() {
    cy.visit("https://demoqa.com/automation-practice-form");
  }
  setFirstName(fname) {
    cy.get("#firstName").type(fname);
  }
  setLastName(Lname) {
    cy.get("#lastName").type(Lname);
  }
  setUserEmail(email) {
    cy.get("#userEmail").type(email);
  }
  setGender() {
    cy.get('[type="radio"][value="Male"]').check({ force: true });
  }
  setPhoneNumber(number) {
    cy.get("#userNumber").type(number);
  }
  setSubject(subject) {
    cy.get(".subjects-auto-complete__value-container").type(
      `${subject}{enter}`
    );
  }
  setHobby() {
    cy.get("#hobbies-checkbox-3").check({ force: true });
  }
  setAddress(address) {
    cy.get("#currentAddress").type(address);
  }
  setState(state) {
    cy.get("#react-select-3-input").type(`${state}{enter}`, { force: true });
  }

  setCity(city) {
    cy.get("#react-select-4-input").type(`${city}{enter}`, { force: true });
  }
  submitButton() {
    cy.get("#submit").click({ force: true });
  }
  verifyDetails() {
    cy.get('td:contains("Student Name") + td').should(
      "have.text",
      "Cowlar Developer"
    );
    cy.get('td:contains("Student Email") + td').should(
      "have.text",
      "qaengineer@cowlar.com"
    );
    cy.get('td:contains("Gender") + td').should("have.text", "Male");
    cy.get('td:contains("Mobile") + td').should("have.text", "0123456789");
    cy.get('td:contains("Subjects") + td').should(
      "have.text",
      "Computer Science"
    );
    cy.get('td:contains("Hobbies") + td').should("have.text", "Music");
    cy.get('td:contains("Address") + td').should("have.text", "Address 1");
    cy.get('td:contains("State and City") + td').should(
      "have.text",
      "NCR Delhi"
    );
  }
  closeButton() {
    cy.get("#closeLargeModal").click({ force: true });
  }
}
export default FormFill;
