
/**
 * Module dependencies.
 */

var types = require('./types');

/**
 * Expose the types.
 */

exports.types = types;

/**
 * Lookup with `ext`.
 *
 * @param {String} ext
 * @return {String}
 * @api public
 */

exports.lookup = function(ext){
  if ('.' == ext[0]) ext = ext.slice(1);
  return types[ext];
};