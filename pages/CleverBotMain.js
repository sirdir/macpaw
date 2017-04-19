'use strict';
var CleverBotMain = function () {

    this.get = () => {
        browser.get('http://www.cleverbot.com/');
        browser.wait(EC.titleIs('Cleverbot.com - a clever bot - speak to an AI with some Actual Intelligence?'), 5000);
        browser.wait(EC.visibilityOf(element(By.id('cbsocialsigninup'))), 5000);
    };

    this.openSignIn = () => {
        dv.findElement(By.id('cbsocialsigninup')).click();
    };

    this.sayToBot = (phrase) => {
        dv.findElement(By.css('input.stimulus')).sendKeys(phrase);
        dv.findElement(By.css('input.stimulus')).sendKeys(protractor.Key.ENTER);
    };

};

module.exports = CleverBotMain;