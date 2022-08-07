import React, { Component } from "react";
import logo from "./images/logo/2x/humm_logo@2x.png";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./navbar";

interface AppProps {}

interface AppState {
  messages: message[];
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  state: AppState = {
    messages: [],
  };

  renderMessages = () => {
    return this.state.messages.map((message) => {
      <h2>{message.text_author + ": " + message.text_contents}</h2>;
    });
  };

  sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const dateFormatter = new Intl.DateTimeFormat("en-CA", {
      hour: "numeric",
      minute: "numeric",
    });

    let message: message = {
      text_contents: event.currentTarget.message.value,
      text_date: dateFormatter.format(new Date()),
      text_author: "me",
    };

    this.state.messages.push(message);
    this.setState({ messages: this.state.messages });

    axios
      .post("http://localhost:8000/bot_analysis/", message)
      .then((res) => {
        let response_text = res.data;
        let response: message = {
          text_contents: response_text,
          text_date: dateFormatter.format(new Date()),
          text_author: "bot",
        };
        this.state.messages.push(response);
        this.setState({ messages: this.state.messages });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <main className="container">
        <Navbar />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 justify-content-center">
            <img className="my-2 img-fluid" src={logo}></img>
          </div>
          <div className="col-3"></div>
        </div>
        <div className="messages col-6 mx-auto">
          {this.state.messages.map((message) => {
            return (
              <div
                key={message.text_date}
                className={
                  message.text_author == "bot"
                    ? "m-2 text-start"
                    : "m-2 text-end"
                }
              >
                <div className="">{message.text_date}</div>
                <div className="">{message.text_contents}</div>
              </div>
            );
          })}
        </div>
        <form onSubmit={(event) => this.sendMessage(event)}>
          <div className="col-3 mx-auto justify-content-center">
            <input type="text" name="message"></input>
            <button type="submit">
              <i className="fa fa-paper-plane humm-orange"></i>
            </button>
          </div>
        </form>
      </main>
    );
  }
}

export default App;
