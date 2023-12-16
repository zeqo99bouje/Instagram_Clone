// Message.jsx
import React, { useState } from "react";
import './Message.css';

export default function Message() {
  const [t1, setT1] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (t1.trim() !== "") {
      setMessages([...messages, t1]);
      setT1("");
    }
  };

  return (
    <div className="app-container">
    
      <div className="chat-container">
        <div className="chat-header text-center">
          <h2>Chat with..... </h2>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className="message">{message}</div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type a message"
            value={t1}
            onChange={(e) => setT1(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSendMessage}>
             Envoyer 
          </button>
        </div>
      </div>
    </div>
  );
}
