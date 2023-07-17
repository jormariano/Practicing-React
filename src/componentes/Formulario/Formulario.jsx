import './Formulario.css'
import { useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")

    const handlerSubmit = (e) => {
        // Prevenimos la recarga de la pagina
        e.preventDefault();

        const newClient = {nombre, apellido};
        console.log(newClient);

        setNombre("");
        setApellido("");
    }

    return (
        <form onSubmit={handlerSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre: </label>
                <input type="text" className="form-control" id="nombre" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido: </label>
                <input type="text" className="form-control" id="apellido" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    )
}

// Utilizar https://magic.reactjs.net/htmltojsx.htm para por ejemplo pasar codigo de BootStrap a React JS y destildar la opcion de Create class para que no lo pase como un nuevo componente

export default Formulario