import { useState } from "react";

function ForgotPassword({ text = "¿Olvidaste tu contraseña?", message = "¡Recuérdala! 😅" }) {
  const [alert, setAlert] = useState("");
  const [hover, setHover] = useState(false); // 👈 nuevo estado

  const handleClick = () => {
    setAlert(message);
    setTimeout(() => setAlert(""), 2000);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <p
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}   // 👈 entra el cursor
        onMouseLeave={() => setHover(false)} // 👈 sale el cursor
        style={{
          color: hover ? "#00aaff" : "#ffffff", // 👈 cambia color al hacer hover
          textDecoration: hover ? "underline" : "none",
          cursor: "pointer",
          fontWeight: "500",
          transition: "all 0.3s ease", // animación suave
        }}
      >
        {text}
      </p>

      {alert && (
        <span
          style={{
            display: "inline-block",
            color: "red",
            fontSize: "0.9rem",
            fontWeight: "700",
            letterSpacing: "0.07em",
            transition: "opacity 0.3s ease",
          }}
        >
          {alert}
        </span>
      )}
    </div>
  );
}

export default ForgotPassword;
