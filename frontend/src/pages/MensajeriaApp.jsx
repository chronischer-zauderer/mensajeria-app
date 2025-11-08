import  ContactPanel  from "../components/layout/ContactPanel";
import  ChatPanel  from "../components/layout/ChatPanel";
import "./MensajeriaApp.css";

function App() {
    return (
        <>
        <div className="d-flex flex-row justify-content-between align-items-center h-100 w-100">
            <div className="message">
                <ContactPanel />
            </div>
            <div className="chat">
                <ChatPanel />
            </div>
        </div>
        </>
    )
}

export default App
