var signInPage = require('./../pages/SignIn.js');
var cleverBotMain = require('./../pages/CleverBotMain.js');

describe('register and talk with bot: ', function () {
    beforeAll(function () {
        browser.driver.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        signIn = new signInPage();
        cbMain = new cleverBotMain();
    });
    it('register', function () {
        cbMain.get();
        cbMain.openSignIn();
    });
    it('email verification', function () {

    });
    it('Sign In by verification link', function () {

    });
    it('chat with dummy bot', function () {

    });
});