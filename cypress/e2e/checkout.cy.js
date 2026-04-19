describe('Checkout', () => {

  const senha = 'Senha@123'
  let email

  beforeEach(() => {
    email = `marina_${Date.now()}@teste.com`

    cy.prepararUsuario(email, senha)
    cy.login(email, senha)
  })

  it('Deve finalizar compra com sucesso', () => {

    // Adiciona produto
    cy.visit('/')

    cy.get('.product-item').first().click()

    cy.get('.swatch-attribute.size .swatch-option')
      .first().click({ force: true })

    cy.get('.swatch-attribute.color .swatch-option')
      .first().click({ force: true })

    cy.get('#product-addtocart-button').click()

    cy.contains('You added').should('be.visible')

    // Checkout
    cy.get('.showcart').click()
    cy.get('#top-cart-btn-checkout').click()

    // Endereço
    cy.get('[name="street[0]"]', { timeout: 20000 })
      .type('Rua Teste, 123')

    cy.get('[name="country_id"]').select('United States')
    cy.get('[name="region_id"]').select('California')

    cy.get('[name="city"]').type('Los Angeles')
    cy.get('[name="postcode"]').type('90001')
    cy.get('[name="telephone"]').type('1234567890')

    cy.get('button.continue').click()

    // Finalizar
    cy.get('.payment-method', { timeout: 20000 }).first().click({ force: true })
    cy.get('button.checkout').click()

    // Validação final
    cy.contains('Thank you for your purchase', { timeout: 20000 })
      .should('be.visible')
  })
})