this.a = 5;

const getParam = () => {
    console.log(this)
}

getParam();

let user = {
  name: "Ritik",
  age: 34,

  getDetails() {
    const nestedArrowFunc = () => console.log(this.name);
    nestedArrowFunc();
  },
    childObj: {
      newName: "Rohit",
      getDetails() {
        console.log(this.newName,"and", this.name);
      },
    },
};

user.getDetails();

this keyword in Class

class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

const user1 = new User("Ritik");
user1.getName();

// *************************Interview Questions*************************
// Question==>1 [Guess the output]
const user = {
  firstName: "Ritik",
  getName() {
    const firstName = "Ritika";
    return this.firstName;
  },
};
console.log(user.getName());

// Question===>2
function makeUser(){
    return{
        name:"John",
        ref(){
            return this;
        },
    }
}

let user = makeUser();
console.log(user.ref().name)

// Question ==> 3
const user = {
  name: "Ritik Pathak",
  logMessage() {
    console.log(this.name);
  },
};

setTimeout(function () {
  user.logMessage();
}, 1000);

// Question===> 4
const user = {
  name: "Ritik",
  greet() {
    return `Hello, ${this.name}`;
  },
  farewell: () => {
    return `GoodBye + ${this.name}`;
  },
};

console.log(user.greet());
console.log(user.farewell());

// Question===>5
// Create Object Calculator

let calculator = {
   read(){
    this.a = +prompt("a = ",0);
    this.b = +prompt("b = ",0);
   },
   sum(){
    return this.a + this.b
   },
   mul(){
    return this.a * this.b;
   }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul())

// Question===>6

var length = 4;
function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method() {
    console.log(arguments)
    arguments[0]();
  },
};

object.method(callback, 2, 3);

// Question==>7
const calc = {
  total: 0,
  add(a) {
    this.total = this.total + a;
    return this;
  },
  multiply(a) {
    this.total = this.total * a;
    return this;
  },
  substract(a) {
    this.total = this.total - a;
    return this;
  },
};

const result = calc.add(10).multiply(5).substract(30).add(10);
console.log(result.total);
