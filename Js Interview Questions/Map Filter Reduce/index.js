// Map Filter Reduce

// Map
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10];

const multiplyThree = nums.map((num, i, arr) => {
  return num * 3 + i;
});

// console.log(multiplyThree)

// Filter
const moreThanTwo = nums.filter((num, i) => {
  return num < 2;
});

console.log(moreThanTwo)

// Reduce
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, curr, i, a) => {
  return acc + curr;
}, 0);

console.log(sum)

Array.map((num,i,arr) => {})

// Prototype
Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i=0; i<this.length; i++){
        temp.push(cb(this[i],i,this))
    }

    return temp;
}

const names = ["Ritik","Rahul","Rohit","Harshit"];

const values = names.myMap((v,i) => {
    return(
        console.log(v)
    )
})

// Prototype Filter
Array.prototype.myFilter = function(cb){
    let temp = [];

    for (let i = 0; i < this.length; i++) {
          if(cb(this[i],i,this)) temp.push(this[i]);
    }

    return temp;
}

const city = ["Delhi","Ranchi","Jharkhand"];

const filterCity = city.myFilter((c,i) => {
    return c !== "Ranchi"
})

console.log(filterCity)

Array.prototype.myReduce = function (cb, initialVal) {
  var accumulator = initialVal;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const arr = [1, 2, 3, 4, 5];
const sum = arr.myReduce((acc, curr, i, a) => {
  return acc + curr;
}, 0);

console.log(sum)

// Different bewtween Map And For Each

const arr = [1, 2, 3, 4, 5];

const sum = arr.map((a, i) => {
  return a + 2;
});

const fourSum = arr.forEach((ar, i) => {
  arr[i] = ar + 2;
});

console.log(sum);
console.log(fourSum,arr);

// Interview Questions
let students = [
  { name: "Ritik", rollNumber: 22, marks: 80 },
  { name: "Rahul", rollNumber: 26, marks: 40 },
  { name: "Kartik", rollNumber: 12, marks: 22 },
  { name: "Shyaam", rollNumber: 37, marks: 53 },
];

const names = students.map((stu, i) => stu.name.toUpperCase());

const marks = students.filter((stu, i) => stu.marks > 60);

const details = students.filter((s, i) => s.rollNumber > 15 && s.marks > 60);

const totalMarks = students.reduce((acc, curr, i) => {
  return acc + curr.marks;
}, 0);

// console.log(names);
console.log(marks);
console.log(details);
console.log(totalMarks);


// Return the names of the students who score more than 60

const goodStudents = students.filter((st,i) => st.marks > 60).map((st) => st.name);

const totalMarksAfterAddition = students.map((st) => {
    if(st.marks < 60){
        st.marks += 20;
    }

    return st;
}).filter((st) => st.marks > 60).reduce((acc,curr) => acc + curr.marks,0)

console.log(goodStudents)

console.log(totalMarksAfterAddition)