function aleatorio (minimo, maximo) {
    document.write("||  " + ((Math.random()*(maximo -minimo) + minimo).toFixed()) + "  ||")
}

function angulo (a) {
    document.write("El seno es: " + Math.sin(a) + ". El coseno es: " + Math.cos(a) + ". La tangente es: " + Math.tan(a))
}

function hipotenusa (cateto1, cateto2) {
    alert(Math.pow(cateto1,2)+Math.pow(cateto2,2))
}

function ecuacion (a,b,c) {
    document.write("El primer posible valor es: " + (-b+(Math.sqrt(Math.pow(b,2)-(4*a*c))))/(2*a))
    document.write("    El primer posible valor es: " + (-b-(Math.sqrt(Math.pow(b,2)-(4*a*c))))/(2*a))

}

function calculoPow(a,b) {
    document.write("El resultado es: " + Math.pow(a,b))
}