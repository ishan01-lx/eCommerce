import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/" element=""></Route>
        <Route path="/" element=""></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
