// //for loop explained 

// //for(initialExpression; condition[ Boolean this loop will run as long as condition is true]; increment Expression){

// // statement }

// for(let i = 1; i<6; i++){
//       console.log("hello world", i)

// }

// // for(let i = 1; i<6; i++){
// //     debugger 

// // }


// for(let i = 1; i<=5; i++){
//   if(i%2 !==0)  console.log(i) //odd number

// }

// for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0) console.log(i) //odd number

// }
// function foo(){
//     var i = 10; 
//     if(i>=0){
//         var x = 20;
//         console.log(i)
//         console.log(x)
//     }
//     console.log(i)
//     console.log(x)
// }
// foo()

function tenSquare1() {
    return 10 * 10
}
tenSquare1()
console.log(tenSquare1())


function nineSquare() {
    return 9 * 9
}
nineSquare()
console.log(nineSquare())

function tenSquare(num) {
    return num * num
}
const mynum = 10
const mynum2 = 2
console.log(tenSquare(mynum))
console.log(tenSquare(mynum2))

// function showMessage() {
//     console.log('Hello everyone!');
// }

// showMessage();
// showMessage();


//  multiplication array with function 
function doublekarry(array) {
    const output = []
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] * 2)
    }
    return output
}
const myerr = [1, 2, 3]
console.log(myerr)
const result = doublekarry(myerr)
console.log(result)


//division array with function 
function divededArray(array) {
    const output = []
    for (let i = 0; i < array.length; i++) {
        output.push(array[i] / 2)
    }
    return output
}
const myerr2 = [1, 2, 3]
const result2 = divededArray(myerr2)
console.log(result2)

//copyArray manupulated 

// function as a parameter called higher order function . 

// inctraction block is just the main working blog . input is (array[1])

function copyArrayManipulate(array, instructions){ //the outer function that take in/out a function is called higher order function 
    const output = []
    for (let i = 0; i<array.length; i++){
        output.push(instructions(array[i])) // array value through throw into instruction like ins(2). instruction in multyplyby2(2)
    }
    return output
}
// instruction(3) => multiBy2(3)
function multiBy2(input){ // this is  a callback function cz we called it from higher order function .
    return input*2
   
}
function DivisionBy2(input){ //the function we insert is called callback functions 
    return input/2
   
}
const aresult = copyArrayManipulate([1,2,3],multiBy2)
const aresult2 = copyArrayManipulate([1,2,3],DivisionBy2)
console.log(aresult)
console.log(aresult2)
// javascript function are first class objects .First class means everything objects have they have too. 
// when functions stored to properties of other objects is called method .









