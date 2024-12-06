export const validarMayuscula = (string) => {
	let regularExpresion = /[A-Z]/;
	return regularExpresion.test(string);
};

export const validarCaracteresEspeciales = (string) => {
	let regularExpresion = /[!@#$%^&]/;
	return regularExpresion.test(string);
};

export const validarCorreo = (string) => {
	let regularExpresion = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;
	return regularExpresion.test(string);
};

export const validarTarjetaCredito = (string) => {
	let regularExpresion = /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/;
	return regularExpresion.test(string);
};

export const validarLongitud = (string) => {
	let regularExpresion = /.{8,}/;
	return regularExpresion.test(string);
};

export const validarNumero = (string) => {
	let regularExpresion = /[0-9]/;
	return regularExpresion.test(string);
};

export const validateRegularExpression = () => {
	let regExp = [
		/([aA-zZ]{2,20})/,
		/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s-]+$/,
		/^\d{8}[A-Z]$/,
		/^[6789]\d{8}$/,
		/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		/^[a-zA-Z][a-zA-Z0-9._-]{2,15}$/,
	];
	let form = document.querySelectorAll("input");
	form.forEach((element, index) => {
		element.addEventListener("blur", () => {
			let text = element.value;
			if (!regExp[index].test(text)) {
				element.style.background = "red";
			} else {
				element.style.background = "lightgreen";
			}
		});
	});
};

export const checkLowerCase = () => {
	let input = document.querySelector("input").value;
	let regEx = /[a-z]+/;
	let label1 = document.querySelector(".li1");
	if (regEx.test(input)) {
		label1.style.display = "none";
	} else {
		label1.style.display = "contents";
	}
};

export const checkUpperCase = () => {
	let input = document.querySelector("input").value;
	let regEx = /[A-Z]+/;
	let label2 = document.querySelector(".li2");
	if (regEx.test(input)) {
		label2.style.display = "none";
	} else {
		label2.style.display = "contents";
	}
};

export const checkLenght = () => {
	let input = document.querySelector("input").value;
	let regEx = /.{6,}/;
	let label3 = document.querySelector(".li3");
	if (regEx.test(input)) {
		label3.style.display = "none";
	} else {
		label3.style.display = "contents";
	}
};

//se que no es lo mejor copiarlo solo para cambiar un par de cosas y que lo suyo es parametrizarlo
export const validateRegularExpressionEj2 = () => {
	let regExp = [
		/([aA-zZ]{2,20})/,
		/([aA-zZ]{2,20})/,
		/^\d{8}[A-Z]$/,
		/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		/^[6789]\d{8}$/,
		/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
	];
	let form = document.querySelectorAll(".campos > input");
	form.forEach((element, index) => {
		element.addEventListener("blur", () => {
			let text = element.value;
			if (!regExp[index].test(text)) {
				element.style.background = "red";
			} else {
				element.style.background = "lightgreen";
			}
		});
	});
};

export const changeLanguage = (language) => {
	let english = [
		"Welcome to Crowdrise",
		"Let's get you all set up so you can verify your nonprofit and beggin setting up your first campaign!",
		"Already have an account?",
		"First name",
		"Last name",
		"Phone",
		"Email",
		"Password",
		"Confirm Password",
		"Yes, I want to receive a Crowdrise's emails",
		"I agreee to the Terms. Privacy Policy and fees",
		"Sign Up",
		"Don't work for a nonprofit? You can still fundraise for one",
	];
	let español = [
		"Bienvenido a Crowdrise",
		"¡Vamos a configurarte para que puedas verificar tu organización sin fines de lucro y comenzar a configurar tu primera campaña!",
		"¿Ya tienes una cuenta?",
		"Nombre",
		"Apellido",
		"Teléfono",
		"Correo electrónico",
		"Contraseña",
		"Confirmar contraseña",
		"Sí, quiero recibir correos de Crowdrise",
		"Acepto los Términos, la Política de Privacidad y las tarifas",
		"Regístrate",
		"¿No trabajas para una organización sin fines de lucro? Aun así puedes recaudar fondos para una",
	];

	let text = document.querySelectorAll(".changeLanguage")

	switch (language) {
		case "en":
			text.forEach((element, index )=> {
				element.innerHTML = english[index]
			});
			break;

		case "es":
			text.forEach((element, index )=> {
				element.innerHTML = español[index]
			});
			break;
	}
};
