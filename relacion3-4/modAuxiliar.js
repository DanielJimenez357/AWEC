function filterNumberGreaterThan (numbers, filter) {
    let numF = []
    numbers.forEach(element => {
        if (element > filter) 
            numF.push(element)
    });
    return numF
}

function toHackerSpeak (text) {
    let cadena = ""
    for (let i = 0; i<text.length; i++ ) {
        let letra = (text.at(i)).toLowerCase()
        switch (letra) {
            case 'a':
                cadena += "4";
                break;
            case 'e':
                cadena += "3";
                break;
            case 'i':
                cadena += "1";
                break;
            case 'o':
                cadena += "0";
                break;
            case 's':
                cadena += "5";
                break;
            default:
                cadena += letra;
        }
    }
    return cadena
}

function getFileExtension (file) {
    let bol = false
    let extension = ""
    for (let i = 0; i<file.length; i++ ) {
        let letra = file.at(i)
        if (bol== true) {
            extension +=letra
        }
            if (letra == ".") {
                bol = true
            }
        }
    return extension
}

function flatArray (arr) {
    let arrPlan = []
    arr.forEach(element => {
        arrPlan = arrPlan.concat(element)
    });
    return arrPlan
}   

function removeDuplicates (arr) {
    let arrR = []
    let bol = false
    arr.forEach(element1 => {
        arrR.forEach(element2 => {
            if (element1 == element2) 
                bol = true
        });
        if (!bol) 
            arrR.push(element1)
        bol = false
    });
    return arrR
}

function countLetter (letter, text) {
    let contador = "0"
    cadArr = text.split("")
    cadArr.forEach(element => {
        if (element == letter)
            contador++
    });
    return contador

}

function removeWords (str, words) {
    let arr = str.split(" ")
    let cadena = ""
    let bol = false
    arr.forEach(element1 => {
        words.forEach(element2 => {
            if (element1 == element2)
                bol = true 
        });
        if (!bol)
            cadena += element1 + " "
        bol = false
    });
    return cadena
}