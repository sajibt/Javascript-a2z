// function sayName(name) {
//     console.log(`My name is ${name}`)
// }
// sayName("wom ")
// sayName("sajib") // value is this keyword is how a function called like this . 

/* How to determine this keyword ? 
1.Implicit binding
2.Explicit binding
3.New binding: 
4.Default binding
*/
const person = {
    name: 'sajib',
    sayName: function () {
        console.log(`My name is ${this.name}`)
    },
} // implicit binding use . notation to refer the left site object name. 
// person.sayName()

globalThis.name = "default binding test "

function sayName() {
    console.log(`i am ${this.name}`)
}
// sayName.call(person); // explicit binding use call method 

function Person(name) {
    this.name = name
}
const p1 = new Person('sajib')
const p2 = new Person("wom")
console.log(p1.name, p2.name) // new binding as a constructor 

sayName()

function Person(fName, lName) {
    this.firstname = fName
    this.lastname = lName
}

const person1 = new Person('Bruce', 'Wayne')
const person2 = new Person("Clark", "kent")

// person1.getFullName = function () {
//     return this.firstname + ' ' + this.lastname
// }
// console.log(person1.getFullName()) //output bruce Mayne
// console.log(person2.getFullName()) //output Error
Person.prototype.getFullName = function () {
    return this.firstname + ' ' + this.lastname
}
console.log(person1.getFullName()) //output bruce Mayne
console.log(person2.getFullName()) //output Clark kent