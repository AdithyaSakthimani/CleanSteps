import React, { useState, useEffect, useContext } from "react";
import NoteContext from "./components/NoteContext";
import "./ChatSpace.css"; 
import Navbar from "./components/Navbar";

function ChatSpace() {
  const { mode } = useContext(NoteContext);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Fetch messages from the backend on page load
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:3006/chat-room");
        const data = await response.json();
        setMessages(data); // Store the fetched messages in state
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !message) return alert("Please enter both username and message.");

    try {
      const response = await fetch("http://localhost:3006/chat-room", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, message }),
      });

      if (response.ok) {
        const newMessage = await response.json();
        setMessages((prevMessages) => [...prevMessages, newMessage.data]);
        setMessage(""); 
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className={`chat-container${mode}`}>
      <div className={`navbar${mode}`}>
        <Navbar />
      </div>
      <div className={`chat-box${mode}`}>
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <div className="username">
            <strong>{msg.username}</strong>
            </div>
            <div> {msg.message}
            </div>
          </div>
        ))}
      </div>
      <div className="entry-area">
        <input
          className="username-txt"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="message-txt"
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}className="submitbutton">Send</button>
      </div>
    </div>
  );
}

export default ChatSpace;
