const SignInPage = require('../pages/SignIn.js');
const CleverBotMainPage = require('../pages/CleverBotMain.js');
const MailinatorBoxPage = require('../pages/MailinatorBox.js');

describe('register and talk with bot: ', function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    let username = browser.params.userName;
    let fullName = browser.params.fullName;
    let email = browser.params.email;
    let pwd = browser.params.pwd;
    let expectedText = browser.params.text;
    let phrases = ['hi', 'trubu shatal', 42];
    let regExpVerLink = /www\.cleverbot\.com\/[a-z]{2}\/[a-z]{2}\/\d{6}\/[0-9|a-f]{12}/;
    beforeAll(function () {
        dv.manage().window().maximize();
        signIn = new SignInPage();
        cbMain = new CleverBotMainPage();
        mailinatorBox = new MailinatorBoxPage();
    });
    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });
    it('chatting with bot', function () {
        cbMain.get();
        cbMain.openSignIn();
        signIn.register(username, fullName, email, pwd);
        let actualText = signIn.getSuccessText();
        expect(actualText).toBe(expectedText);
        mailinatorBox.get(username);
        mailinatorBox.openFirstEmail();
        let verificationLink = mailinatorBox.getVerificationURL();
        expect(verificationLink).toMatch(regExpVerLink);
        signIn.verify(verificationLink);
        expect(signIn.isVerified()).toBe(true);
        let actualName = signIn.login(username, pwd);
        expect(actualName).toBe(username);
        cbMain.sayToBot(phrases);
    });
    it('must fail for fun', function() {
        browser.get('https://www.wikipedia.org/');
        expect(0).toBeTruthy();
    });
});