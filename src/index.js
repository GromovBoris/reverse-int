module.exports = function reverse(n) {
    let answer = Math.abs(n);
    answer = answer.toString().split("").reverse().join("");
    // answer = Math.abs(answer);
    // console.log(answer);
    return answer;
};

// reverse(-1234);
