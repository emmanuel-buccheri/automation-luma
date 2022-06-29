const commonElements = require('../common/elements').ELEMENTS;
const searchElements = require('../search/elements').ELEMENTS;
const productElements = require('../product/elements').ELEMENTS;
const checkoutElements = require('../checkout/elements').ELEMENTS;
// import customerFactory from '../../factories/customerFactory';

When(/^pesquisar o produto "([^"]*)"$/, (product) => {  
    cy.get(commonElements.searchBar).should('be.visible').type(product)
    cy.get(commonElements.searchButton).should('be.visible').click()
    cy.contains(searchElements.resultTitle,"Search results for: '"+product+"'").should('be.visible') 
});

When(/^abrir o produto "([^"]*)" pesquisado$/, (product) => {
	cy.contains(searchElements.productTitle,product).should('be.visible').click()
    cy.contains(productElements.productTitle,product).should('be.visible')
});

When(/^ingresar quantidade "([^"]*)"$/, (quantity) => {
    cy.get(productElements.quantityField).should('be.visible')
        .invoke('attr','value', quantity)
        .should('have.attr', 'value', quantity)
});

When(/^adicionar produto no carrinho com a resposta "([^"]*)"$/, (message) => {
	cy.get(productElements.addToCartButton).should('be.visible').click()
    cy.contains(message).should('be.visible')
});

When(/^ir no checkout$/, () => {
	cy.get(checkoutElements.miniCartButton).should('be.visible').click()
    cy.get(checkoutElements.goToCheckoutButton).should('be.visible').click()
    cy.contains(checkoutElements.stepTitle,'Shipping Address')
});

When(/^ir para o metodo de pagamento$/, () => {
	cy.get(checkoutElements.goToPaymentButton).should('be.visible').click()
    cy.contains(checkoutElements.stepTitle,'Payment Method')
});


When(/^finalizar pedido$/, () => {
	cy.get(checkoutElements.placeOrderButton).should('be.visible').click()
    cy.url().should('include', '/checkout/onepage/success')    
});