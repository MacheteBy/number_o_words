var rubles = require('rubles').rubles;

// первый вариан
var text = rubles(781).replace(/\sр\у([\d\w\W]*)/, '').trim(); // <--- cюда вводи переменную
console.log(text);


// второй вариант через переменную
let num = 88; // <--- cюда вводи переменную
var text =  rubles(num).replace(/\sр\у([\d\w\W]*)/, '').trim();
console.log(text);