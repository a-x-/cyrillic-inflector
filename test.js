import test from 'ava';
import inflect from '.';

test('returns string', t => {
  t.is(typeof inflect(0, { zero: 'no one' }), 'string');
});
test('zero', t => {
  t.is(inflect(0, { zero: 'no one' }), 'no one');
});
test('one', t => {
  t.is(inflect(1, { one: 'there is one file' }), 'there is one file');
});
test('templating', t => {
  t.is(inflect(1, { one: 'there is {} file' }), 'there is 1 file');
});
test('21', t => {
  t.is(inflect(21, { one: '{} file' }), '21 file');
});
test('13', t => {
  t.is(inflect(13, { many: '{} файлов' }), '13 файлов');
});
test('12', t => {
  t.is(inflect(12, { many: '{} файлов' }), '12 файлов');
});
test('11', t => {
  t.is(inflect(11, { many: '{} файлов' }), '11 файлов');
});
test('10', t => {
  t.is(inflect(10, { many: '{} файлов' }), '10 файлов');
});
test('9', t => {
  t.is(inflect(9, { many: '{} файлов' }), '9 файлов');
});
test('some', t => {
  t.is(inflect(2, { some: '{} файла' }), '2 файла');
});
test('some (22)', t => {
  t.is(inflect(22, { some: '{} файла' }), '22 файла');
});
test('many', t => {
  t.is(inflect(445, { many: '{} яблок' }), '445 яблок');
});
const inflect_ = count => inflect(count, {
  zero: 'Файлы не загружены',
  one: 'Загружен {} файл',
  some: 'Загружено {} файла',
  many: 'Загружено {} файлов'
});
test('complete zero', t => {
  t.is(inflect_(0), 'Файлы не загружены');
});
test('complete one', t => {
  t.is(inflect_(31), 'Загружен 31 файл');
});
test('complete some', t => {
  t.is(inflect_(5564), 'Загружено 5564 файла');
});
test('complete many', t => {
  t.is(inflect_(100500), 'Загружено 100500 файлов');
});
test('negative num', t => {
  t.is(inflect(-1, { one: 'Погода: небольшой снегопад, {} градус' }), 'Погода: небольшой снегопад, -1 градус');
})

test('pattern-functions', t => {
  t.is(inflect(11, { many: (value) => 'has b' + value.toString(2) + ' nerds in the team' }), 'has b1011 nerds in the team');
});

const infl = inflect({
  zero: 'Компьютеры не заражены',
  one: 'Заражён {} компьютер',
});

test('partial application', t => {
  t.is(infl(21), 'Заражён 21 компьютер');
});
