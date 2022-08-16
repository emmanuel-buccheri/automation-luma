const productElements = require('../elements/productElements').ELEMENTS;
const searchElements = require('../elements/searchElements').ELEMENTS;

class SearchPage {
    openSearchedProduct(product) {
        cy.contains(searchElements.productTitle, product).should('be.visible').click()
        cy.contains(productElements.productTitle, product).should('be.visible')
    }
}
export default new SearchPage;