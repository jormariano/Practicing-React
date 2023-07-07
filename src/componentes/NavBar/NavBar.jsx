import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import {Link, NavLink} from 'react-router-dom'

// Diferencia e/ Link y NavLink es que este ultimo permite aplicar css ademas de rederigir la pagina.

const NavBar = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">PAISES:</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink to="/categorias" class="nav-link active" aria-current="page">CATEGORIAS</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/promesas" class="nav-link active" aria-current="page">PROMESAS</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/map" class="nav-link active" aria-current="page">MAP</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/temporizador" class="nav-link active" aria-current="page">TEMPORIZADOR</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default NavBar