describe('Carrinho', () => {

  it('Deve adicionar produto ao carrinho com sucesso', () => {

    cy.visit('/')

    cy.get('.product-item', { timeout: 10000 })
      .should('have.length.greaterThan', 0)
      .first()
      .click()

    cy.get('.swatch-attribute.size .swatch-option')
      .first()
      .click({ force: true })

    cy.get('.swatch-attribute.color .swatch-option')
      .first()
      .click({ force: true })

    cy.get('[name="qty"]').clear().type('2')

    cy.get('#product-addtocart-button').click()

    cy.contains('You added').should('be.visible')

    cy.get('.counter-number').should('have.text', '2')
  })
})