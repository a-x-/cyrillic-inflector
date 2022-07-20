# cyrillic-inflector [![Build Status](https://travis-ci.org/a-x-/cyrillic-inflector.svg?branch=master)](https://travis-ci.org/a-x-/cyrillic-inflector)
cyrillic inflector (count, one, zero, some, many)

```js
import inflect from 'cyrillic-inflector';

inflect(0, { zero: 'no calls', one: '{} call' }) // --> no calls

const loadPhrase = inflect({
  zero: 'Файлы не загружены',
  one: 'Загружен {} файл',
  some: 'Загружено {} файла',
  many: 'Загружено {} файлов'
});
test('complex zero', t => {
  t.is(loadPhrase(0), 'Файлы не загружены');
});
test('complex one', t => {
  t.is(loadPhrase(31), 'Загружен 31 файл');
});
test('complex some', t => {
  t.is(loadPhrase(5564), 'Загружено 5564 файла');
});
test('complex many', t => {
  t.is(loadPhrase(100500), 'Загружено 100500 файлов');
});
```

See test.js for more typical and edge cases


## TODO
- [ ] find alternative solutions

## Relative libs
- [messageformat]
  - genders
  - multiple variables

- [petrovich]
  - automatic cyrillic inflector: ex-usser full names
    
[messageformat]: https://github.com/messageformat/messageformat.js
[petrovich]: https://github.com/petrovich/petrovich-js
