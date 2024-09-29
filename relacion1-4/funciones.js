
function sum (...numeros) {
    let suma = 0
    numeros.forEach((numero) => {
        suma = (suma + numero)
    })
    document.write(suma)
}

function addOnlyNums (...elementos) {
    let suma = 0
    elementos.forEach((elemento) => {
        if (typeof elemento === "number") {
        suma += elemento 
    }
})
    document.write(suma)
}

function countTheArgs (...args) {
    document.write(args.length)
}

function combineTwoArrays (array1, array2) {
    const arrayCombinado = [...array2, ...array1,]
    document.write(arrayCombinado)
}

function sumEveryOther (...elementos) {
    let suma = 0
    let i = 1
    elementos.forEach((elemento) => {
        if (i%2 != 0) {
        suma += elemento 
    }
    i++
})
    document.write(suma)
}

function divisible (numero) {
    if (numero%3 == 0) {
        document.write("El numero es divisible entre 3")
    } else {
        document.write("El elemento no se puede dividir entre 3")
    }
}

function divisibleEntre (dividendo, divisor) {
    if (dividendo%divisor == 0) {
        document.write("El numero " + dividendo + " es divisible entre " + divisor)
    } else {
        document.write("No pueden dividirse")
    }
}

function rango (valor, rangoInf, rangoSup) {
    if (valor > rangoInf && valor < rangoSup) {
        document.write("El numero se encuentra entre los dos valores")
    }
}

function tieneTresDigitos (numero) {
    if (numero > 99 && numero < 1000) {
        document.write("El numero tiene 3 digitos")
    }
}

function areaRectangulo (lado1, lado2) {
    let area = (lado1*lado2)
    document.write(area)
}

function imc (peso, altura) {
    document.write((peso/(altura*altura)).toFixed(2))
}

function precioFinal (precioOriginal, descuento) {
    document.write(precioOriginal - (precioOriginal*descuento))
}

function factorial (numero) {
    let numeroFactorial = 1
    while (numero > 0 ) {
        numeroFactorial = (numeroFactorial*numero)
        numero--
    }
    document.write(numeroFactorial)
}
