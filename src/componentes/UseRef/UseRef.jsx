import { useRef } from "react"

// CLase 5 Componentes II - 1h 28' UseRef es un HOOK que me permite crear una referencia mutable (puedo cambiar el valor) que puede ser actualizada sin provocar una nueva renderizacion del componente. Ej: contador que almacena el num, pero por pantalla no se ve.

const UseRef = () => {

    const productosComprados = useRef(0);

    // Este Hook me retorna un objeto, con una propiedad que se llama current en donde se almacena el dato mutable que va cambiando.
    // Se asocia a una funcion que modifica el valor, pero que no se muestra/renderiza.

    const comprar = () => {
        productosComprados.current = productosComprados.current + 1;
        console.log(productosComprados.current);
    }

    return (
        <div>
            <h2>Productos comprados: {productosComprados.current} </h2>
            <button onClick = {comprar}> Comprar </button>
        </div>
    )
}

export default UseRef