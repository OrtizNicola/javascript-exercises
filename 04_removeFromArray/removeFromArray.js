const removeFromArray = function() {
    let arr = arguments[0];
    let valsToRemove = Array.from(arguments).slice(1);
    return arr.filter((x) => !valsToRemove.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
