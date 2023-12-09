const fizzbuzz = require('./FizzBuzz');

test('Devuelve 1 para el numero 1', () => {
  expect(fizzbuzz(1)).toEqual(1);
});

test('Devuelve 7 para el numero 7', () => {
  expect(fizzbuzz(7)).toEqual(7);
});

test('Devuelve "Fizz" para el numero 3', () => {
  expect(fizzbuzz(3)).toEqual('Fizz');
});

test('Devuelve "Fizz" para el numero 9', () => {
  expect(fizzbuzz(9)).toEqual('Fizz');
});

test('Devuelve "Buzz" para el numero 5', () => {
  expect(fizzbuzz(5)).toEqual('Buzz');
});

test('Devuelve "Buzz" para el numero 10', () => {
  expect(fizzbuzz(10)).toEqual('Buzz');
});

test('Devuelve "FizzBuzz" para el numero 15', () => {
  expect(fizzbuzz(15)).toEqual('FizzBuzz');
});

test('Devuelve "FizzBuzz" para el numero 30', () => {
  expect(fizzbuzz(30)).toEqual('FizzBuzz');
});


//npm run test + enter para ejecutar en terminal