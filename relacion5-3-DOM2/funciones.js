const numero = (etiqueta) => {
	let contador = document.getElementById(etiqueta);
	return contador;
};

const aumentar = (numero) => {
	numero.innerHTML = parseInt(numero.innerHTML) + 1;
};

//al ser una funcion mas grande y con mas contenido he decidido comenzar a hacerlas
//en ingles con el objeivo de acostumbrarme y demas, no esta copiado ni echo por IA

//funtion to make the puzzle
function makePuzzle(size) {
	let puzzle = [];
	let contador = 0;
	for (let i = 0; i < size; i++) {
		let row = [];
		for (let j = 0; j < size; j++) {
			let piece;
			if (i == 0 && j == 0) {
				piece = {
					empty: true,
					number: null,
					getId: function () {
						return this.number;
					},
				};
			} else {
				piece = {
					empty: false,
					number: contador,
					getId: function () {
						return this.number;
					},
				};
			}
			contador++;
			row.push(piece);
		}
		puzzle.push(row);
	}
	return puzzle;
}

function makePuzzleDom(puzzle) {
	let table = document.createElement("table");
	table.style.display = "grid";
	table.style.width = "800px";
	table.style.gridTemplateRows = "repeat(" + size + ", auto)";
	puzzle.forEach((element1) => {
		let lista = document.createElement("ul");
		lista.style.display = "grid";
		lista.style.gridTemplateColumns = "repeat(" + size + ", auto)";
		element1.forEach((element2) => {
			let sublista = document.createElement("li");
			sublista.style.padding = "50px";
			sublista.style.width = "50px";
			if (element2.getId() === null) {
				sublista.style.color = "rgb(86, 68, 200)";
				sublista.style.background = "rgb(86, 68, 200)";
			} else {
				sublista.style.background = "rgb(100, 40, 100)";
			}
			sublista.style.textAlign = "center";
			sublista.style.listStyle = "none";
			sublista.addEventListener("click",  () => {
				if (checkAround(searchIndex(puzzle, element2.getId()))) {
					move(searchIndex(puzzle, element2.getId()), searchIndex(puzzle, null))
				}
				if (puzzleWin.flat() == puzzle.flat())
					alert ("HAS GANADO")
			})
			sublista.innerHTML = element2.getId();
			lista.appendChild(sublista);
		});
		table.appendChild(lista);
	});
	document.body.appendChild(table);
}

function updateDOM (puzzle, size) {
	document.body.innerHTML = ""; 
    makePuzzleDom(puzzle, size);
}

//flat the array to make it easyer to mix
function flat(arr) {
	let shufflePuzzle = arr.flat();
	shufflePuzzle.sort(function () {
		return 0.5 - Math.random();
	});
	return shufflePuzzle;
}

//mix the array
function shuffle(puzzle) {
	let flattedPuzzle = flat(puzzle);
	let shuffledPuzzle = [];
	for (let i = 0; i < flattedPuzzle.length; ) {
		let arrTemp = [];
		for (let j = 0; j < 4; j++) {
			arrTemp.push(flattedPuzzle[i]);
			i++;
		}
		shuffledPuzzle.push(arrTemp);
	}
	return shuffledPuzzle ;

}

const checkId = (item, id) => {
	return item.number === id;
};

const searchIndex = (arr, id) => {
	for (let row = 0; row < arr.length; row++) {
		let col = arr[row].findIndex((item) => checkId(item, id));
		if (col !== -1) {
			return { row, col };
		}
	}
};

//funtion who check and return if it is possible the coordinates of an empty tile
function checkAround(coordinates) {
	let tileMoving = coordinates;
	let canMove = null;
	if (
		tileMoving.row - 1 >= 0 &&
		puzzle[tileMoving.row - 1] &&
		puzzle[tileMoving.row - 1][tileMoving.col]?.empty === true
	) {
		return { row: tileMoving.row - 1, col: tileMoving.col };
	}

	if (
		tileMoving.row + 1 < puzzle.length &&
		puzzle[tileMoving.row + 1] &&
		puzzle[tileMoving.row + 1][tileMoving.col]?.empty === true
	) {
		return { row: tileMoving.row + 1, col: tileMoving.col };
	}

	if (
		tileMoving.col + 1 < puzzle[0].length &&
		puzzle[tileMoving.row] &&
		puzzle[tileMoving.row][tileMoving.col + 1]?.empty === true
	) {
		return { row: tileMoving.row, col: tileMoving.col + 1 };
	}

	if (
		tileMoving.col - 1 >= 0 &&
		puzzle[tileMoving.row] &&
		puzzle[tileMoving.row][tileMoving.col - 1]?.empty === true
	) {
		return { row: tileMoving.row, col: tileMoving.col - 1 };
	}
	return canMove;
}

//change the value beetwen the emty tile and the moving tile so it looks like it is moving
function move(from, to) {
    let temp = puzzle[from.row][from.col];
    puzzle[from.row][from.col] = puzzle[to.row][to.col];
    puzzle[to.row][to.col] = temp;
	updateDOM(puzzle, 4)
}
