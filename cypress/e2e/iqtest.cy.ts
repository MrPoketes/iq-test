describe("homepage", () => {
  it("should navigate between pages", () => {
    cy.visitAndCheck("/");
    cy.get("a").contains("Terms").click();
    cy.url().should("eq", "http://localhost:3000/terms");
    cy.get("a").contains("Literature").click();
    cy.url().should("eq", "http://localhost:3000/literature");
    cy.get("a").contains("Contact").click();
    cy.url().should("eq", "http://localhost:3000/contact");
  });

  it("should not allow submission, if the required checkbox is not checked", () => {
    cy.visitAndCheck("/");
    cy.get("button").click();
    cy.get("input")
      .then(($input) => $input[0].checkValidity())
      .should("be.false");
    cy.url().should("eq", "http://localhost:3000/home");
  });

  it("should redirect to the test page, when checkbox is checked", () => {
    cy.visitAndCheck("/");
    cy.get("input").check();
    cy.get("button").click();
    cy.url().should("eq", "http://localhost:3000/test/question/g");
  });

  it("should be able to navigate between questions clicking on question numbers", () => {
    cy.visitAndCheck("/test/question/g");
    cy.get("a").contains("E1").click().wait(1000);
    cy.url().should("eq", "http://localhost:3000/test/question/e1");
    cy.get("a").contains("2").click().wait(1000);
    cy.url().should("eq", "http://localhost:3000/test/question/2");
  });

  it("should be able to navigate between questions using the next and previous buttons", () => {
    cy.visitAndCheck("/test/question/g");
    cy.get("a").contains("E1").click().wait(1000);
    cy.get("a:last-child").eq(1).click().wait(1000);
    cy.url().should("eq", "http://localhost:3000/test/question/1");
    cy.get("a").eq(0).click().wait(1000);
    cy.url().should("eq", "http://localhost:3000/test/question/e1");
  });

  it("should be able to select an answer", () => {
    cy.visitAndCheck("/test/question/1");
    cy.get("button").eq(2).click().should("have.class", "bg-gray-100");
    cy.get("button").eq(3).click().should("have.class", "bg-gray-100");
    cy.get("button").eq(2).should("not.have.class", "bg-gray-100");
  });

  it("should not allow submission until test is finished", () => {
    cy.visitAndCheck("/test/question/1");
    cy.get("button").eq(0).should("be.disabled");
  });

  it("should allow submission when test is completed", () => {
    cy.visitAndCheck("/test/question/1");
    cy.get("button").eq(3).click();
    for (let i = 1; i !== 23; i++) {
      cy.wait(1000);
      cy.get("a").eq(6).click();
      if (i !== 5 && i !== 11 && i !== 17) {
        cy.get("button").eq(3).wait(100).click();
      }
    }
    cy.get("button").eq(0).should("not.be.disabled").click();
  });
});
