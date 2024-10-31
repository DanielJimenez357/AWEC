

const operacion = (a,b,operacion) => operacion (a, b)
        console.log(operacion(3,5, (a,b) => a+b))

const elementos = [1,2,3,4,5] 

const articulo={codigo:5,nombre:'Teclado',precio:9.50}

        const iva =({precio}) => precio*1.21

        console.log(iva(articulo))
