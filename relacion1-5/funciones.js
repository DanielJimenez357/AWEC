function onlyUniques(...valores) {
    let array1 = [];

    for (let i = 0; i < valores.length; i++) {
        let noRepetido = true;

        for (let j = 0; j < array1.length; j++) {
            if (valores[i] === array1[j]) {
                noRepetido = false;
                break;
            }
        }

        if (noRepetido) {
            array1.push(valores[i]);
        }
    }

    document.write(array1);
}

function squareAndSum (...numeros){
    let suma = 0
    for (let i = 0; i<numeros.length; i++) {
        suma = suma + (numeros[i]*numeros[i])
    }
    document.write(suma)
}