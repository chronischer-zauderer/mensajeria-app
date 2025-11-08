import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/MensajeriaApp";
import Login from "./pages/login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
