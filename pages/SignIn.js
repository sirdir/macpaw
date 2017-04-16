'use strict';
var SignIn = function () {

    this.register = (username, name, email, pwd) => {
        browser.driver.findElement(by.css('#cbsocialsignupform>input[name="username"]')).sendKeys(username);
        browser.driver.findElement(by.css('#cbsocialsignupform>input[name="fullname"]')).sendKeys(name);
        browser.driver.findElement(by.css('#cbsocialsignupform>input[name="email"]')).sendKeys(email);
        browser.driver.findElement(by.css('#cbsocialsignupform>input.passwordnormal')).sendKeys(pwd);
        browser.driver.findElement(by.id('cbsocialregisterterms')).sendKeys('yes');
        browser.driver.findElement(by.css('#cbsocialsignupform>input.standout')).click();
    };

    this.getSuccessText = () => {
        return browser.driver.findElement(by.css('#cbsocialmessagesignup>span')).getText();
    }

};

module.exports = SignIn;