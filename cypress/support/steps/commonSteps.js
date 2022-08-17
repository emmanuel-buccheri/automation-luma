import homePage from '../pageObjects/homePage'
import headerPage from '../pageObjects/headerPage'
import commonPage from '../pageObjects/commonPage'
import loginPage from '../pageObjects/loginPage'

const HomePage = new homePage
const HeaderPage = new headerPage
const CommonPage = new commonPage
const LoginPage = new loginPage

import customerFactory from '../factories/customerFactory';

Given(/^acesse na home page$/, () => {
    HomePage.go()
});

Then(/^deve ser exibida a menssagem "([^"]*)"$/, (message) => {
    CommonPage.expectedMessage(message)
});

When(/^faça login$/, () => {
	var customer = customerFactory.customer()

    HeaderPage.openLoginPage()
    LoginPage.fillLoginFields(customer.email,customer.password)
    LoginPage.submitLogin()
});