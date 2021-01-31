import { Link,NavLink } from "react-router-dom";

export default function Navbar({ setQuery }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand">
            <img
              src="https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_2896,h_2896/http://trekkinghikers.com/wp-content/uploads/2020/10/Trekkinghikers-Logo.png"
              alt=""
              srcset=""
              style={{width:"40px",height:"40px"}}
            />
          </Link>

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
                <NavLink to="/" class="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <Link to="/hiking-trips/"  class="nav-link">
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
