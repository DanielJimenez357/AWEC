function onlyUniques (...valores) {
    let array1 = []
    for (let i = 0; i<valores.length; i++) {
        for (let j=0;j<array1,length;j++) {

            if (valores.at(i) == array1.at(j)) {
                array1.push(valores.at(i))
            } else {

            }
        }
    }
    document.write(array1)
}