# cyrillic-inflector [![Build Status](https://travis-ci.org/a-x-/cyrillic-inflector.svg?branch=master)](https://travis-ci.org/a-x-/cyrillic-inflector)
cyrillic inflector (count, one, zero, some, many)

```js
import inflect from 'cyrillic-inflector';

inflect(0, { zero: 'no calls', one: '{} call' }) // --> no calls

const infl = inflect({
  zero: 'Файлы не загружены',
  one: 'Загружен {} файл',
  some: 'Загружено {} файла',
  many: 'Загружено {} файлов'
});
test('complex zero', t => {
  t.is(infl(0), 'Файлы не загружены');
});
test('complex one', t => {
  t.is(infl(31), 'Загружен 31 файл');
});
test('complex some', t => {
  t.is(infl(5564), 'Загружено 5564 файла');
});
test('complex many', t => {
  t.is(infl(100500), 'Загружено 100500 файлов');
});
```

