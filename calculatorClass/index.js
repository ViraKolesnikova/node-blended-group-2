const CalcClass = require('./CalcClass');

const [operator, ...numbersArgs] = process.argv.slice(2);
const numbers = numbersArgs.map(number => Number(number));

new CalcClass(operator, numbers).init();

