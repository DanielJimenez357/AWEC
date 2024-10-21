function confirmacion() {
    alert("Has pulsado el boton")
}

function abrir() {
    let nuevaVentana = window.open("","")
}

function renombrarVentana() {
    let nombre = prompt("Introduce el nuevo nombre para la pagina")
    abrir(nombre)
    nuevaVentana.name = nombre
}

function cerrarVentana(ventana=window) {
    ventana.close()
}

function cambiartamano () {
    let nuevaVentana = window.open("","", "width=300,height=100")
    window.document.write("Has abierto una nueva ventana")
}

function moverVentana () {
        window.moveBy(50, 50);
}

function ventanaEn () {
    window.moveTo(300,300)
}

function moverBarra () {
    window.scrollBy(0, 10);
}

function desplazarBarra () {
    window.scrollTo(0, 100);
}

function marcador () {
    let ventana = window.open()
}

function nombreHost() {
    window.location.hostname()
}

function url () {
    alert(window.location.href())
}

function direccion (direccion) {
    window.location.assign(direccion)
}

function protocolo() {
    window.location.protocol()
}

function recargar () {
    window.location.reload()
}

function modificacion () {
    alert(document.lastModified)
}

function urlActivacion() {
    alert(document.referrer)
}

function titulo () {
    alert(document.url)
}

function laUrl() {
    alert(document.URL)
}

function numeroAnclas () {
    let nAnclas = document.getElementsByTagName("a").length
    alert(nAnclas)
}

function textoTag() {
    alert(document.getElementById("ancla").innerHTML)
}