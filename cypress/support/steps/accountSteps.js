import accountPage from '../pageObjects/accountPage'
import headerPage from '../pageObjects/headerPage'
const AccountPage = new accountPage
const HeaderPage = new headerPage

When(/^tente criar uma conta com "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)"$/, (firstName,lastName,email,pass,confirmPass) => {
    HeaderPage.openSingUp()
    AccountPage.fillAccountFields(firstName,lastName,email,pass,confirmPass)
    AccountPage.submitAccountForm()
});