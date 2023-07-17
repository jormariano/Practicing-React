import { useState, useEffect } from "react"

const Automatico = () => {

    const [mostrarMsj, setMostrarMsj] = useState(false);

    useEffect( () => {

        let tiempoEspera = null;

        const reiniciarTemporizador = () => {

            clearTimeout(tiempoEspera);
            tiempoEspera = setTimeout( () => {
                setMostrarMsj(true);
            }, 5000); // Son 5 segundos
        }

        const handlerUser = () => {
            reiniciarTemporizador();
        }

        window.addEventListener("mousemove", handlerUser);
        window.addEventListener("keydown", handlerUser);

        // Se trabaja con toda la ventana del navegador

        reiniciarTemporizador();

        return () => {
            window.removeEventListener("mousemove", handlerUser);
            window.removeEventListener("keydown", handlerUser);
            clearTimeout(tiempoEspera);
        }

    }, [])

    const seguirMirando = () => {
        setMostrarMsj(false);
    }

  return (
    <div>
        {
            mostrarMsj && (
                <div>
                    <p>Sigues ahi?</p>
                    <button onClick={seguirMirando}>Seguir mirando</button>
                </div>
            )
        }
        <h2>Contenido a Reproducir</h2>
        <p>Tus series favoritas son las siguientes</p>
    </div>
  )
}

export default Automatico