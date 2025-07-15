import loginPage from "../pageobjects/loginPage";

let userDetails;
describe("login Test", () => {
  beforeEach("load fixture", function () {
    cy.fixture("userDetails").then((data) => {
      userDetails = data;
    });
    // Visit URL
    cy.visit("https://demo.guru99.com/test/newtours/login.php");
  });

  it("Verify Login Successful", () => {
    const loginObj = new loginPage();
    loginObj.enterUsername(userDetails.validUserDetails.username);
    loginObj.enterPassword(userDetails.validUserDetails.password);
    loginObj.clickSubmit();
    loginObj.elements.successTxt().should("have.text", "Login Successfully");
  });

  it("Verify Login unsuccessful for Invalid username/passwrod ", () => {
    const loginObj = new loginPage();
    loginObj.enterUsername(userDetails.invalidUserDetails.username);
    loginObj.enterPassword(userDetails.invalidUserDetails.password);
    loginObj.clickSubmit();
    loginObj.elements.errorTxt().should("contain", "Enter your userName an");
  });
});
