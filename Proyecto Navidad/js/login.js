
/**
 * Clase para gestionar los usuarios, login y registro
 */
class user {

    /**
     * Crea el objeto que usara la clase para la gestion del usuario
     * @param {{Object.atributte}}  username - nombre del usuario
     * @param {{Object.atributte}}  password - contraseña del usuario
     * @param {{Object.atributte}}  email    - email del usuario
     */
    constructor({username, password, email}){
        this.user = {
            username,
            password,
            email,
        }
    }

    /**
     * Toma los valores del formulario y rellena los atributos del usuario
     * @returns {Object} user - atributos del formulario de registro
     */
    makeUser({username, password, email}){
        this.user.username = username
        this.user.password = password
        this.user.email    = email 
        return (this.user)
    }

    registerUser(){
    }

}


/**
 * Funcion que toma los valores del formulario y devuelve un objeto con sus valores
 * @returns {Object}  userAtributes - objeto con los datos del usuario
 */
const userAtributtes = () =>{
    let userAtributtes = {
        username: document.querySelector("input[type=text"),
        password: document.querySelector("input[type=password"),
        email   : document.querySelector("input[type=email"),
    }
    return userAtributtes
}

//añade un event listener al boton
document.querySelector("button").addEventListener("click", ()=>{
    let User = new user()
    User.makeUser
})