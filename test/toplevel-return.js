var test = require('tape');
var check = require('../');

var src = 'return';

test('top-level return disallowed', function (t) {
    var err = check(src);
    t.ok(err);
    t.equal(err.message, "Illegal return statement");
    t.end();
});
