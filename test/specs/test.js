var assert = require('assert');
describe('my webdriverio tests', function () {
    it('Github test', function () {
        browser.url('http://www.google.com');
        browser.pause(2000);
        const title = browser.getTitle();
        console.log('Title was: ' + title);
        assert(title === 'Google');
    });

    it('Typetest', function(){
        $(`input[name='q']`).setValue('WDIO');
        browser.pause(2000);
    })
});