const repeatString = function(string, num) {
    for (let num = 0; num < 1000; num++);
      if (num >= 0) {
        return string.repeat(num);
      } else if (num < 0) {
        return "ERROR";
      }
    }

// Do not edit below this line
module.exports = repeatString;