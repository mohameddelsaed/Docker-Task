import React from "react";
import { useState } from "react";

function MessageForm({ onSubmit, saving }) {
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedText = text.trim();
    if (!trimmedText) {
      return;
    }

    await onSubmit(trimmedText);
    setText("");
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <label htmlFor="message">Your message</label>
      <div className="input-row">
        <input
          id="message"
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(event) => setText(event.target.value)}
          maxLength="500"
        />
        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Send"}
        </button>
      </div>
    </form>
  );
}

export default MessageForm;
