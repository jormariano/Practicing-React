import { useState } from "react"

/* Clase 4: Componentes 1 - 55'
Hay que trabajar con un ESTADO que va a guardar el num de productos seleccionados por el cliente.
ESTADO: Es un objeto que contiene informacion del componente que puede cambiar durante la ejecucion de la App 
Para crear y manipular el ESTADO hay que ayudarnos con la libreria propia de React, llamada HOOKS.
Hooks se llama usando "useState" 
useState retorna un Array con dos elementos, el primero es el estado en si (ej: contador) y el segundo es una funcion que permite cambiar/actualizar el valor del estado. La funcion siempre arranca con setNombredeestado. Dentro de useState() va el num de inicializacion del contador. 
Clase 5 18': 
Los datos se reciben por props de algun componente superior de algun componente padre. Las props se reciben desestructuradas en dos variables {stock, inicial} */

const ItemCount = ({stock, inicial}) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  }

  const agregarCarrito = () => {
    console.log(`Agregado ${contador} items`)
  }

  return (
    <>
      <h3>Contador</h3>
      <button onClick={incrementar}> + </button>
      <strong> {contador} </strong>
      <button onClick={decrementar}> - </button>
      <button onClick={agregarCarrito}>Agregar al Carrito</button>
    </>
  )
}

// Las funciones van sin () porque queremos que se ejecuten unicamente cuando el usuario haga click en los botones.

export default ItemCount