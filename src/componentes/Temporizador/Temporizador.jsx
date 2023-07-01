import { useState, useEffect, useRef } from 'react'

// CLase 5 Componentes II - 1h 40'

const Temporizador = () => {

    const [segundos, setSegundos] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSegundos(segundos => segundos + 1);
        }, 1000)

    }, [])

    const detenerTemporizador = () => {
        clearInterval(intervalRef.current); // Detiene el temporizador
        intervalRef.current = null; // Limpia la referencia
    }

    return (
        <>
        <h3>Temporizador: {segundos} </h3>
        <button onClick={detenerTemporizador}> Detener</button>
        </>
    )
}

export default Temporizador