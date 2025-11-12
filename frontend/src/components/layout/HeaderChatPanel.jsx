import "./HeaderChatPanel.css";
import ImgProfile from "../ui/ImgProfile.jsx";
import telephone from "../../assets/telephone-fill.svg";
import camera_video_fill from "../../assets/camera-video-fill.svg";

function HeaderChatPanel( { img, name, status } ) {
    return (
        <div className="white p-3 d-flex flex-row justify-content-around align-items-center gap-3 w-100" style={{ height: "80px" }} >
            <ImgProfile img={img} />
            <div className="d-flex flex-column justify-content-center align-items-start w-100">
                <h4>{name}</h4>
                <h5>{status ? "En línea" : "Desconectado"}</h5>
            </div>
            <div className="px-3 d-flex flex-row justify-content-between align-items-center gap-3">
                <img className="img-header-chat-panel" src={telephone} alt="" />
                <img className="img-header-chat-panel" src={camera_video_fill} alt="" />
            </div>
        </div>
    );
}

export default HeaderChatPanel;