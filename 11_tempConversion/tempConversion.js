const convertToCelsius = function(f) {
  return Math.round(((f - 32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(c) {
  return Math.round(((c * 1.8) + 32) * 10) / 10;
};

console.log("32F in C, should be 0: " + convertToCelsius(32));
console.log("54F in C, should be: 12.222...: " + convertToCelsius(54));
console.log("0C in F, should be 32: " + convertToFahrenheit(0));
console.log("21.56C in F, should be 70.808 rounded: " + convertToFahrenheit(21.56));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
