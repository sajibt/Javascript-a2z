//Prototype and Prototypal Inheritance is One object trying to access method and properties of other other objects
let arr = ["leo", "justin"]; // arr.__proto__ has the access of all array method.Each and every object in javascript has prototype
// arr.__proto__.__proto__ is actually is object.__prototype__ same 
// arr.__proto__.__proto__.__proto__ = null is called prototype chain in case of  object.__prototype__.__prototype__ = null 
// function/arr.__proto__ is nothing but Function.prototype/Array.prototype

let object = {
    name: "Thor",
    age: "1500 yr",
    city: "New Asgard",
    getIntro: function () {
        console.log("My name is " + this.name + ". My age is " + this.age + " I live in " + this.city)
    } // object person access to the all object property via prototype . 

}

function demo() {
    //
}

let object2 = {
    name: " Jinbe"

}
// object2 is Inheriting the properties of object like arr.push arr.map etc 
object2.__proto__ = object // now object2 has the  properties  and method it's called the Prototype and Prototypal Inheritance  