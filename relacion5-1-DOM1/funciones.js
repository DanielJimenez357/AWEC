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
