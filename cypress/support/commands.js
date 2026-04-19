console.log("commands carregado");

Cypress.Commands.add("cadastrarUsuario", (nome, sobrenome, email, senha) => {
  cy.visit("/customer/account/create/");

  cy.get("#firstname").type(nome);
  cy.get("#lastname").type(sobrenome);
  cy.get("#email_address").type(email);
  cy.get("#password").type(senha);
  cy.get("#password-confirmation").type(senha);

  cy.get("#is_subscribed").check({ force: true });
  cy.get('button[title="Create an Account"]').click();

  cy.contains("Thank you for registering", { timeout: 10000 }).should(
    "be.visible",
  );
});

Cypress.Commands.add("login", (email, senha) => {
  cy.visit("/customer/account/login/");

  cy.get('[name="login[username]"]').type(email);
  cy.get('[name="login[password]"]').type(senha);

  cy.get("#send2").click();

  cy.url({ timeout: 10000 }).should("include", "/customer/account");
});

Cypress.Commands.add("prepararUsuario", (email, senha) => {
  cy.cadastrarUsuario("Marina", "Teste", email, senha);
  cy.visit("/customer/account/logout/");
});

Cypress.Commands.add("adicionarProdutoAoCarrinho", () => {
  cy.visit("/");

  cy.get(".product-item", { timeout: 10000 })
    .should("have.length.greaterThan", 0)
    .first()
    .click();

  cy.get(".swatch-attribute.size .swatch-option")
    .first()
    .click({ force: true });

  cy.get(".swatch-attribute.color .swatch-option")
    .first()
    .click({ force: true });

  cy.get('[name="qty"]').clear().type("2");

  cy.get("#product-addtocart-button").click();

  cy.contains("You added", { timeout: 10000 }).should("be.visible");
});

Cypress.Commands.add("irParaCheckout", () => {
  cy.get(".showcart").click();

  cy.get("#top-cart-btn-checkout", { timeout: 10000 })
    .should("be.visible")
    .click();

  cy.url({ timeout: 20000 }).should("include", "/checkout");
});

Cypress.Commands.add("preencherEnderecoCheckout", () => {
  cy.contains("Shipping", { timeout: 20000 }).should("be.visible");

  cy.get('[name="street[0]"]', { timeout: 20000 })
    .should("be.visible")
    .type("Rua Teste, 123");

  cy.get('[name="country_id"]').select("United States");
  cy.get('[name="region_id"]').select("California");
  cy.get('[name="city"]').type("Los Angeles");
  cy.get('[name="postcode"]').type("90001");
  cy.get('[name="telephone"]').type("1234567890");
});

Cypress.Commands.add("selecionarFreteEContinuar", () => {
  cy.get(".table-checkout-shipping-method", { timeout: 20000 }).should(
    "be.visible",
  );

  cy.get('.table-checkout-shipping-method input[type="radio"]')
    .first()
    .click({ force: true });

  cy.get("button.continue").should("be.enabled").click();
});

Cypress.Commands.add("finalizarCompra", () => {
  cy.get(".payment-method", { timeout: 20000 })
    .should("be.visible")
    .first()
    .click({ force: true });

  cy.get("button.checkout").should("be.visible").click();
});
