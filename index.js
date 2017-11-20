var mapValues = require('lodash.mapvalues');

/**
 * @param {Object} opts
 * @param {Number} opts.count
 * @param {String} opts.zero - Файлы не загружены
 * @param {String} opts.one - Загружен {} файл
 * @param {String} opts.some - Загружено {} файла
 * @param {String} opts.many - Загружено {} файлов
 */
module.exports = function (count_, patterns) {
  var count = Math.abs(count_);
  var str = mapValues(patterns, function(pattern) { return pattern.replace('{}', count); });
  if (!count) return str.zero;
  if (count >= 11 && count <= 14) return str.many;
  if (count % 10 === 1) return str.one;
  if (count % 10 >= 2 && count % 10 <= 4) return str.some;
  return str.many;
};
