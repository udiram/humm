import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import resources from "./resources.json"
import "./chat-window.css";

interface AppProps {}

interface AppState {
  messages: messageContainer[];
  textContent: string;
  receivedDiagnosis: boolean;
}

const conversationParticipants = {
  user: "user",
  bot: "bot",
};

class ChatWindow extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      messages: [],
      textContent: "",
      receivedDiagnosis: false,
    };

    this.updateMessages(
      "Hello! How are you feeling today?",
      conversationParticipants.bot
    );
    this.updateMessages(
      "When you feel that you are finished providing an answer, please type 'EOM' for 'end of message'!",
      conversationParticipants.bot
    );
  }

  componentDidUpdate() {
    this.scrollToBottom("chat-window");
  }

  onHandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ textContent: event.target.value });
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

  combineUserMessages(): message {
    let finalAnswer: message = {
      text_contents: "",
      text_date: new Date().toISOString(),
      text_author: conversationParticipants.user,
    };

    for (var message of this.state.messages) {
      if (message.message.text_author == conversationParticipants.user) {
        finalAnswer.text_contents += message.message.text_contents + "\n";
      }
    }

    return finalAnswer;
  }

  processDiagnosis(diagnosis: string[]): string {
    let responseMessage: string = "Thank you for your response! Here are a list of resources you may find helpful: \n";
    console.log(resources);
    for (let disorder of diagnosis) {
      let disorderKey = disorder as keyof typeof resources;
      let disorderResources = resources[disorderKey];
      for (const [key, value] of Object.entries(disorderResources)) {
        responseMessage += ('- ' + key + ': ' + value + '\n');
      }
    }
    return responseMessage;
  }

  sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let sentMessage: string = event.currentTarget.message.value;

    if (!sentMessage) return;

    this.updateMessages(sentMessage, conversationParticipants.user);

    if (sentMessage.includes("EOM") && !this.state.receivedDiagnosis) {
      axios
        .post("http://localhost:8000/bot_analysis/", this.combineUserMessages())
        .then((res) => {
          let response: string[] = res.data;
          this.updateMessages(
            this.processDiagnosis(response),
            conversationParticipants.bot
          );
          this.setState({ receivedDiagnosis: true });
        })
        .catch((err) => console.log(err));

      this.setState({ receivedDiagnosis: true });
    }
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
                        <div className="text-white m-2 text-break">
                          {messageContainer.message.text_contents}
                        </div>
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
    );
  }
}

export default ChatWindow;
