import "bootstrap/dist/css/bootstrap.css";
import logo from "./images/logo/2x/humm_logo@2x.png";

export default function HummLogo() {
  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4 d-flex justify-content-center">
        <img className="my-2 img-fluid" src={logo}></img>
      </div>
      <div className="col-4"></div>
    </div>
  );
}
