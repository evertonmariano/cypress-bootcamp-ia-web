class CadastroUsuarioPage {
  visitar() {
    cy.visit('/register');
  }

  preencherNome(nome) {
    cy.get('#user').type(nome);
  }

  preencherEmail(email) {
    cy.get('#email').type(email);
  }

  preencherSenha(senha) {
    cy.get('#password').type(senha);
  }

  cadastrar() {
    cy.get('#btnRegister').click();
  }

  validarUrl(url) {
    cy.url().should('include', url);
  }

  validarMensagem(mensagem) {
    cy.contains(mensagem).should('be.visible');
  }
}

module.exports = new CadastroUsuarioPage();
