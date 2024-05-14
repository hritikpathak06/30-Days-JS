// Debouncing And Throtling in Javascript
// Question==>1 Create a button UI and add debounce as follows
// ---> Show "Button Pressed <Y> Times" every time button is pressed
//  ---> Increase "Triggered <Y> Times" count after 800ms of debounce

const btn = document.querySelector(".incremnt_btn");
const btnPress = document.querySelector(".incremnt_pressed");
const count = document.querySelector(".increment_count");

let pressedCount = 0;
let triggeredCount = 0;

// Debounce Function Using Loadash
const debounecCount = _.debounce(() => {
  count.innerHTML = ++triggeredCount;
}, 800);

// // Throttled Function Using Loadash
const throttledCount = _.throttle(() => {
  count.innerHTML = ++triggeredCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  //   debounecCount();
  throttledCount();
});

// Question -> 2 Create Debounce PolyFill Implemntation

const myDebounce = (cb, d) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const debounceCount = myDebounce(() => {
  triggeredCount += 1;
  count.innerHTML = triggeredCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debounceCount();
});

// Question==>3 Implement Throttle Plyfills

const myThrottledPoltFills = (cb, d) => {
  let last = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

const throttledCount = myThrottledPoltFills(() => {
  triggeredCount += 1;
  count.innerHTML = triggeredCount;
}, 800);

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttledCount();
});
