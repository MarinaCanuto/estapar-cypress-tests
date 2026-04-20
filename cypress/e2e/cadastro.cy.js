describe("Cadastro de usuário", () => {
  it("Deve cadastrar usuário com sucesso", () => {
    const email = `marina_${Date.now()}@teste.com`;
    const senha = "Senha@123";

    cy.cadastrarUsuario(email, senha);

    cy.url().should("include", "account");
  });
});
