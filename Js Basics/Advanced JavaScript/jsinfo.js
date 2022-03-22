/* 1.Variables  
 we can declare js variables  in 3 ways. 
let: let has block scope. you can't access let outside the block . If we declare the same variable with let twice in the same scope, that’s an error: 
const: final variable . it can't be changed. 
var: var has no block scope so don't use var inside a function scope. var ignore code blocks. With var, we can redeclare a variable any number of times


*/
let user;
// let user; SyntaxError: Identifier 'user' has already been declared

let message;
message = "say hello"
message = message + ' World!'; // value changed
console.log(message)

function checklet() {
    if (true) {
        let test = true; // use "let"
    }
}
// console.log(test);

function sayHi() {
    if (true) {
        var phrase = "Hello";
    }
    console.log(phrase); // var can use insider function
}
sayHi();
// console.log(phrase); // ReferenceError: phrase is not define
// Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(color); // #FF7F00
// let – is a modern variable declaration.
// var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
// const – is like let, but the value of the variable can’t be changed.

// 2. Data types
// Number:The number type represents both integer and floating point numbers.

let n = 143
n = 100.669
console.log(n) //number 
let infinity = 1 / 0
console.log(infinity)

console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log("not a number" / 2 - 1); // NaN

// BigInt: In JavaScript, the “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. It’s a technical limitation caused by their internal representation.
// the "n" at the end means it's a BigInt data types
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt)


// String: A string in JavaScript must be surrounded by quotes.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
console.log(phrase)
// In JavaScript, there are 3 types of quotes.

// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.
// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

let name = "John";

// embed a variable
console.log(`Hello, ${name}!`); // Hello, John!

// embed an expression
console.log(`the result is ${1 + 2}`); // the result is 3
console.log("the result is ${1 + 2}"); // the result is ${1 + 2} (double quotes do nothing)