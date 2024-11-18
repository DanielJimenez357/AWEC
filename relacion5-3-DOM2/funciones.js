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
				piece = { empty: true, canMove: true, number: contador };
			} else {
				piece = { empty: false, canMove: false, number: contador };
			}
			contador++;
			row.push(piece);
		}
		puzzle.push(row);
	}
	return puzzle;
}

//flat the array to make it easyer to unshort
function flat(arr) {
	let shufflePuzzle = arr.flat();
	shufflePuzzle.sort(function () {
		return 0.5 - Math.random();
	});
	return shufflePuzzle;
}

//unshort the array
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
	return shuffledPuzzle;
}

const checkId = (item, id) => {
	return item.number === id;
};

const searchIndex = (arr, id) => {
	for (let row = 0; row < arr.length; row++) {
		let col = arr[row].findIndex((item) => checkId(item, id));
		if (col !== -1) {
			return (emptyPiece = { row, col });
		}
	}
};

//funtion who returns the position and coordenates of the moving tile
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

function move(coordinates) {}
