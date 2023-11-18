import './App.css';
import "./Bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Aboutme from './Pages/Aboutme';
import Expertise from './Pages/Expertise';
import Hobbies from './Pages/Hobbies';
import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Aboutme" element={<Aboutme />} />
      <Route path="/Expertise" element={<Expertise />} />
      <Route path="/Hobbies" element={<Hobbies />} />
      <Route path="/Contact" element={<Contact />} />  
      </Routes>
    </Router>
  );
}

export default App;
