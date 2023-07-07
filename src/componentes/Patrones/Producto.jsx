import React from 'react'

const Producto = ({nombre, precio}) => {
  return (
    <div>
        <h3>Producto: {nombre}</h3>
        <h4>Precio: {precio}</h4>
    </div>
  )
}

export default Producto