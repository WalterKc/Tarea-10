describe("empty spec", () => {
  it("passes", () => {
    cy.visit(" http://192.168.0.2:8080");
    cy.get("#edad").type(2);
    cy.get("#botonCalcular").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains(
        "es necesario al menos 3 familiares para poder calcular"
      );
    });
    cy.get(".btn").contains("RESET").click();
    cy.get("#edad").type(10);
    cy.get("#botonAgregarInicial").click();
    cy.get(".familiar").should("have.length", 10);
    cy.get("#botonAgregarSecundario").click();
    cy.get(".familiar").should("have.length", 20);
    cy.get("#botonQuitarFamiliar").click();
    cy.get("#botonQuitarFamiliar").click();
    cy.get(".familiar").should("have.length", 18);
    cy.get(".familiar").eq(0).find("#familiarEdad").type(10);
    cy.get(".familiar").eq(1).find("#familiarEdad").type(10);
    cy.get(".familiar").eq(2).find("#familiarEdad").type(10);
    cy.get("#botonCalcular").click();
    cy.get("#textoH2B").should(
      "contain",
      "la edad maxima de esta familia es 10 la minima es 0 y la ObtenerPromedio es 1.6666666666666667"
    );
  });
});
