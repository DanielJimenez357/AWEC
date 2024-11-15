import { arrArticulos } from "./modulos/articulos.mjs";

//array de arrow funtions

function retornarArticulos() {
	let tabla = document.getElementById("tabla");

  let cabecera = document.getElementById("cabecera")

  let encabezados = tabla.createTHead()
  encabezados.appendChild(cabecera)

	arrArticulos.forEach((articulo) => {
		let propiedad = Object.keys(articulo);
		let contador2 = 0;
		let row = tabla.insertRow(-1);
    
		propiedad.forEach((element) => {
      let celda = row.insertCell(contador2);
      
			if (contador2 === 5) {
        celda.innerHTML = '<img  src="' + articulo[element] + '" style="width: 100px"/>';
        celda.style.width = "30px"
			} else if (contador2 === 6) {
        celda.innerHTML = articulo[element].rate;
				let celda2 = row.insertCell(contador2 + 1);
				celda2.innerHTML = articulo[element].count;
				contador2++;
        celda2.style.border = "solid gray"
        celda2.style.textAlign = "center"
			} else {
        celda.innerHTML = articulo[element];
			}
			contador2++;
      celda.style.border = "solid gray"
      celda.style.textAlign = "center"
		});
	});

  tabla.style.border = "solid black"
}

retornarArticulos();
