// Clase 8 - 45' Creamos nuestro propio Hook para consumir APIs
import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.log(error))
    }, [url])

    return data;
}