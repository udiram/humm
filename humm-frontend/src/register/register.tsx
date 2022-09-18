import "../humm-colours.css";
import "../index.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="py-4 vh-50">
      <div className="row h-100">
        <div className="col-3"></div>
        <div className="col-6 overflow-auto bg-light rounded-top h-100 shadow-sm">
          <div className="row">
            <div className="col-3"></div>
            <h2 className="col-6 p-2 humm-orange large font-weight-bold d-flex justify-content-center">
              Register
            </h2>
            <div className="col-3"></div>
          </div>
          <div className="row d-flex justify-content-center p-2">
            <h5 className="col-2 humm-orange">First Name:</h5>
            <div className="col-6 d-flex justify-content-center bg-secondary rounded shadow-sm">
              <input
                className="col-11 border-0 bg-transparent text-white rounded"
                type="text"
                name="message"
                placeholder="Enter first name here"
              ></input>
            </div>
          </div>
          <div className="row d-flex justify-content-center p-2">
            <h5 className="col-2 humm-orange">Last Name:</h5>
            <div className="col-6 d-flex justify-content-center bg-secondary rounded shadow-sm">
              <input
                className="col-11 border-0 bg-transparent text-white rounded"
                type="text"
                name="message"
                placeholder="Confirm last name here"
              ></input>
            </div>
          </div>
          <div className="row d-flex justify-content-center p-2">
            <h5 className="col-2 humm-orange">Email:</h5>
            <div className="col-6 d-flex justify-content-center bg-secondary rounded shadow-sm">
              <input
                className="col-11 border-0 bg-transparent text-white rounded"
                type="text"
                name="message"
                placeholder="Enter email here"
              ></input>
            </div>
          </div>
          <div className="row d-flex justify-content-center p-2">
            <h5 className="col-2 humm-orange">Confirm Email:</h5>
            <div className="col-6 d-flex justify-content-center bg-secondary rounded shadow-sm">
              <input
                className="col-11 border-0 bg-transparent text-white rounded"
                type="text"
                name="message"
                placeholder="Confirm email here"
              ></input>
            </div>
          </div>
          <div className="row d-flex justify-content-center p-2">
            <h5 className="col-2 humm-orange">Username:</h5>
            <div className="col-6 d-flex justify-content-center bg-secondary rounded shadow-sm">
              <input
                className="col-11 border-0 bg-transparent text-white rounded"
                type="text"
                name="message"
                placeholder="Enter username here"
              ></input>
            </div>
          </div>
          <div className="row d-flex justify-content-center p-2">
            <h5 className="col-2 humm-orange">Password:</h5>
            <div className="col-6 d-flex justify-content-center bg-secondary rounded shadow-sm">
              <input
                className="col-11 border-0 bg-transparent text-white rounded"
                type="text"
                name="message"
                placeholder="Enter password here"
              ></input>
            </div>
          </div>
          <div className="row d-flex justify-content-center p-2">
            <h5 className="col-2 humm-orange">Confirm Password:</h5>
            <div className="col-6 d-flex justify-content-center bg-secondary rounded shadow-sm">
              <input
                className="col-11 border-0 bg-transparent text-white rounded"
                type="text"
                name="message"
                placeholder="Confirm password here"
              ></input>
            </div>
          </div>
          <div className="row d-flex justify-content-center p-2">
            <div className="rounded bg-humm-orange col-4 m-2 p-2 d-flex justify-content-center shadow-sm">
              <h5 className="text-white">Submit</h5>
            </div>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
