import { Figure } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function AppNavbar(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const getNavbarClass = () => {
    const showNavClass = navbarOpen ? "show" : "";
    return "collapse navbar-collapse pb-4 " + showNavClass;
  };

  const handleNavButtonClick = () => {
    setNavbarOpen(!navbarOpen);
  };

  const verticalIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grip-vertical " viewBox="0 0 16 16">
  <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>;

const horizontalIcon= <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grip-horizontal" viewBox="0 0 16 16">
<path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>;

  const icon = navbarOpen ? verticalIcon : horizontalIcon;



  useEffect(() => {}, [navbarOpen]);

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
          <small>SpringWarehouse</small>
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
          {icon}
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
