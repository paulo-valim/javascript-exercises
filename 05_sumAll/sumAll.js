const sumAll = function(a, b) {
    let sum = 0;
    if (a === parseInt(a) && b === parseInt(b)) {
      if (a > 0 && b > 0) {
        if (a < b) {
          for (let i = a; i <= b; i++) {
            sum = sum + i;
          }
        } else if (a > b) {
          for (let i = b; i <= a; i++) {
            sum = sum + i;
          }
        }
        return sum;
      } else if (a < 0 || b < 0) {
        return "ERROR";
      }
    } else {
      return "ERROR";
    }
  }
// Do not edit below this line
module.exports = sumAll;
