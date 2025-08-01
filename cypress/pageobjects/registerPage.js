class registerPage {
  elements = {
    firstName: () => cy.get('input[name="firstName"]'),
    lastName: () => cy.get('input[name="lastName"]'),
    phoneNumber: () => cy.get('input[name="phone"]'),
    emailAddress: () => cy.get('input[id="userName"]'),
    address: () => cy.get('input[name="address1"]'),
    city: () => cy.get('input[name="city"]'),
    stateProvince: () => cy.get('input[name="state"]'),
    postalCode: () => cy.get('input[name="postalCode"]'),
    country: () => cy.get('select[name="country"]'),
    userName: () => cy.get('input[id="email"]'),
    password: () => cy.get('input[name="password"]'),
    confirmPassword: () => cy.get('input[name="confirmPassword"]'),
    submitButton: () => cy.get('input[name="submit"]'),
    signupSuccessful: () => cy.get("td > :nth-child(2) > font > a"),
  };
  enterFirstName(firstName) {
    this.elements.firstName().clear();
    this.elements.firstName().type(firstName);
  }
  enterLastName(lastName) {
    this.elements.lastName().clear();
    this.elements.lastName().type(lastName);
  }

  enterPhoneNumber(phoneNumber) {
    this.elements.phoneNumber().clear();
    this.elements.phoneNumber().type(phoneNumber);
  }

  enterEmailAddress(emailAddress) {
    this.elements.emailAddress().clear();
    this.elements.emailAddress().type(emailAddress);
  }

  enterAddress(address) {
    this.elements.address().clear();
    this.elements.address().type(address);
  }
  enterCity(city) {
    this.elements.city().clear();
    this.elements.city().type(city);
  }

  enterPostalCode(phoneNumber) {
    this.elements.postalCode().clear();
    this.elements.postalCode().type(phoneNumber);
  }

  enterStateProvince(stateProvince) {
    this.elements.stateProvince().clear();
    this.elements.stateProvince().type(stateProvince);
  }
  enterCountry(country) {
    this.elements.country().select(country);
  }
  enterUserName(userName) {
    this.elements.userName().clear();
    this.elements.userName().type(userName);
  }

  enterConfirmPassword(confirmPassword) {
    this.elements.confirmPassword().clear();
    this.elements.confirmPassword().type(confirmPassword);
  }

  clickSubmit() {
    this.elements.submitButton().click();
  }
  signupSuccessful() {
    return this.elements.signupSuccessful();
  }
}

export default registerPage;
