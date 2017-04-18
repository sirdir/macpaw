'use strict';
var MailinatorBox = function () {

    this.get = (user) => {
        browser.get('https://www.mailinator.com/inbox2.jsp?public_to=' + user + '#/#public_maildirdiv');
        browser.wait(EC.textToBePresentInElementValue($('#publicinboxfield'), user.toLowerCase()), 10000);
    };

    this.openFirstEmail = () => {
        browser.wait(EC.invisibilityOf($('#publicm8rguy')), 20000);
        element(by.repeater('email in emails')).click();
        browser.wait(EC.visibilityOf($('div#public_showmaildiv')), 5000);
    };

    this.getVerigicationURL = () => {
        browser.switchTo().frame($('#publicshowmaildivcontent').getWebElement());
        let xuy = $('#inner a').getText();
        browser.switchTo().defaultContent();
        return xuy.then(link => {return link});


        // this.getVerigicationURL = () => {
        //     browser.switchTo().frame($('#publicshowmaildivcontent').getWebElement());
        //     let linkProm = $('#inner a').getText();
        //     let textProm = linkProm.then(function (xuy) {
        //         return xuy.getText();
        //     }, console.log('no text for you 1'));
        //     let text = textProm.then(function (textInner) {
        //         console.log(textInner + ' inner xuyiner');
        //         return textInner;
        //     }, console.log('no text for you 2'));
        //     browser.switchTo().defaultContent();
        //     return text;
    };
};

module.exports = MailinatorBox;