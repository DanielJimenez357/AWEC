const sum = (num1,num2) => num1+num2

const stringLength1 = str => ("the lenght of " + str + " is " + str.length)

const stringLength2 = str => {
    let length = str.length
    console.log("the lenght of" + str + "is" + length)
    return str.length
}



let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]




const showAlert = name => alerts[(Math.floor(Math.random()*alerts.length))] + " " +name




const hola = (name, age) => "Hello, I am " + name + " and I am " + age + " years old"

arra1 = [1,2,3,4,5]

const sumaArr = arr => arr.reduce((total, sum) => total+sum  , 0)




let eye = "eye"

const fire = Element => "bulls-" + Element



const fibonacci = (n) => {
    if (n<3)
        return 1
    return fibonacci(n-1) + fibonacci(n-2)
}