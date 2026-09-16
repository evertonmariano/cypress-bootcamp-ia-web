# Cypress Bootcamp IA Web

Projeto de testes automatizados E2E com Cypress para o site [Automation Practice](https://automationpratice.com.br/).

## Tecnologias

- Node.js
- Cypress 16
- JavaScript
- GitHub Actions

## Pré-requisitos

- Node.js instalado
- npm instalado

## Instalação

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/evertonmariano/cypress-bootcamp-ia-web.git
cd cypress-bootcamp-ia-web
npm install
```

## Executando os testes

### Modo interativo

```bash
npx cypress open
```

Selecione **E2E Testing**, escolha o navegador e execute a especificação desejada.

### Modo headless

Execute todos os testes E2E:

```bash
npx cypress run
```

Execute uma especificação específica:

```bash
npx cypress run --spec cypress/e2e/login.cy.js
npx cypress run --spec cypress/e2e/cadastro_usuario.cy.js
```

## Cenários automatizados

### Login

Arquivo: [`cypress/e2e/login.cy.js`](./cypress/e2e/login.cy.js)

Os cenários cobrem:

- Login com sucesso
- Campos obrigatórios vazios
- E-mail inválido
- E-mail contendo espaços
- Senhas abaixo do limite mínimo
- Senha com exatamente 6 dígitos
- Senha com mais de 6 dígitos

### Cadastro de usuário

Arquivo: [`cypress/e2e/cadastro_usuario.cy.js`](./cypress/e2e/cadastro_usuario.cy.js)

Os cenários cobrem:

- Cadastro com sucesso
- Campos obrigatórios vazios
- Formatos inválidos de e-mail
- Nomes com diferentes formatos
- Senhas abaixo, no limite e acima de 6 dígitos
- Combinações de dados válidos e inválidos

## Page Objects

Os seletores e ações reutilizáveis ficam separados dos cenários:

- [`cypress/pages/login.page.js`](./cypress/pages/login.page.js)
- [`cypress/pages/cadastro_usuario.page.js`](./cypress/pages/cadastro_usuario.page.js)

Essa organização mantém os specs mais legíveis e centraliza a manutenção dos seletores da aplicação.

## Configuração

A configuração do Cypress está em [`cypress.config.js`](./cypress.config.js):

- `baseUrl`: `https://automationpratice.com.br`
- `supportFile`: `false`

## Pipeline no GitHub Actions

O workflow [`pipeline.yml`](./.github/workflows/pipeline.yml):

- Executa os testes Cypress em cada Pull Request direcionado à branch `main`
- Executa os testes em horários agendados
- Envia o resultado da execução para o Telegram

Para habilitar a notificação, configure os seguintes secrets no repositório do GitHub:

```text
TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID
```

Os secrets podem ser configurados em:

**Settings > Secrets and variables > Actions**

## Estrutura do projeto

```text
.
├── .github/
│   └── workflows/
│       └── pipeline.yml
├── cypress/
│   ├── e2e/
│   │   ├── cadastro_usuario.cy.js
│   │   └── login.cy.js
│   └── pages/
│       ├── cadastro_usuario.page.js
│       └── login.page.js
├── cypress.config.js
├── package.json
└── README.md
```
