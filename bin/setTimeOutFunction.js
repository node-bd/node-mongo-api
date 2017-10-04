console.log(__dirname);
console.log(__filename)


setTimeout(function () {

    console.log("3 Second have passed");

}, 4000);

var time = 0;

var timer = setInterval(function () {
    time += 2;

    console.log("2 Second passed");

    if (time > 5) {
        clearInterval(timer);
    }
}, 2000)

