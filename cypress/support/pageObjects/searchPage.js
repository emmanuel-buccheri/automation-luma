import productElements from '../elements/productElements';
import searchElements from '../elements/searchElements';

const ProductElements = new productElements;
const SearchElements = new searchElements;

class SearchPage {
    openSearchedProduct(product) {
        cy.contains(SearchElements.productTitle(), product).should('be.visible').click()
        cy.contains(ProductElements.productTitle(), product).should('be.visible')
    }
}
export default SearchPage;