'use strict';
var SignIn = function () {

    this.verify = function (url) {
        url.then(url => {
            if (!url.startsWith('http://' || !url.startsWith('https://'))){
                url = 'http://' + url;
            }
            browser.get(url);
        });
    };

    this.isVerivied = function () {
        return dv.findElement(By.id('cbsocialmessagesignin')).isDisplayed();
    };

    this.login = function (username, pwd) {
        dv.findElement(By.css('#cbsocialmessagesignin ~ input[name="username"]')).sendKeys(username);
        dv.findElement(By.css('#cbsocialmessagesignin ~ input.passwordclear')).click();
        dv.findElement(By.css('#cbsocialmessagesignin ~ input.passwordnormal')).sendKeys(pwd);
        dv.findElement(By.css('#cbsocialmessagesignin ~ input[type="submit"]')).click();
        browser.wait(EC.visibilityOf($('#cbsocialsigninup > span')), 30000);
        return dv.findElement(By.css('#cbsocialsigninup > span')).getText();
    };

    this.register = (username, name, email, pwd) => {
        dv.findElement(By.css('#cbsocialsignupform > input[name="username"]')).sendKeys(username);
        dv.findElement(By.css('#cbsocialsignupform > input[name="fullname"]')).sendKeys(name);
        dv.findElement(By.css('#cbsocialsignupform > input[name="email"]')).sendKeys(email);
        dv.findElement(By.css('#cbsocialsignupform > input.passwordclear')).click();
        dv.findElement(By.css('#cbsocialsignupform > input.passwordnormal')).sendKeys(pwd);
        dv.findElement(By.id('cbsocialregisterterms')).sendKeys('yes');
        dv.findElement(By.css('#cbsocialsignupform > input.standout')).click();
    };

    this.getSuccessText = () => {
        var locator = By.css('#cbsocialmessagesignup > span');
        browser.wait(EC.visibilityOf(element(locator)));
        return dv.findElement(locator).getText();
    }
};

module.exports = SignIn;