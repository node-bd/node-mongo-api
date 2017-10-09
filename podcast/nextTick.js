
console.log('Before : ' + new Date().getSeconds());

process.nextTick(function () {
    console.log('tick 1');
    console.log(new Date().getSeconds());
});

console.log('After: ' + new Date().getSeconds());

process.nextTick(function () {
    console.log('tick 2');
    console.log(new Date().getSeconds());
});