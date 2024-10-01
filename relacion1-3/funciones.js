function ageCalculator (ano, nacimiento){
    let edad1 = (ano - nacimiento)
    let edad2 = (edad1 -1) 
    document.write("La persona puede tener: " + edad2 + " o " +  edad1 + " años")
}

function SupplyCalculator (miEdad, edadMuerte, cantidadEstimada) {
    let cafesTotales = ((edadMuerte - miEdad) * 365 * cantidadEstimada)
    document.write("Necesitaras " + cafesTotales + " cafes para que te duren hasta que inques el pico a la edad de " + edadMuerte + " años")
}

function TheGeometrizer (radioCircunferencia) {
    tamanoCircunferencia = (2*Math.PI*radioCircunferencia)
    areaCircunferencia = (Math.PI*Math.pow(radioCircunferencia, 2))
    document.write("El tamaño de la circunferenca en metros es: " + tamanoCircunferencia.toFixed(2) + " y su area es: " + areaCircunferencia.toFixed(2))
}

function convertTemperature (gradosCelsius, gradosFahrenheit) {
    let gradosF = ((gradosCelsius * 9) / 5)
    let gradosC = ((gradosFahrenheit - 32) / 1.8)
    document.write(gradosCelsius + " grados Celsius son " + gradosF + " grados Fahrenheit y " + gradosFahrenheit + " grados Fahrenheit son " + gradosC.toFixed(2) + " grados Celsius")
}