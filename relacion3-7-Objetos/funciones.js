const persona = {
    nombre: "Daniel",
    edad: 19,
    mayorEdad () {
        if (this.edad >= 18)
            return "Es mayor de edad"
        else 
            return "Es menor de edad"
    },
}

function crearPersona (nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    this.mayorEdad = function() {
        if (this.edad >= 18)
            return "Es mayor de edad"
        else 
            return "Es menor de edad"
    }
}

pablo = new crearPersona("Pablo", 21)
juan = new crearPersona("Juan", 23)
lucia = new crearPersona("Lucia", 19)

const personas = [
    pablo,
    juan,
    lucia
]


const edadMedia = arr => {
    let sumaEdad = 0
    let contador = 0
    arr.forEach(element => {
    sumaEdad += element.edad
    contador++
    })
    return sumaEdad/contador
};



function Telefono (numero) {
    this.numero = numero
    this.llamadas = 0
    this.llamar = function () {
        this.llamadas = this.llamadas + 1
    }
}


function punto (x,y) {
    this.x = x
    this.y = y
    this.mostrar = function () {
        return puntos = this.x +","+ this.y
    }
}



function recta (punto1, punto2) {
    this.punto1 = punto1
    this.punto2 = punto2
}


function casa (calle, numero, codigo) {
    this.calle = calle
    this.numero = numero
    this.codigo = codigo
    setCalle = function (calle) {
        this.calle = calle
    }
    setNumero = function (numero) {
        this.numero = numero
    }
    setCodigo = function (codigo) {
        this.codigo = codigo
    }
    imprimirCalle = function () {
        document.write(this.calle)
    }
    imprimirNumero = function () {
        document.write(this.numero)
    }
    imprimirCodigo = function () {
        document.write(this.codigo)
    }
    document.write("Nueva casa en calle: " + this.calle + "," + this.numero + "," + this.codigo )
}

function Alumno(id, nombre, notaMedia = 5.00) {
    this.id = id
    this.nombre = nombre
    this.notaMedia = notaMedia
}
function Colegio (nombre, numAulas, numAlumnos) {
    this.nombre = nombre
    this.numAulas = numAulas
    this.numAlumnos = numAlumnos
    this.alumnos = []

    for (let i = 0; i < numAlumnos; i++) 
        this.alumnos.push(new Alumno(i, " alumno "+i, 5.00))
    

    this.consultarNotaMedia = function(id) {
        let alumno = this.alumnos.find(al => al.id === id)
        if (alumno) 
            document.write(" La nota media del alumno " + alumno.nombre + " es: " + alumno.notaMedia)
        else 
            document.write("Alumno no encontrado.")
}       
    

    this.modificarNotaMedia = function(id, nuevaNota) {
        let alumno = this.alumnos.find(al => al.id === id)
        if (alumno) {
            alumno.notaMedia = nuevaNota
            document.write(" La nueva nota media del alumno " + alumno.nombre +  " es: " + alumno.notaMedia)
        }
        else 
            document.write("Alumno no encontrado.")
}
}