import "bootstrap/dist/css/bootstrap.css";
import whiteLogo from "../images/logo/1x/humm_white.png";
import "./navbar.css";
import '../humm-colours.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="row mx-0 px-0">
      <nav className="navbar navbar-expand-lg bg-humm-orange shadow-sm">
        <a className="navbar-brand col-1">
          <Link to="">
            <img className="mx-2 img-fluid" src={whiteLogo}></img>
          </Link>
        </a>
        <div className="col-9"></div>
        <Link className="col-1" to="/conversations">
          <a className=" p-2 rounded border-0 col-10 btn">
            Conversations <i className="fas fa-comments white p-2"></i>
          </a>
        </Link>
        <Link className="col-1" to="/login">
          <div className="p-2 rounded border-0 col-10 btn">
            <div>Login</div>
            <i className="fa fa-user white p-2"></i>
          </div>
        </Link>
      </nav>
    </div>
  );
}
