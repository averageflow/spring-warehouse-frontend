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
    <nav
      className="navbar navbar-dark bg-black navbar-expand-lg"
      style={{ paddingBottom: 0 }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/products">
          <Figure>
            <Figure.Image
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="SpringWarehouse logo"
              src="/spring-3-logo-png-transparent.png"
            />
          </Figure>
          <span>SpringWarehouse</span>
        </Link>

        <button
          className="navbar-toggler text-light"
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
            <li className="nav-item">
              <Link className="nav-link" to="/articles">
                Articles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/authenticate">
                Authenticate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
