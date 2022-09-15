import React, { Component } from "react";
import logo from "./images/logo/2x/humm_logo@2x.png";
import "./humm-colours.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./navbar";
import ChatWindow from "./chat-window";
import ChatView from "./chat-view";
import ChatList from "./chat-list";
import Login from "./login";
import Register from "./register";
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

interface AppProps {}

interface AppState {}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <main className="vh-50">
          <Navbar />
          <Routes>
            <Route index element={<ChatWindow />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/conversations" element={<ChatList />} />
            <Route path="/conversations/id" element={<ChatView />} />
          </Routes>
        </main>
      </Router>
    );
  }
}

export default App;
