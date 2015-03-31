/*!
 * is-whitespace <https://github.com/jonschlinkert/is-whitespace>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
var fs = require('fs');
var assert = require('assert');
var isWhitespace = require('../');

function read(name) {
  return fs.readFileSync('test/fixtures/' + name, 'utf8');
}

describe('when non-whitespace exists:', function () {
  it('should return false.', function () {
    assert(!isWhitespace('foo'));
  });

  it('should return false.', function () {
    assert(!isWhitespace(read('text.txt')));
  });
});

describe('when non-whitespace exists:', function () {
  it('should return true for spaces', function () {
    assert(isWhitespace('         '));
  });
  it('should return true for spaces', function () {
    assert(isWhitespace(read('spaces.txt')));
  });
  it('should return true for tabs', function () {
    assert(isWhitespace(read('tabs.txt')));
  });
  it('should return true for newlines and spaces', function () {
    assert(isWhitespace(read('multiline.txt')));
  });
  it('should return true for varied spaces, newlines, and tabs', function () {
    assert(isWhitespace(read('varied.txt')));
  });
});

describe('ES5-compliant whitespace', function () {
  it('should be true for all expected whitespace values', function () {
    assert(isWhitespace("\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF"));
  });

  it('should not be true for the zero-width space', function () {
    assert(!isWhitespace('\u200b'));
  });
});
