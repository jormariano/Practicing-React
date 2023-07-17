/* Clase 9 - 17' - Quede en los 50'

La etiqueta <a href:"https:instagram.com" target=_blank>Instagram </a> se utiliza para Enlaces Absolutos que te conectan con paginas externas a la aplicacion, sin que se cierre nuestra App gracias a target=_blank.
No utilizar etique <a> para conectar componentes dentro de la aplicacion.

Para conectar componentes dentro de nuestra aplicacion sin tener que recargar la page, se utiliza la Libreria React Router

1- En la terminal: npm install react-router-dom 
2- Importamos 3 componentes en la App:
BrowserRouter: Envuelve todos los componentes de la App y permite la navegacion entre ellos
Routes: Defini las rutas de navegacion
Route: Define una ruta en especifico

Hay que pasarle la prop "path" con la ruta a vincular y el "elemento" con el componente que se va a renderizar cuando haga click
El home se muestra en toda la App, por lo que va: <BrowserRouter> <NavBar /> <Routes>

Ejemplo en App.jsx:

import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
          <Route path="*" element={<h2>Sitio en construcción, vuelva más tarde</h2>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App

En cada Componente hay que importar: import {Link, NavLink} from "react-router-dom";

La diferencia entre Link y NavLink es que NavLink se utiliza para un menu de navegacion, conecta igual que Link, pero se coloca una Clase especial de CSS para darle estilo.

<Route path="/item/:idItem" element={<ItemDetailContainer/>} />
El :idItem se utiliza para identificar y mostrar un productos dentro de la categoria. En el componente es necesario utilizar un hook import {useParams} from "react-router-dom"

*/