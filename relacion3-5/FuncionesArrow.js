const sum = (num1,num2) => num1+num2

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

const stringLength1 = str => console.log("the lenght of" + str + "is" + str.length)

const stringLength2 = str => {
    let length = str.length
    console.log("the lenght of" + str + "is" + length)
    return str.length
}

let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]
    
const showAlert = name => alerts[(Math.floor(Math.random()*alert.length))] + name

const hola = (name, age) => "Hello, I am " + name + "and I am " + age + "years old"

const sumaArr = arr => 
    