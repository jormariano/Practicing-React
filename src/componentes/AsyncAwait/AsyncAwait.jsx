import { useState, useEffect } from "react"

// Array de productos:

const misProductos = [
    { nombre: 'Ebook', precio: 500 },
    { nombre: 'Ipad', precio: 1500 },
    { nombre: 'Notebook', precio: 4500 },
]

// Funcion que retorna una promesa con retraso de 2 segundos

const getMisProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}

const AsyncAwait = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        console.log(getMisProductos());
        // Si quiero que termine una tarea antes de avanzar con la siguiente, se utiliza la sintaxis "async await"

        const pedirDatos = async () => {
            const respuestaDatos = await getMisProductos();
            setProductos(respuestaDatos);
        }

        pedirDatos()

    }, [])

    return (
        <div>
            <h2>Mis Productos: </h2>
                {
                    productos.map( (producto, index) => {
                        return (
                            <div key={index}> 
                                <p>Nombre: {producto.nombre}</p>
                                <p>Precio: {producto.precio}</p>
                            </div>
                        )
                    } )

                }
        </div>
    )
}

export default AsyncAwait