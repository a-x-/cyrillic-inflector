import test from 'ava';
import inflect from '.';

test('returns string', t => {
  t.is(typeof inflect(0, {zero: 'no one'}), 'string');
});
test('zero', t => {
  t.is(inflect(0, {zero: 'no one'}), 'no one');
});
test('one', t => {
  t.is(inflect(1, {one: 'there is one file'}), 'there is one file');
});
test('templating', t => {
  t.is(inflect(1, {one: 'there is {} file'}), 'there is 1 file');
});
test('21', t => {
  t.is(inflect(21, {one: '{} file'}), '21 file');
});
test('some', t => {
  t.is(inflect(2, {some: '{} файла'}), '2 файла');
});
test('some (22)', t => {
  t.is(inflect(22, {some: '{} файла'}), '22 файла');
});
test('many', t => {
  t.is(inflect(445, {many: '{} яблок'}), '445 яблок');
});
const inflect_ = count => inflect(count, {
  zero: 'Файлы не загружены',
  one: 'Загружен {} файл',
  some: 'Загружено {} файла',
  many: 'Загружено {} файлов'
});
test('complex zero', t => {
  t.is(inflect_(0), 'Файлы не загружены');
});
test('complex one', t => {
  t.is(inflect_(31), 'Загружен 31 файл');
});
test('complex some', t => {
  t.is(inflect_(5564), 'Загружено 5564 файла');
});
test('complex many', t => {
  t.is(inflect_(100500), 'Загружено 100500 файлов');
});
