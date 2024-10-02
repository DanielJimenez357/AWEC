function potencia () {
    let a = prompt("Introduce el numero")
    let b = prompt("Introduce la potencia")
    document.write("La potencia de " + a + " elevado a " + b + " es " + Math.pow(a, b))
}

function raiz () {
    let a = prompt("Introduce un numero que no sea negativo")
    document.write("La raiz de " + a + " es " + Math.sqrt(a))
}

function decimal () {
    let a = prompt("Introduce un numero decimal")
    document.write("El redondeo de " + a + " hacia arriba es: " + Math.ceil(a) + " y el redondeo hacia abajo es: " + Math.floor(a))   
}

function angulo () {
    let a = prompt("Introduce un angulo entre 0º y 360º")
    document.write("El seno es: " + Math.sin(a) + ". El coseno es: " + Math.cos(a) + ". La tangente es: " + Math.tan(a))
}

function tamano (cadena) {
    document.write("El tamaño de tu nombre en caracteres es de: " + cadena.length + "</br>")
    document.write("Tu nombre en mayusculas: " + cadena.toUpperCase() + "</br>")
    document.write("Tu nombre en minusculas: " + cadena.toLowerCase() + "</br>")
    for (let i = 0; i<=cadena.length; i++) {
        if (cadena.charAt(i) == ' ') {
            document.write("</br>")
        } else {
            document.write(cadena.charAt(i))
        }
    }
}

function mayor (numero) {
    let numMayor = 0
    for (let i = 0;i<3; i++) {
        if (numero.at(i) > numMayor) {
            numMayor = numero.at(i)
        }
    }
    document.write(numMayor)
}

function contarA (cadena) {
    let contador = 0
    for (let i = 0; i<=cadena.length; i++) {
        if (cadena.charAt(i) == "a") {
            contador++
        }
    }
    document.write(contador)
}

function contarVocales (cadena) {
    let contador = 0
    let vocales = ["a","e","i","o","u"]
    for (let i = 0; i<=cadena.length; i++) {
        for (let j = 0; j<5;j++)
            if (cadena.charAt(i) == vocales.at(j)) {
                contador++
            }
    }
    document.write("el numero de vocales es: " + contador)
}

function contarVocEspc (cadena) {
    let nA = 0
    let nE = 0
    let nI = 0
    let nO = 0
    let nU = 0
    for (let i = 0; i<=cadena.length; i++) {
        switch (cadena.at(i)) {
            case "a":
                nA++
                break
            case "e":
                nE++
                break
            case "i":
                nI++
                break
            case "o":
                nO++
                break
            case "u":
                nU++
                break
            default:
                break    
        }
    }
    document.write("El numero de vocales: A=" + nA + " E=" + nE + " I=" + nI + " O=" + nO + " U=" + nU)
}

function reves (cadena) {
    for (let i = cadena.length-1; i>=0;i--) {
        document.write(cadena.at(i))
    }
}
