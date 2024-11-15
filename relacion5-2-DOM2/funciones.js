const contarEnlaces = () => document.getElementsByTagName('a')

const direccion = arr => {
    let ultimo = arr.length-2
    let elemento = arr[ultimo]
    return elemento.getAttribute("href")
}

const enlacesGoo = arr => {
    let contador = 0
    for (let i = 0; i < arr.length; i++) {
        element = arr[i]
        if (element.getAttribute("href") === "https://www.google.com/?hl=es")
            ++contador
    }
    return contador;
}

const contarParr3 = () => {
   let x =  document.getElementsByTagName('p')
   let y =  x[2].getElementsByTagName('a')
   return y.length
}


function  mostrar (arr) {
    arr.forEach(element => {
        let codigo = element.codigo
        let dni = element.dni
        let nombre = element.Nombre
        let edad = element.edad
        let objeto = "Codigo: " + codigo + " DNI: " + dni + " Nombre: " 
        + nombre + " Edad: " + edad
        return anadirElemento(objeto) 
    })
}

const anadirElemento = elemento => {
    let parra = document.createElement("p") 
    parra.textContent = elemento
    document.body.appendChild(parra)
}


const mostrarMas = () => {cadena2.style.display = "contents"}
const ocultar = () => {cadena2.style.display= "none"}


let contadorLista = 5
const anadir = () => {
    contadorLista++
    lista = document.getElementById("lista")
    element = document.createElement("li")
    element.innerHTML = "Elemento " + contadorLista
    lista.appendChild(element)
}


const masBotones = () => {
    botones = document.getElementById("ficheros")
    boton = document.createElement("input")
    boton.type = "file"
    boton.onclick = masBotones
    botones.appendChild(boton)
}

let contadorImagenes = 1
const adelante = () => {
    if (contadorImagenes < 6) {
        contadorImagenes++
        let imagen = document.getElementById("imagen")
        imagen.src = "assets/imagen" + contadorImagenes + ".jpeg"
    }
}
const atras = () => {
    if (contadorImagenes > 1){
        contadorImagenes--
        let imagen = document.getElementById("imagen")
        imagen.src = "assets/imagen" + contadorImagenes + ".jpeg"
    }
}
