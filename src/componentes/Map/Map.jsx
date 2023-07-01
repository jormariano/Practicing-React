// El metodo MAP en React se utiliza generalmente para crear una lista de componentes a partir de un array de datos.

const Map = () => {

  const fotos = [
    {id: 1, nombre: "Berlin ", precio: 50},
    {id: 2, nombre: "Munich ", precio: 50},
    {id: 3, nombre: "Barcelona ", precio: 50},
    {id: 4, nombre: "Madrid ", precio: 50},
  ]

  return (
    <div>
      <h2>Fotos para comprar</h2>
      <ul>
        {
          fotos.map( foto => (
            <li key={foto.id}>
              <span>{foto.nombre}</span>
              <span>{foto.precio}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Map