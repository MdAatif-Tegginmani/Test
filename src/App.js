import React from 'react'
import Home from './pages/Home'
import './App.css';
import Smoothies from './pages/Smoothies.jsx'
import Contact from './pages/Contact.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar.jsx' 




// const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen); // Toggle sidebar state
  // };
  
  
  // const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility
  
  
  
const App = () => {
  return (
    <Router>
      <div className="flex">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/smoothies" element={<Smoothies />} />
{            // <Route path="/services" element={<Services />} />
}            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
