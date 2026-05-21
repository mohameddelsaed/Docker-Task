import MessageCard from "./MessageCard.jsx";

function MessageList({ messages, loading }) {
  if (loading) {
    return <p className="status-message">Loading messages...</p>;
  }

  if (messages.length === 0) {
    return (
      <div className="empty-state">
        <h3>No messages yet</h3>
        <p>Be the first person to add a message.</p>
      </div>
    );
  }

  return (
    <div className="message-grid">
      {messages.map((message) => (
        <MessageCard key={message._id} message={message} />
      ))}
    </div>
  );
}

export default MessageList;
