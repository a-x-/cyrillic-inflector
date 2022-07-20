/**
 * curry wrapper.
 * @example
 * const infl = Infl({ one: '{} яблоко', zero: 'нет яблок', some: '{} яблока', many: '{} яблок' })
 * infl(100500) // --> '100500 яблок'
 */
module.exports = function (count, patterns) {
  if (arguments.length === 1 && arguments[0].toString() === "[object Object]") {
    const patterns_ = arguments[0];
    return (count) => inflect(count, patterns_);
  }
  return inflect(count, patterns);
};

/**
 * @param {Number} count
 * @param {Object} patterns
 * @param {String} patterns.zero - Файлы не загружены
 * @param {String} patterns.one - Загружен {} файл
 * @param {String} patterns.some - Загружено {} файла
 * @param {String} patterns.many - Загружено {} файлов
 */
function inflect(_count, patterns) {
  const count = Math.abs(_count);
  const res = {};
  Object.keys(patterns).forEach((key) => {
    const pattern = patterns[key];
    res[key] =
      typeof pattern === "string"
        ? pattern.replace("{}", _count)
        : pattern(_count);
  });
  if (!count) return res.zero;
  if (count >= 11 && count <= 14) return res.many;
  if (count % 10 === 1) return res.one;
  if (count % 10 >= 2 && count % 10 <= 4) return res.some;
  return res.many;
}
