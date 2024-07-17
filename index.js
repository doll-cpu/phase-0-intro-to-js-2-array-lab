// Write your solution here!

// index.js
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return [...cats, name]; // Returns a new array with the appended cat
}

function prependCat(name) {
  return [name, ...cats]; // Returns a new array with the prepended cat
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array with the last cat removed
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array with the first cat removed
}

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};

