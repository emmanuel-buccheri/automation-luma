import { When } from "@badeball/cypress-cucumber-preprocessor";
import headerPage from '../pages/headerPage'
import searchPage from '../pages/searchPage'
import productPage from '../pages/productPage'
import checkoutPage from '../pages/checkoutPage'
import customerFactory from '../factories/customerFactory';

When("pesquise o produto {string}", (product) => {  
    headerPage.search(product)
});

When("abra o produto {string} pesquisado", (product) => {
    searchPage.openSearchedProduct(product)
});

When("ingrese a quantidade {string}", (quantity) => {
    productPage.setQuantity(quantity)
});

When("adicione o produto {string} ao carrinho", (product) => {
    productPage.addToCart(product)
});

When("entre no checkout", () => {
    headerPage.openMiniCart()
    headerPage.goToCheckout()
});

When("complete os dados de entrega", () => {
    const customer = customerFactory.customer()
    checkoutPage.newAddress()
    checkoutPage.fillShippmentFields(customer.address.street,customer.address.country,customer.address.state,customer.address.city,customer.address.postalCode,customer.phoneNumber)
});

When("avance para o metodo de pagamento", () => {
    checkoutPage.goToPaymentStep()
});

When("finalice o pedido", () => {
    checkoutPage.placeOrder()
});