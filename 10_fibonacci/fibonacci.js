const fibonacci = function(n) {
    if (n == 1 || n == 2) {
        return 1
    } else if (n == 0) {
        return 0
    } else if (n < 0) {
        return "OOPS"
    }

    let prev = 1;
    let nxt = 1;
    let ans;
    for (let i = 3; i <= n; i++) {
        ans = prev + nxt;
        prev = nxt;
        nxt = ans;
    }
    return ans
};

// Do not edit below this line
module.exports = fibonacci;
