class LoginPage {
  visitar() {
    cy.visit('/login');
  }

  preencherEmail(email) {
    cy.get('#user').type(email);
  }

  preencherSenha(senha) {
    cy.get('#password').type(senha);
  }

  entrar() {
    cy.get('#btnLogin').click();
  }

  validarUrl(url) {
    cy.url().should('include', url);
  }

  validarMensagem(mensagem) {
    cy.contains(mensagem).should('be.visible');
  }
}

module.exports = new LoginPage();
