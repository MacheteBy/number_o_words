var rubles = require('rubles').rubles;

// первый вариан

var text = rubles(781); // <--- cюда вводи переменную
console.log(text.replace(/\sр\у([\d\w\W]*)/, '').trim());

// второй вариант через переменную

let num = 88; // <--- cюда вводи переменную
var text =  rubles(num);
console.log(text.replace(/\sр\у([\d\w\W]*)/, '').trim());