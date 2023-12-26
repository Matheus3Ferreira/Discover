//variáveis

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

function resetGame(e) {
  xAttempts = 0;
  changeModal();
  randomNumber = Math.round(Math.random() * 10);
}

function handleTryNumber(event) {
  event.preventDefault();
  if (inputNumber.value === "") {
    alert("Please enter a number");
    return;
  }
  xAttempts++;
  if (Number(inputNumber.value) == randomNumber) {
    changeModal();

    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} ${
      xAttempts >= 2 ? "tentativas" : "tentativa"
    }`;
  }
  inputNumber.focus();
}

// verifica se o input é valido
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

//eventos

btnTry.addEventListener("click", handleTryNumber);
btnPlayAgain.addEventListener("click", resetGame);
inputNumber.addEventListener("input", updateInput);
document.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    if (!screen2.classList.contains("hide")) resetGame(e);
    else handleTryNumber(e);
  }
});
