const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
const reset = document.getElementById("reset");
const texts = document.querySelectorAll("#gameDiv .gameText");
const defaultText = [];
texts.forEach((text) => {
  defaultText.push(text.innerHTML);
});

let player;
let computer;
let result;

choiceBtn.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.preventDefault();
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player : ${player}`;
    computerText.textContent = `Computer : ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "Batu";
      break;
    case 2:
      computer = "Gunting";
      break;
    case 3:
      computer = "Kertas";
      break;
  }
}
function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "Batu") {
    return player == "Kertas" ? "Anda Menang!" : "Anda Kalah!";
  } else if (computer == "Kertas") {
    return player == "Gunting" ? "Anda Menang!" : "Anda Kalah!";
  } else if (computer == "Gunting") {
    return player == "Batu" ? "Anda Menang!" : "Anda Kalah!";
  }
}

function logReset(event) {
  console.log("test");
  texts.forEach((text, index) => {
    text.innerHTML = defaultText[index];
  });
  log.textContent = `Form reset! Timestamp : ${event.timeStamp}`;
}
const log = document.getElementById("log");
const form = document.getElementById("form");
reset.addEventListener("click", logReset);
