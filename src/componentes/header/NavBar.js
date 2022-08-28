import CardWidget from "./CartWidget"

const NavBar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a id="logo" className="Nav" class="navbar-brand" href="#"><img src="./assets/img/OmegaPower.png" className="logoHeader"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Productos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sobre Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contactanos</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <CardWidget/>
            </nav>
        </div>
    )
}

export default NavBar