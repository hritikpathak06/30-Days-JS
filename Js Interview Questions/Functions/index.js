// ***************************Function Expression ********************
const square = function(num){
    return num*num
}
console.log(square(5));

// ********************************First Class Function********************************
function sqaure(num){
    return num*num
}

function displaySquare(fn){
    console.log("Sqaure is: " + fn(5))
}

displaySquare();

// **************************************IIFE**************************************
(function sqaure(num){
    console.log(num*num)
})(6)

// ******************************Interview -- IIFE******************************
(function (x) {
  return (function (y) {
    console.log(x);
    console.log(y);
  })(2);
})(1);

// ********************************Interview == Question********************************
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

func1();

console.log(x);

function func1() {
  console.log("Ritik Pathak");
}

var x = 20;

// *****************************Tricky Question*****************************

var x = 21;

var func = function () {
  console.log(x);
  var x = 20;
};

func();

// ********************************Params Vs Arguments********************************

function square(nums){ //Params
    console.log(nums*2);
}

square(10) //arguments

// *********************************Spread Vs rest Operator*********************************
function multiply(num1, num2) {
  console.log(num1 * num2);
}
let arr = [5, 6];
multiply(...arr);

// ***************************************Tricky Questions***************************************
const fn = (a, x, y, ...numbers) => {
  console.log(numbers);
};

fn(5, 6, 7, 8, 9, 10, 12, 345);

// **************************Callback Function**************************


// ***************************************Arrow Functions***************************************

const Hero = (...name) => {
  for (let i = 0; i < name.length; i++) {
    console.log("Namaste : ", name[i]);
  };
};

let names = ["Rahul", "Ritik", "Kartik", "Rohit"];

Hero(...names);
