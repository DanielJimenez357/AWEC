const get = () =>{
    fetch ('http://localhost:3000/users')
    .then(res=>res.json())
    .then(json=>style(json))
}

const style = (data) =>{
    let user = document.querySelector(".userList")
    let table = document.createElement("table")
    let header = document.createElement("tr")
    let header1 = document.createElement("th")
    let header2 = document.createElement("th")
    header1.innerHTML = "id"
    header2.innerHTML = "usuario"
    header.appendChild(header1)
    header.appendChild(header2)
    table.appendChild(header)

    data.forEach(object => {
        let row = document.createElement("tr")
            for (const attribute in object) {
                let col = document.createElement("th")
                col.innerHTML = object[attribute]
                row.appendChild(col)
            }
            let button = document.createElement("button")
            button.innerHTML = "Eliminar"
            button.addEventListener("click", () => {
                erase(object.id) 
            })
            row.appendChild(button)
            table.appendChild(row)
    });
    user.appendChild(table)
}

const getValues = () => {
    let id = document.get
}


const erase = (id) => {
    fetch ('http://localhost:3000/users/' + id, {method: 'Delete'})
}
const add = (id, username) => {
    fetch ('http://localhost:3000/users/', {method: 'Post',
        body: JSON.stringify({
            "id": id,
            "user": username
        })
    })
}



document.getElementById("formulario").addEventListener("submit", (e) =>{
    e.preventDefault()

    let form = new FormData (e.target)

    console.log(form.get("id"))

    add(form.get("id"), form.get("user"))

})





setInterval(100, get())