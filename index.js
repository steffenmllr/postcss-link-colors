'use strict';
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-link-colors', function (opts) {
    opts = opts || {
        classes: ['normal', 'hover', 'visited', 'active', 'focus']
    };

    function parseBool(b) {
        if(!b) { return false; }
        b = b.trim();
        return !(/^(false|null|0)$/i).test(b) && !!b;
    }

    return function (css) {
        css.eachDecl(function(decl) {
            if(decl.prop === 'linkColors') {
                var colors = decl.value.split(',');
                opts.classes.forEach(function(el, ix) {
                    if(!parseBool(colors[ix])) {
                        return;
                    }
                    if(el === 'normal') {
                        decl.parent.append(postcss.decl({prop: 'color', value: colors[ix]}));
                    } else {
                        var rule = postcss.rule({ selector: decl.parent.selector + ':' + el })
                            .append(postcss.decl({prop: 'color', value: colors[ix]}));

                        decl.parent.parent.append(rule);
                        rule.moveAfter(decl.parent);
                    }
                });

                // Remove Handler
                decl.removeSelf();
            }
        });
    };
});
