import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import commandParser from "../messages.util";
import { Context } from "../Store/Context";

const Terminal = () => {
  const [messages, setMessages] = useState([
    {
      id: 0,
      type: "command",
      data: "Hi there! Type help for list of available commands.",
    },
  ]);
  const [state, dispatch] = useContext(Context);
  useEffect(() => {
    document.getElementsByClassName("message-input")[0].focus();
  });

  const messageHandler = (e) => {
    e.preventDefault();
    const command = e.target.value.trim();
    if (e.keyCode === 13) {
      let newMessages;
      if (command === "clear") {
        newMessages = [
          {
            id: 0,
            type: "command",
            data: "Hi there! Type help for list of available commands.",
          },
        ];
      } else if (command === "home") {
        dispatch({ type: "UPDATE", payload: { view: "home" } });
      } else if (command === "gui") {
        dispatch({ type: "UPDATE", payload: { view: "gui" } });
      } else {
        const responseObj = commandParser(command);
        newMessages = messages.slice(0);
        newMessages.push({ type: "command", data: command });
        newMessages.push({
          type: "response",
          data: responseObj.response,
        });
      }
      setMessages(newMessages);
    }
  };

  const renderMessages = () => {
    if (messages.length > 0) {
      let messageArray = messages.map((message, index) => {
        if (message.type === "command") {
          return (
            <div className="message-command" key={index}>
              {"> "}
              {message.data}
            </div>
          );
        } else if (Array.isArray(message.data)) {
          return message.data.map((response) => {
            return (
              <div className="message" key={index}>
                {response}
              </div>
            );
          });
        } else {
          return (
            <div className="message" key={index}>
              {"> "}
              {message.data}
            </div>
          );
        }
      });
      const inputTag = (
        <div className="message-input-container">
          {"> "}
          <input
            key={messageArray.length}
            className="message-input"
            type="text"
            onKeyUp={messageHandler}
          />
        </div>
      );
      messageArray.push(inputTag);
      return messageArray;
    } else {
      return null;
    }
  };

  return (
    <React.Fragment>
      <div className="terminal-container">{renderMessages()}</div>
    </React.Fragment>
  );
};

export default Terminal;
