
import { useState, useEffect } from 'react'

// Clase 5 Componentes II - 1h 10' 

const Categorias = () => {
    const [categoria, setCategoria] = useState("");

    // Pasar dos parametros (), el primero es una funcion de callback y el segundo un array de dependencias
    useEffect(() => {
        document.title = `Categoria: ${categoria}`;
    }, [categoria]);

    // Funcion manejadora Handle
    const handleClick = (categoria) => {
        setCategoria(categoria);
    }

    return (
        <>
            <h2> Categorias de productos </h2>
            <button onClick={ () => handleClick("ALEMANIA")}> ALEMANIA </button>
            <button onClick={ () => handleClick("BRASIL")}> BRASIL </button>
            <button onClick={ () => handleClick("TAILANDIA")}> TAILANDIA </button>
            <button onClick={ () => handleClick("ALBANIA")}> ALBANIA </button>
        </>
    )
}

export default Categorias