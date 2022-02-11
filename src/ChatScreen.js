import React, { useState } from "react";
import { Avatar } from "@mui/material";
import "./ChatScreen.css";
const ChatScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: "Billy",
      image: "...",
      message: "Whats up",
    },
    {
      name: "Johnie",
      image: "...",
      message: "Whats up",
    },
    {
      name: "Eddie",
      image: "...",
      message: "Whats up",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault()
    setMessages([...messages, {message: input}])
    setInput('');
  }
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">You matched with on 10/08/20</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message" key={message.message}>
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.name}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input value={input} onChange={e => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message..."
            type="text"
          />
          <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
