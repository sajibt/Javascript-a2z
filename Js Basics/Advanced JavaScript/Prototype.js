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

// function User(email, name) {
//     this.email = email;
//     this.name = name;
//     this.online = false;
//   }

//   User.prototype.login = function () {
//     this.online = true;
//     console.log(`${this.email} has logged in.`);
//   };
//   User.prototype.logout = function () {
//     this.online = false;
//     console.log(`${this.email} has logged out.`);
//   };

//   function Admin(...args) {
//     // We don't inherit function with apply. we only inherit properties
//     User.apply(this, args);
//     this.role = "super admin";
//   }

//   // Prototype Inheritance
//   // Admin's Proto points to User's prototype
//   Admin.prototype = Object.create(User.prototype);
//   Admin.prototype.deleteUser = function () {
//     console.log(`User has been deleted!`);
//   };

//   // TEST
//   let userOne = new User("andy@n.com", "Andy");
//   let userTwo = new User("james@n.com", "James");

//   let admin = new Admin("admin@n.com", "Admin");

//   console.log(userOne);
//   userTwo.login();
//   console.log(userTwo);

//   admin.login();
//   console.log(admin);




// 3 way to create js object 
//   const tiger = {
//     name: 'tiger'
//   }; 
//   const Cat = function (name) {
//     this.name = name;
//   }
//   const cat = new Cat('cat'); //Cat is the function name and cat is a constructor 
// console.log(cat.constructor === Cat); //true
// console.log(cat.hasOwnProperty('constructor')); //fasle
// console.log(Cat.prototype);
// console.log(Cat.prototype.constructor === Cat); // true
// console.log(cat.__proto__ === Cat.prototype); //true
//   const ek = Object.create(Object.prototype, { name: {value: 'ek'}}); // Object.create(proto[, propertiesObject])

//   const Person = function (name) {
//     this.name = name;
//   }

//   Person.prototype.hello = function () {
//     console.log(`Hello! I'm ${this.name}!`);
//   }

//   const sajib = new Person('Sajib');
//   sajib.hello();

//   const Master = function (name, subject) {
//     Person.call(this, name);
//     this.subject = subject;
//   }

//   Master.prototype = Object.create(Person.prototype);
//   Master.prototype.hello = function () {
//     console.log(`Hello! I'm ${this.subject} master ${this.name}`);
//   }

//   const master = new Master('NIce to see you!', 'frontend');
//   master.hello();


/* jshint esnext: true */
// Nullish Coalescing Operator
// operando1 ?? operando2
// operando1 || operando2

// var Car = function (maxSpeed) {
//     this.maxSpeed = maxSpeed
// };

// Car.prototype.setMaxSpeed = function (newSpeed) {
//     this.maxSpeed = newSpeed;
// };

// Car.prototype.getSpeed = function () {
//     console.log("Car class initilized and speed is " + this.maxSpeed)
// };

// var renault = new Car(200);
// renault.setMaxSpeed(150);
// renault.getSpeed();

var parentController = {
    number: 1,
    objects: [1, 2, 3]
};

var myController = {
};

var sideMenuController = {
};
//sideMenuController has the prototype parentController
//myController has the prototype parentController
sideMenuController.__proto__ = parentController;
myController.__proto__ = parentController;

// console.log(myController.objects);//1, 2, 3
// console.log(sideMenuController.objects);//1, 2, 3
// console.log(parentController.objects);//1, 2, 3

myController.objects.push(4);

// console.log(myController.objects);//1, 2, 3, 4
// console.log(sideMenuController.objects);//1, 2, 3, 4
// console.log(parentController.objects);//1, 2, 3, 4

//If we replace the property, it's available only locally
myController.objects = [5, 6, 7];

// console.log(myController.objects);//5,6,7
// console.log(sideMenuController.objects);//1, 2, 3, 4
// console.log(parentController.objects);//1, 2, 3, 4


// Value are only shared in reading, after setting they are creating locally
// console.log(sideMenuController.number);//1
// console.log(myController.number);//1
// console.log(parentController.number);//1

sideMenuController.number = 2;

// console.log(sideMenuController.number);//2
// console.log(myController.number);//1
// console.log(parentController.number);//1

parentController.number = 3;

// Property is created locally, object doesn't lookup to is prototype
// console.log(sideMenuController.number);//2
// console.log(myController.number);//3
// console.log(parentController.number);//3

//In a nutshell, object looks in himself for property, if it doesn't find the property it looks in his prototype. 
//When modifying object(hash, array) accessed by a prototype the content is not created in the object, it's modify within a prototype


// var Myno = {
//     name: "sajib",
//     number: [1, 2, 3, 4]
// }

// function mysecno(){

// }

// var mylast = {

// }
// mysecno.__proto__ = Myno

// function Myconstractor(){}
// var myobj = new Myconstractor();
// myobj.constractor == Myconstractor;

// function Myconstractor2(){}
// Myconstractor2.prototype = {};
// var myobj2 = new Myconstractor2();
// myobj2.constractor == Myconstractor2;


//MDN 
// Prototypes  are hee mechanism by which JavaScript objects inherit features from one another. 
const myObject = {
    city: 'Madrid',
    greet() {
        console.log(`Greetings from ${this.city}`);
    }
}

// myObject.greet(); // Greetings from Madrid
Object.getPrototypeOf(myObject);
// Every object in JavaScript has a built-in property, which is called its
//  prototype. The prototype is itself an object, so the prototype will have its
//   own prototype, making what's called a prototype chain. The chain ends when we
//   reach a prototype that has null for its own prototype.

// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);
// Date.prototype
// Object {...}
// null
// const personPrototype = {
//     greet() {
//         console.log(`hello, my name is ${this.name}!`);
//     }
// }

// function Person(name) {
//     this.name = name;
// }

// function empt(sajib) {
//     this.name = sajib;

// }// every function have prototype object which had own constructor  

// function empt1(){

// }

// Person.prototype = personPrototype;

// Person.prototype.constructor = Person;

// // empt.prototype = personPrototype
// // empt.prototype.constructor = empt;
// const reuben = new Person('Reuben');
// reuben.greet(); // hello, my name is Reuben!

// const reuben2 = new empt('sajib');
// // reuben2.greet(); // hello, my name is Reuben!

// var Pen = {
//     penIdentify() {
//         console.log(` this pen Color is ${this.name}`)
//     }

// }
// function penColor(name) {
//     this.name = name;

// }
// penColor.prototype = Pen


// const myPen = new penColor("Red")
// myPen.penIdentify()
// let myPen2 = new penColor("Blue")
// myPen2.penIdentify()

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

// }
// Person.prototype.geName = function () {
//     return this.name
// }
// Person.prototype.getAge = function () {
//     return this.age
// }
// Person.prototype.Ename = function () {
//     console.log(`this person name is ${this.name}. and ${this.age}`)
// }

// let person = new Person("sajib",28)
// person.Ename()
// person.geName(console.log("sajib"))

//Via prototype property 
// let Linkedin = function (FirstName, SurName, DOB, Profession) {
//     this.FirstName = FirstName;
//     this.SurName = SurName;
//     this.DOB = DOB;
//     this.Profession = Profession;
// }

// //Attaching method to above constructor via prototype property
// Linkedin.prototype.MyDetails = function () {
//     var today = new Date();
//     var year = today.getFullYear();
//     var age = year - this.DOB;
//     console.log(`My name is ${this.FirstName} ${this.SurName}.I am ${age} years old.Still looking for a ${this.Profession} Job.! Thank you. `);

// }

// //Creating new object via above ctor

// const womsajib = new Linkedin('Sajib', 'Talukder', '1994', 'Full stack JavaScript Developer');

// womsajib.MyDetails();

//Protoypes Explained

//Object.prototype
//Person.prototype
//Person Constructor 
//Person Constructor 
// function Person(firstName, lastName, dob){
//     this.firstName = firstName; 
//     this.lastName = lastName;
//     this.birthday = new Date(dob); 
//     // this.calculateAge = function(){
//     //   const diff = Date.now() - this.birthday.getTime();
//     //   const ageDate =  new Date(diff);
//     //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // }
//   }

//   const john = new Person('John', 'Doe', '8-12-90');
//   const mary = new Person('Mary', 'Johnson', 'March 20 1978');

//   //Calculate age
//   Person.prototype.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate =  new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   //Get full name
//   Person.prototype.getFullName= function(){
//     return `${this.firstName} ${this.lastName}` ;
//   }

//   //Gets married
//   Person.prototype.getsMarried = function(newLastName){
//     this.lastName = newLastName;
//   }


//   console.log(mary);
//   console.log(john.calculateAge());
//   console.log(mary.getFullName());

//   mary.getsMarried('Smith');
//   console.log(mary.getFullName());

//   console.log(mary.hasOwnProperty('firstName'));
//   console.log(mary.hasOwnProperty('getFullName'));
const personprototype = {
    eat() {
        console.log(` My name is ${this.name}.i am   ${this.age}`)
    },
    walk() {
        console.log(` Person is eating`)
    },
    sleep() {
        console.log(` Person is eating`)
    }
}

function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype = personprototype
let person = new Person("sajib", 28)
//person.eat()
