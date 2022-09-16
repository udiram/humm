import React, { Component } from "react";
import "./App.css";
import "./humm-colours.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import resources from "./resources.json";
import "./chat-window.css";
import Linkify from "react-linkify";
import HummLogo from "./humm-logo";
import {Link} from "react-router-dom"

interface AppProps {}

interface AppState {
  messages: messageContainer[];
  textContent: string;
}

const conversationParticipants = {
  user: "user",
  bot: "bot",
};

class ChatView extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      messages: [],
      textContent: "",
    };

    this.updateMessages("filler", conversationParticipants.bot);
    this.updateMessages("filler", conversationParticipants.user);
  }

  updateMessages(message: string, author: string): message {
    const dateFormatter = new Intl.DateTimeFormat("en-CA", {
      hour: "numeric",
      minute: "numeric",
    });

    const inputMessage: messageContainer = {
      message: {
        text_contents: message,
        text_date: dateFormatter.format(new Date()),
        text_author: author,
      },
      dateKey: new Date().toISOString(),
    };

    this.state.messages.push(inputMessage);
    this.setState({ messages: this.state.messages, textContent: "" });

    return inputMessage.message;
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
            <div id="chat-window">
              {this.state.messages.map((messageContainer) => {
                return (
                  <div className="row">
                    <div
                      className={
                        messageContainer.message.text_author ==
                        conversationParticipants.bot
                          ? undefined
                          : "col-7"
                      }
                    ></div>
                    <div
                      key={messageContainer.dateKey}
                      className={
                        messageContainer.message.text_author ==
                        conversationParticipants.bot
                          ? "col-5 text-start"
                          : "col-5 text-end"
                      }
                    >
                      <div className="m-2 bg-humm-orange rounded">
                        <div className="text-white m-2 text-break">
                          {messageContainer.message.text_date}
                        </div>
                        <Linkify>
                          <div className="text-white m-2 text-break">
                            {messageContainer.message.text_contents}
                          </div>
                        </Linkify>
                      </div>
                    </div>
                    <div
                      className={
                        messageContainer.message.text_author ==
                        conversationParticipants.bot
                          ? "col-7"
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
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6 d-flex justify-content-center bg-secondary rounded-bottom shadow-sm">
            <Link to="/conversations" className="col-1 border-0 bg-transparent">
              <i className="fa fa-arrow-left humm-orange"></i>
            </Link>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}

export default ChatView;
