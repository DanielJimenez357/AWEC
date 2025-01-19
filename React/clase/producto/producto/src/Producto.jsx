

import arrObjBDProductos from './json.js'

import ProductoList from './ProductoList.jsx'

export default function Producto () {
    return (
            <>
            {arrObjBDProductos.map((producto) => (
                <ProductoList key={producto.id} producto={producto}></ProductoList>
            ))}
            </>
        )
}