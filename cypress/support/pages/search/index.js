const productElements = require('../product/elements').ELEMENTS;
const searchElements = require('../search/elements').ELEMENTS;

class SearchPage {
    openSearchedProduct(product) {
        cy.contains(searchElements.productTitle, product).should('be.visible').click()
        cy.contains(productElements.productTitle, product).should('be.visible')
    }
}
export default new SearchPage;