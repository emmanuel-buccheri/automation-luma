import checkoutElements from '../elements/checkoutElements';
import searchElements from '../elements/searchElements';
import accountElements from '../elements/accountElements';
import loginElements from '../elements/loginElements';
import headerElements from '../elements/headerElements';

class HeaderPage {
    openLoginPage() {
        cy.get(headerElements.loginButton()).should('be.visible').click()
        cy.url().should('include', loginElements.url())
    }

    openSingUp() {
        cy.contains(headerElements.createAccountButton(), 'Create an Account')
            .should('be.visible').click()
        cy.url().should('include', accountElements.url())
    }

    search(product) {
        cy.get(headerElements.searchBar()).should('be.visible').type(product)
        cy.get(headerElements.searchButton()).should('be.visible').click()
        cy.contains(searchElements.resultTitle(), "Search results for: '" + product + "'").should('be.visible')
    }

    openMiniCart() {
        cy.get(headerElements.miniCartButton()).should('be.visible').click();
    }

    goToCheckout() {
        cy.get(headerElements.goToCheckoutButton()).should('be.visible').click({force:true})
        // cy.get('#checkout-loader').should("not.be.visible")
        cy.contains(checkoutElements.stepTitle(), 'Shipping Address')
    }
}
export default new HeaderPage();