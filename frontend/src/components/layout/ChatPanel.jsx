import HeaderChatPanel from "./HeaderChatPanel";
import img from "../../assets/telephone-fill.svg";

function SelectedContact() {
    return (
        <div className="d-flex flex-column justify-content-start align-items-center w-100">
            <HeaderChatPanel img={img} name="Jhon" status={true} />
        </div>
    );
}

export default SelectedContact;
