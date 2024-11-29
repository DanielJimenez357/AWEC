export function makeGame(difficulty) {
  let board = [];
  if (difficulty === "easy") difficulty = 1;
  else {
    difficulty = 2;
  }
  let choosed = true;
  for (let i = 0; i < 6 * difficulty; i++) {
    let tile = {
      color1: Math.round(Math.random() * 255),
      color2: Math.round(Math.random() * 255),
      color3: Math.round(Math.random() * 255),
      choosen: choosed,
    };
    choosed = false;
    board.push(tile);
  }
  board.sort(() => 0.5 - Math.random());
  return board;
}

export const makeDom = (board, difficulty) => {
  let container2 = document.querySelector(".container");
  let lifes = document.createElement("p");
  let life = document.createElement("span");
  let color = document.createElement("span");
  let colorToGuess = document.createElement("p");
  colorToGuess.innerHTML = "El color a buscar es: ";
  life.innerHTML = "3";
  lifes.innerHTML = "Numero de vidas que te quedan: ";
  lifes.appendChild(life);
  container2.appendChild(lifes);
  let container = document.createElement("div");
  container.style.cssText = `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 520px;
    `;
  board.forEach((element) => {
    if (element.choosen) {
      color.innerHTML =
        "rgb(" +
        element.color1 +
        "," +
        element.color2 +
        "," +
        element.color3 +
        ")";
      colorToGuess.appendChild(color);
      container2.appendChild(colorToGuess);
    }
    let tile = document.createElement("div");
    tile.style.cssText = `
    border: 1px solid black;
        margin: 5px;
        width: 100px;
        border-radius: 10px;
        height: 100px;
        padding: 20px
        `;
    tile.style.background =
      "rgb(" +
      element.color1 +
      "," +
      element.color2 +
      "," +
      element.color3 +
      ")";
      if (element.choosen == true){
          tile.addEventListener("click", ()=> {
            alert("Has ganado!!!")
            })
      } else {
        tile.addEventListener("click", ()=> {
            life.innerHTML = parseInt(life.innerHTML) -1
            if (life.innerHTML == 0) 
                alert("Has perdido...")
            })
      }
    container.appendChild(tile);
  });
  container2.appendChild(container);
}
