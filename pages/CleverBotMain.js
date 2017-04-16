'use strict';
var CleverBotMain = function () {

    this.get = () => {
        browser.sleep(5000);
        // browser.get('http://www.cleverbot.com/');
        browser.driver.get('http://www.cleverbot.com');
        browser.sleep(5000);
        browser.driver.wait(function() {
            return browser.driver.isElementPresent(by.id('cbsocialsigninup'));
        }, 5000);
    };

    this.openSignIn = () => {
        browser.driver.findElement(by.id('cbsocialsigninup'))
            .then((webElement) => {
                webElement.click();
            });
    };

    this.sayToBot = (phrase) => {
        browser.driver.findElement(by.css('input.stimulus'))
            .then(sedKeys(phrase));
        browser.driver.findElement(by.css('input.stimulus'))
            .then(sedKeys(protractor.Key.ENTER));
    };


};

module.exports = CleverBotMain;