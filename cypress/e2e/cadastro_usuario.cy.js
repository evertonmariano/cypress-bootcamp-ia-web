const cadastroUsuarioPage = require('../pages/cadastro_usuario.page');

// Feature: Cadastro de usuário
describe('Cadastro de usuário', () => {
  const emailUnico = () => `qa${Date.now()}@example.com`;

  beforeEach(() => {
    cadastroUsuarioPage.visitar();
  });

  // CT-01 Scenario: cadastro com sucesso
  it('cadastro com sucesso', () => {
    // Given que estou na página de cadastro
    // When informo nome, email e senha válidos
    cadastroUsuarioPage.preencherNome('Ana');
    cadastroUsuarioPage.preencherEmail(emailUnico());
    cadastroUsuarioPage.preencherSenha('123456');
    cadastroUsuarioPage.cadastrar();
    // Then devo acessar minha conta e visualizar a confirmação
    cadastroUsuarioPage.validarUrl('/my-account');
    cadastroUsuarioPage.validarMensagem('Cadastro realizado!');
  });

  // CT-02 Scenario: cadastro com nome vazio
  it('cadastro com nome vazio', () => {
    // Given que estou na página de cadastro
    // When deixo o nome vazio e informo email e senha válidos
    cadastroUsuarioPage.preencherEmail(emailUnico());
    cadastroUsuarioPage.preencherSenha('123456');
    cadastroUsuarioPage.cadastrar();
    // Then devo visualizar a mensagem de nome obrigatório
    cadastroUsuarioPage.validarUrl('/register');
    cadastroUsuarioPage.validarMensagem('O campo nome deve ser prenchido');
  });

  // CT-03 Scenario: cadastro com email vazio
  it('cadastro com email vazio', () => {
    // Given que estou na página de cadastro
    // When deixo o email vazio e informo nome e senha válidos
    cadastroUsuarioPage.preencherNome('Ana');
    cadastroUsuarioPage.preencherSenha('123456');
    cadastroUsuarioPage.cadastrar();
    // Then devo visualizar a mensagem de email inválido
    cadastroUsuarioPage.validarUrl('/register');
    cadastroUsuarioPage.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  // CT-04 Scenario: cadastro com senha vazia
  it('cadastro com senha vazia', () => {
    // Given que estou na página de cadastro
    // When deixo a senha vazia e informo nome e email válidos
    cadastroUsuarioPage.preencherNome('Ana');
    cadastroUsuarioPage.preencherEmail(emailUnico());
    cadastroUsuarioPage.cadastrar();
    // Then devo visualizar a mensagem de senha inválida
    cadastroUsuarioPage.validarUrl('/register');
    cadastroUsuarioPage.validarMensagem('O campo senha deve ter pelo menos 6 dígitos');
  });

  // CT-05 Scenario: cadastro com nome, email e senha vazios
  it('cadastro com nome, email e senha vazios', () => {
    // Given que estou na página de cadastro
    // When tento cadastrar sem informar nenhum campo
    cadastroUsuarioPage.cadastrar();
    // Then devo visualizar a mensagem de nome obrigatório
    cadastroUsuarioPage.validarUrl('/register');
    cadastroUsuarioPage.validarMensagem('O campo nome deve ser prenchido');
  });

  // CT-06 Scenario: cadastro com email inválido
  it('cadastro com email inválido', () => {
    // Given que estou na página de cadastro
    // When informo um email inválido
    cadastroUsuarioPage.preencherNome('Ana');
    cadastroUsuarioPage.preencherEmail('email-invalido');
    cadastroUsuarioPage.preencherSenha('123456');
    cadastroUsuarioPage.cadastrar();
    // Then devo visualizar a mensagem de email inválido
    cadastroUsuarioPage.validarUrl('/register');
    cadastroUsuarioPage.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  // CT-07 Scenario: cadastro com email sem usuário
  it('cadastro com email sem usuário', () => {
    // Given que estou na página de cadastro
    // When informo um email sem usuário
    cadastroUsuarioPage.preencherNome('Ana');
    cadastroUsuarioPage.preencherEmail('@example.com');
    cadastroUsuarioPage.preencherSenha('123456');
    cadastroUsuarioPage.cadastrar();
    // Then devo visualizar a mensagem de email inválido
    cadastroUsuarioPage.validarUrl('/register');
    cadastroUsuarioPage.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  // CT-08 Scenario: cadastro com email sem domínio
  it('cadastro com email sem domínio', () => {
    // Given que estou na página de cadastro
    // When informo um email sem domínio
    cadastroUsuarioPage.preencherNome('Ana');
    cadastroUsuarioPage.preencherEmail('ana@');
    cadastroUsuarioPage.preencherSenha('123456');
    cadastroUsuarioPage.cadastrar();
    // Then devo visualizar a mensagem de email inválido
    cadastroUsuarioPage.validarUrl('/register');
    cadastroUsuarioPage.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  // CT-09 Scenario: cadastro com email sem extensão
  it('cadastro com email sem extensão', () => {
    // Given que estou na página de cadastro
    // When informo um email sem extensão
    cadastroUsuarioPage.preencherNome('Ana');
    cadastroUsuarioPage.preencherEmail('ana@example');
    cadastroUsuarioPage.preencherSenha('123456');
    cadastroUsuarioPage.cadastrar();
    // Then devo visualizar a mensagem de email inválido
    cadastroUsuarioPage.validarUrl('/register');
    cadastroUsuarioPage.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  // CT-10 Scenario: cadastro com nome de 1 caractere
  it('cadastro com nome de 1 caractere', () => {
    // Given que estou na página de cadastro
    // When informo um nome com um caractere e dados válidos
    cadastroUsuarioPage.preencherNome('A');
    cadastroUsuarioPage.preencherEmail(emailUnico());
    cadastroUsuarioPage.preencherSenha('123456');
    cadastroUsuarioPage.cadastrar();
    // Then devo acessar minha conta
    cadastroUsuarioPage.validarUrl('/my-account');
  });

  // CT-11 Scenario: cadastro com nome contendo números
  it('cadastro com nome contendo números', () => {
    // Given que estou na página de cadastro
    // When informo um nome com números e dados válidos
    cadastroUsuarioPage.preencherNome('Ana123');
    cadastroUsuarioPage.preencherEmail(emailUnico());
    cadastroUsuarioPage.preencherSenha('123456');
    cadastroUsuarioPage.cadastrar();
    // Then devo acessar minha conta
    cadastroUsuarioPage.validarUrl('/my-account');
  });

  // CT-12 Scenario: cadastro com nome contendo caracteres especiais
  it('cadastro com nome contendo caracteres especiais', () => {
    // Given que estou na página de cadastro
    // When informo um nome com caracteres especiais e dados válidos
    cadastroUsuarioPage.preencherNome('Ana-Silva');
    cadastroUsuarioPage.preencherEmail(emailUnico());
    cadastroUsuarioPage.preencherSenha('123456');
    cadastroUsuarioPage.cadastrar();
    // Then devo acessar minha conta
    cadastroUsuarioPage.validarUrl('/my-account');
  });

  // CT-13 Scenario: cadastro com senha com menos de 6 dígitos
  it('cadastro com senha com menos de 6 dígitos', () => {
    // Given que estou na página de cadastro
    // When informo uma senha com menos de 6 dígitos
    cadastroUsuarioPage.preencherNome('Ana');
    cadastroUsuarioPage.preencherEmail(emailUnico());
    cadastroUsuarioPage.preencherSenha('12345');
    cadastroUsuarioPage.cadastrar();
    // Then devo visualizar a mensagem de senha inválida
    cadastroUsuarioPage.validarUrl('/register');
    cadastroUsuarioPage.validarMensagem('O campo senha deve ter pelo menos 6 dígitos');
  });

  // CT-14 Scenario: cadastro com senha com exatamente 6 dígitos
  it('cadastro com senha com exatamente 6 dígitos', () => {
    // Given que estou na página de cadastro
    // When informo uma senha com exatamente 6 dígitos
    cadastroUsuarioPage.preencherNome('Ana');
    cadastroUsuarioPage.preencherEmail(emailUnico());
    cadastroUsuarioPage.preencherSenha('123456');
    cadastroUsuarioPage.cadastrar();
    // Then devo acessar minha conta
    cadastroUsuarioPage.validarUrl('/my-account');
  });

  // CT-15 Scenario: cadastro com senha com mais de 6 dígitos
  it('cadastro com senha com mais de 6 dígitos', () => {
    // Given que estou na página de cadastro
    // When informo uma senha com mais de 6 dígitos
    cadastroUsuarioPage.preencherNome('Ana');
    cadastroUsuarioPage.preencherEmail(emailUnico());
    cadastroUsuarioPage.preencherSenha('1234567');
    cadastroUsuarioPage.cadastrar();
    // Then devo acessar minha conta
    cadastroUsuarioPage.validarUrl('/my-account');
  });

  // CT-16 Scenario: cadastro com nome válido, email inválido e senha válida
  it('cadastro com nome válido, email inválido e senha válida', () => {
    // Given que estou na página de cadastro
    // When informo nome e senha válidos e email inválido
    cadastroUsuarioPage.preencherNome('Ana');
    cadastroUsuarioPage.preencherEmail('email-invalido');
    cadastroUsuarioPage.preencherSenha('123456');
    cadastroUsuarioPage.cadastrar();
    // Then devo visualizar a mensagem de email inválido
    cadastroUsuarioPage.validarUrl('/register');
    cadastroUsuarioPage.validarMensagem('O campo e-mail deve ser prenchido corretamente');
  });

  // CT-17 Scenario: cadastro com nome válido, email válido e senha inválida
  it('cadastro com nome válido, email válido e senha inválida', () => {
    // Given que estou na página de cadastro
    // When informo nome e email válidos e senha inválida
    cadastroUsuarioPage.preencherNome('Ana');
    cadastroUsuarioPage.preencherEmail(emailUnico());
    cadastroUsuarioPage.preencherSenha('12345');
    cadastroUsuarioPage.cadastrar();
    // Then devo visualizar a mensagem de senha inválida
    cadastroUsuarioPage.validarUrl('/register');
    cadastroUsuarioPage.validarMensagem('O campo senha deve ter pelo menos 6 dígitos');
  });

  // CT-18 Scenario: cadastro com nome inválido, email válido e senha válida
  it('cadastro com nome inválido, email válido e senha válida', () => {
    // Given que estou na página de cadastro
    // When deixo o nome vazio e informo email e senha válidos
    cadastroUsuarioPage.preencherEmail(emailUnico());
    cadastroUsuarioPage.preencherSenha('123456');
    cadastroUsuarioPage.cadastrar();
    // Then devo visualizar a mensagem de nome obrigatório
    cadastroUsuarioPage.validarUrl('/register');
    cadastroUsuarioPage.validarMensagem('O campo nome deve ser prenchido');
  });
});
