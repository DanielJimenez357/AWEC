function clase(alumno) {
	alumnos.push(alumno);
	lista.innerHTML = "<h3>Lista de Alumnos</h3>";
	for (let i = 0; i < alumnos.length; i++) {
		lista.innerHTML += "<p>" + alumnos[i] + "</p>";
	}
}

function notas (numero, trimestre) {
    numero--
    alumnos = [
        ["Angel Garcia", 6, 2, 10],
        ["Alberto Torres", 4, 6, 5],
        ["Maria Lopez", 9, 3, 9]
    ]
    Temp = alumnos[numero]

    if (trimestre === "") {
        media = (Temp[1]+Temp[2]+Temp[3])/3
        document.write("Nota media " + media)  
    } else {
        document.write("Nota del " + trimestre + " trimestre: " + Temp[trimestre]) 
    }
}

function edadMedia () {
    alumnos = [
        ["Angel Garcia", 20, 6, 2, 10],
        ["Alberto Torres", 19, 4, 6, 5],
        ["Maria Lopez", 21, 9, 3, 9]
    ]
    let edad = 0
    for (let i = 0; i<alumnos.length; i++) {
        let temp = alumnos[i]
        edad += temp[1]
    }
    return edad/alumnos.length
}

function claseRan () {
    alumnos = [
        ["Angel Garcia", 20, 6, 2, 10],
        ["Alberto Torres", 19, 4, 6, 5],
        ["Maria Lopez", 21, 9, 3, 9]
    ]
    let temp = alumnos[Math.floor(Math.random()*alumnos.length)]
    return temp[0]
}

function paresImpares () {
    let numeros = []
    let pares = []
    let impares = []
    while (numeros.length<100) {
        numeros.push(Math.round(Math.random()*1000))
    }
    document.write("Array sin ordenar: " + numeros + "<br>")

    for (let i = 0; i<100; i++) {
        if (numeros[i]%2 == 0){
            pares.push(numeros[i])
        } else {
            impares.push(numeros[i])
        }
    }
    document.write("Array ordenado por pares e impares: " + pares.concat(impares))
}

function label () {

}
