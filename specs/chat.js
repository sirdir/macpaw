var x = require('../pages/SignIn.js');
var y = require('../pages/CleverBotMain.js');

describe('register and talk with bot: ', function () {
    beforeAll(function () {
        browser.ignoreSynchronization = true;
        browser.driver.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        signIn = new x();
        cbMain = new y();
    });
    it('register', function () {
        cbMain.get();
        cbMain.openSignIn();
        signIn.register(browser.params.userName, browser.params.fullName, browser.params.email, browser.params.pwd);
        expect(signIn.getSuccessText().toEqual(browser.params.text))
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