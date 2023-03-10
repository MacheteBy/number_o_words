var rubles = require('rubles').rubles;

var text = rubles(898);
console.log(text.replace(' рублей 00 копеек', ''));