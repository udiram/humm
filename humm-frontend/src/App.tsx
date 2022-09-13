import React, { Component } from "react";
import logo from "./images/logo/2x/humm_logo@2x.png";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./navbar";

interface AppProps {}

interface AppState {
  messages: messageContainer[];
  textContent: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      messages: [],
      textContent: "",
    };
  }

  state: AppState = {
    messages: [],
    textContent: "",
  };

  componentDidUpdate() {
    this.scrollToBottom("chat-window");
  }

  onHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ textContent: event.target.value });
  }

  sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const dateFormatter = new Intl.DateTimeFormat("en-CA", {
      hour: "numeric",
      minute: "numeric",
    });

    if (!event.currentTarget.message.value) return;

    let sentMessage: messageContainer = {
      message: {
        text_contents: event.currentTarget.message.value,
        text_date: dateFormatter.format(new Date()),
        text_author: "me",
      },
      dateKey: new Date().toISOString(),
    };

    this.state.messages.push(sentMessage);
    this.setState({ messages: this.state.messages, textContent: "" });

    axios
      .post("http://localhost:8000/bot_analysis/", sentMessage.message)
      .then((res) => {
        let responseText: string[] = res.data;
        let responseMessage: messageContainer = {
          message: {
            text_contents: responseText.toString(),
            text_date: dateFormatter.format(new Date()),
            text_author: "bot",
          },
          dateKey: new Date().toISOString(),
        };
        this.state.messages.push(responseMessage);
        this.setState({ messages: this.state.messages });
      })
      .catch((err) => console.log(err));
  }

  scrollToBottom(id: string) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});;
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
        <div className="py-4 h-100">
          <div className="row h-100">
            <div className="col-3"></div>
            <div className="col-6 overflow-auto bg-light rounded-top h-100 shadow-sm">
              <div id="chat-window">
                {this.state.messages.map((messageContainer) => {
                  return (
                    <div className="row">
                      <div
                        className={
                          messageContainer.message.text_author == "bot"
                            ? undefined
                            : "col-9"
                        }
                      ></div>
                      <div
                        key={messageContainer.dateKey}
                        className={
                          messageContainer.message.text_author == "bot"
                            ? "col-3 text-start"
                            : "col-3 text-end"
                        }
                      >
                        <div className="m-2 bg-humm-orange rounded">
                          <div className="text-white m-2 text-break">
                            {messageContainer.message.text_date}
                          </div>
                          <div className="text-white m-2 text-break">
                            {messageContainer.message.text_contents}
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          messageContainer.message.text_author == "bot"
                            ? "col-9"
                            : undefined
                        }
                      ></div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-3"></div>
          </div>
          <form className="row" onSubmit={(event) => this.sendMessage(event)}>
            <div className="col-3"></div>
            <div className="col-6 d-flex justify-content-center bg-secondary rounded-bottom shadow-sm">
              <input
                className="col-11 border-0 bg-transparent text-white rounded"
                type="text"
                name="message"
                placeholder="Enter text here"
                value={this.state.textContent}
                onChange={(event) => this.onHandleChange(event)}
              ></input>
              <button type="submit" className="col-1 border-0 bg-transparent">
                <i className="fa fa-paper-plane humm-orange"></i>
              </button>
            </div>
            <div className="col-3"></div>
          </form>
        </div>
      </main>
    );
  }
}

export default App;
