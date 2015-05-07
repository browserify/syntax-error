var test = require('tape');

var fs = require('fs');
var check = require('../');

test('cache - ok', function (t) {
    var file = __dirname + '/sources/ok.js';
    var src = fs.readFileSync(file);

    var err = check(src, file);
    t.notOk(err);

    err = check(src, file);
    t.notOk(err);

    t.end();
});

test('cache - error', function (t) {
    var file = __dirname + '/sources/check.js';
    var src = fs.readFileSync(file);

    var err = check(src, file);
    t.ok(err);
    t.equal(err.line, 5);
    t.equal(err.column, 30);
    t.equal(err.message, 'Unexpected token');
    t.ok(String(err).indexOf(file + ':5'));

    err = check(src, file);
    t.ok(err);
    t.equal(err.line, 5);
    t.equal(err.column, 30);
    t.equal(err.message, 'Unexpected token');
    t.ok(String(err).indexOf(file + ':5'));

    t.end();
});
