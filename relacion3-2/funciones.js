function arrayValores (cadena) {
    let valores = cadena.split(",")
    let valorMinimo = Infinity
    let valorMaximo = -Infinity
    let valorMedio = 0
    for (let i =0; i<valores.length; i++) {
        if (valores[i] > valorMaximo) 
            valorMaximo = valores[i]
        if (valores[i] <= valorMinimo)
            valorMinimo = valores[i];
        valorMedio += parseInt(valores[i])
    }    
    valorMedio = valorMedio/5
    document.write(valorMaximo + "|" + valorMinimo + "|" + valorMedio)
}

function colores (valorBusc) {
    let arrColores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
    if (arrColores.includes(valorBusc))
        document.write("existe dentro del array")
    else {
        document.write("no existe dentro del array")
    }
}

function numerosAleatorios () {
    let numeros = []
    for (let i = 0; i<20; i++) {
        let valor = Math.round(Math.random()*10)
        numeros.push(valor)
    }
    document.write(numeros.toString())
}

function cadenas () {
    let frutas1 = ['manzana','pera','uva','sandia','melon']
    let frutas2 = ['coco','mango','sandia','platano','manzana']
    let diferencia = []
    let interseccion = []
    let union = []
    let alternar = false
    for (let i =0; i<5; i++) {
        if (frutas1.includes(frutas2[i]))
            diferencia.push(frutas2[i])
    }
    for(let i = 0; i<5; i++) {
        if (!alternar) {
            interseccion.push(frutas1[i])
            alternar = true
        }
        else {
            interseccion.push(frutas2[i])
            alternar = false
        }
    }
    union = frutas1.concat(frutas2)
    document.write("Frutas iguales: " + diferencia.toString() + ".   Frutas intercaladas: " + interseccion.toString() + ".   Frutas unidas: " + union.toString())
}

function cargarArray () {
    let numeros = []
    for (let i = 0; i<20; i++) {
        let valor = Math.round(Math.random()*100)
        numeros.push(Math.round(valor))
    }
    document.write(numeros.toString())
}

function buscarPalabra (palabra) {
    let parrafo = document.getElementById("parrafo").innerText
    const parrafoArray = parrafo.split(" ")
    if (parrafoArray.includes(palabra)) {
        alert("la palabra se encuentra en el parrafo")
    } else {
        alert("no existe la palabra dentro del parrafo")
    }
}

function ordenarAleatorios () {
    let numeros = []
    for (let i = 0; i<20; i++) {
        let valor = Math.round(Math.random()*100)
        numeros.push(valor)
    }
    document.write(numeros.toString() + "<br>")
    document.write(numeros.sort(function(a, b){return a - b}))
}

function introducirNombre (nombre) {
    nombres.push(nombre)
    document.getElementById("parrafo").innerHTML = nombres.toString()
}

function arrayCadena (cadena) {
    let arr = cadena.split(" ")
    document.write(arr.length + "<br>")
    document.write(arr[0] + "<br>")
    document.write(arr[(arr.length-1)] + "<br>")
    document.write(arr.reverse() + "<br>")
    document.write(arr.sort() + "<br>")
    arr.sort()
    document.write( arr.reverse() + "<br>")
}