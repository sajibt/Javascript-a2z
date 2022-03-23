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
Function.prototype.makeBind = function () {
    console.log(" this is prototype inheritance. you can acces it from any function. ")
}
function fun() {
    // fun.__proto__ has the access  of makeBind Methods  all properties like fun.makeBind()
}

// A constructor makes an object linked to its own prototype not based on or copy
//line zero have a .prototype property like .tostring .map .filter and an object and a return .constructor
function Foo(who) { // when function created there is also an object created that tiger the .prototype 
    this.me = who;
}
Foo.prototype.identify = function () {
    return "I am " + this.me;
}
Foo.prototype.check1 = "check one";
var a1 = new Foo("a1");
var a2 = new Foo("a2");
a2.speak = function () {
    console.log("hello " + this.identify() + ".")
}

// 5 things happened when we use new keyword
/* 
1.It creates a new object. The type of this object is simply object.
2.It sets this new object's internal, inaccessible, [[prototype]] (i.e. __proto__) property
 to be the constructor function's external, accessible, prototype object (every function object
automatically has a prototype property).
3.It makes the this variable point to the newly created object.
4.It executes the constructor function, using the newly created object whenever this is mentioned.
5.It returns the newly created object, unless the constructor function returns a non-null object reference. 
In this case, that object reference is returned instead. */
ObjMaker = function () { this.a = 'first'; };
// ObjMaker is just a function, there's nothing special about it that makes 
// it a constructor.
ObjMaker.prototype.b = 'second';
// like all functions, ObjMaker has an accessible prototype property that 
// we can alter. I just added a property called 'b' to it. Like 
// all objects, ObjMaker also has an inaccessible [[prototype]] property
// that we can't do anything with

// function Car(Color, Engine) {
//     this.Color = Color;
//     this.Engine = Engine;

// }
// Car.prototype.new = function () {
//     return "The Car color is " + this.Color;

// }
// var c1 = new Car("Red", "My Engine")


// c1.verifyColor = function () {
//     console.log("hello " + this.new() + ".")
// }

function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
  }
  
  User.prototype.login = function () {
    this.online = true;
    console.log(`${this.email} has logged in.`);
  };
  User.prototype.logout = function () {
    this.online = false;
    console.log(`${this.email} has logged out.`);
  };
  
  function Admin(...args) {
    // We don't inherit function with apply. we only inherit properties
    User.apply(this, args);
    this.role = "super admin";
  }
  
  // Prototype Inheritance
  // Admin's Proto points to User's prototype
  Admin.prototype = Object.create(User.prototype);
  Admin.prototype.deleteUser = function () {
    console.log(`User has been deleted!`);
  };
  
  // TEST
  let userOne = new User("andy@n.com", "Andy");
  let userTwo = new User("james@n.com", "James");
  
  let admin = new Admin("admin@n.com", "Admin");
  
  console.log(userOne);
  userTwo.login();
  console.log(userTwo);
  
  admin.login();
  console.log(admin);


