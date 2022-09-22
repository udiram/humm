import React, { Component } from "react";
import "../App.css";
import "../humm-colours.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import resources from "../resources.json";
import "../index.css";
import Linkify from "react-linkify";
import HummLogo from "../humm-logo";
import { Link } from "react-router-dom";

// 
// testing commit pipeline with netlify
// 
interface AppProps {}

interface AppState {
  messages: messageContainer[];
  textContent: string;
}

const conversationParticipants = {
  user: "user",
  bot: "bot",
};

class ChatList extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      messages: [],
      textContent: "",
    };
  }

  componentDidUpdate() {
    this.scrollToBottom("chat-window");
  }

  scrollToBottom(id: string) {
    const element = document.getElementById(id);
    if (element)
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  }

  render() {
    return (
      <div className="py-4 h-100">
        <HummLogo />
        <div className="row h-100">
          <div className="col-3"></div>
          <div className="col-6 overflow-auto bg-light rounded-top h-100 shadow-sm">
            <Link
              to="/conversations/id"
              className="row rounded p-2 m-2 bg-secondary text-white align-items-center"
              style={{ textDecoration: "none" }}
            >
              <h5 className="align-left col-6">{new Date().toISOString()}</h5>
              <i
                className="fa fa-arrow-right white col-6 d-flex justify-content-end"
                style={{ verticalAlign: "middle" }}
              ></i>
            </Link>
            <Link
              to="/conversations/id"
              className="row rounded p-2 m-2 bg-secondary text-white align-items-center"
              style={{ textDecoration: "none" }}
            >
              <h5 className="align-left col-6">{new Date().toISOString()}</h5>
              <i
                className="fa fa-arrow-right white col-6 d-flex justify-content-end"
                style={{ verticalAlign: "middle" }}
              ></i>
            </Link>
            <Link
              to="/conversations/id"
              className="row rounded p-2 m-2 bg-secondary text-white align-items-center"
              style={{ textDecoration: "none" }}
            >
              <h5 className="align-left col-6">{new Date().toISOString()}</h5>
              <i
                className="fa fa-arrow-right white col-6 d-flex justify-content-end"
                style={{ verticalAlign: "middle" }}
              ></i>
            </Link>
            <Link
              to="/conversations/id"
              className="row rounded p-2 m-2 bg-secondary text-white align-items-center"
              style={{ textDecoration: "none" }}
            >
              <h5 className="align-left col-6">{new Date().toISOString()}</h5>
              <i
                className="fa fa-arrow-right white col-6 d-flex justify-content-end"
                style={{ verticalAlign: "middle" }}
              ></i>
            </Link>
            <Link
              to="/conversations/id"
              className="row rounded p-2 m-2 bg-secondary text-white align-items-center"
              style={{ textDecoration: "none" }}
            >
              <h5 className="align-left col-6">{new Date().toISOString()}</h5>
              <i
                className="fa fa-arrow-right white col-6 d-flex justify-content-end"
                style={{ verticalAlign: "middle" }}
              ></i>
            </Link>
            <Link
              to="/conversations/id"
              className="row rounded p-2 m-2 bg-secondary text-white align-items-center"
              style={{ textDecoration: "none" }}
            >
              <h5 className="align-left col-6">{new Date().toISOString()}</h5>
              <i
                className="fa fa-arrow-right white col-6 d-flex justify-content-end"
                style={{ verticalAlign: "middle" }}
              ></i>
            </Link>
            <Link
              to="/conversations/id"
              className="row rounded p-2 m-2 bg-secondary text-white align-items-center"
              style={{ textDecoration: "none" }}
            >
              <h5 className="align-left col-6">{new Date().toISOString()}</h5>
              <i
                className="fa fa-arrow-right white col-6 d-flex justify-content-end"
                style={{ verticalAlign: "middle" }}
              ></i>
            </Link>
            <Link
              to="/conversations/id"
              className="row rounded p-2 m-2 bg-secondary text-white align-items-center"
              style={{ textDecoration: "none" }}
            >
              <h5 className="align-left col-6">{new Date().toISOString()}</h5>
              <i
                className="fa fa-arrow-right white col-6 d-flex justify-content-end"
                style={{ verticalAlign: "middle" }}
              ></i>
            </Link>
            <Link
              to="/conversations/id"
              className="row rounded p-2 m-2 bg-secondary text-white align-items-center"
              style={{ textDecoration: "none" }}
            >
              <h5 className="align-left col-6">{new Date().toISOString()}</h5>
              <i
                className="fa fa-arrow-right white col-6 d-flex justify-content-end"
                style={{ verticalAlign: "middle" }}
              ></i>
            </Link>
            <Link
              to="/conversations/id"
              className="row rounded p-2 m-2 bg-secondary text-white align-items-center"
              style={{ textDecoration: "none" }}
            >
              <h5 className="align-left col-6">{new Date().toISOString()}</h5>
              <i
                className="fa fa-arrow-right white col-6 d-flex justify-content-end"
                style={{ verticalAlign: "middle" }}
              ></i>
            </Link>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}

export default ChatList;
