// Clase 8 - 1h 9' . En React hay patrones de diseño para reutilizar Componentes y cuando lo devuelva tenga una funcionalidad nueva. High Order Componets (HOC) y Render Props (ejemplo en Login).

// Ejemplo 1: Voy a crear una función que recibe un componente llamado "Mensaje" que solo muestra un párrafo y le voy a agregar un título.

export const mensajeTitulo = (Mensaje) => {
  return function () {
    return (
      <>
        <h2>Hola Proyecto</h2>
        <Mensaje />
      </>
    )
  }
}

// Clase 8 - 1h 22'. Ejemplo de inflacion en Arg con aumento de precios

export const aumentoPrecio = (Producto) => {
  return function ({nombre, precio}) {
    let nuevoPrecio = precio + 500;
    return <Producto nombre={nombre} precio={nuevoPrecio}/>
  }
}

const Hoc = () => {
  return (
    <div>

    </div>
  )
}

export default Hoc