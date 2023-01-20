let numberInput;
let numberToGuess;
const msg = document.querySelector("#UItext");
const btn = document.querySelector("#enter");

document.querySelector("#inputField").addEventListener("input", limiter);

function limiter(e) {
  if (e.target.value > 10) {
    e.target.value = 10;
  }
  if (e.target.value < 1) {
    e.target.value = 1;
  }
}

let triesLeft = 5;

document.querySelector("#enter").addEventListener("click", check);

function check(e) {
  e.preventDefault();
  if (document.querySelector("#inputField").value === "") {
    msg.textContent = "First put something in there!";
  } else {
    if (triesLeft === 5) {
      numberToGuess = Math.floor(Math.random() * 10 + 1);
      numberInput = parseInt(document.querySelector("#inputField").value);
      if (numberInput === numberToGuess) {
        UIchange(
          `You've guessed right, it was ${numberToGuess}!`,
          `Play again`
        );
        triesLeft = 0;

        console.log(triesLeft);
        console.log(numberToGuess);
      }
      if (numberInput != numberToGuess) {
        triesLeft = triesLeft - 1;
        UIchange(`Wrong, try again. You have ${triesLeft} attempts left`, null);

        console.log(triesLeft);
        console.log(numberToGuess);
      }
    } else if (triesLeft < 5 && triesLeft > 1) {
      numberInput = parseInt(document.querySelector("#inputField").value);

      if (numberInput === numberToGuess) {
        UIchange(
          `You've guessed right, it was ${numberToGuess}!`,
          `Play again`
        );
        triesLeft = 0;

        console.log(triesLeft);
        console.log(numberToGuess);
      }
      if (numberInput != numberToGuess) {
        triesLeft = triesLeft - 1;
        UIchange(`Wrong, try again. You have ${triesLeft} attempts left`, null);

        console.log(triesLeft);
        console.log(numberToGuess);
      }
    } else if (triesLeft === 1) {
      numberInput = parseInt(document.querySelector("#inputField").value);

      if (numberInput === numberToGuess) {
        UIchange(
          `You've guessed right, it was ${numberToGuess}!`,
          `Play again`
        );
        triesLeft = 0;

        console.log(triesLeft);
        console.log(numberToGuess);
      }
      if (numberInput != numberToGuess) {
        UIchange(`You lost! Wanna play again?`, `Play again`);
        triesLeft = triesLeft - 1;
        console.log(triesLeft);
        console.log(numberToGuess);
      }
    } else if (triesLeft === 0) {
      UIchange("Enter a number from 1 to 10", `Guess!`);
      document.querySelector("#inputField").value = null;
      triesLeft = -1;
      console.log(triesLeft);
      console.log(numberToGuess);
    } else if (triesLeft === -1) {
      triesLeft = 5;
      check(e);
      console.log(triesLeft);
      console.log(numberToGuess);
    }
  }
}

function UIchange(msgtext, btntext) {
  msgtext != null ? (msg.textContent = msgtext) : null;
  btntext != null ? (btn.textContent = btntext) : null;
}
