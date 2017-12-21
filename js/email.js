// Simple email obfuscation. Runs when the document is ready.
$(function() {
    var protocolOne = 'mai';
    var protocolTwo = 'lto:';
    var name = 'aquinonez.dev';
    var at = '@';
    var domain = 'gmail.com';
    var address = protocolOne + protocolTwo + name + at + domain;
    $('.email').attr('href', address);
});
