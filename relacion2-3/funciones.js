function invierteCadena(cad_arg) {
	for (let i = cad_arg.length - 1; i >= 0; i--) {
		document.write(cad_arg.at(i));
	}
}

function inviertePalabras(cad_arg) {
	let arrayCad = [];
	let cadena = "";
	for (let i = cad_arg.length - 1; i >= 0; i--) {
		if (cad_arg.at(i) == " ") {
			arrayCad.push(cadena);
			cadena = "";
		} else {
			cadena = cadena + cad_arg.at(i);
		}
		if (i == 0) {
			arrayCad.push(cadena);
			cadena = "";
		}
	}
	for (let i = arrayCad.length - 1; i >= 0; i--) {
		document.write(arrayCad.at(i) + " ");
	}
}

function encuentraPalabraMasLarga(cad_arg) {
	let arrayCad = [];
	let cadena = "";
	let longitud = 0;
	let arrayLon = [];
	let valorMasAlto = 0;
	for (let i = 0; i < cad_arg.length; i++) {
		if (cad_arg.at(i) == " ") {
			arrayCad.push(cadena);
			arrayLon.push(longitud);
			cadena = "";
			longitud = 0;
		} else {
			cadena = cadena + cad_arg.at(i);
			longitud++;
		}
		if (i == cad_arg.length - 1) {
			arrayCad.push(cadena);
			arrayLon.push(longitud);
			cadena = "";
			longitud = 0;
		}
	}
	for (let i = 0; i < arrayLon.length; i++) {
		if (valorMasAlto < arrayLon.at(i)) {
			valorMasAlto = arrayLon.at(i);
		}
	}
	document.write(
		"La palabra con mayor longitud tiene: " + valorMasAlto + " caracteres"
	);
}

function filtraPalabrasMasLargas(cad_arg, j) {
	let arrayCad = [];
	let cadena = "";
	let longitud = 0;
	let arrayLon = [];
	for (let i = 0; i < cad_arg.length; i++) {
		if (cad_arg.at(i) == " ") {
			arrayCad.push(cadena);
			arrayLon.push(longitud);
			cadena = "";
			longitud = 0;
		} else {
			cadena = cadena + cad_arg.at(i);
			longitud++;
		}
		if (i == cad_arg.length - 1) {
			arrayCad.push(cadena);
			arrayLon.push(longitud);
			cadena = "";
			longitud = 0;
		}
	}
	for (let i = 0; i < arrayLon.length; i++) {
		if (arrayLon.at(i) >= j) {
			document.write(arrayCad.at(i) + " ");
		}
	}
}

function cadenaBienFormada(cad_arg) {
	let arrayCad = [];
	let cadena = "";
	for (let i = 0; i < cad_arg.length; i++) {
		if (cad_arg.at(i) == " ") {
			arrayCad.push(cadena);
			cadena = "";
		} else {
			if (i == 0) {
				cadena = cadena + cad_arg.at(i).toUpperCase();
			} else {
				cadena = cadena + cad_arg.at(i).toLowerCase();
			}
		}
		if (i == cad_arg.length - 1) {
			arrayCad.push(cadena);
			cadena = "";
		}
	}
	for (let i = 0; i < arrayCad.length; i++) {
		document.write(arrayCad.at(i) + " ");
	}
}

function clasificarCadena(cad_arg) {
	let arrayCad = [];
	let cadena = "";
	let mayus = false;
	let minus = false;
	for (let i = 0; i < cad_arg.length; i++) {
		if (cad_arg.at(i) == " ") {
			arrayCad.push(cadena);
			cadena = "";
		} else {
			cadena = cadena + cad_arg.at(i);
			if (cad_arg.at(i) == cad_arg.at(i).toUpperCase()) {
				mayus = true;
			}
			if (cad_arg.at(i) == cad_arg.at(i).toLowerCase()) {
				minus = true;
			}
		}
		if (i == cad_arg.length - 1) {
			arrayCad.push(cadena);
			cadena = "";
		}
	}
	if (mayus && minus == false) {
		document.write("La cadena esta formada solo por mayusculas");
	}
	if (minus && mayus == false) {
		document.write("La cadena esta formada solo por minusculas");
	}
	if (minus && mayus) {
		document.write(
			"La cadena esta formada por un conjunto de mayusculas y minusculas"
		);
	}
}

function localizarSubcadenas(cad_arg) {
	let arrayCad = [];
	let cadena = "";
	let cadRep = [];
	for (let i = 0; i < cad_arg.length; i++) {
		if (cad_arg[i] == " ") {
			arrayCad.push(cadena);
			cadena = "";
		} else {
			cadena += cad_arg[i];
		}
		if (i == cad_arg.length - 1) {
			arrayCad.push(cadena);
		}
	}
	for (let i = 0; i < arrayCad.length; i++) {
		let palabra = arrayCad[i];
		let contador = 0;
		let yaProcesada = false;
		for (let k = 0; k < cadRep.length; k++) {
			if (palabra == cadRep[k]) {
				yaProcesada = true;
				break;
			}
		}
		if (!yaProcesada) {
			for (let j = 0; j < arrayCad.length; j++) {
				if (palabra == arrayCad[j]) {
					contador++;
				}
			}
			cadRep.push(palabra);
			document.write(
				"La subcadena '" +
					palabra +
					"' se repite " +
					(contador - 1) +
					" veces mas.<br>"
			);
		}
	}
}

function ordenarLetras(cad_arg) {
	let arrayVoc = [];
	let arrayCons = [];
	let vocales = ["a", "e", "i", "o", "u"];
	for (let i = 0; i < cad_arg.length; i++) {
		let char = cad_arg.at(i).toLowerCase();
		if (vocales.includes(char)) {
			arrayVoc.push(cad_arg.at(i));
		} else if (char != " ") {
			arrayCons.push(cad_arg.at(i));
		}
	}
	document.write(arrayVoc.concat(arrayCons));
}

function eliminarCaracterRep(cad_arg) {
    let caracterRep = []
    for (let i = 0; i<cad_arg.length; i++) {
        if (!caracterRep.includes(cad_arg.at(i))){
            caracterRep.push(cad_arg.at(i))
        }
    }
    document.write(caracterRep)
}

function buscarSubCadena(cad_arg1, cad_arg2){
    let cadena1 =cad_arg1.toLowerCase()
    let cadena2 =cad_arg2.toLowerCase()
    if(cadena1.includes(cadena2)){
        document.write("Es una subcadena y comienza en la posicion: " + cadena1.search(cadena2))
    } else {
        document.write("No es una subcadena")   
    }
}

function validaPalindromos(cad_arg) {
    let cadena = cad_arg.toLowerCase()
    let cadenaReves = ""
    for (let i = cad_arg.length - 1; i >= 0; i--) {
		cadenaReves = cadenaReves + cad_arg.at(i).toLowerCase()
	}
    if (cadena.startsWith(cadenaReves)) {
        document.write("Es un palindromo")
    } else {
        document.write("No es un palindromo")
    }
}

function contarPalabras (cad_arg) {
    let cadena = cad_arg.split(" ")
    let cadenaBuena = []
    for (let i = 0; i<cadena.length; i++) {
        if (cadena.at(i) !== "") {
            cadenaBuena.push(cadena.at(i))
        }
    }
    document.write("El numero de palabras es: " + cadenaBuena.length)
}

function validateCreditCard (numero){
    numero = numero.toString()
    if (numero.length==16 && numero.indexOf(/[a-z]/i) == -1) {
        let validacion2
        let numeroValido1 = numero.at(0)
        for (let i = 0; i<numero.length; i++){
            if (numeroValido1 !== numero.at(i)) {
                validacion2 = true
            }    
        }
        if (validacion2 == true) {
            if ((numero.at(15))%2 == 0){
                let suma = 0
                for (let j = 0; j<numero.length; j++) {
                    suma = suma + parseInt(numero.at(j))
                }
                if (suma>=16) {
                    return true
                }
            } 
        } 
    } 
    return false
}

function validateCreditCard2 (numero) {
    let numeroNoDash = ""
    for (let i = 0; i<numero.length; i++) {
        if (numero.at(i) !== "-") {
            numeroNoDash = numeroNoDash + numero.at(i)
        }
    }
    numero = numeroNoDash.toString()
    if (numero.length==16 && numero.indexOf(/[a-z]/i) == -1) {
        let validacion2
        let numeroValido1 = numero.at(0)
        for (let i = 0; i<numero.length; i++){
            if (numeroValido1 !== numero.at(i)) {
                validacion2 = true
            }    
        }
        if (validacion2 == true) {
            if ((numero.at(15))%2 == 0){
                let suma = 0
                for (let j = 0; j<numero.length; j++) {
                    suma = suma + parseInt(numero.at(j))
                }
                if (suma>=16) {
                    return true
                }
            } 
        } 
    } 
    return false
}