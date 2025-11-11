function MessageInput() {
    return (
        <div className="message-input-container bg-light p-3">
            <div className="d-flex align-items-center">
                <input 
                    type="text" 
                    className="form-control me-2" 
                    placeholder="Escribe un mensaje..."
                />
                <button className="btn btn-primary">
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    );
}

export default MessageInput;