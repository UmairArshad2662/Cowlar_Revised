import HomePage from "../PageObjects/HomePage.js";
import FormPage from "../PageObjects/FormPage.js";
import FormFill from "../PageObjects/FormFIll.js";
describe("Task_1", () => {
  const home = new HomePage();
  const form = new FormPage();
  const fill = new FormFill();
  it("To Fill the from and verify data", () => {
    home.pageVisit();
    home.clickForm();
    form.pagevisit();
    form.clickPractice_form();
    fill.pagevisit();
    fill.setFirstName("Cowlar");
    fill.setLastName("Developer");
    fill.setUserEmail("qaengineer@cowlar.com");
    fill.setGender();
    fill.setPhoneNumber("0123456789");
    fill.setSubject("Computer Science");
    fill.setHobby();
    fill.setAddress("Address 1");
    fill.setState("NCR");
    fill.setCity("Delhi");
    fill.submitButton();
    fill.verifyDetails();
    fill.closeButton();
  });
});
