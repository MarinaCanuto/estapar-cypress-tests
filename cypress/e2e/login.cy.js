describe("Login", () => {
  const senha = "Senha@123";
  let email;

  beforeEach(() => {
    email = `marina_${Date.now()}@teste.com`;
    cy.prepararUsuario(email, senha);
  });

  it("Deve realizar login com sucesso", () => {
    cy.login(email, senha);
    cy.get(".page-title").should("contain", "My Account");

    cy.fixture("checkoutData").then((dados) => {
      cy.get(".box-content").should("contain", dados.usuario.nome);
    });
  });
});