import { useNavigate } from "react-router-dom";
import "./Login.css"
import ForgotPassword from "../components/ui/ForgotPassword.jsx";
import person from "../assets/person.svg";
import lock from "../assets/lock.svg";

function Login () {
    const navigate = useNavigate();
    const irALogin = () => {
        navigate("/register"); // redirige a /login
    };
    return (
        <div className="background-login d-flex flex-row justify-content-center align-items-center h-100 w-100">
            <div className="login py-5 d-flex flex-column justify-content-center align-items-center gap-4">
                <h3 className="title-white">Login</h3>
                <div className="input-container">
                    <img className="img-login" src={person} alt="" />
                    <input className="input-login" type="text" placeholder="Username" />
                </div>
                <div className="input-container">
                    <img className="img-login" src={lock} alt="" />
                    <input className="input-login" type="password" placeholder="Password" />
                </div>
                <button className="button-login">LOGIN</button>
                <ForgotPassword />
                    <h5
                        onClick={irALogin}
                        style={{
                            cursor: "pointer",
                            color: "#ffffff",
                            textDecoration: "underline",
                        }}
                        onMouseOver={(e) => (e.target.style.color = "#00aaff")}
                        onMouseOut={(e) => (e.target.style.color = "#ffffff")}
                        >¿No tienes una cuenta?
                    </h5>
            </div>
        </div>
    )
}

export default Login