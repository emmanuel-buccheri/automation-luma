
import './commands'
import '@shelex/cypress-allure-plugin';
require('@shelex/cypress-allure-plugin');

// Limpar passo a passo
const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
  const style = app.document.createElement("style");
  style.innerHTML =
    ".command-name-request, .command-name-xhr { display: none }";
  style.setAttribute("data-hide-command-log-request", "");

  app.document.head.appendChild(style);
}

Cypress.on("uncaught:exception", (err, runnable) => { return false; });