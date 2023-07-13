// Asegurarme de estar en mi-tienda y al crear con Vite, en la Terminal se ejecuta con: npm run dev

// Es necesario importar el documento App.css para que se apliquen los estilos

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// JSX es una extension de JavaScript. Si escribo RAFCE genero una nueva App

// Esta linea de codigo ya no es necesaria y se puede borrar: import React from 'react'

// App es el componente principal de toda la aplicacion. 
// Un componente solo puede retornar un elemento, por eso una solucion es envolver todo en una etiqueta semantica como un <div> <nav>

import Articulos from './componentes/Articulos/Articulos'
import AsyncAwait from './componentes/AsyncAwait/AsyncAwait'
import Categorias from './componentes/Categorias/categorias'
import Email from './componentes/Email/Email'
import Home from './componentes/Home/Home'
import ItemCount from './componentes/ItemCount/ItemCount'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import JSONPlace from './componentes/JSONPlace/JSONPlace'
import localStorage from './componentes/LocalStorage/LocalStorage'
import Map from './componentes/Map/Map'
import NavBar from './componentes/NavBar/NavBar'
import Netflic from './componentes/Netflic/Netflic'
import Promesas from './componentes/Promesas/Promesas'
import Temporizador from './componentes/Temporizador/Temporizador'
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal'
import UseRef from './componentes/UseRef/UseRef'
import CrearContador from './componentes/CrearComponente/CrearContador'

// Clase 8. Importamos funcion y el componente.
import Mensaje from './componentes/Patrones/Mensaje'
import Producto from './componentes/Patrones/Producto'
import { mensajeTitulo, aumentoPrecio } from './componentes/Patrones/Hoc'

import Login from './componentes/Patrones/Login'

// Aca se escribe la parte logica. La funcion flecha sirve para renderizar la App en el navegador.
const App = () => {
  const NuevoComponente = mensajeTitulo(Mensaje);

  const NuevoPrecio = aumentoPrecio(Producto);

  // En el return vamos a retornar la interfaz del usuario.
  return (
    <>
      <div className="appPrincipal">
        <TituloPrincipal titulo={"PRODUCCION DE FOTOS"} />
        <CrearContador/>
        <Articulos img="../public/articulobolonia-01.jpg" titulo="Viaje a Bolonia" />
        <Articulos img="../public/articulobolonia-02.jpg" titulo="Edificio principal">
          <h3>No te lo pierdas</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quidem repellendus, consectetur veniam autem est odit animi esse voluptas, quibusdam rem possimus inventore deleniti ullam! Non minus quidem laudantium impedit.</p>
        </Articulos>
        <NuevoComponente />
        <NuevoPrecio nombre="Cuadro" precio={50} />
        <Login />
      </div>
    </>
  )
}

/*
<ItemListContainer greeting={"Bienvenido usuario a"} />
<ItemCount stock={15} inicial={1} />
<Categorias />
<Promesas />
<Map />
<UseRef />
<Temporizador />
<AsyncAwait />
<JSONPlace />
<LocalStorage />
<Netflic />
<Email />
*/
/*
 <BrowserRouter>
 <NavBar />
 <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/Categorias' element={<Categorias />} />
 <Route path='Promesas' element={<Articulos />} />
 <Route path='Promesas' element={<Promesas />} />
 <Route path='*' element={<h2>Sitio en construccion</h2>} />
 </Routes>
 </BrowserRouter >
*/

// Si o si, tienen que estar contenidas todas las etiquetas. Para no llenar todo de <div> </div> se soluciona utilizando el fragment: <> </> 
// Cada etiqueta es un elemento que debe estar contenida y deben estar balanceadas, osea siempre cerradas <img /> <br />

// Para agregar estilo hay que agregar una className=""

/* CLASE 4: Componentes 1
COMPONENTES: Conjunto de elementos que cumplen una funcion especifica. Renderizan un unico elemento, contienen props y pueden tener un estado. Ejemplo: un botón, una card de un producto, un formulario, un titulo, etc).

Tienen PROPS: 
Son objetos que contienen datos que un componente necesita para renderizarse correctamente. Se envian de forma unidireccional de padres a hijos.

Clase 4 - 35'
Pueden tener un ESTADO:
Es un objeto que contiene informacion del componente que puede cambiar durante la ejecucion de la App 
Para crear y manipular el estado hay que ayudarnos con la libreria propia de React, llamada HOOKS.
Hooks se llama usando "useState"
El ejemplo mas basico de un ESTADO es un contador en el carrito de compras. 

Clase 5 - 9'
Ciclo de vida de los componentes: Serie de estados por los cuales pasa todo componente.
Montaje (ingresa el componente al DOM), Actualizacion (se actualiza el valor del contador) y Desmontaje (desaparece el contador porque fuiste al carrito). 

Clase 5 - 31'
Nuevo HOOK: useEffect es para hacer mas cosas que solo renderizar el componente. Como por ejemplo:
Realizar operaciones, usar eventos, consumir datos de algun servidor, etc.

Clase 9 - 10'
Enlace absoluto conecta con una pagina externa y enlace relativo conecta la pagina e/ si.
Utilizar <a href="https://instagram.com" target='_blanck'>Instagram</a> para enlaces absolutos, y para enlaces relativos usar la Libreria React Router (enrutamiento para React que permite navegar entre componentes sin recargar la pagina). 
1- En la terminal: npm install react-router-dom
2- Hay que importar los componentes de la Libreria: BrowserRouter, Routes, Route.
BrowserRouter: Envuelve todos los componentes de nuestra aplicacion y habilita la navegacion e/ ellos.
Routes: Definir las rutas de navegacion.
Route: Define una ruta en especifico. Hay que pasarle la prop "path" con la ruta a vincular y ademas hay que pasar el componente que se debe renderizar cuando hacemos click en el.

<NavBar /> 

*/

export default App
