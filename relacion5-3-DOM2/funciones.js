const numero = (etiqueta) => {
	let contador = document.getElementById(etiqueta);
	return contador;
};

const aumentar = (numero) => {
	numero.innerHTML = parseInt(numero.innerHTML) + 1;
};

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

function flat(arr) {
	let shufflePuzzle = arr.flat();
	shufflePuzzle.sort(function () {
		return 0.5 - Math.random();
	});
	return shufflePuzzle;
}

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
			return emptyPiece = { row, col };
		}
	}
};

function checkMove () {
    
}
