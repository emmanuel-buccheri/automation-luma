import checkoutElements from '../elements/checkoutElements';
import searchElements from '../elements/searchElements';
import accountElements from '../elements/accountElements';
import loginElements from '../elements/loginElements';
import headerElements from '../elements/headerElements';

const CheckoutElements = new checkoutElements;
const SearchElements = new searchElements;
const AccountElements = new accountElements;
const LoginElements = new loginElements;
const HeaderElements = new headerElements;

class Header {
    openLoginPage() {
        cy.get(HeaderElements.loginButton()).should('be.visible').click()
        cy.url().should('include', LoginElements.url())
    }

    openSingUp() {
        cy.contains(HeaderElements.createAccountButton(), 'Create an Account')
            .should('be.visible').click()
        cy.url().should('include', AccountElements.url())
    }

    search(product) {
        cy.get(HeaderElements.searchBar()).should('be.visible').type(product)
        cy.get(HeaderElements.searchButton()).should('be.visible').click()
        cy.contains(SearchElements.resultTitle(), "Search results for: '" + product + "'").should('be.visible')
    }

    openMiniCart() {
        cy.get(HeaderElements.miniCartButton()).should('be.visible').click()
    }

    goToCheckout() {
        cy.get(HeaderElements.goToCheckoutButton()).should('be.visible').click()
        // cy.get('#checkout-loader').should("not.be.visible")
        cy.contains(CheckoutElements.stepTitle(), 'Shipping Address')
    }
}
export default Header;