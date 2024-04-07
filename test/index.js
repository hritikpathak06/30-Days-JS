const arr = [4, 6, 78, 10, 13];

// arr.push(15)
Array.prototype.myPush = function (...elements) {
  for (let element of elements) {
    this[this.length] = element;
  }
  return this.length;
};


arr.myPush(35);
console.log(arr);
