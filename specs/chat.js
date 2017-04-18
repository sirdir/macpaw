const SignInPage = require('../pages/SignIn.js');
const CleverBotMainPage = require('../pages/CleverBotMain.js');
const MailinatorBoxPage = require('../pages/MailinatorBox.js');

describe('register and talk with bot: ', function () {
    beforeAll(function () {
        dv.manage().window().maximize();
        signIn = new SignInPage();
        cbMain = new CleverBotMainPage();
        mailinatorBox = new MailinatorBoxPage();
    });
    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });
    it('register', function () {
        cbMain.get();
        cbMain.openSignIn();
        signIn.register(browser.params.userName, browser.params.fullName, browser.params.email, browser.params.pwd);
        expect(signIn.getSuccessText()).toBe(browser.params.text);
        console.log('wtf');
    });
    it('email verification', function () {
        mailinatorBox.get(browser.params.userName);
        mailinatorBox.openFirstEmail();
        verificationLink = mailinatorBox.getVerigicationURL();
        expect(verificationLink).toContain('www.cleverbot.com/');
    });
    it('Sign In by verification link', function () {
        browser.get(verificationLink);
    });
    it('chat with dummy bot', function () {

    });
});