import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
