import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/MensajeriaApp";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
