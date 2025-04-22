let score = 0;
let scoreComputer = 0;

const choices = ["rock", "paper", "scissors"];

function playGame(playerChoice) {
  const computerChoice = Math.floor(Math.random() * 3);

  let resultMessage = "";
  if (playerChoice === computerChoice) {
    resultMessage = "Empate!";
  } else if (
    (playerChoice === 0 && computerChoice === 2) ||
    (playerChoice === 1 && computerChoice === 0) ||
    (playerChoice === 2 && computerChoice === 1)
  ) {
    resultMessage = "Você venceu!";
    score++;
  } else {
    resultMessage = "Computador venceu!";
    scoreComputer++;
  }

  document.getElementById("score").textContent = score;
  document.getElementById("scoreComputer").textContent = scoreComputer;

  const container = document.querySelector(".container");
  const triangulo = document.querySelector(".triagulo");
  const resultDiv = document.getElementById("result");
  const playAgainButton = document.getElementById("play-again");

  container.style.display = "none";
  triangulo.style.display = "none";

  resultDiv.innerHTML = `
    <div class="itemsResult">
      <div class="itemResult ${choices[playerChoice]}">
        <img src="images/icon-${choices[playerChoice]}.svg" alt="${choices[playerChoice]}">
        <p>Você</p>
      </div>
      <button class="jogarNovamente" onclick="resetGame()" >Jogar novamente</button>
      <div class="itemResult ${choices[computerChoice]}">
        <img src="images/icon-${choices[computerChoice]}.svg" alt="${choices[computerChoice]}">
        <p>Computador</p>
      </div>
      </div>
    
      <p class="resultMessage">${resultMessage}</p>
      
  `;

  playAgainButton.style.display = "block";
}

function resetGame() {
  const container = document.querySelector(".container");
  const triangulo = document.querySelector(".triagulo");
  const resultDiv = document.getElementById("result");
  const playAgainButton = document.getElementById("play-again");

  container.style.display = "flex";
  triangulo.style.display = "flex";
  resultDiv.innerHTML = "";
  playAgainButton.style.display = "none";
}