'use strict';
let CleverBotMain = function () {
    let signUpBtn = By.id('cbsocialsigninup');
    let input = By.css('input.stimulus');

    this.get = () => {
        browser.get('http://www.cleverbot.com/');
        browser.wait(EC.visibilityOf(element(signUpBtn)), 5000);
    };

    this.openSignIn = () => {
        dv.findElement(signUpBtn).click();
    };

    this.sayToBot = (array) => {
        if (typeof array === 'object' && array instanceof Array){
            array.forEach(item =>{
                dv.findElement(input).sendKeys(item.toString());
                dv.findElement(input).sendKeys(protractor.Key.ENTER);
                browser.wait(EC.stalenessOf($('#avatarform.inprogress')), 15000);
            })
        }
        else {
            throw new Error('pls provide array of strings');
        }
    };

};

module.exports = CleverBotMain;