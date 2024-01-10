/// <reference types="cypress" />

const url = "https://example.com";

describe("page", () => {
  it("fails", () => {
    let count = 0;
    cy.intercept("GET", url, (req) => {
      count++;
      console.info(`[${count}] requesting ${url}...`);
      req.reply({ forceNetworkError: true });
    }).as("stub");

    cy.visit(url);

    cy.wait("@stub");
  });
});
