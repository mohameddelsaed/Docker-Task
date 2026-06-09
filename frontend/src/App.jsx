import React from "react";
import { useEffect, useState } from "react";
import MessageForm from "./components/MessageForm.jsx";
import MessageList from "./components/MessageList.jsx";

const API_URL = "http://localhost:5000/messages";
function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchMessages = async () => {
    try {
      setError("");
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Could not load messages.");
      }

      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addMessage = async (text) => {
    try {
      setSaving(true);
      setError("");

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not save message.");
      }

      setMessages((currentMessages) => [data, ...currentMessages]);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <main className="app-shell">
      <section className="hero-panel">
        <p className="eyebrow">Intern at Zikolaaa</p>
        <h1>Share a message with the world</h1>
        <p className="intro">
          Write something thoughtful, quick, or encouraging. Every saved message
          appears instantly in the collection below.
        </p>

        <MessageForm onSubmit={addMessage} saving={saving} />

        {error && <p className="status-message error">{error}</p>}
      </section>

      <section className="messages-section" aria-labelledby="messages-title">
        <div className="section-heading">
          <p className="eyebrow">Saved notes</p>
          <h2 id="messages-title">Community Messages</h2>
        </div>

        <MessageList messages={messages} loading={loading} />
      </section>
    </main>
  );
}

export default App;
