'use strict';
let MailinatorBox = function () {

    this.get = (user) => {
        browser.get('https://www.mailinator.com/inbox2.jsp?public_to=' + user + '#/#public_maildirdiv');
        browser.wait(EC.textToBePresentInElementValue($('#publicinboxfield'), user.toLowerCase()), 25000);
    };

    this.openFirstEmail = () => {
        browser.wait(EC.invisibilityOf($('#publicm8rguy')), 20000);
        element(by.repeater('email in emails')).click();
        browser.wait(EC.visibilityOf($('div#public_showmaildiv')), 5000);
    };

    this.getVerificationURL = () => {
        browser.switchTo().frame($('#publicshowmaildivcontent').getWebElement());
        let text = $('#inner a').getText();
        browser.switchTo().defaultContent();
        return text;
    };
};

module.exports = MailinatorBox;