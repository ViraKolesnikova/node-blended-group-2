const sum = (numbersParams) => {
  const result = numbersParams.reduce((total, num) => { return total+ num }, 0);
  console.log(result);
}

module.exports = sum;