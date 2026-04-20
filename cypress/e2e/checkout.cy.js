describe("Checkout", () => {
  const senha = "Senha@123";
  let email;

  beforeEach(() => {
    email = `marina_${Date.now()}@teste.com`;

    cy.prepararUsuario(email, senha);
    cy.login(email, senha);
  });

  it("Deve finalizar compra com sucesso", () => {
    cy.adicionarProdutoAoCarrinho();

    cy.irParaCheckout();

    cy.preencherEnderecoCheckout();

    cy.selecionarFreteEContinuar();

    cy.finalizarCompra();

    cy.contains("Thank you for your purchase", { timeout: 20000 }).should(
      "be.visible",
    );
  });
});
