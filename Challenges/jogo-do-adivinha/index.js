let xAttempts = 0;
let randomNumber = Math.round(Math.random() * 10);

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnPlayAgain = document.querySelector("#btnPlayAgain");
const inputNumber = document.querySelector("#inputNumber");

function changeModal() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function returnPageGame(e) {
  xAttempts = 0;
  changeModal();
}

function handleTryNumber(event) {
  event.preventDefault();
  xAttempts++;
  if (Number(inputNumber.value) == randomNumber) {
    changeModal();

    document.querySelector(
      ".screen2 h2"
    ).innerText = `Acertou em ${xAttempts} ${
      xAttempts >= 2 ? "tentativas" : "tentativa"
    }`;
  }
  inputNumber.focus();
}

function updateInput(event) {
  if (
    inputNumber.value >= 11 ||
    inputNumber.value < 0 ||
    inputNumber.value.toString().length > 2
  ) {
    inputNumber.value = Number(event.data);
  }
  console.log(inputNumber.value.toString().length);
}

btnTry.addEventListener("click", handleTryNumber);
btnPlayAgain.addEventListener("click", returnPageGame);
inputNumber.addEventListener("input", updateInput);
