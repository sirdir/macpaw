'use strict';
var CleverBotMain = function () {

    this.get = () => {
        browser.get('http://www.cleverbot.com/');
    };

    this.openSignIn = () => {
        $('#cbsocialsigninup').click();
    };

    this.sayToBot = (phrase) => {
        $('input.stimulus').sedKeys(phrase);
        $('input.stimulus').sedKeys(protractor.Key.ENTER);
    };


};

module.exports = CleverBotMain;