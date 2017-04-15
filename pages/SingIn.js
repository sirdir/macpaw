'use strict';
var SingIn = function () {

    this.register = (username, name, email, pwd) => {
        $('#cbsocialsignupform>input[name="username"]').sendKeys(username);
        $('#cbsocialsignupform>input[name="fullname"]').sendKeys(name);
        $('#cbsocialsignupform>input[name="email"]').sendKeys(email);
        $('#cbsocialsignupform>input.passwordnormal').sendKeys(pwd);
        $('#cbsocialregisterterms').sendKeys('yes');
        $('#cbsocialsignupform>input.standout').click();
    };

    this.getSuccessText = () => {
        return $('#cbsocialmessagesignup>span').getText();
    }

};

module.exports = SingIn;