# Testes Automatizados - Cypress

Este projeto contém testes automatizados E2E desenvolvidos com Cypress, simulando fluxos principais de um e-commerce baseado em Magento.

## 📌 Cenários cobertos

* Cadastro de usuário
* Login
* Adição de produto ao carrinho
* Finalização de compra (checkout)

## 🚀 Tecnologias utilizadas

* Cypress
* JavaScript
* Node.js

## ▶️ Como executar o projeto

1. Instalar dependências:

npm install

2. Executar testes em modo headless:

npx cypress run

3. Executar testes em modo interativo:

npx cypress open

## 🧠 Abordagem

Os testes foram desenvolvidos utilizando comandos customizados para reutilização de código e melhor organização.

Foram aplicadas validações com foco em estabilidade, evitando dependência de elementos dinâmicos (como menus com hover), garantindo execução consistente em modo headless.

## 📈 Observações

* Utilizado geração dinâmica de e-mails para evitar conflitos nos testes de cadastro.
* Ajustes de timeout foram aplicados para lidar com carregamentos assíncronos da aplicação.
* O fluxo de checkout foi validado de ponta a ponta, simulando a jornada real do usuário.

## 🔧 Melhorias futuras

- Implementação de testes de API
- Integração com CI/CD (GitHub Actions)
- Separação de dados de teste