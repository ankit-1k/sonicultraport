import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import axios from "axios";

function App() {
  const [load, upadateLoad] = useState(true);
  const [announcement,setAnnouncement]=useState([])

  const fetchAnnouncement=async ()=>{
    try {
      const response=await axios.get('https://sonicadminbackend.vercel.app/api/getannouncement')
      setAnnouncement(response.data)
      console.log('announcements',announcement)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    fetchAnnouncement()
  },[])

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
