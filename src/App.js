import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./About/About";
import SignUp from "./SignUp/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
