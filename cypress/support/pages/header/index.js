const headerElements = require('../header/elements').ELEMENTS;
const loginElements = require('../login/elements').ELEMENTS;
const accountElements = require('../account/elements').ELEMENTS;
const searchElements = require('../search/elements').ELEMENTS;
const checkoutElements = require('../checkout/elements').ELEMENTS;


class Header {
    openLoginPage() {
        cy.get(headerElements.loginButton).should('be.visible').click()
        cy.url().should('include', loginElements.url)
    }

    openSingUp() {
        cy.contains(headerElements.createAccountButton, 'Create an Account')
            .should('be.visible').click()
        cy.url().should('include', accountElements.url)
    }

    search(product) {
        cy.get(headerElements.searchBar).should('be.visible').type(product)
        cy.get(headerElements.searchButton).should('be.visible').click()
        cy.contains(searchElements.resultTitle, "Search results for: '" + product + "'").should('be.visible')
    }

    openMiniCart() {
        cy.get(headerElements.miniCartButton).should('be.visible').click()
    }

    goToCheckout() { 
        cy.get(headerElements.goToCheckoutButton).should('be.visible').click()
        // cy.get('#checkout-loader').should("not.be.visible")
        cy.contains(checkoutElements.stepTitle,'Shipping Address')
    }
}
export default new Header;