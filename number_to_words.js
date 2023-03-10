var rubles = require('rubles').rubles;

// первый вариан

var text = rubles(898); // <--- cюда вводи переменную
console.log(text.replace(' рублей 00 копеек', ''));


// второй вариант через переменную

let num = 88; // <--- cюда вводи переменную
var text =  rubles(num);
console.log(text.replace(' рублей 00 копеек', ''));