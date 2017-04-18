const SignInPage = require('../pages/SignIn.js');
const CleverBotMainPage = require('../pages/CleverBotMain.js');
const MailinatorBoxPage = require('../pages/MailinatorBox.js');
// var ImapClient = require('emailjs-imap-client');


describe('register and talk with bot: ', function () {
    var client;
    beforeAll(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
        // client = new ImapClient('imap.gmail.com', 993, {
        //     auth: {
        //         user: 'macpwatesttask11',
        //         pass: 'b55rkrgb'
        //     }
        // });
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
        signIn.register(browser.params.userName, browser.params.fullName, browser.params.email, browser.params.pwd);
        expect(signIn.getSuccessText()).toBe(browser.params.text);
        mailinatorBox.get(browser.params.userName);
        mailinatorBox.openFirstEmail();


        let verificationLink = mailinatorBox.getVerigicationURL();
        expect(verificationLink).toContain('www.cleverbot.com/');

        browser.get("http://" + verificationLink);
        // // browser.get(verificationLink.getText());
        //
        // // verificationLink.then(text => {
        // //     browser.get(text);
        // //     console.log(text);
        // // });
        //
        // // });//browser.get(verificationLink.toString());
        // link.then(text => {
        //     console.log(text);
        //     browser.get("http://"+text);
        // });
    });
});