import { arrArticulos } from "./articulos.mjs";

export class clientes {
	constructor() {
		this.listaClientes = [];
		document.querySelector(".entrar").addEventListener("click", () => {
			const usuario = this.crearObjetoUsuario();
			this.buscarUsuario(usuario);
		});
		document.querySelector(".registrarse").addEventListener("click", () => {
			const nuevoUsuario = this.crearObjetoUsuario();
			this.crearCliente(nuevoUsuario);
		});
	}

	crearObjetoUsuario = () => {
		let nombre = document.querySelector(".usuario").value;
		let contraseña = document.querySelector(".contraseña").value;
		return { usuario: nombre, contraseña: contraseña };
	};

	crearCliente = (clienteNR) => {
		let cliente = {
			usuario: clienteNR.usuario,
			contraseña: clienteNR.contraseña,
		};
		this.listaClientes.push(cliente);
		console.log(this.listaClientes);
	};

	buscarUsuario = (usuario) => {
		if (
			this.listaClientes.some(
				(usuario1) =>
					usuario1.usuario === usuario.usuario &&
					usuario1.contraseña === usuario.contraseña
			)
		) {
			window.location.href = "./index.html";
		} else {
			alert(
				"ERROR. Puede que no estes registrado, o que te hayas equivocado con el usuario y la contraseña"
			);
		}
	};
}

export class expositorArticulos {
	constructor() {
		let listaArticulos = arrArticulos;
        let contenedor = document.querySelector(".expositor")
        for (const element of listaArticulos) {
            let articulo = document.createElement("p")
            articulo.innerHTML = element.title
            articulo.style.cssText = `
                padding: 20px;
                background-color: steelblue;
            `
            articulo.addEventListener("click", (e) => {
                e.target.style.cssText = `
                    background-color: red;
                `
            })
            contenedor.appendChild(articulo)
        }
	}
}