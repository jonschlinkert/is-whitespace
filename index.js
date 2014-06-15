/*!
 * is-whitespace <https://github.com/jonschlinkert/is-whitespace>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function isWhitespace(value) {
  if (typeof value === 'string') {
    return (/^\s+$/).test(value);
  }
  return false;
};