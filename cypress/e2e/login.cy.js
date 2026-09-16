const loginPage = require('../pages/login.page');

// Feature: Login
describe('Login', () => {
  beforeEach(() => {
    loginPage.visitar();
  });

  // CT-01 Scenario: login com sucesso
  it('login com sucesso', () => {
    // Given que estou na página de login
    // When informo um email e uma senha válidos
    loginPage.preencherEmail('jhondoe@gmail.com');
    loginPage.preencherSenha('jhondoe123');
    loginPage.entrar();
    // Then devo acessar minha conta
    loginPage.validarUrl('/my-account');
  });

  // CT-02 Scenario: login com email vazio
  it('login com email vazio', () => {
    // Given que estou na página de login
    // When informo apenas uma senha
    loginPage.preencherSenha('123456');
    loginPage.entrar();
    // Then devo visualizar a mensagem de email inválido
    loginPage.validarMensagem('E-mail inválido.');
  });

  // CT-03 Scenario: login com senha vazia
  it('login com senha vazia', () => {
    // Given que estou na página de login
    // When informo apenas um email
    loginPage.preencherEmail('jhondoe@gmail.com');
    loginPage.entrar();
    // Then devo permanecer na página de login
    loginPage.validarUrl('/login');
    loginPage.validarMensagem('Senha inválida.');
  });

  // CT-04 Scenario: login com email e senha vazios
  it('login com email e senha vazios', () => {
    // Given que estou na página de login
    // When não informo os dados e tento fazer login
    loginPage.entrar();
    // Then devo permanecer na página de login
    loginPage.validarUrl('/login');
    loginPage.validarMensagem('E-mail inválido.');
  });

  // CT-05 Scenario: login com email inválido
  it('login com email inválido', () => {
    // Given que estou na página de login
    // When informo um email inválido e uma senha válida
    loginPage.preencherEmail('email-invalido');
    loginPage.preencherSenha('123456');
    loginPage.entrar();
    // Then devo visualizar a mensagem de email inválido
    loginPage.validarMensagem('E-mail inválido.');
  });

  // CT-06 Scenario: login com email contendo espaços
  it('login com email contendo espaços', () => {
    // Given que estou na página de login
    // When informo um email com espaços e uma senha válida
    loginPage.preencherEmail('email invalido@example.com');
    loginPage.preencherSenha('123456');
    loginPage.entrar();
    // Then devo visualizar a mensagem de email inválido
    loginPage.validarMensagem('E-mail inválido.');
  });

  // CT-07 Scenario: login com email e senha inválidos
  it('login com email e senha inválidos', () => {
    // Given que estou na página de login
    // When informo um email e uma senha inválidos
    loginPage.preencherEmail('email-invalido');
    loginPage.preencherSenha('1');
    loginPage.entrar();
    // Then devo permanecer na página de login e visualizar a mensagem de email inválido
    loginPage.validarUrl('/login');
    loginPage.validarMensagem('E-mail inválido.');
  });

  // CT-08 Scenario: login com senha de 1 dígito
  it('login com senha de 1 dígito', () => {
    // Given que estou na página de login
    // When informo um email válido e uma senha com um dígito
    loginPage.preencherEmail('jhondoe@gmail.com');
    loginPage.preencherSenha('1');
    loginPage.entrar();
    // Then devo permanecer na página de login
    loginPage.validarUrl('/login');
  });

  // CT-09 Scenario: login com senha com exatamente 6 dígitos
  it('login com senha com exatamente 6 dígitos', () => {
    // Given que estou na página de login
    // When informo um email válido e uma senha com 6 dígitos
    loginPage.preencherEmail('jhondoe@gmail.com');
    loginPage.preencherSenha('123456');
    loginPage.entrar();
    // Then devo acessar minha conta
    loginPage.validarUrl('/my-account');
  });

  // CT-10 Scenario: login com senha com mais de 6 dígitos
  it('login com senha com mais de 6 dígitos', () => {
    // Given que estou na página de login
    // When informo um email válido e uma senha com mais de 6 dígitos
    loginPage.preencherEmail('jhondoe@gmail.com');
    loginPage.preencherSenha('1234567');
    loginPage.entrar();
    // Then devo acessar minha conta
    loginPage.validarUrl('/my-account');
  });
});
