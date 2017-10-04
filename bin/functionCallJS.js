function sayHi() {
    console.log("Say Hi");
}

sayHi();

function callFunction(fun) {
    fun();
}

var func = function () {
    console.log('Bye');
};

callFunction(func);