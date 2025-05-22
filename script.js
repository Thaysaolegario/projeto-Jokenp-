let result = document.querySelector("#result");
const pontosMy= document.querySelector("#my-pontos")
const alexaPontos= document.querySelector("#pontos-alexa")


let ganhei = 0
let perdi =0

const playHuman = (humanchoise) => {
  playTheGame(humanchoise, playmachin());
};

const playmachin = () => {
  const maquina = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return maquina[randomNumber];
  
};
const playTheGame = (human, machin) => {
  if (human === machin) {
    result.innerHTML = "Empatou";
  } else if (
    (human === "paper" && machin === "rock") ||
    (human === "rock" && machin === "scissors") ||
    (human === "scissors" && machin === "paper")
  ) { 
    result.innerHTML = "Você ganhou";
    ganhei++
    pontosMy.innerHTML= ganhei
  }else{
   
    result.innerHTML ="Você perdeu"
     perdi++
    alexaPontos.innerHTML = perdi

  }
  

  console.log(" humano:" + human, "maquina:" + machin);
};

// papel, pedra, tesoura;
