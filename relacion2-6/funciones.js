function abrir(nombre) {
    let nuevaVentana = window.open("",nombre,"")
}

function renombrarVentana() {
    let nombre = prompt("Introduce el nuevo nombre para la pagina")
    abrir(nombre)
    nuevaVentana.name = nombre
}

function cerrarVentana(ventana=window) {
    ventana.close()
}

function cambiartamano() {
    let nuevaVentana = window.open("","", "width=300,height=100")
    window.document.write("Has abierto una nueva ventana")
}

function moverVentana() {
    window.moveTo(0,0)
}