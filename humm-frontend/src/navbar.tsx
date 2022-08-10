import "bootstrap/dist/css/bootstrap.css";
import whiteLogo from "./images/logo/1x/humm_white.png";
import "./navbar.css";
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className="row vw-100">
        <nav className="navbar navbar-expand-lg bg-humm-orange">
          <a className="navbar-brand col-1">
            <img className="mx-2 img-fluid" src={whiteLogo}></img>
          </a>
        </nav>
      </div>
    </div>
  );
}
