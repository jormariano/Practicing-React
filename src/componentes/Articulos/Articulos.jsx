// Clase 8 - 9' CHILDREN: Permite reutilizar un componente, y en cada uso agregar una serie de elementos nuevos para que se vea diferente a las otras invocaciones en mi aplicacion. Se agregan elementos y se forma una nueva estructura.

import './Articulos.css'

const Articulos = ({img, titulo, children}) => {

    return (
        <article className='artBolonia'>
            <h2>Titulo: {titulo}</h2>
            <img src={img} alt={titulo}/>
            {children}
            <button>Leer articulo</button>
        </article>
    )
}

export default Articulos