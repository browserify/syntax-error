var test = require('tape');
var check = require('../');

var fs = require('fs');
var file = __dirname + '/sources/run2.js';
var src = fs.readFileSync(file);

test('do not run sources (2)', function (t) {
    var err = check(src, file);
    t.ok(err);
    t.equal(err.line, 1);
    t.equal(err.column, 1);
    t.equal(err.message, "Unexpected token }");
    t.ok(String(err).indexOf(file) + ':1:1');
    t.end();
});
