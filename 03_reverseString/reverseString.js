const reverseString = function(string) {
    let arr = string.split("");
    let halfLen = Math.floor(arr.length / 2);
    for(let i = 0; i < halfLen; i++) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]]
    }
    return arr.join("")
};

// Do not edit below this line
module.exports = reverseString;
