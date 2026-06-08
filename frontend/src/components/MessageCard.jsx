import React from "react";
function MessageCard({ message }) {
  const date = new Date(message.createdAt).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short"
  });

  return (
    <article className="message-card">
      <p>{message.text}</p>
      <time dateTime={message.createdAt}>{date}</time>
    </article>
  );
}

export default MessageCard;
