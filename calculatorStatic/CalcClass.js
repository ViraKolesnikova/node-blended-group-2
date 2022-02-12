class CalcClass {
//   constructor(operator, numbers) {
//     this.operator = operator;
//     this.numbers = numbers;
// }
  static #sum = (numbersParams) => {
    const result = numbersParams.reduce((total, num) => {
      return total + num;
    }, 0);
    console.log(result);
  };

  static #sub = (numbersParams) => {
    const result = numbersParams.reduce((total, num) => {
      return total - num;
    });
    console.log(result);
  };

  static #mult = (numbersParams) => {
    const result = numbersParams.reduce((total, num) => {
      return total * num;
    });
    console.log(result);
  };

  static #div = (numbersParams) => {
    const result = numbersParams.reduce((total, num) => {
      return total / num;
    });
    console.log(result);
  };

  static #actionHandler = (operator, numbers) => {
    switch (operator) {
      case "sum":
        this.#sum(numbers);
        break;
      case "sub":
        this.#sub(numbers);
        break;
      case "mult":
        this.#mult(numbers);
        break;
      case "div":
        this.#div(numbers);
        break;
      default:
        console.log("Unknown operation");
    }
  };

  static init = (operator, numbers) => {
    this.actionHandler(operator, numbers)
  }
}

// console.log('Class works');
module.exports = CalcClass;
