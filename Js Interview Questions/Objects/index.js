// Objects

// const user = {
//   name:"Ritik",
//   rollNo:128211081,
//   age:20
// }
// user.name = "rahul"
// delete user.age

// console.log(user)

// ***************************Intevriew Questions***************************
// const func = (function (a) {
//   delete a;
//   return a;
// })(5);

// console.log(func);

// const property = "firstname";
// const username = "Ritik"

// const user = {
//   name:"Ritik",
//   rollNo:128211081,
//   age:20,
//   "like the video":true,
//   [property]:username
// }
// delete user["like the video"]

// console.log(user)

// const user = {
//   name:"Ritik",
//   rollNo:128211081,
//   age:20,
// }

// for(key in user){
//     console.log(user[key])
// }

// ****************Frequently asked javascript interview questions****************

// Question==1
const obj = {
  a: "One",
  b: "Two",
  a: "Three",
};

// console.log(obj) //a ==> Three

// Question===>2
// create a function multiplyByTwo(obj) that multiplies all the numeric property values of num by2

// let nums = {
//   a: 100,
//   b: 200,
//   title: "Namaste Javascript",
// };

// multiplyBy2(nums);

// function multiplyBy2(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// console.log(nums);

// Question==>3 [IMP]

// const a = {};
// const b = {key:"b"};
// const c = {key:"c"};

// a[b] = 123
// a[c] = 456

// // console.log(a[b]);
// console.log(a)

// Question==>4 (JSON.stringyfy vs JSON.parse)

// const user = {
//     name:"Ritik",
//     age:20
// }

// const strObj = JSON.stringify(user)

// console.log(JSON.parse(strObj))

// Question==>5
// console.log([..."Riitk"])

// Question==> 6
// const user = {name:"Lydia",age:22};
// const admin = {admin:true,...user};

// console.log(user)

// Question==>7
// const settings = {
//     username:"Ritik",
//     level:30,
//     health:15
// }

// const data = JSON.stringify(settings,["level","health"]);

// console.log(data);
// console.log(JSON.parse(data));

// Question==>8

// const shape  = {
//     radius:10,
//     diameter(){
//         return this.radius * 2
//     },
//     perimeter:() => 2*Math.PI * this.radius
// }

// console.log(shape.diameter()) // 20
// console.log(shape.perimeter()) // NAN

// Question==>9 ["What is destructing in objects"]

// let user = {
//     name:"Ritik",
//     age:20,
//     health:50,

//     fullName:{
//         middleName:"Kumar",
//         lastName:"Pathak"
//     }
// }

// const name = "How Are You"

// const {name:myName,age,fullName:{middleName,lastName}} = user

// console.log(myName)
// console.log(age)

// Question ==>10

// function getItems(fruitList,favouriteFruit,...args){
//     return [...fruitList,...args,favouriteFruit]
// }
// console.log(getItems(["apple","banana"],"pear","orange"))

// Question ===> 11 [Object Referencing]
// let c = {greeting:'hey!!'}
// let d;

// d=c;
// c.greeting = "Namste"

// console.log(d.greeting);

// question==>12
// let person = {name:"Lydia"};
// const members = [person];
// person = null;
// console.log(members)

// Question==>14
// const value = {number:10}
// const multiply = (x={...value}) => {
//     console.log((x.number *=2))
// }
// multiply() // 20
// multiply() // 20
// multiply(value) // 20
// multiply(value) //40

// Question==>15
// function chnageAgeAndReference(person) {
//   person.age = 25;
//   person = {
//     name: "John",
//     age: 50,
//   };
//   return person;
// }
// const personObj1 = {
//   name: "Alex",
//   age: 30,
// };
// const personObj2 = chnageAgeAndReference(personObj1);
// console.log(personObj1);
// console.log(personObj2);


// Question ==> 16 ["Shallow Copy vs Deep Copy"]

let user = {
    name:"Ritik Pathak",
    age:20
};

const objClone = Object.assign({},user)

console.log(user)

objClone.age = 50;

console.log(objClone)