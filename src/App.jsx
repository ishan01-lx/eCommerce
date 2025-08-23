import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

function App() {
  const location = useLocation();

  // Check if current route is "/login"
  const hideLayout = location.pathname === "/login";

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
