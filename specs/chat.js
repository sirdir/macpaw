var SignInPage = require('../pages/SignIn.js');
var CleverBotMainPage = require('../pages/CleverBotMain.js');
// var MailinatorBoxPage = require('../pages/MailinatorBox.js');

describe('register and talk with bot: ', function () {
    beforeAll(function () {
        dv.manage().window().maximize();
        signIn = new SignInPage();
        cbMain = new CleverBotMainPage();
        // mailinatorBox = new MailinatorBoxPage();
    });
    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });
    it('register', function () {
        cbMain.get();
        cbMain.openSignIn();
        signIn.register(browser.params.userName, browser.params.fullName, browser.params.email, browser.params.pwd);
        expect(signIn.getSuccessText()).toEqual(browser.params.text)
    });
    it('email verification', function () {

    });
    it('Sign In by verification link', function () {

    });
    it('chat with dummy bot', function () {

    });
});