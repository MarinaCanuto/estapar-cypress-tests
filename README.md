# Testes Automatizados - Cypress

Este projeto contém testes automatizados E2E desenvolvidos com Cypress, simulando fluxos principais de um e-commerce baseado no Magento.

---

## 🌐 Base URL

https://magento2-demo.magebit.com/

---

## 📌 Cenários cobertos

* Cadastro de usuário
* Login
* Adição de produto ao carrinho
* Fluxo completo de checkout (finalização de compra)

---

## 🚀 Tecnologias utilizadas

* Cypress
* JavaScript
* Node.js

---

## ▶️ Como executar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar testes em modo headless

```bash
npx cypress run
```

### 3. Executar testes em modo interativo

```bash
npx cypress open
```

---

## 🧠 Abordagem

Os testes foram desenvolvidos utilizando comandos customizados (Cypress Commands) para reutilização de código e melhor organização.

Foram aplicadas boas práticas de automação com foco em:

* Reutilização de código
* Estabilidade em execução headless
* Redução de dependência de elementos dinâmicos da interface
* Validações baseadas em estado da aplicação

---

## 📂 Estrutura do Projeto

* **cypress/e2e**: Testes de ponta a ponta (Cenários de Cadastro, Login, Carrinho e Checkout).
* **cypress/fixtures**: Massas de dados em JSON (Ex: dados de endereço e usuário para o checkout).
* **cypress/support**: Comandos personalizados e configurações reutilizáveis.
* **cypress/reports**: Relatórios detalhados das execuções (gerados após o `npm test`).

---

## 📈 Observações

* Utilização de geração dinâmica de e-mails para evitar conflitos em testes de cadastro
* Ajustes de timeout aplicados para lidar com carregamento assíncrono da aplicação
* Fluxo de checkout validado de ponta a ponta, simulando jornada real do usuário

---

## 📊 Relatório de execução

Os testes geram automaticamente um relatório em HTML utilizando o **Mochawesome**, permitindo visualizar os cenários executados, status (pass/fail) e tempo de execução.

### Como gerar o relatório

```bash
npm run test
```

### Como visualizar

Após a execução dos testes, abra o arquivo abaixo em um navegador:

```bash
cypress/reports/report.html
```

O relatório apresenta:

* Lista de cenários executados
* Status dos testes (sucesso/falha)
* Tempo de execução
* Detalhes de cada etapa

---

## 🔧 Melhorias futuras

* Implementação de testes de API
* Integração com CI/CD (GitHub Actions)
* Melhorias no detalhamento dos relatórios de execução
* Separação de massa de dados de teste
