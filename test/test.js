/*!
 * is-whitespace <https://github.com/jonschlinkert/is-whitespace>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */
'use strict';

var fs = require('fs');
var expect = require('chai').expect;
var isWhitespace = require('../');

var read = function(name) {
	return fs.readFileSync(('test/fixtures/' + name), 'utf8');
};


describe('when non-whitespace exists:', function () {
  it('should return false.', function () {
    var actual = 'foo';
    expect(isWhitespace(actual)).to.eql(false);
  });

  it('should return false.', function () {
    var actual = read('text.txt');
    expect(isWhitespace(actual)).to.eql(false);
  });
});


describe('when non-whitespace exists:', function () {
  it('should return true for spaces', function () {
    var actual = '         ';
    expect(isWhitespace(actual)).to.eql(true);
  });
  it('should return true for spaces', function () {
    var actual = isWhitespace(read('spaces.txt'));
    expect(actual).to.eql(true);
  });
  it('should return true for tabs', function () {
    var actual = isWhitespace(read('tabs.txt'));
    expect(actual).to.eql(true);
  });
  it('should return true for newlines and spaces', function () {
    var actual = isWhitespace(read('multiline.txt'));
    expect(actual).to.eql(true);
  });
  it('should return true for varied spaces, newlines, and tabs', function () {
    var actual = isWhitespace(read('varied.txt'));
    expect(actual).to.eql(true);
  });
});