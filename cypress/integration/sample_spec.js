describe("My First Test", function () {
  it("Says 'Hello World'", function () {
    cy.visit("/index.html");
    cy.contains("Hello world");

    cy.url().should("include", "/index.html");
  });
});
