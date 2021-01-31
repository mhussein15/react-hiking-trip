import { Link } from "react-router-dom";

export default function Navbar({ setQuery }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Brand
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/hiking-trips" class="nav-link" >
                  Trips
                </Link>
              </li>
            </ul>
            <form class="d-flex input-group w-auto">
              <input
                type="search"
                class="form-control"
                placeholder="Type query"
                aria-label="Search"
                onChange={(event) => setQuery(event.target.value)}
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}