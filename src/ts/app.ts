import Movie from "./Movie";
import Cart from "./Cart";

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

console.log(cart.getAll());
console.log(cart.sum());

console.log('app worked');