
//JavaScript variables can belong to the local or global scope.

//Global variables can be made local (private) with closures.
//Lexical scoping
function init() {
    var name = 'Tesla Modex X'; // name is a local variable created by init
    function CarName() { // CarName() is the inner function, a closure
        console.log("Elon Musk created the " + name) // use variable declared in the parent function
    }
    CarName(); // inner functions CarName() have access to the variables of outer functions.This is called closures
}
init();

function outerFunc() {
    let outerVar = 'I am outside!';
    function innerFunc() {
        console.log(outerVar); // => logs "I am outside!"
    }
    innerFunc();
}
outerFunc();

