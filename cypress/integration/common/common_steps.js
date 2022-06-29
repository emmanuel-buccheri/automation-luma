/// <reference types="Cypress" />

Given(/^acesse na home page$/, () => {
    cy.reload()
    cy.visit('/')
    cy.contains('Default welcome msg!')
});
