Cypress.Commands.add("cadastrarUsuario", (email, senha) => {
  cy.fixture("checkoutData").then((dados) => {
    cy.visit("/customer/account/create/");
    cy.get("#firstname").type(dados.usuario.nome);
    cy.get("#lastname").type(dados.usuario.sobrenome);
    cy.get("#email_address").type(email);
    cy.get("#password").type(senha);
    cy.get("#password-confirmation").type(senha);
    cy.get("#is_subscribed").check({ force: true });
    cy.get('button[title="Create an Account"]').click();
    cy.contains("Thank you for registering", { timeout: 15000 }).should(
      "be.visible",
    );
  });
});

Cypress.Commands.add("login", (email, senha) => {
  cy.visit("/customer/account/login/");
  cy.get('[name="login[username]"]').type(email);
  cy.get('[name="login[password]"]').type(senha);
  cy.get("#send2").click();
  cy.url({ timeout: 10000 }).should("include", "/customer/account");
});

Cypress.Commands.add("prepararUsuario", (email, senha) => {
  cy.cadastrarUsuario(email, senha);
  cy.visit("/customer/account/logout/");
});

Cypress.Commands.add("adicionarProdutoAoCarrinho", () => {
  cy.visit("/");
  cy.get(".product-item", { timeout: 10000 }).first().click();
  cy.get(".swatch-attribute.size .swatch-option")
    .first()
    .click({ force: true });
  cy.get(".swatch-attribute.color .swatch-option")
    .first()
    .click({ force: true });
  cy.get('[name="qty"]').clear().type("2");
  cy.get("#product-addtocart-button").click();
  cy.contains("You added", { timeout: 20000 }).should("be.visible");
});

Cypress.Commands.add("irParaCheckout", () => {
  cy.get(".showcart").should("be.visible").click();
  cy.get(".block-minicart .subtotal .price", { timeout: 15000 }).should(
    "be.visible",
  );
  cy.get("#top-cart-btn-checkout").should("be.visible").click({ force: true });
  cy.url({ timeout: 30000 }).should("include", "/checkout");
});

Cypress.Commands.add("preencherEnderecoCheckout", () => {
  cy.fixture("checkoutData").then((dados) => {
    cy.get("#checkout-shipping-method-load", { timeout: 20000 }).should(
      "be.visible",
    );
    cy.get('[name="street[0]"]').type(dados.endereco.rua);
    cy.get('[name="city"]').type(dados.endereco.cidade);
    cy.get('[name="region_id"]').select(dados.endereco.estado);
    cy.get('[name="postcode"]').type(dados.endereco.cep);
    cy.get('[name="country_id"]').select(dados.endereco.pais);
    cy.get('[name="telephone"]').type(dados.endereco.telefone);
  });
});

Cypress.Commands.add("selecionarFreteEContinuar", () => {
  cy.get('#checkout-shipping-method-load input[type="radio"]')
    .first()
    .check({ force: true });
  cy.get("button.continue").should("be.visible").click();
});

Cypress.Commands.add("finalizarCompra", () => {
  cy.get(".payment-method", { timeout: 20000 })
    .should("be.visible")
    .first()
    .click({ force: true });
  cy.get("button.checkout").should("be.visible").click();
});
