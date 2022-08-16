import header from '../pageObjects/headerPage'
import searchPage from '../pageObjects/searchPage'
import productPage from '../pageObjects/productPage'
import checkoutPage from '../pageObjects/checkoutPage'

import customerFactory from '../factories/customerFactory';

When(/^pesquise o produto "([^"]*)"$/, (product) => {  
    header.search(product)
});

When(/^abra o produto "([^"]*)" pesquisado$/, (product) => {
    searchPage.openSearchedProduct(product)
});

When(/^ingrese a quantidade "([^"]*)"$/, (quantity) => {
    productPage.setQuantity(quantity)
});

When(/^adicione o produto "([^"]*)" ao carrinho$/, (product) => {
    productPage.addToCart(product)
});

When(/^entre no checkout$/, () => {
    header.openMiniCart()
    header.goToCheckout()
});

When(/^complete os dados de entrega$/, () => {
    var customer = customerFactory.customer()

    checkoutPage.fillShippmentFields(customer.address.street,customer.address.country,customer.address.state,customer.address.city,customer.address.postalCode,customer.phoneNumber)
});

When(/^avance para o metodo de pagamento$/, () => {
    checkoutPage.goToPaymentStep()
});

When(/^finalice o pedido$/, () => {
    
    checkoutPage.placeOrder()
});