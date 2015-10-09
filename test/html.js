var test = require('tap').test;

var fs = require('fs');
var check = require('../');

var src = '<html></html>';

test('html', function (t) {
    var err = check(src, 'foo.js');
    t.ok(err);
    t.equal(err.line, 1);
    t.equal(err.column, 1);
    t.equal(err.message, 'Unexpected token');
    // node 0.12 and iojs don't include the stack trace
    t.match(err.stack, __filename, {skip: err.stack == null});
    t.ok(/foo.js:1/.test(err), 'foo.js:1');
    t.end();
});
