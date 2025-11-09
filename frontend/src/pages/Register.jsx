import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Register.css"
import { register } from "../api/authService";
import ForgotPassword from "../components/ui/ForgotPassword.jsx";
import person from "../assets/person.svg";
import envelopeopen from "../assets/envelope-open.svg";
import phone from "../assets/phone.svg";
import lock from "../assets/lock.svg";
import box2 from "../assets/box2.svg";

function Register () {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        phone: "",
        bio: "",
        email: "",
        password: "",
    });
    const irALogin = () => {
        navigate("/login"); // redirige a /login
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await register(formData);
            console.log("Usuario registrado:", res);
            navigate("/login"); // redirigir si todo sale bien
        } catch (error) {
            console.error("Error al registrar:", error);
            alert("Hubo un error al registrarte");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="background-register d-flex flex-row justify-content-center align-items-center h-100 w-100">
            <div className="register py-5 d-flex flex-column justify-content-center align-items-center gap-4">
                <h3 className="title-white">Register</h3>
                <div className="input-container">
                    <img className="img-register" src={person} alt="" />
                    <input 
                        className="input-register" 
                        type="text"
                        placeholder="Insert your Username"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    />
                </div>
                <div className="input-container">
                    <img className="img-register" src={phone} alt="" />
                    <input 
                        className="input-register" 
                        type="text" 
                        placeholder="Insert your telephone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
                <div className="input-container">
                    <img className="img-register" src={box2} alt="" />
                    <textarea 
                        className="input-register" 
                        placeholder="Insert your bio"
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    />
                </div>
                <div className="input-container">
                    <img className="img-register" src={envelopeopen} alt="" />
                    <input 
                        className="input-register" 
                        type="text" 
                        placeholder="Insert your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="input-container">
                    <img className="img-register" src={lock} alt="" />
                    <input 
                        className="input-register" 
                        type="password" 
                        placeholder="Insert your Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                <button className="button-login" type="submit" disabled={loading} onClick={handleRegister}>
                    {loading ? "Entrando..." : "REGISTRAR"}
                </button>
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