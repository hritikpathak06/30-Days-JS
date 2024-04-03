// Lexical Scope

function subscribe() {
  var name = "Ritik Kumar Pathak";
  function displayName() {
    console.log(name);
  }
  displayName();
}

subscribe();

// ***********************************Closures***********************************

var username = "Ritik";

function makeFunc() {
  var name = "Mozilla";
  function displayName(num) {
    console.log(name + " " + num + " " + username);
  }
  return displayName;
}
var myFunc = makeFunc();
myFunc(5);

// *****************************Scope Chaining****************************

var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4));

// ***************************Interview Questions***************************
// Question--> 1
let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count);
    var name = "ritik";
  }
  console.log(count);
  console.log(name)
})();

// Question-->2
function createBase(num) {
  return function (innerNum) {
    console.log(num + innerNum);
  };
}

var addSix = createBase(6);
addSix(10);
addSix(12);

// Question--->3

function find() {
  let a = [];
  for (let i = 0; i < 1000; i++) {
    a[i] = i - 1;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const closure = find();
closure(6);

// Question--->4
for (var i = 0; i < 3; i++) {
  function inner(i) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
  inner(i);
}

// Question--->5[How Would you use closures to make a private counter]
function Counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrive() {
    return "Counter = " + _counter;
  }

  return {
    add,
    retrive,
  };
}

const c = Counter();
c.add(5);
c.add(10);

console.log(c.retrive())

// Question-->6[Modular Pattern]
var Module = (function(){
    function privateMethod(){
        // Todo something
        console.log("private")
    }

    return{
        publicMethod:function(){
          console.log("public")
        }
    }
})()

Module.publicMethod()
Module.privateMethod();

// Question--->7
let view;
function likeTheVideos() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already Subscribed to ritik kumar pathak");
    } else {
      view = "Ritik Kumar Pathak";
      console.log(`Subscribe to: ${view}`);
      called++;
    }
  };
}

const likee = likeTheVideos();
likee();
likee();
likee();

// ***********************Creating a polyfill***********************

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      [(ran = func.apply(context || this, arguments))];
      func = null;
    }
    return ran;
  };
}

const hello = once((a, b) => {
  console.log("hello" + a + b);
});

hello(3, 5);
hello(5, 9);


// *****************************Memoize Polyfills*****************************
