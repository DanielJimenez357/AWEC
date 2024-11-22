const click = () => {
    document.addEventListener("click", () => alert("Hola"))
}

const updatePosition  = () => {
    body.on
    let positionY = document.getElementById("divY")
    let positionX = document.getElementById("divX")
    positionX.innerHTML = Event.clientX
    positionY.innerHTML = Event.clientY
}



export {click, updatePosition}