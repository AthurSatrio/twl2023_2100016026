import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import "./App.css"
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about/*" element={<About />} />
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;