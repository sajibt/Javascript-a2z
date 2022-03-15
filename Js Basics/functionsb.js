function square(number) {
    return number * number;
}
function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}

function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}
const f = function (x) {
    return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);