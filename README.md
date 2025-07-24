# 📌 Projeto de Testes End-to-End com Cypress

Este repositório contém testes automatizados para a aplicação [vanilla-js-web-app-example](https://erickwendel.github.io/vanilla-js-web-app-example), com o objetivo de praticar o uso do **Cypress**, **Page Objects** e **integração com CI/CD** via GitHub Actions. 



## 🔧 Tecnologias utilizadas

* [Cypress](https://www.cypress.io/)
* JavaScript
* GitHub Actions (CI/CD)

## 🧪 O que foi praticado

* Escrita de testes E2E com Cypress
* Uso do padrão Page Objects
* Manipulação de elementos do DOM
* Validações de CSS e mensagens de erro
* Execução automatizada de testes com **CI/CD**
* Boas práticas de organização de código

## ⚙️ CI/CD

Este projeto está integrado com um fluxo de **CI/CD** para rodar os testes automaticamente a cada *push* ou *pull request*.
A pipeline garante que os testes sejam executados em ambiente controlado, aumentando a confiabilidade das entregas.


## 📂 Estrutura do Projeto

```bash
web-app-example/
│
├── .github/
│   └── workflows/
│       └── ci.yml               # Pipeline de CI com Cypress
│
├── cypress/
│   ├── e2e/
│   │   ├── registro-form.js      # Page Object com os seletores
│   │   └── web-app-example.cy.js
│   │
│   ├── fixtures/
│   │   └── example.json         
│   │
│   ├── support/
│       ├── commands.js          
│       └── e2e.js              
│
├── node_modules/                
├── cypress.config.js 
├── image.png                    # Configuração do Cypress
├── package-lock.json
├── package.json
└── README.md                   
```

## 🖼️ Captura de Tela

![alt text](image.png)

## 🚀 Como executar

1. Instale as dependências:

```bash
npm install
```

2. Execute o Cypress:

```bash
npx cypress open
```

Ou para executar no modo headless:

```bash
npx cypress run
```

---

