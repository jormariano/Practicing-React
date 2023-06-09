import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">PAISES:</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">ARGENTINA</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">BRASIL</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">ALEMANIA</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">TAILANDIA</a>
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