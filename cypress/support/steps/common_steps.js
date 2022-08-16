import homePage from '../support/pages/home'
import common from '../support/pages/common'
import header from '../support/pages/header'
import loginPage from '../support/pages/login'

import customerFactory from '../support/factories/customerFactory';

Given(/^acesse na home page$/, () => {
    homePage.go()
});

Then(/^deve ser exibida a menssagem "([^"]*)"$/, (message) => {
    common.expectedMessage(message)
});

When(/^faça login$/, () => {
	var customer = customerFactory.customer()

    header.openLoginPage()
    loginPage.fillLoginFields(customer.email,customer.password)
    loginPage.submitLogin()
});