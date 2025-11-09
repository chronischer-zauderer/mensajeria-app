// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/authService";
import "./Login.css";
import ForgotPassword from "../components/ui/ForgotPassword.jsx";
import person from "../assets/person.svg";
import lock from "../assets/lock.svg";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const irARegister = () => navigate("/register");

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
      navigate("/dashboard");
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
        className="login py-5 d-flex flex-column justify-content-center align-items-center gap-4"
        onSubmit={handleSubmit}
        noValidate
      >
        <h3 className="title-white">Login</h3>

        <div className="input-container">
          <img className="img-login" src={person} alt="user icon" />
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

        <div className="input-container">
          <img className="img-login" src={lock} alt="lock icon" />
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

        <button className="button-login" type="submit" disabled={loading}>
          {loading ? "Entrando..." : "LOGIN"}
        </button>

        {error && (
          <div style={{ color: "salmon", fontSize: "0.9rem", textAlign: "center" }}>
            {error}
          </div>
        )}

        <ForgotPassword />

        <h5
          onClick={irARegister}
          style={{
            cursor: "pointer",
            color: "#ffffff",
            textDecoration: "underline",
          }}
          onMouseOver={(e) => (e.target.style.color = "#00aaff")}
          onMouseOut={(e) => (e.target.style.color = "#ffffff")}
        >
          ¿No tienes una cuenta?
        </h5>
      </form>
    </div>
  );
}

export default Login;
