// selection all html tag in javascript

const form = document.querySelector("form");
const container = document.querySelector(".game");
const input = document.querySelector("#guessing-input");
const button = document.querySelector("#button");
const result = document.querySelector(".result-number");
const attempt = document.querySelector(".attempt-number");
const createElement = document.createElement("h3");

//creating some initial value

let totalAttempt = 5;
let attemptNum = 0;
let totalWin = 0;
let totalLost = 0;

//adding listener on form

form.addEventListener("submit", function (event) {
  event.preventDefault();

  attemptNum++;

  if (attemptNum === 5) {
    input.disabled = true;
    button.disabled = true;
  }
  if (attemptNum < 6) {
    let guesInput = Number(input.value);
    checkResult(guesInput);
    attempt.innerHTML = `Your left remaning attempts: ${
      totalAttempt - attemptNum
    }`;
  }
  input.value = "";
  container.appendChild(createElement);
});

//main function of guessing game

function checkResult(input) {
  let randomNumber = getRandomNum(5);
  if (input === randomNumber) {
    result.innerHTML = `You are Win`;
    totalWin++;
  } else {
    result.innerHTML = `You lost, The random number is ${randomNumber}`;
    totalLost++;
  }
  createElement.innerHTML = `Total You Win : ${totalWin} ${"</br>"} Total You Lost : ${totalLost}`;

  createElement.classList.add("h3");
}

//creating random number for the game

function getRandomNum(number) {
  return Math.floor(Math.random() * number) + 1;
}
