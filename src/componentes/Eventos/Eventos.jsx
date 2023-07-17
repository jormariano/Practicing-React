/*

HAY DOS TIPOS DE EVENTOS:

1- EVENTOS MANUALES:

2- EVENTOS AUTOMATICOS:

Hay 3 formas de escuchar los eventos del usuario:
1- Generando una referencia con alguna variable a ese elemento del DOM, utilizando .addEventListener()

Ejemplo: const titulo = document.getElementById
titulo.addEventListener("click", () => { 
    console.log("Hola mundo");
})

2- Otra forma era con el nodo utilizando la propiedad onClick

Ejemplo:

titulo.onClick = () => {
    console.log("Hola mundo");
}

3- No se recomienda en JavaScript, pero si en React: utilizando la etiqueta directamente

Ejemplo: <button onClick = "funcion()"></button>

*/

import './Eventos.css'
import { useState } from 'react';

const Eventos = () => {
    // handler = manejador de eventos

    const handlerClick = () => {
        console.log("click");
    }

    const [input, setInput] = useState("");

    const handlerInput = (event) => {
        setInput(event.target.value);
        // la propiedad target es la referencia al objeto del DOM que dispara el evento.
        
        console.log(input)
    }

    return (
        <>
            <div className="caja1">
                <h2>Eventos </h2>
                <button onClick={handlerClick}>Haceme click</button>
            </div>
            <div className="caja2"
                onMouseEnter={() => console.log("Entraste a la caja")}
                onMouseMove={() => console.log("Pasaste por la caja")}
                onMouseLeave={() => console.log("Saliste de la caja")}
            >
            </div>
            <form>
                <h2>Formulario de prueba</h2>
                <h3>{input}</h3>
                <label htmlFor='campo'> Ingrese algo:  </label>
                <input type='text' id='campo' onChange={handlerInput} 
                onKeyDown={ () => console.log("Presionaste una tecla") }
                onKeyUp={ () => console.log("Soltaste una tecla") }/>

                {/* htmlFor es igual al for que usabamos en html 
                onChange se dispara cuando el usuario cambia el valor del input */}

            </form>
        </>
    )
}

export default Eventos