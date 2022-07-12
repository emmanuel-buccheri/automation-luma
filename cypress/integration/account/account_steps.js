import header from '../../support/pages/header'
import accountPage from '../../support/pages/account'

When(/^tente criar uma conta com "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (firstName,lastName,email,pass,confirmPass) => {
    header.openSingUp()
    accountPage.fillAccountFields(firstName,lastName,email,pass,confirmPass)
    accountPage.submitAccountForm()
});