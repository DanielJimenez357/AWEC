function potencia () {
    let a = prompt("Introduce el numero")
    let b = prompt("Introduce la potencia")
    document.write("La potencia de " + a + "elevado a " + b + "es" +a*Math.pow(b))
}

function raiz () {
    let a = prompt("Introduce un numero que no sea negativo")
    document.write("La raiz de " + a + "es" + Math.sqrt(a))
}

function potencia () {
    let a = prompt("Introduce un numero decimal")
    document.write("El redondeo de " + a + "hacia arriba es: " + Math.ceil(a) + "y el redondeo hacia abajo es: " + Math.floor(a))   
}

function angulo () {
    let a = prompt("Introduce un angulo entre 0º y 360º")
    document.write("El seno es: " + Math.sin(a) + ". El coseno es: " + Math.cos(a) + ". La tangente es: " + Math.tan(a))
}