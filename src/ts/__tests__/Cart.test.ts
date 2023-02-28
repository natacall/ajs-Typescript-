import Movie from '../Movie';
import Cart from '../Cart';

test('add - normal', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1,
    'The Avengers',
    'Мстители',
    '100.00',
    2012,
    'США',
    ['Фантастика', 'Боевик', 'Фэнтези', 'Приключения'],
    137,
    '00000001.png'
  ));
  expect(cart.getAll().length).toBe(1);
});

test('add - twice', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1,
    'The Avengers',
    'Мстители',
    '100.00',
    2012,
    'США',
    ['Фантастика', 'Боевик', 'Фэнтези', 'Приключения'],
    137,
    '00000001.png'
  ));
  cart.add(new Movie(
    1,
    'The Avengers',
    'Мстители',
    '100.00',
    2012,
    'США',
    ['Фантастика', 'Боевик', 'Фэнтези', 'Приключения'],
    137,
    '00000001.png'
  ));
  expect(cart.getAll().length).toBe(1);
});

test('add - second', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1,
    'The Avengers',
    'Мстители',
    '100.00',
    2012,
    'США',
    ['Фантастика', 'Боевик', 'Фэнтези', 'Приключения'],
    137,
    '00000001.png'
  ));
  cart.add(new Movie(
    2,
    '千と千尋の神隠し',
    'Унесённые призраками',
    '125.00',
    2001,
    'Япония',
    ['Драма', 'Фэнтези', 'Приключения'],
    124,
    '00000002.png'
  ));
  expect(cart.getAll().length).toBe(2);
});

test('sum - nothing', () => {
  const cart = new Cart();
  expect(cart.sum()).toBe(0);
});

test('sum - alone', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1,
    'The Avengers',
    'Мстители',
    '100.00',
    2012,
    'США',
    ['Фантастика', 'Боевик', 'Фэнтези', 'Приключения'],
    137,
    '00000001.png'
  ));
  expect(cart.sum()).toBe(100);
});

test('sum - few', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1,
    'The Avengers',
    'Мстители',
    '100.00',
    2012,
    'США',
    ['Фантастика', 'Боевик', 'Фэнтези', 'Приключения'],
    137,
    '00000001.png'
  ));
  cart.add(new Movie(
    2,
    '千と千尋の神隠し',
    'Унесённые призраками',
    '125.00',
    2001,
    'Япония',
    ['Драма', 'Фэнтези', 'Приключения'],
    124,
    '00000002.png'
  ));
  expect(cart.sum()).toBe(225);
});

test('discount', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1,
    'The Avengers',
    'Мстители',
    '110.00',
    2012,
    'США',
    ['Фантастика', 'Боевик', 'Фэнтези', 'Приключения'],
    137,
    '00000001.png'
  ));
  expect(cart.discount(10)).toBe(11);
});

test('total', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1,
    'The Avengers',
    'Мстители',
    '110.00',
    2012,
    'США',
    ['Фантастика', 'Боевик', 'Фэнтези', 'Приключения'],
    137,
    '00000001.png'
  ));
  expect(cart.total(10)).toBe(99);
});

test('delete - success', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1,
    'The Avengers',
    'Мстители',
    '100.00',
    2012,
    'США',
    ['Фантастика', 'Боевик', 'Фэнтези', 'Приключения'],
    137,
    '00000001.png'
  ));
  cart.add(new Movie(
    2,
    '千と千尋の神隠し',
    'Унесённые призраками',
    '125.00',
    2001,
    'Япония',
    ['Драма', 'Фэнтези', 'Приключения'],
    124,
    '00000002.png'
  ));
  cart.delete(2);
  expect(cart.getAll().length).toBe(1);
});

test('delete - fail', () => {
  const cart = new Cart();
  cart.add(new Movie(
    1,
    'The Avengers',
    'Мстители',
    '100.00',
    2012,
    'США',
    ['Фантастика', 'Боевик', 'Фэнтези', 'Приключения'],
    137,
    '00000001.png'
  ));
  cart.add(new Movie(
    2,
    '千と千尋の神隠し',
    'Унесённые призраками',
    '125.00',
    2001,
    'Япония',
    ['Драма', 'Фэнтези', 'Приключения'],
    124,
    '00000002.png'
  ));
  cart.delete(5);
  expect(cart.getAll().length).toBe(2);
});