describe("Carrinho", () => {
  it("Deve adicionar produto ao carrinho com sucesso", () => {
    cy.adicionarProdutoAoCarrinho();

    cy.contains("You added").should("be.visible");

    cy.get(".counter-number").should("have.text", "2");
  });
});
