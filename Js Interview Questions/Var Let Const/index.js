// Hoisting

function abc() {
  console.log(a, b, c);
  const c = 30;
  let b = 20;
  var a = 10;
}

abc();
