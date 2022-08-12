import "bootstrap/dist/css/bootstrap.css";
import whiteLogo from "./images/logo/1x/humm_white.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="row mx-0 px-0">
        <nav className="navbar navbar-expand-lg bg-humm-orange">
          <a className="navbar-brand col-1">
            <img className="mx-2 img-fluid" src={whiteLogo}></img>
          </a>
        </nav>
    </div>
  );
}
