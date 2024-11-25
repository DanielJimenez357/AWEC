const click = () => {
  document.addEventListener("click", () => alert("Hola"));
};

const updatePosition = (event, positionY, positionX) => {
  positionY.innerHTML = event.clientY;
  positionX.innerHTML = event.clientX;
};

const timePassed = () => {
  let clock = setInterval(() => {
    time += 1
  }, 1000);
  onload()
};

export { click, updatePosition, timePassed };
