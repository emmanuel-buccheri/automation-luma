import headerPage from '../pageObjects/headerPage'
import searchPage from '../pageObjects/searchPage'
import productPage from '../pageObjects/productPage'
import checkoutPage from '../pageObjects/checkoutPage'

const HeaderPage = new headerPage
const SearchPage = new searchPage
const ProductPage = new productPage
const CheckoutPage = new checkoutPage

import customerFactory from '../factories/customerFactory';

When(/^pesquise o produto "([^"]*)"$/, (product) => {  
    HeaderPage.search(product)
});

When(/^abra o produto "([^"]*)" pesquisado$/, (product) => {
    SearchPage.openSearchedProduct(product)
});

When(/^ingrese a quantidade "([^"]*)"$/, (quantity) => {
    ProductPage.setQuantity(quantity)
});

When(/^adicione o produto "([^"]*)" ao carrinho$/, (product) => {
    ProductPage.addToCart(product)
});

When(/^entre no checkout$/, () => {
    HeaderPage.openMiniCart()
    HeaderPage.goToCheckout()
});

When(/^complete os dados de entrega$/, () => {
    var customer = customerFactory.customer()
    CheckoutPage.newAddress()
    CheckoutPage.fillShippmentFields(customer.address.street,customer.address.country,customer.address.state,customer.address.city,customer.address.postalCode,customer.phoneNumber)
});

When(/^avance para o metodo de pagamento$/, () => {
    CheckoutPage.goToPaymentStep()
});

When(/^finalice o pedido$/, () => {
    
    CheckoutPage.placeOrder()
});