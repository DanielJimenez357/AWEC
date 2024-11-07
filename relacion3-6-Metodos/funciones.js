const procesarNombres = (array1) =>
	array1
		.filter((element) => element.startsWith("J"))
		.map((element) =>
			element
				.split(" ")
				.map((inicial) => inicial[0])
				.join("")
		)
		.sort();

let tesoro = [
	[34, 21, 32, 41, 25],
	[14, 42, 43, 14, 31],
	[54, 45, 52, 42, 23],
	[33, 15, 51, 31, 35],
	[21, 52, 33, 13, 23],
];

function buscarTesoro(mapa, fila, columna) {
	let pista = mapa[parseInt(fila) - 1][parseInt(columna) - 1].toString();
	let numero1 = pista.at(0);
	let numero2 = pista.at(1);
	if (numero1 == fila && numero2 == columna) return pista;
	return buscarTesoro(mapa, numero1, numero2);
}



function crearMapa() {
	let mapa = [
		[1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1],
	];
	let casillasOcupadas = [];
	let numero1 = 0;
	let numero2 = 0;

	let limite = Math.floor(Math.random() * 12 + 5);
	for (let i = 0; i < limite; i++) {

		let numero3 = Math.floor(Math.random() * 5);
		let numero4 = Math.floor(Math.random() * 5);
		let pista = (numero3 + 1).toString() + (numero4 + 1).toString();

		while (casillasOcupadas.includes(pista)) {
			numero3 = Math.floor(Math.random() * 5);
			numero4 = Math.floor(Math.random() * 5);
			pista = (numero3 + 1).toString() + (numero4 + 1).toString();
		}

        mapa[numero1][numero2] = parseInt(pista);

		if (i === limite - 1) {
			mapa[numero1][numero2] = parseInt(
				(numero1 + 1).toString() + (numero2 + 1).toString()
			);
			break;
		}
		casillasOcupadas.push(pista);
		numero1 = numero3;
		numero2 = numero4;
	}

    for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (mapa[i][j] === 1) {
				let newPista;
				do {
					let randomRow = Math.floor(Math.random() * 5);
					let randomCol = Math.floor(Math.random() * 5);
					newPista = (randomRow + 1).toString() + (randomCol + 1).toString();
				} while (casillasOcupadas.includes(newPista) || newPista === (i + 1).toString() + (j + 1).toString());
				mapa[i][j] = parseInt(newPista);
			}
		}
	}
	return mapa;
}
