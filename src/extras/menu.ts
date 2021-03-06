let menuTop = `<div class="container-fluid">
                <a class="navbar-brand" href="#">Top navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                  <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/index.html">Materias</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/alumnos.html">Alumnos</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/maestros.html">Maestros</a>
                    </li>              
                  </ul>
                  <form class="d-flex">
                    <input id="searchMaterias" class="form-control me-2" type="search" placeholder="Buscar Materia" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </div>`;

export default menuTop;            