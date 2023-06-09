// Clase 4: Componentes 1 - 20'

import './TituloPrincipal.css'

// PROPS: La informacion se recibe desde el componente padre (App.jsx) a su componente hijo (TituloPrincipal.jsx) por parametros (props). Tambien utilizando sugar syntax se puede desestructurar el objeto.

const TituloPrincipal = ({titulo, dia}) => {
  return (
    <>
    <h1> {titulo} </h1>
    <h2>Hoy es día {dia}</h2>
    </>
  )
}

export default TituloPrincipal