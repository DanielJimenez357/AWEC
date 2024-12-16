
let enviar = document.querySelector("#enviar")
    enviar.addEventListener("click", (e)=>{
    e.preventDefault()
    request()
})


const request = () =>{
    let user = document.querySelector("#usuario")
    let password = document.querySelector("#contraseña")

    console.log( new usuario({
        user: user,
        password: password,
    }))
}



const valida = (usuario) => {
    fetch("http://localhost:3000/posts")
        .then(response => response.json())
        .then(data => data)
    console.log(products)
}