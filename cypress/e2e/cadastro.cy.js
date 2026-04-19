describe('Cadastro de usuário', () => {

  it('Deve cadastrar usuário com sucesso', () => {

    const email = `marina_${Date.now()}@teste.com`

    cy.cadastrarUsuario('Marina', 'Teste', email, 'Senha@123')

    cy.url().should('include', 'account')
  })
})