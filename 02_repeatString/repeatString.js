const repeatString = function(substr, nTimes) {
    if (nTimes < 0) {
        return 'ERROR'
    }

    finalString = '';
    for(let i = 0; i < nTimes; i++) {
        finalString += substr;
    }
    return finalString
};

// Do not edit below this line
module.exports = repeatString;
