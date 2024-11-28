export const noCss = () => {
	document.querySelector("link[href='style.css']").href = "noStyle.css";
};

export const yesCss = () => {
	document.querySelector("link[href='noStyle.css']").href = "style.css";
};

//second part

const globalStyle = () => {
	const style = document.createElement("style");
	style.textContent = `
        * {
            margin: 0;
            padding: 0;
        }
        body {
            width: 100%;
            height: 100vh;
            font-family: Arial, Helvetica, sans-serif;
            display: flex;
            overflow: hidden;
        }
    `;
	document.head.appendChild(style);
};

const styleMain = () => {
	const style = document.createElement("style");
	style.textContent = `
        main {
            background-color: lemonchiffon;
            padding: 30px;
            width: 100%;
        }
        main p {
            margin: 20px;
            margin-left: 0;
        }
    `;
	document.head.appendChild(style);
};

const styleNav = () => {
	const style = document.createElement("style");
	style.textContent = `
        nav {
            background-color: lightgray;
            box-shadow: 1px 1px 1px 0px blue;
            width: 90%;
            margin-bottom: 20px;
        }
        nav > a {
            text-decoration: none;
            font-weight: 900;
        }
    `;
	document.head.appendChild(style);
};

const styleLateral = () => {
	const style = document.createElement("style");
	style.textContent = `
        .lateral {
            width: 200px;
            height: 100vh;
            background-color: lightskyblue;
        }
    `;
	document.head.appendChild(style);
};

const styleInvisible = () => {
	const style = document.createElement("style");
	style.textContent = `
        .invisible > :nth-child(2) {
            font-weight: 900;
        }
        .invisible > p {
            margin: 0;
        }
    `;
	document.head.appendChild(style);
};

const styleMarco = () => {
	const style = document.createElement("style");
	style.textContent = `
        .marco > p {
            background-color: yellow;
            border: solid 1px black;
            padding: 5px;
        }
    `;
	document.head.appendChild(style);
};

export const callFunctions = () => {
	globalStyle();
	styleMain();
	styleNav();
	styleLateral();
	styleInvisible();
	styleMarco();
};

export const deleteStyle = () => {
	let head = document.querySelectorAll("style:not([type])");
	for (let style of head) {
		style.remove();
	}
};

export const growFont = (number) => {
	let p2 = document.querySelector("p");
	let p = document.querySelectorAll("p");
	let currentFont = parseFloat(window.getComputedStyle(p2).fontSize);
	switch (number) {
		case 1:
			currentFont += 1;
			break;

		case 2:
			currentFont -= 1;
			break;

		case 3:
			currentFont = 16;
	}
	for (let element of p) {
		element.style.fontSize = currentFont + "px";
	}
};

export const changePosition = (number) => {
	let div = document.querySelector("#primero");
	switch (number) {
		case 1:
			div.style.textAlign = "start";
			break;

		case 2:
			div.style.textAlign = "justify";
			break;
	}
};
