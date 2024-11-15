var empleados = [];


class Empleado {
    constructor (codigo, nombre, telefono) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.telefono = telefono;
    };
}

const subir = (empl) => {
	empleados.push(empl);
};

export { Empleado, empleados, subir };
