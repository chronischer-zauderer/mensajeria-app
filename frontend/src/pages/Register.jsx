import { useNavigate } from "react-router-dom";
import "./Register.css"
import ForgotPassword from "../components/ui/ForgotPassword.jsx";
import person from "../assets/person.svg";
import lock from "../assets/lock.svg";

function Register () {
    const navigate = useNavigate();
    const irALogin = () => {
        navigate("/login"); // redirige a /login
    };
    return (
        <div className="background-register d-flex flex-row justify-content-center align-items-center h-100 w-100">
            <div className="register py-5 d-flex flex-column justify-content-center align-items-center gap-4">
                <h3 className="title-white">Register</h3>
                <div className="input-container">
                    <img className="img-register" src={person} alt="" />
                    <input className="input-register" type="text" placeholder="Insert your Username" />
                </div>
                <div className="input-container">
                    <img className="img-register" src={lock} alt="" />
                    <input className="input-register" type="password" placeholder="Insert your Password" />
                </div>
                <button className="button-register">REGISTRARSE</button>
                <ForgotPassword text="Usuario Aleatorio" message="Escriba, no sea vago"/>
                <h5
                    onClick={irALogin}
                    style={{
                        cursor: "pointer",
                        color: "#ffffff",
                        textDecoration: "underline",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#00aaff")}
                    onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                    >¿Ya tienes una cuenta?
                </h5>
            </div>
        </div>
    )
}

export default Register