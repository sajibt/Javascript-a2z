// let a = 10;

// function outer() {
//     let b = 20;
//     function inner() {
//         let c = 30;
//         console.log(a, b, c)
//     }
//     inner() // nested function always looks for inner to outer to global scope. it has access to the all js scope. 
// }
// outer()

// function outside() {
//     let i = 0;
//     function inside() {
//         i++
//         console.log(i)
//     }
//     inside() // we are returning inner function from the outer function 
// }
// outside()
// outside() //Output 1 and 1 . 

function outer() {
    let counter = 0;
    function inner() {
        counter++
        console.log(counter)
    }
    return inner /*function inside a function is called a nested function.
    closures is created when a function return from an another function */
}
const fn = outer() 
fn();
fn();// output is 1 and 2 

