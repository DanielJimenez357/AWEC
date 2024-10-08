function abrirVentana(url) {
	let boton2 = window.document.createElement("button");
	let boton3 = window.document.createElement("button");
	let boton4 = window.document.createElement("button");
	boton2.innerText = "Cerrar ventana emergente";
	boton3.innerText = "Abrir nueva ventana";
	boton4.innerText = "Mandar mensaje a ventana secundaria";
	window.document.body.append(boton3);
    window.document.body.append(boton2);
	window.document.body.append(boton4);
	let nuevaVEntana;
	boton3.onclick = function () {
        nuevaVEntana = window.open("", "titulo", "width=500,height=400");
		let boton = nuevaVEntana.document.createElement("button");
		boton.innerText = "Cerrar ventana";
		nuevaVEntana.document.body.append(boton);
		boton.onclick = function () {
            nuevaVEntana.close();
		};
	};
    
    boton4.onclick = function () {
        recibirMensaje();
    };
    function recibirMensaje() {
        nuevaVEntana.document.write("Mensaje desde la pagina principal")
    }
	
	boton2.onclick = function () {
        nuevaVEntana.close();
	};

}

function generarVentanas() {
	for (let i = 1; i < 6; i++) {
		let nuevaVEntana = window.open("", "titulo " + i, "width=350,height=350");
		let boton = window.document.createElement("button");
		nuevaVEntana.moveTo(-innerWidth * 2 + i * 200, 100);
		nuevaVEntana.document.write("Ventana " + i);
		boton.innerText = "Cerrar ventana " + i;
		nuevaVEntana.document.body.append(boton);
		boton.onclick = function () {
			nuevaVEntana.close();
		};
	}
}

function redireccionar() {
	window.location.assign("https://www.pccomponentes.com");
}
