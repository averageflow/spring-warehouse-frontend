import { Figure } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

function AppNavbar(): JSX.Element {
  let navbarOpen: boolean = false;

  const getNavbarClass = () => {
    const showNavClass = navbarOpen ? "show" : "";
    return "collapse navbar-collapse pb-4 " + showNavClass;
  };

  const handleNavButtonClick = () => {
    console.log(navbarOpen);
    navbarOpen = !navbarOpen;
  };

  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg p-2">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/products">
            <Figure>
              <Figure.Image
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="SpringWarehouse logo"
                src="/spring-3-logo-png-transparent.png"
              />
            </Figure>
            SpringWarehouse
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavButtonClick}
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={getNavbarClass()} id="navbarToggleExternalContent">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/products">Products</a>
                    </li> */}
            <li className="nav-item">
              <div className="nav-link">
                <Link to="/articles">Articles</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to="/authenticate">Authenticate</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
