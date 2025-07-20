import registerPage from "../pageobjects/registerPage";
import { fakerUser } from "../support/fakerUser.js";

describe("register User Test", () => {
  beforeEach("load fixture", function () {
    // Visit URL
    cy.visit("https://demo.guru99.com/test/newtours/register.php");
  });

  it("Register New User", () => {
    const registerObj = new registerPage();
    const user = fakerUser();
    registerObj.enterFirstName(user.firstName);
    registerObj.enterLastName(user.lastName);
    registerObj.enterPhoneNumber(user.phoneNumber);
    registerObj.enterEmailAddress(user.emailAddress);
    registerObj.enterAddress(user.address);
    registerObj.enterCity(user.city);
    registerObj.enterStateProvince(user.stateProvince);
    registerObj.enterPostalCode(user.postalCode);
    registerObj.enterCountry(user.country);
    registerObj.clickSubmit();
    registerObj
      .signupSuccessful()
      .invoke("attr", "href") // get href attribute
      .should("contain", "login.php");
  });
});
