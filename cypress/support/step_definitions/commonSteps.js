import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from '../pages/homePage'
import headerPage from '../pages/headerPage'
import commonPage from '../pages/commonPage'
import loginPage from '../pages/loginPage'
import customerFactory from '../factories/customerFactory';

Given("acesse na home page", () => {
    homePage.go()
});

Then("deve ser exibida a menssagem {string}", (message) => {
    commonPage.expectedMessage(message)
});

When("faça login", () => {
	const customer = customerFactory.customer()
    headerPage.openLoginPage()
    loginPage.fillLoginFields(customer.email,customer.password)
    loginPage.submitLogin()
});