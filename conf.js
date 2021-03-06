let Jasmine2HtmlReporter = require('wordwrap-protractor-jasmine2-html-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
let curDate = Date.now();


exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/chat.js'],
    onPrepare: function(){
        global.dv = browser.driver;
        global.EC = protractor.ExpectedConditions;

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './testresults/',
            })
        );

        jasmine.getEnv().addReporter(
            new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));

    },
    params: {
        userName: 'Trump' + curDate,
        fullName: 'White Trash',
        email: 'Trump' + curDate + '@mailinator.com',
        pwd: 'QWE!@#456',
        text: "We have sent you an email. Please click on the link to verify your account. "
        + "Check your spam or junk folders if you don't see it soon.\n\n"
        + "You can immediately sign in to your new account, but will not be able to reply,"
        + " rate or appear in the stars list until you're verified."
    }
};