import registerPage from "../pageobjects/registerPage";
import { fakerUser } from "../support/fakerUser.js";

describe("register User Test", () => {
  beforeEach("load fixture", function () {
    // cy.fixture("userDetails").then((data) => {
    //   userDetails = data;
    // });
    // Visit URL
    cy.visit("https://demo.guru99.com/test/newtours/register.php");
  });

  it("Register New User", () => {
    const registerObj = new registerPage();
    registerObj.enterFirstName(fakerUser.firstName);
    registerObj.enterLastName(fakerUser.lastName);
    registerObj.enterPhoneNumber(fakerUser.phoneNumber);
    registerObj.enterEmailAddress(fakerUser.emailAddress);
    registerObj.enterAddress(fakerUser.address);
    registerObj.enterCity(fakerUser.city);
    registerObj.enterStateProvince(fakerUser.stateProvince);
    registerObj.enterPostalCode(fakerUser.postalCode);
    registerObj.enterCountry(fakerUser.country);

    registerObj.clickSubmit();
    // registerObj.elements.successTxt().should("have.text", "Login Successfully");
  });
});
