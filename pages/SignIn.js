'use strict';
var SignIn = function () {

    this.register = (username, name, email, pwd) => {
        dv.findElement(By.css('#cbsocialsignupform>input[name="username"]')).sendKeys(browser.params.userName);
        dv.findElement(By.css('#cbsocialsignupform>input[name="fullname"]')).sendKeys(browser.params.fullName);
        dv.findElement(By.css('#cbsocialsignupform>input[name="email"]')).sendKeys(browser.params.email);
        dv.findElement(By.css('#cbsocialsignupform>input.passwordclear')).click();
        dv.findElement(By.css('#cbsocialsignupform>input.passwordnormal')).sendKeys(browser.params.pwd);
        dv.findElement(By.id('cbsocialregisterterms')).sendKeys('yes');
        dv.findElement(By.css('#cbsocialsignupform>input.standout')).click();
    };

    this.getSuccessText = () => {
        var locator = By.css('#cbsocialmessagesignup>span');
        browser.wait(EC.visibilityOf(element(locator)));
        return dv.findElement(locator).getText();
    }
};

module.exports = SignIn;