import { useState, useEffect } from "react"

const JSONPlace = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        // Puedo usar try y catch que permiten manejar un error. Si algo dentro del try falla, la ejecucion del codigo continua en el catch
        try {
            const pedirUsuarios = async () => {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await respuesta.json();
                setUsuarios(data);
            }
            pedirUsuarios();
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div>JSONPlace</div>
    )
}

export default JSONPlace