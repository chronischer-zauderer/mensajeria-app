// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authService";
import "./Login.css";
import ForgotPassword from "../components/ui/ForgotPassword.jsx";
import lockfill from "../assets/lock-fill.svg";
import envelopefill from "../assets/envelope-fill.svg";
import square from "../assets/square.svg";
import check from "../assets/check2-square.svg";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [checkable, setCheckable] = useState(false);

  const irARegister = () => navigate("/register");

  function handleCheck() {
    setCheckable(!checkable);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await login(email, password);
      // data === { accessToken, expiresIn?, user }
      if (data?.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }
      if (data?.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
      }
      // redirige a la ruta que uses como panel privado
      navigate("/");
    } catch (err) {
      // axios error handling
      const message =
        err.response?.data?.message ||
        err.response?.data?.error ||
        err.message ||
        "Error al iniciar sesión";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background-login d-flex flex-row justify-content-center align-items-center h-100 w-100">
      <form
        className="login p-5 d-flex flex-column justify-content-start align-items-center gap-4"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          <div className="p-3 d-flex justify-center align-items-center border border-1" style={{backgroundColor: "#e5e5e5", borderRadius: "14px"}} >
            <img src={lockfill} className="img-title-login img-purple" alt=""/>
          </div>
          <h2>Welcome Back</h2>
          <h5>Sign in to your account</h5>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center gap-4 w-100">
          <div className="d-flex flex-column justify-content-center align-items-start gap-2 w-100">
            <h5>Email address</h5>
            <div className="input-containers">
              <img className={`img-login ${email ? "" : "img-purple"}`} src={envelopefill} alt="user icon" />
              <input
                className="input-login"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="email"
              />
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-start gap-2 w-100">
            <div className="d-flex flex-row justify-content-between align-items-center w-100">
              <h5>Password</h5>
              <h5>Forgot?</h5>
            </div>
            <div className="input-containers">
              <img className={`img-login ${password ? "" : "img-purple"}`} src={lockfill} alt="lock icon" />
              <input
                className="input-login"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-label="password"
              />
            </div>
          </div>
          <div className="d-flex flex-row justify-content-start align-items-center gap-2 w-100">
            <img src={checkable ? check : square} alt="" onClick={handleCheck}/>
            <h5>Remember me</h5>
          </div>
        </div>
        <button className="button-login" type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {error && (
          <div style={{ color: "salmon", fontSize: "0.9rem", textAlign: "center" }}>
            {error}
          </div>
        )}

        <ForgotPassword />

        <div className="d-flex flex-row align-items-center gap-2 w-100">
          <div className="flex-grow-1 border"></div>
          <h5 className="flex-shrink-0 mx-2 text-center text-muted">Or continue with</h5>
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
          onClick={irARegister}
          style={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onMouseOver={(e) => (e.target.style.color = "#00aaff")}
          onMouseOut={(e) => (e.target.style.color = "#000000ff")}
        >
          ¿No tienes una cuenta?
        </h5>
      </form>
    </div>
  );
}

export default Login;
