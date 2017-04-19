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

    this.sayToBot = (array) => {
        if (typeof array === 'object' && array instanceof Array){
            array.forEach(item =>{
                dv.findElement(By.css('input.stimulus')).sendKeys(item);
                dv.findElement(By.css('input.stimulus')).sendKeys(protractor.Key.ENTER);
                browser.sleep(5000); //FIXME to proper wait
            })
        }
        else {
            throw new Error('pls provide array of phrases');
        }
    };

};

module.exports = CleverBotMain;