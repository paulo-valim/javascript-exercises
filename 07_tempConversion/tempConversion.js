const ftoc = function(fahrenheit) {
  let celsius;
  celsius = (5 / 9) * (fahrenheit - 32);
  return Number(celsius.toFixed(1));
  console.log(celsius);
}

const ctof = function(celsius) {
  let fahrenheit;
  fahrenheit = 1.8 * celsius + 32;
  return Number(fahrenheit.toFixed(1));
  console.log(fahrenheit);
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
