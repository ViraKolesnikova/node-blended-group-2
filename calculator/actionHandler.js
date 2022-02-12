const { sum, sub, mult, div } = require('./operations');

const actionHandler = (operator, numbers) => {
  switch (operator) {
  case "sum":
    sum(numbers)
    break
  case "sub":
    sub(numbers)
    break
  case "mult":
    mult(numbers)
    break
  case "div":
    div(numbers)
    break
  default: console.log('Unknown operation');
}
}

module.exports = actionHandler;