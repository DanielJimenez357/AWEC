const procesarNombres = array1 => 
    array1.filter(element => element.startsWith("J")).map(element => element.split(" ").map(inicial => inicial[0]).join("")).sort() 

let tesoro = [[34,21,32,41,25],
[14,42,43,14,31],
[54,45,52,42,23],
[33,15,51,31,35],
[21,52,33,13,23]]

function buscarTesoro(mapa, fila, columna) {
    let pista = mapa[parseInt(fila) -1][parseInt(columna) -1].toString()
    let numero1 = pista.at(0)
    let numero2 = pista.at(1)
    if (numero1 == fila && numero2 == columna) 
        return pista
    return buscarTesoro(mapa, numero1, numero2)
}

function crearMapa() {
    let mapa = [[],[],[],[],[]]
    let numero1 = Math.floor(Math.random()*5) + 1
    let numero2 = Math.floor(Math.random()*5) + 1
    let numero3 = Math.floor(Math.random()*5) + 1
    let numero4 = Math.floor(Math.random()*5) + 1
    let limite = Math.random()*12 + 5
    for (let i = 0; i < limite ; i++) {
        let pista = numero3 + numero4
        if (i == limite) 
            mapa[numero1].fill(pista.toString, numero2, numero2+1)
        else {

        }
        
    }
}
