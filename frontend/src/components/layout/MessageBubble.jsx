function MessageBubble({ message }) {
    const isUser = message.sender === "user";
    
    return (
        <div className={`d-flex mb-2 ${isUser ? "justify-content-end" : "justify-content-start"}`}>
            <div className={`message-bubble ${isUser ? "user-message" : "contact-message"}`}>
                <div className={`message-text ${isUser ? "text-white" : "text-black"}`}>{message.text}</div>
                <div className="message-time">
                    <span className="timestamp">{formatTime(message.timestamp)}</span>
                    {isUser && (
                        <span className="message-status">
                            {getStatusIcon(message.status)}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

function formatTime(timestamp) {
    return new Date(timestamp).toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
}

function getStatusIcon(status) {
    const icons = {
        sent: "✓",
        delivered: "✓✓",
        read: "✓✓"
    };
    return icons[status] || "✓";
}

export default MessageBubble;