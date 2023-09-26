import productElements from '../elements/productElements';
import searchElements from '../elements/searchElements';

class SearchPage {
    openSearchedProduct(product) {
        cy.contains(searchElements.productTitle(), product).should('be.visible').click()
        cy.contains(productElements.productTitle(), product).should('be.visible')
    }
}
export default new SearchPage;