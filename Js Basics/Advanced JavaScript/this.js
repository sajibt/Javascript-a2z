// `this` is possibly one of the most confusing parts of JavaScript and one that can be modified the most. ES6 also provides ways to handle it, but I'll skip those for now

// So what is "this?" this represents the current execution context and can be very important for debugging and understanding behavior. To follow along, just go to about:blank in chrome and open the dev tools. It'll give you a clean slate to work with:

function testThis() {
    console.log(this)
}

testThis() // This will log out the "window" object, which is the topmost context in a browser, which should make sense. For the most part, any function that doesn't have a `.` preceding it is going to have "window" as the `this` context (I'll explain how to change it later on)

function nestedFns() {
    console.log(this)
    function second() {
        console.log(this)
        function third() {
            console.log(this)
        }
        third()
    }
    second()
}

nestedFns() // Think about what you'll see when executing this

// If you guessed "window" in all cases, you're correct. All functions are called with simply <function-name> so they all adopt the window context

// Now we'll see where it changes. If I define a function on an object, `this` becomes the object itself UNLESS we change how the function is called (shown below)

var someObject = {
    a: 4,
    b: function () {
        console.log(this)
    }
}
console.log(someObject) // this === sumObject . this always refer to a object 
someObject.b() // Think about what this'll log.

// If you said the `someObject` object, you're correct...since we are calling b THROUGH someObject. This can get tricky, though. In JavaScript, functions are just values and we can dereference them when they hang off objects, which can have unpredictable behavior:

var b = someObject.b // Notice I'm not calling b, just getting a reference to it
b() // This now logs window again! It's because JS no longer knows that b was hanging off someObject so it gives it the global context (window)

//   var b = sumobject.b // it is just a refer and this b don;t know which has a parent
// b()
// var b = sumobject.b.bind(sumobject) // we nee dto bind the parent obj so that it can access previous value 
// b()
// There are 3 ways in JS to change the context. Why you'd wanna do this varies, but it has practical consequences. The simplest is to bind the context intentionally:

// Again using the someObject.b method, we can do this:
var b = someObject.b.bind(someObject) // Now we are dereferencing b, but we are telling JS to keep it bound to the parent object, someObject

b() // now we log out someObject, as we want

// Sometimes, we want the behavior of one object's method to work on a different object but don't want to duplicate all the code. Consider, for example, a generic "HasName" object that describes anything that has a name:

var HasName = {
    printName: function () {
        console.log(this.name)
    }
}

// Now, let's say we have a dog and person object, each having a name property:

var person = {
    name: 'Sunny'
}

var dog = {
    name: 'Fido'
}

// Neither of those simple objects has a "printName" method, so we could either give each one the method and duplicate the code, or create new functions using that "bind" method:

var printPersonName = HasName.printName.bind(person)
var printDogName = HasName.printName.bind(dog)

printPersonName() // Prints 'Sunny'
printDogName() // Prints 'Fido'

// Now that's a bit contrived and you'd likely not write code like that, but JS provides other ways if you temporarily want to modify the context, and this is more likely what you'll use. The method is "call" and it behaves exactly like bind, but whereas bind returns a new function that can be executed later, "call" calls the method now with any supplied context:

HasName.printName.call(person) // Immediately logs "Sunny"
HasName.printName.call(dog) // Immediately logs "Fido"

// So depending on the use case, there are ways to change the context in useful ways. One of the most useful is this. In JS, all object descendants (arrays, dates, custom objects, etc) always do this:

console.log(typeof [1, 2, 3]) // logs out object...useless information since we presumably want to know that it's an array. Well, Arrays have a built-in toString method, but that joins the array elements...doesn't tell us what the type is:

console.log([1, 2, 3].toString()) // 1,2,3...probably what we want in this case, so we don't want to override it. So how can we instead decide if a variable or object is actually an array? Well, we can use the Object prototype's toString method and "call" it on the variable or object:

var arr = [1, 2, 3]
console.log(Object.prototype.toString.call(arr)) // prints [object Array]

  // Hope this helps a bit with `this` and shows how you can use the bind or call methods to change contexts. There's another method, `apply`, that allows you to change the context, but it does some other stuff too so I'll skip it for this gist.