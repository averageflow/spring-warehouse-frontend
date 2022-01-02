import { Figure } from "react-bootstrap";

function AppNavbar(): JSX.Element {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
      <a className="navbar-brand" href="/products">
        <Figure>
          <Figure.Image
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="SpringWarehouse logo"
            src="/spring-3-logo-png-transparent.png"
          />
          {/* <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption> */}
        </Figure>
        SpringWarehouse
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse pb-4" id="navbarNav">
        <ul className="navbar-nav">
          {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/products">Products</a>
                    </li> */}
          <li className="nav-item">
            <a className="nav-link" href="/articles">
              Articles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/authenticate">
              Authenticate
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AppNavbar;
