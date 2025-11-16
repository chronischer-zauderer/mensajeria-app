import "./ContactPanel.css";
import AddPeopleButton from "../common/AddPeopleButton";
import ImgProfile from "../ui/ImgProfile";
import search from "../../assets/search.svg";
function ContactSelector() {
    return (
        <div className="d-flex flex-column justify-content-start align-items-center flex-grow-1 w-100">
            <div className="header-contact-panel p-3 d-flex flex-row justify-content-start align-items-center gap-3 w-100" style={{height: "80px"}} >
                <ImgProfile img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <div className="d-flex flex-column justify-content-center align-items-start w-100">
                    <h3>John Doe</h3>
                </div>
            </div>
            <nav className="py-2 px-3 d-flex flex-row justify-content-start align-items-center w-100">
                <div className="bg-light px-2 d-flex flex-row justify-content-start align-items-center border border-0 rounded gap-2 w-100">
                    <img src={search} alt="" />
                    <input className="input-contact-panel w-100" type="text" placeholder="Buscar"/>
                </div>
            </nav>
            <main className="d-flex flex-column justify-content-start align-items-center flex-grow-1 w-100">
                <AddPeopleButton />
            </main>
        </div>
    );
}

export default ContactSelector;
