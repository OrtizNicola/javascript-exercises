const palindromes = function (str) {
    let cleanString = str
      .toLowerCase()
      .split("")
      .filter((char) => char.match(/^[0-9a-z]+$/))
      .join("")
    return cleanString.split("").reverse().join("") === cleanString
};

// Do not edit below this line
module.exports = palindromes;
