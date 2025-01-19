

function Button () {
    return (<button onClick={funcion1}>
    Hola
    </button>)
}

function Color () {
    const color = {
        color: "red"
    }

    return color
}


function funcion1 ({children}) {
    let body = document.querySelector("body")
    return (<h2>{body.appendChild(children)}</h2>)
}

function Tiempo () {

    let fecha = new Date

    return(fecha) 
}

export {Button}