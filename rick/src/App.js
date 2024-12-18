import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Characters from "./components/Character"
import Location from "./components/Location";

export default function App() {
 return (
  <Router>
   <div className="App">
    {/* <Characters /> */}
    {/* <Location /> */}
    <nav>
     <ul>
      <li>
       <Link to="/">Home</Link>
      </li>
      <li>
       <Link to="/Location">Location</Link>
      </li>
     </ul>
    </nav>
    <Routes>
     <Route path="/" element={<Characters />} />
     <Route path="/Location" element={<Location />} />
    </Routes>
    <Footer />
   </div>
  </Router>
 )
}