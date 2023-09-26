class HeaderElements {
    createAccountButton = () => ".panel > .panel > .header > li";
    loginButton = () => ".panel > .header > .authorization-link > a";
    loggedMessage = () => ":nth-child(2) > .greet > .logged-in";
    searchBar = () => "#search";
    searchButton = () => "#search_mini_form > div.actions > button";
    miniCartButton = () => ".showcart";
    goToCheckoutButton = () => "#top-cart-btn-checkout";
}
export default new HeaderElements();