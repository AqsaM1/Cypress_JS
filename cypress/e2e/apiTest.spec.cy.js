let userDetails;
describe("Api Test", () => {
  beforeEach("load fixture", function () {
    cy.fixture("userDetails").then((data) => {
      userDetails = data;
    });
  });

  it("GET API testing Using Cypress API Plugin", () => {
    cy.request("GET", "https://reqres.in/api/users?page=2").should(
      (response) => {
        expect(response.status).to.eq(200);
      },
    );
  });

  it("POST API testing Using Cypress API Plugin", () => {
    cy.request("POST", "https://reqres.in/api/users", {
      name: "morpheus",
      job: "leader",
    }).should((response) => {
      expect(response.status).to.eq(201);
    });
  });
  it("PUT API testing Using Flip Plugin", () => {
    cy.request("PUT", "https://reqres.in/api/users/2", {
      name: userDetails.userDetails.name,
      job: userDetails.userDetails.job,
    }).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("DELETE API testing Using Cypress API Plugin", () => {
    cy.request("DELETE", "https://reqres.in/api/users/2").should((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
