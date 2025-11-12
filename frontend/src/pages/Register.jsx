import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Register.css"
import { register } from "../api/authService";
import ForgotPassword from "../components/ui/ForgotPassword.jsx";
import person from "../assets/person.svg";
import envelopeopen from "../assets/envelope-open.svg";
import phone from "../assets/phone.svg";
import lock from "../assets/lock.svg";
import box2 from "../assets/box2.svg";
import plus from "../assets/plus.svg";
import square from "../assets/square.svg";
import check from "../assets/check2-square.svg";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

function Register () {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [checkable, setCheckable] = useState(false);
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

    function handleCheck() {
        setCheckable(!checkable);
    }

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
            <div className="register p-5 d-flex flex-column justify-content-start align-items-center gap-4">
                <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                    <div className="p-2 d-flex justify-center align-items-center border border-1" style={{backgroundColor: "#e5e5e5", borderRadius: "14px"}} >
                        <img src={plus} className="img-title-register img-purple" alt=""/>
                    </div>
                    <h2>Create Account</h2>
                    <h5>Get started with our service</h5>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center gap-4 w-100">
                    <div className="d-flex flex-row justify-content-between align-items-center gap-3 w-100">
                        <div className="d-flex flex-column justify-content-center align-items-start gap-2 w-100">
                            <h4>Username</h4>
                            <div className="input-containers-register">
                                <img className={`img-register ${formData.username ? "" : "img-purple"}`} src={person} alt="" />
                                <input 
                                    className="input-register" 
                                    type="text"
                                    placeholder=""
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-start gap-2 w-100">
                            <h4>Telephone number</h4>
                            <div className="input-containers-register">
                                <img className={`img-register ${formData.phone ? "" : "img-purple"}`} src={phone} alt="" />
                                <input 
                                    className="input-register" 
                                    type="text" 
                                    placeholder=""
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start gap-2 w-100">
                        <h5>Biography</h5>
                        <div className="input-containers-register">
                            <img className={`img-register ${formData.bio ? "" : "img-purple"}`} src={box2} alt="" />
                            <textarea 
                                className="input-register" 
                                placeholder=""
                                value={formData.bio}
                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start gap-2 w-100">
                        <h4>Email</h4>
                        <div className="input-containers-register">
                            <img className={`img-register ${formData.email ? "" : "img-purple"}`} src={envelopeopen} alt="" />
                            <input 
                                className="input-register" 
                                type="text" 
                                placeholder=""
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start gap-2 w-100">
                        <h4>Password</h4>
                        <div className="input-containers-register">
                            <img className={`img-register ${formData.password ? "" : "img-purple"}`} src={lock} alt="" />
                            <input 
                                className="input-register" 
                                type="password" 
                                placeholder=""
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-start align-items-center gap-2 w-100">
                        <img src={checkable ? check : square} alt="" onClick={handleCheck}/>
                        <h5 className="text-dark">
                            I agree to the{" "}
                            <Link
                                to="/terms"
                                className="text-primary text-decoration-none"
                                style={{ fontWeight: "bold" }}
                            >
                                Terms
                            </Link>{" "}
                            and{" "}
                            <Link
                                to="/privacy"
                                className="text-primary text-decoration-none"
                                style={{ fontWeight: "bold" }}
                            >
                                Privacy Policy
                            </Link>
                        </h5>
                    </div>
                </div>
                <button className="button-login" type="submit" disabled={loading} onClick={handleRegister}>
                    {loading ? "Creating..." : "Create Account"}
                </button>
                <ForgotPassword text="Usuario Aleatorio" message="Escriba, no sea vago como julio"/>
                <div className="d-flex flex-row align-items-center gap-2 w-100">
                    <div className="flex-grow-1 border"></div>
                    <h5 className="flex-shrink-0 mx-2 text-center text-muted">Or sign up with</h5>
                    <div className="flex-grow-1 border"></div>
                </div>

                <div className="d-flex flex-row justify-content-between align-items-center gap-2 w-100">
                    <div className="p-2 d-flex justify-content-center align-items-center border border-1 rounded w-100">
                        <img src={google} alt="" style={{filter: "invert(16%) sepia(100%) saturate(7470%) hue-rotate(220deg) brightness(100%) contrast(97%)"}}/>
                    </div>
                    <div className="p-2 d-flex justify-content-center align-items-center border border-1 rounded w-100">
                        <img src={facebook} alt="" style={{filter: "invert(16%) sepia(100%) saturate(7470%) hue-rotate(220deg) brightness(100%) contrast(97%)"}}/>
                    </div>
                    <div className="p-2 d-flex justify-content-center align-items-center border border-1 rounded w-100">
                        <img src={twitter} alt="" style={{filter: "invert(16%) sepia(100%) saturate(7470%) hue-rotate(220deg) brightness(100%) contrast(97%)"}}/>
                    </div>
                </div>
                <h5
                    onClick={irALogin}
                    style={{
                        cursor: "pointer",
                        color: "#000000ff",
                        textDecoration: "underline",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#00aaff")}
                    onMouseOut={(e) => (e.target.style.color = "#000000ff")}
                    >¿Ya tienes una cuenta?
                </h5>
            </div>
        </div>
    )
}

export default Register