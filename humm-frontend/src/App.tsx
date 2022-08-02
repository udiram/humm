import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

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

    let message: message = {
      text_contents: event.currentTarget.message.value,
      text_date: new Date().toISOString(),
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
          text_date: new Date().toISOString(),
          text_author: 'bot',
        }
        this.state.messages.push(response);
        this.setState({ messages: this.state.messages });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <main className="container">
        <h1>Humm Chatbot</h1>
        <div className="messages">
          {this.state.messages.map((message) => {
            return (
              <div key={message.text_date}>
                {message.text_author + ": " + message.text_contents}
              </div>
            );
          })}
        </div>
        <form onSubmit={(event) => this.sendMessage(event)}>
          <input type="text" name="message"></input>
          <input type="submit"></input>
        </form>
      </main>
    );
  }
}

export default App;
