function maximo(...valor) {
    let mayor = -99
    for (let i = 0; i < valor.length; i++) {
        if (mayor < valor[i]) {
            mayor = valor[i]
        }
    }
    document.write(mayor)
}

function dado() {
    let resultado = (Math.random() * (6 - 1))
    document.write(resultado)
}

function dadoMejor() {
    let numero1 = 0
    let numero2 = 0
    let numero3 = 0
    let numero4 = 0
    let numero5 = 0
    let numero6 = 0
    let resultado 
    for (let i = 0; i<6000; i++) {
        resultado = (Math.random() * (6 - 1))
    }
    switch (resultado) {
        case 1:
            numero1 += numero1;
            break;
        case 2:
            numero2 += numero2;
            break;
        case 3:
            numero3 += numero3;
            break;
        case 4:
            numero4 += numero4;
            break;
        case 5:
            numero5 += numero5;
            break;
        case 6:
            numero6 += numero6;
            break;
    }
    document.write(numero1)
    document.write(numero2)
    document.write(numero3)
    document.write(numero4)
    document.write(numero5)
    document.write(numero6)
}

function volumen (radio) {
    let volumen = ((4/3) * Math.PI * Math.pow(radio,3))
    document.write("El volumen es: " + volumen)
}

function volumenArea (radio) {
    let volumen = ((4/3) * Math.PI * Math.pow(radio,3))
    let area = (Math.PI * Math.pow(radio,2))
    document.write("El volumen es: " + volumen + " y el area es: " + area)
}