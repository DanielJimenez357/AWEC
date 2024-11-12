import { arrArticulos } from "./modulos/articulos.mjs";

//array de arrow funtions

function retornarArticulos() {
	let tabla = document.createElement("table");
  let contador1 = 0
	arrArticulos.forEach((articulo) => {
		let propiedad = Object.keys(articulo);
		let contador2 = 0;
		let row = tabla.insertRow(contador1);

		propiedad.forEach((element) => {
      let celda = row.insertCell(contador2)

      if (contador2 === 5) {
        celda.innerHTML = '<img src="' + propiedad[element] + '"/>'
      }

      if (contador2 === 6) {
        celda.innerHTML = articulo[element].rate
        celda = row.insertCell(7)
        celda.innerHTML = articulo[element].count
        
      } else {
        celda.innerHTML = articulo[element]
      }
      contador2++
      
		})
    
    contador1++  
	});
  document.body.appendChild(tabla)
}

retornarArticulos();
