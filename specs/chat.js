// var x = require('../pages/SignIn.js');
// var y = require('../pages/CleverBotMain.js');
var SignIn = function () {

    this.register = (username, name, email, pwd) => {
        dv.findElement(By.css('#cbsocialsignupform>input[name="username"]')).sendKeys(username);
        dv.findElement(By.css('#cbsocialsignupform>input[name="fullname"]')).sendKeys(name);
        dv.findElement(By.css('#cbsocialsignupform>input[name="email"]')).sendKeys(email);
        dv.findElement(By.css('#cbsocialsignupform>input.passwordnormal')).sendKeys(pwd);
        dv.findElement(By.id('cbsocialregisterterms')).sendKeys('yes');
        dv.findElement(By.css('#cbsocialsignupform>input.standout')).click();
    };

    this.getSuccessText = () => {
        return dv.findElement(By.css('#cbsocialmessagesignup>span')).getText();
    }

};
var CleverBotMain = function () {

    this.get = () => {
        // browser.get('http://www.cleverbot.com/');

        console.log('do pizda');
        dv.get('http://www.cleverbot.com');
        console.log('posle pizda');
        dv.wait(function() {
            return dv.isElementPresent(By.id('cbsocialsigninup'));
        }, 5000);
    };

    this.openSignIn = () => {
        dv.findElement(By.id('cbsocialsigninup'))
            .then((webElement) => {
                webElement.click();
            });
    };

    this.sayToBot = (phrase) => {
        dv.findElement(By.css('input.stimulus'))
            .then(sedKeys(phrase));
        dv.findElement(By.css('input.stimulus'))
            .then(sedKeys(protractor.Key.ENTER));
    };


};

describe('register and talk with bot: ', function () {
    beforeAll(function () {
        dv.get('http://www.cleverbot.com');
        dv.manage().window().maximize();
        signIn = new SignIn();
        cbMain = new CleverBotMain();
    });
    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });
    it('register', function () {

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.titleIs('Cleverbot.com - a clever bot - speak to an AI with some Actual Intelligence?'), 5000);
        browser.wait(EC.visibilityOf(element(By.id('cbsocialsigninup'))), 5000);

        dv.findElement(By.id('cbsocialsigninup')).click();
        // dv.wait(function() {
        //     return dv.isElementPresent(By.id('cbsocialsignupform'));
        // }, 10000);

        dv.findElement(By.css('#cbsocialsignupform>input[name="username"]')).sendKeys(browser.params.userName);
        dv.findElement(By.css('#cbsocialsignupform>input[name="username"]'))
            .then((elem) => {
            elem.sendKeys(browser.params.userName)
        });
        dv.findElement(By.css('#cbsocialsignupform>input[name="fullname"]')).sendKeys(browser.params.fullName);
        dv.findElement(By.css('#cbsocialsignupform>input[name="email"]')).sendKeys(browser.params.email);
        dv.findElement(By.css('#cbsocialsignupform>input.passwordclear')).click();
        dv.findElement(By.css('#cbsocialsignupform>input.passwordnormal')).sendKeys(browser.params.pwd);
        dv.findElement(By.id('cbsocialregisterterms')).sendKeys('yes');
        dv.findElement(By.css('#cbsocialsignupform>input.standout')).click();

        // cbMain.get();
        // cbMain.openSignIn();
        // signIn.register(browser.params.userName, browser.params.fullName, browser.params.email, browser.params.pwd);
        var text = browser.wait(EC.visibilityOf(element(By.css('#cbsocialmessagesignup>span'))));
        expect(dv.findElement(By.css('#cbsocialmessagesignup>span')).getText()).toEqual(browser.params.text)
    });
    // it('email verification', function () {
    //
    // });
    // it('Sign In by verification link', function () {
    //
    // });
    // it('chat with dummy bot', function () {
    //
    // });
});