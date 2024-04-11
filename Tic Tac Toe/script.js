let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let winner = document.getElementById("winner");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerHTML = "0";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

function checkWinner() {
  for (let pattern of winPatterns) {
    // console.log(pattern[0],pattern[1],pattern[2])
    // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText)

    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner", pos1);
        winner.innerHTML = `Winner is: ${pos1}`;
      }
    }
  }
}

function resetBoxes() {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
}

resetBtn.addEventListener("click", () => {
  resetBoxes();
});
