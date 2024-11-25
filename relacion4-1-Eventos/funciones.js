const click = () => {
    document.addEventListener("click", () => alert("Hola"))
}

const updatePosition  = (event ,positionY, positionX) => {
    
    positionY.innerHTML = event.clientY
    positionX.innerHTML = event.clientX
}

export {click, updatePosition}