var mapValues = require('lodash.mapvalues');

/**
 * curry wrapper.
 * @example
 * const infl = Infl({ one: '{} apple', zero: 'no apples', some: '{} apples', many: '{} apples' })
 * infl(100500) // --> '100500 apples'
 */
module.exports = function(count, patterns)  {
  if (arguments.length === 1 && arguments[0].toString() === '[object Object]') {
    var patterns_ = arguments[0];
    return function (count) {
      return inflect(count, patterns_);
    };
  }
  return inflect(count, patterns);
};

/**
 * @param {Object} opts
 * @param {Number} opts.count
 * @param {String} opts.zero - Файлы не загружены
 * @param {String} opts.one - Загружен {} файл
 * @param {String} opts.some - Загружено {} файла
 * @param {String} opts.many - Загружено {} файлов
 */
function inflect (count, patterns) {
  var count_ = Math.abs(count);
  var str = mapValues(patterns, function(pattern) {
    return typeof pattern === 'string' ? pattern.replace('{}', count) : pattern(count);
  });
  if (!count_) return str.zero;
  if (count_ >= 11 && count_ <= 14) return str.many;
  if (count_ % 10 === 1) return str.one;
  if (count_ % 10 >= 2 && count_ % 10 <= 4) return str.some;
  return str.many;
}
