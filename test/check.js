var test = require('tap').test;

var fs = require('fs');
var check = require('../');

var file = __dirname + '/sources/check.js';
var src = fs.readFileSync(file);

test('check', function (t) {
    var err = check(src, file);
    t.ok(err);
    t.equal(err.line, 5);
    t.equal(err.column, 30);
    t.equal(err.message, 'Unexpected token');
    // node 0.12 and iojs don't include the stack trace
    t.match(err.stack, __filename, {skip: err.stack == null});
    t.ok(String(err).indexOf(file + ':5'));
    t.end();
});
