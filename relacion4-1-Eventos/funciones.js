const click = () => {
	document.addEventListener("click", () => alert("Hola"));
};

const updatePosition = (event, positionY, positionX) => {
	positionY.innerHTML = event.clientY;
	positionX.innerHTML = event.clientX;
};

const timePassed = () => {
	let time = 0;
	setInterval(() => {
		let clock = document.getElementById("time");
		time = time + 1;
		clock.innerHTML = time;
	}, 1000);
};

export { click, updatePosition, timePassed };

export const makeCanvas = () => {
	let body = document.getElementsByTagName("body")[0];
	let table = document.createElement("ul");
	table.style.cssText = `
        display: grid;
        width: 500px;
        height: 500px;
        grid-template-rows: repeat(10, 1fr);
        grid-template-columns: repeat(10, 1fr);
    `;
	for (let i = 0; i < 100; i++) {
		let element = document.createElement("li");
		element.addEventListener("mousemove", (event) => {
			if (event.ctrlKey) event.target.style.background = "red";
			else if (event.shiftKey) event.target.style.background = "blue";
		});
		element.style.cssText = `
            list-style: none;
            border: gray solid 1px
        `;
		table.appendChild(element);
	}
	body.appendChild(table);
};

export const makeCanvasUpdate = () => {
	let body = document.getElementsByTagName("body")[0];
	let table = document.createElement("ul");
	table.style.cssText = `
        display: grid;
        width: 500px;
        height: 500px;
        grid-template-rows: repeat(10, 1fr);
        grid-template-columns: repeat(10, 1fr);
    `;
	for (let i = 0; i < 100; i++) {
		let element = document.createElement("li");
		element.addEventListener("mousemove", (event) => {
			if (event.ctrlKey) event.target.style.background = "red";
			else if (event.shiftKey) event.target.style.background = "blue";
			else if (event.altKey) event.target.style.background = "white";
		});
		element.style.cssText = `
            list-style: none;
            border: gray solid 1px
        `;
		table.appendChild(element);
	}
	let button = document.createElement("button");
	button.innerHTML = "Borrar tablero";
	button.addEventListener("click", () => {
		let liTable = document.getElementsByTagName("li");
		for (const element of liTable) {
			element.style.background = "white";
		}
	});

	body.appendChild(table);
	body.appendChild(button);
};

export const changeImage = () => {
	let image = document.getElementById("imagen");
	image.addEventListener("mouseover", () => {
		image.src = "./imagen2.jpeg";
	});
	image.addEventListener("mouseout", () => {
		image.src = "./imagen1.jpeg";
	});
};

export const changeColor = () => {
	let liList = document.getElementsByTagName("li");
	for (const element of liList) {
		element.addEventListener("mouseover", () => {
			element.style.background = element.innerHTML;
		});
		element.addEventListener("mouseout", () => {
			element.innerHTML = element.id;
		});
	}
};

export const reset = () => {
	let inputs = document.getElementsByTagName("input");
	for (const element of inputs) {
		element.value = " ";
	}
};

export const hint = () => {
	let inputs = document.getElementsByTagName("input");
	let labels = document.getElementsByTagName("label");
	let help = document.getElementById("help");
	for (let i = 0; i < 3; i++) {
		inputs[i].addEventListener("focus", () => {
			help.innerHTML = "introduce tu " + labels[i].innerHTML;
		});
	}
};

export const transform = () => {
	let input = document.getElementsByTagName("input")[0];
	let string = input.value;
	let transformedString = "";
	for (let i = 0; i < string.length; i++) {
		if (string.at(i) === "&") {
			transformedString += "and";
		} else {
			transformedString += string.at(i);
		}
	}
	input.value = transformedString;
};

export const makeBalls = (ballNumber) => {
	for (let i = 0; i<ballNumber; i++) {
		let body = document.querySelector("body")
		let ball = document.createElement("div")
		ball.className = ball
		ball.style.cssText = `
			width: 80px;
				height: 80px;
				background-image: url(imagen2.jpeg);
				background-size: cover;
				background-repeat: no-repeat;
				border-radius: 100px;
		`
		body.appendChild(ball)
		ball.onmousedown = function (event) {
			let shiftX = event.clientX - ball.getBoundingClientRect().left;
			let shiftY = event.clientY - ball.getBoundingClientRect().top;
		
			ball.style.position = "absolute";
			ball.style.zIndex = 1000;
			document.body.append(ball);
		
			moveAt(event.pageX, event.pageY);
		
			function moveAt(pageX, pageY) {
				ball.style.left = pageX - shiftX + "px";
				ball.style.top = pageY - shiftY + "px";
			}
		
			function onMouseMove(event) {
				moveAt(event.pageX, event.pageY);
			}
		
			document.addEventListener("mousemove", onMouseMove);
		
			ball.onmouseup = function () {
				document.removeEventListener("mousemove", onMouseMove);
				ball.onmouseup = null;
			};
		};
		
		ball.ondragstart = function () {
			return false;
		};
	}
}

