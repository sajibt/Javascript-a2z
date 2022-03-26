// let
// Block scope
// Variables declared using the let keyword are block-scoped, which means that they are available only in the block in which they were declared.

// At the top level (outside of a function)
// At the top level, variables declared using let don't create properties on the global object.

// var globalVariable = 42;
// let blockScopedVariable = 43;

// console.log(globalVariable); // 42
// console.log(blockScopedVariable); // 43

// console.log(this.globalVariable); // 42
// console.log(this.blockScopedVariable); // undefined
// Inside a function
// Inside a function (but outside of a block), let has the same scope as var.

// (() => {
//   var functionScopedVariable = 42;
//   let blockScopedVariable = 43;

//   console.log(functionScopedVariable); // 42
//   console.log(blockScopedVariable); // 43
// })();

// console.log(functionScopedVariable); // ReferenceError: functionScopedVariable is not defined
// console.log(blockScopedVariable); // ReferenceError: blockScopedVariable is not defined
// Inside a block
// Variables declared using let inside a block can't be accessed outside that block.

// {
//   var globalVariable = 42;
//   let blockScopedVariable = 43;
//   console.log(globalVariable); // 42
//   console.log(blockScopedVariable); // 43
// }

// console.log(globalVariable); // 42
// console.log(blockScopedVariable); // ReferenceError: blockScopedVariable is not defined
// Inside a loop
// Variables declared with let in loops can be referenced only inside that loop.

// for (var i = 0; i < 3; i++) {
//   var j = i * 2;
// }
// console.log(i); // 3
// console.log(j); // 4

// for (let k = 0; k < 3; k++) {
//   let l = k * 2;
// }
// console.log(typeof k); // undefined
// console.log(typeof l); // undefined
// // Trying to do console.log(k) or console.log(l) here would throw a ReferenceError.
// Loops with closures
// If you use let instead of var in a loop, with each iteration you get a new variable. That means that you can safely use a closure inside a loop.

// // Logs 3 thrice, not what we meant.
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// // Logs 0, 1 and 2, as expected.
// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log(j), 0);
// }
// Temporal dead zone
// Because of the temporal dead zone, variables declared using let can't be accessed before they are declared. Attempting to do so throws an error.

// console.log(noTDZ); // undefined
// var noTDZ = 43;
// console.log(hasTDZ); // ReferenceError: hasTDZ is not defined
// let hasTDZ = 42;
// No re-declaring
// You can't declare the same variable multiple times using let. You also can't declare a variable using let with the same identifier as another variable which was declared using var.

// var a;
// var a; // Works fine.

// let b;
// let b; // SyntaxError: Identifier 'b' has already been declared

// var c;
// let c; // SyntaxError: Identifier 'c' has already been declared
// const
// const is quite similar to let—it's block-scoped and has TDZ. There are, however, two things which are different.

// No re-assigning
// Variable declared using const can't be re-assigned.

// const a = 42;
// a = 43; // TypeError: Assignment to constant variable.
// Note that it doesn't mean that the value is immutable. Its properties still can be changed.

// const obj = {};
// obj.a = 42;
// console.log(obj.a); // 42
// If you want to have an immutable object, you should use Object.freeze().

// const obj = Object.freeze({a: 40});
// obj.a = 42;
// console.log(obj.a); // 40
// console.log(obj.b); // undefined
// Initializer is required
// You always must specify a value when declaring a variable using const.

// const a; // SyntaxError: Missing initializer in const declaration