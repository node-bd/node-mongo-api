var count = function (arr) {
    return 'There are ' + arr.length + ' elements';
};

var adder = function (a, b) {
    return 'Sum of two variable ' + (a + b);
};

var pi = 3.14;

module.exports = {
    count: count,
    adder: adder,
    pi: pi
};