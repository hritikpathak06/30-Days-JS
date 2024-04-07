// ***************************************Currying in js***************************************
function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

// console.log(f(5)(7));

function sum(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}
// sum(1)(2)(6);

// ************************************Interview Questions************************************
// evaluate("sum")(4)(2) => 6
// evaluate("substract")(4)(2) => 6
// evaluate("multiply")(4)(2) => 6
// evaluate("divide")(4)(2) => 6

function arithmetic(opeartor) {
  return function (a) {
    return function (b) {
      if (opeartor === "sum") return a + b;
      else if (opeartor === "substract") return a - b;
      else if (opeartor === "multiply") return a * b;
      else if (opeartor === "divide") return a / b;
      else return "Invalid Operator";
    };
  };
}
const s = arithmetic("sums");
// console.log(s(3)(5))
// *************************************************************************************

// **************************************Infinite Currying**************************************
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

// console.log(add(5)(6)(8)());

// ***************************Currying and Partial Application***************************
function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

// console.log(sum(10)(4,5));

// *************************Use Currying to manipulate the dom*************************

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}
const updateHeading = updateElementText("heading");

// updateHeading("Hello hritik Subscribe My Channel");


function curry(func){
    return curriedFunc(...args){
        
    }
}