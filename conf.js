var shell = require('shelljs');
var curDate = Date.now();

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/chat.js'],
    capabilities: {
    browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 1,
        count: 1
    },
    params: {
        userName: 'WeWillMakeAmericaGreatAgain'+ curDate,
        fullName: 'White Trash',
        email: 'WeWillMakeAmericaGreatAgain'+ curDate + '@mailinator.com',
        pwd: 'QWE!@#456'
    }
}