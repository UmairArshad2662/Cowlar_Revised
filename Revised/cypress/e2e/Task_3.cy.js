import API from "../PageObjects/APITesting";
import HomePage from "../PageObjects/HomePage";
import InteractionPage from "../PageObjects/InteractionPage";

describe("Task_3", () => {
  const home = new HomePage();
  const myApi = new API();
  const Inter = new InteractionPage();

  it("To Redirect to a specific page and Intercept API to verify data", () => {
    Inter.pageVisit();
    home.ClickBookStoreApplication();
    myApi.verifyPage();
    myApi.BookClick();
    cy.intercept(
      "GET",
      "https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574"
    ).as("TestApi");

    cy.visit("https://demoqa.com/books?book=9781593277574");

    cy.wait("@TestApi").then((interception) => {
      const response = interception.response;
      expect(response.statusCode).to.equal(200);
      expect(response.body.isbn).to.equal("9781593277574");
      expect(response.body.title).to.equal("Understanding ECMAScript 6");
      expect(response.body.subTitle).to.equal(
        "The Definitive Guide for JavaScript Developers"
      );
      expect(response.body.author).to.equal("Nicholas C. Zakas");
      expect(response.body.publish_date).to.equal("2016-09-03T00:00:00.000Z");
      expect(response.body.publisher).to.equal("No Starch Press");
      expect(response.body.pages).to.equal(352);
      expect(response.body.description).to.equal(
        "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E"
      );
      expect(response.body.website).to.equal(
        "https://leanpub.com/understandinges6/read"
      );
    });
  });
});
