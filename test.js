'use strict';

var postcss = require('postcss');
var linkColor = require('./index');
var test = require('tape');

function useLinkColor(opts) {
    return postcss().use(linkColor(opts));
}

test('linkColors', function (t) {
    t.plan(3);

    t.equal(
        useLinkColor().process('a{ font-size: 13px; linkColors: red, blue, green, yellow, purple; font-weight:bold; } h1 { color : red; }').css,
        'a{ font-size: 13px; font-weight:bold; color: red; } a:focus{ color:  purple; } a:active{ color:  yellow; } a:visited{ color:  green; } a:hover{ color:  blue; } h1 { color : red; }',
        'should add all link colors'
    );

    t.equal(
        useLinkColor().process('a{ font-size: 13px; linkColors: false, green, null, yellow; font-weight:bold; } h1 { color : red; }').css,
        'a{ font-size: 13px; font-weight:bold; } a:active{ color:  yellow; } a:hover{ color:  green; } h1 { color : red; }',
        'should only add hover and active'
    );

    t.equal(
        useLinkColor({classes: ['hover']}).process('a{ font-size: 13px; linkColors: green, yellow; font-weight:bold; } h1 { color : red; }').css,
        'a{ font-size: 13px; font-weight:bold; } a:hover{ color: green; } h1 { color : red; }',
        'should work with custom classes'
    );
});

