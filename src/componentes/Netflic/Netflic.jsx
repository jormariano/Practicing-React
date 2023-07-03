import { useState, useEffect } from "react"

const Netflic = () => {
    // Generamos un estado y arrancamos con un array[] vacio
    const [peliculas, setPeliculas] = useState([]);
    // Generamos un estado para el campo de busqueda de la pelicula deseada y pasamos un string"" vacio
    const [busqueda, setBusqueda] = useState("");
    // Generamos una constante con la KEY de la API para poder usarla. Aca uso la del profe p/ no crearme un usuario
    const KEY_prestada = "c9f04fa4";

    useEffect(() => {
        // Utilizamos una plantilla literal para usar la url con la KEY & para sumar y s esta en documentacion de la API para buscar titulo de las peliculas que se buscan.
        fetch(`http://www.omdbapi.com/?apikey=${KEY_prestada}&s=${busqueda}`)
            .then(respuesta => respuesta.json())
            .then(data => {
                setPeliculas(data.Search)
            })
            .catch(error => console.log(error))

    }, [busqueda])

    // Funcion para tomar dato del fomulario.

    const manejadorSubmit = (event) => {
        event.preventDefault();
        setBusqueda(event.target.busqueda.value);
        event.target.busqueda.value = "";
    }

    return (
        <div>
            <h2>Netflic</h2>
            <form onSubmit={manejadorSubmit}>
                <input type="text" name="busqueda"/>
                <button type="submit">Buscar</button>
            </form>

            <ul>
                {
                    peliculas === undefined ? <h3>La pelicula no esta disponible</h3> : peliculas.map(peli => {
                        return (
                            <li key={peli.imdbID}> <img src={peli.Poster} alt={peli.Title} /> {peli.Title} </li>
                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default Netflic