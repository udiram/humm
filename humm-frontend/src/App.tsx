import React, { Component } from "react";
import logo from "./images/logo/2x/humm_logo@2x.png";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./navbar";
import ChatWindow from "./chat-window";

interface AppProps {}

interface AppState {}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main className="vh-50">
        <Navbar />
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 d-flex justify-content-center">
            <img className="my-2 img-fluid" src={logo}></img>
          </div>
          <div className="col-4"></div>
        </div>
        <ChatWindow></ChatWindow>
      </main>
    );
  }
}

export default App;
