function maximo(numero) {
    let valor = numero.split(",")
    let mayor = -99
    for (let i = 0; i < valor.length; i++) {
        if (mayor < valor[i]) {
            mayor = valor[i]
        }
    }
    document.write(mayor)
}

function dado() {
    let resultado = Math.round(Math.random() * 6)
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
        resultado = Math.ceil(Math.random() * 6)
        switch (resultado) {
        case 1:
            numero1++;
            break;
        case 2:
            numero2++;
            break;
        case 3:
            numero3++;
            break;
        case 4:
            numero4++;
            break;
        case 5:
            numero5++;
            break;
        case 6:
            numero6++;
            break;
    }
    }
    
    document.write("Numero 1: " + numero1 + "<br>" )
    document.write("Numero 2: " + numero2 + "<br>" )
    document.write("Numero 3: " + numero3 + "<br>" )
    document.write("Numero 4: " + numero4 + "<br>" )
    document.write("Numero 5: " + numero5 + "<br>" )
    document.write("Numero 6: " + numero6 + "<br>" )
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

function potencias (valor1, valor2) {
    if (valor2 === 0) {
        return 1
    }

    return valor1 * potencias(valor1, valor2 -1)
}

function factorial () {
    document.write("<table >")
    document.write("<th>Numero</th><th>Factorial</th>")
    for (let i = 1; i<11; i++) {
        let numero = 1
        for (let j = i; j> 0; j --) {
            numero *= j
        }
        document.write("<tr><td>" + i + "</td><td>" + numero + "</td></tr>")
    }

    document.write("</table>")
}






