const SignInPage = require('../pages/SignIn.js');
const CleverBotMainPage = require('../pages/CleverBotMain.js');
const MailinatorBoxPage = require('../pages/MailinatorBox.js');

describe('register and talk with bot: ', function () {
    let username = browser.params.userName;
    let fullName = browser.params.fullName;
    let email = browser.params.email;
    let pwd = browser.params.pwd;
    beforeAll(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
        dv.manage().window().maximize();
        signIn = new SignInPage();
        cbMain = new CleverBotMainPage();
        mailinatorBox = new MailinatorBoxPage();
    });
    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });
    it('chating', function () {
        cbMain.get();
        cbMain.openSignIn();
        signIn.register(username, fullName, email, pwd);
        expect(signIn.getSuccessText()).toBe(browser.params.text);
        mailinatorBox.get(username);
        mailinatorBox.openFirstEmail();
        let verificationLink = mailinatorBox.getVerigicationURL();
        expect(verificationLink).toContain('www.cleverbot.com/');//fixme with .toMatch()
        verificationLink.then(link => {//fixme do wrapper
            browser.get("http://" + link);
        });
        expect(signIn.isVerivied()).toBe(true);
        let actualName = signIn.login(username, pwd);
        expect(actualName).toBe(username);
        cbMain.sayToBot(['hi', 'trubu shatal']);
    });
    it('must fail', function() {
        browser.get('https://www.wikipedia.org/');
        expect(0).toBeTruthy();
    });
});