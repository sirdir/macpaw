'use strict';
var CleverBotMain = function () {

    this.get = () => {
        browser.get('http://www.cleverbot.com/');
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
                browser.wait(EC.stalenessOf($('#avatarform.inprogress')),5000);
            })
        }
        else {
            throw new Error('pls provide array of strings');
        }
    };

};

module.exports = CleverBotMain;