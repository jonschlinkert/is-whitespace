/*!
 * is-whitespace <https://github.com/jonschlinkert/is-whitespace>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var regex = require('whitespace-regex');

module.exports = function isWhitespace(str) {
  return (typeof str === 'string') && regex().test(str);
};
