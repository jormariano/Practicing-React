import { useState } from "react"

/* Clase 4: Componentes 1 - 55'
Hay que trabajar con un ESTADO que va a guardar el num de productos seleccionados por el cliente.
ESTADO: Es un objeto que contiene informacion del componente que puede cambiar durante la ejecucion de la App 
Para crear y manipular el ESTADO hay que ayudarnos con la libreria propia de React, llamada HOOKS.
Hooks se llama usando "useState" 
useState retorna un Array con dos elementos, el primero es el estado en si (ej: contador) y el segundo es una funcion que permite cambiar/actualizar el valor del estado. La funcion siempre arranca con setNombredeestado. Dentro de useState() va el num de inicializacion del contador. */

const ItemCount = () => {
  const [contador, setContador] = useState(1);

  const incrementar = () => {
    if (contador < 10){
    setContador (contador + 1);
  }
}

  const decrementar = () => {
    if (contador > 1) {
    setContador (contador - 1);
  }
}

  return (
    <>
      <button onClick={incrementar}> + </button>
      <p> {contador} </p>
      <button onClick={decrementar}> - </button>
    </>
  )
}

// Las funciones van sin () porque queremos que se ejecuten unicamente cuando el usuario haga click en los botones.

export default ItemCount