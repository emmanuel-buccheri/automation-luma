class headerElements {

    createAccountButton= () => {return '.panel > .panel > .header > li'}
    loginButton= () => { return '.panel > .header > .authorization-link > a'}
    loggedMessage= () => { return ':nth-child(2) > .greet > .logged-in'}
    searchBar= () => { return '#search'}
    searchButton= () => { return '#search_mini_form > div.actions > button'}
    miniCartButton= () => { return '.showcart'}
    goToCheckoutButton= () => { return '#top-cart-btn-checkout'}

}
export default headerElements;